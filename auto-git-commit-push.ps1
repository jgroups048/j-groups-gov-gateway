# === CONFIGURATION ===
$repoPath = "C:\Users\jhavi\j Groups Enterprises\j-groups-gov-gateway"
$remoteUrl = "https://github.com/jgroups048/j-groups-gov-gateway.git"

# Initialize watcher
$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $repoPath
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true
$watcher.NotifyFilter = [System.IO.NotifyFilters]'LastWrite, FileName, DirectoryName'

# Helper: Get current branch or default to main
function Get-CurrentBranch {
    Set-Location $repoPath
    $branch = git rev-parse --abbrev-ref HEAD 2>$null
    if (-not $branch) { $branch = "main" }
    return $branch
}

# Helper: Initialize Git repo if needed
function Ensure-GitInitialized {
    Set-Location $repoPath
    if (-not (Test-Path "$repoPath\.git")) {
        git init
        git remote add origin $remoteUrl
    }
}

# Action triggered on any file change
$action = {
    Start-Sleep -Seconds 1  # Wait for file write to complete
    Set-Location $repoPath

    Ensure-GitInitialized

    $branch = Get-CurrentBranch

    # Get list of changed files since last commit
    $status = git status --porcelain
    if (-not $status) { return }  # No changes, skip

    $changedFiles = $status -replace '^[A-Z]{1,2}\s+', '' -join ', '

    git add .

    $commitMsg = "Auto-update: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') | Files: $changedFiles"

    git commit -m $commitMsg

    git pull origin $branch --rebase

    git push origin $branch

    Write-Host "Auto pushed changes at $(Get-Date)"
}

# Register event handlers for various change types
Register-ObjectEvent $watcher Changed -SourceIdentifier FileChanged -Action $action
Register-ObjectEvent $watcher Created -SourceIdentifier FileCreated -Action $action
Register-ObjectEvent $watcher Deleted -SourceIdentifier FileDeleted -Action $action
Register-ObjectEvent $watcher Renamed -SourceIdentifier FileRenamed -Action $action

Write-Host "Watching $repoPath for changes. Press Enter to stop..."
Read-Host