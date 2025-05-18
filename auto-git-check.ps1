$Path = "C:\Users\jhavi\j Groups Enterprises\j-groups-gov-gateway"
$LastRun = Get-Date

Write-Host "Watching $Path for changes..."

$fsw = New-Object System.IO.FileSystemWatcher $Path -Property @{ 
    IncludeSubdirectories = $true
    EnableRaisingEvents = $true
}

function Check-GitStatus {
    Set-Location $Path
    $status = git status --porcelain
    $added = if ($status) { $false } else { $true }
    if ($added) {
        Write-Host "Git add executed: YES"
    } else {
        Write-Host "Git add executed: NO"
        Write-Host "Next: Run 'git add .'"
        return
    }
    $commit = git log -1 2>$null
    if ($commit) {
        Write-Host "Git commit present: YES"
    } else {
        Write-Host "Git commit present: NO"
        Write-Host "Next: Run 'git commit -m \"your message\"'"
        return
    }
    $branchStatus = git status
    if ($branchStatus -match "Your branch is ahead of") {
        Write-Host "Git push done: NO"
        Write-Host "Next: Run 'git push'"
    } else {
        Write-Host "Git push done: YES"
    }
    Write-Host "Auto Git Check Complete."
}

$onChange = {
    $now = Get-Date
    if (($now - $script:LastRun).TotalSeconds -lt 2) { return }
    $script:LastRun = $now
    Write-Host "\n--- File change detected at $now ---"
    Check-GitStatus
}

Register-ObjectEvent $fsw Changed -Action $onChange | Out-Null
Register-ObjectEvent $fsw Created -Action $onChange | Out-Null
Register-ObjectEvent $fsw Deleted -Action $onChange | Out-Null
Register-ObjectEvent $fsw Renamed -Action $onChange | Out-Null

while ($true) { Start-Sleep -Seconds 1 }