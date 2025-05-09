import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Upload, X, File, CheckCircle2, Loader2 } from 'lucide-react';

interface DocumentUploaderProps {
  requiredDocuments: Array<{
    id: string;
    name: string;
    description: string;
    required: boolean;
    maxSize?: number; // in MB
    allowedFormats?: string[];
  }>;
  onComplete?: (files: Record<string, File>) => void;
}

const DocumentUploader: React.FC<DocumentUploaderProps> = ({
  requiredDocuments,
  onComplete
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File>>({});
  const [uploadStatus, setUploadStatus] = useState<Record<string, 'idle' | 'uploading' | 'success' | 'error'>>({});
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, documentId: string) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const document = requiredDocuments.find(doc => doc.id === documentId);
    if (!document) return;
    
    // Check file size
    if (document.maxSize && file.size > document.maxSize * 1024 * 1024) {
      toast({
        title: "File too large",
        description: `Maximum file size is ${document.maxSize}MB`,
        variant: "destructive",
      });
      return;
    }
    
    // Check file format if specified
    if (document.allowedFormats && document.allowedFormats.length > 0) {
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      if (!fileExtension || !document.allowedFormats.includes(`.${fileExtension}`)) {
        toast({
          title: "Invalid file format",
          description: `Allowed formats: ${document.allowedFormats.join(', ')}`,
          variant: "destructive",
        });
        return;
      }
    }
    
    // Simulate upload
    setUploadStatus(prev => ({ ...prev, [documentId]: 'uploading' }));
    
    // In a real app, you would upload to a server here
    setTimeout(() => {
      setUploadedFiles(prev => ({ ...prev, [documentId]: file }));
      setUploadStatus(prev => ({ ...prev, [documentId]: 'success' }));
      
      toast({
        title: "File uploaded",
        description: `${document.name} uploaded successfully`,
      });
      
      // Check if all required documents are uploaded
      const allRequiredUploaded = requiredDocuments
        .filter(doc => doc.required)
        .every(doc => uploadedFiles[doc.id] || doc.id === documentId);
      
      if (allRequiredUploaded && onComplete) {
        const updatedFiles = { ...uploadedFiles, [documentId]: file };
        onComplete(updatedFiles);
      }
    }, 1500);
  };
  
  const removeFile = (documentId: string) => {
    setUploadedFiles(prev => {
      const newFiles = { ...prev };
      delete newFiles[documentId];
      return newFiles;
    });
    setUploadStatus(prev => ({ ...prev, [documentId]: 'idle' }));
  };
  
  return (
    <Card className="shadow-md border-blue-100">
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold mb-3 text-blue-800">Required Documents</h3>
        <p className="text-gray-600 text-sm mb-4">
          Please upload the following documents to proceed with your service request
        </p>
        
        <div className="space-y-4">
          {requiredDocuments.map(document => (
            <div 
              key={document.id} 
              className="border rounded-lg p-4 relative"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium text-gray-800">
                    {document.name}
                    {document.required && (
                      <span className="text-red-500 ml-1">*</span>
                    )}
                  </h4>
                  <p className="text-xs text-gray-500">{document.description}</p>
                  {document.maxSize && (
                    <p className="text-xs text-gray-500">
                      Max size: {document.maxSize}MB
                    </p>
                  )}
                  {document.allowedFormats && (
                    <p className="text-xs text-gray-500">
                      Formats: {document.allowedFormats.join(', ')}
                    </p>
                  )}
                </div>
                
                {uploadedFiles[document.id] ? (
                  <button
                    onClick={() => removeFile(document.id)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <X className="h-4 w-4" />
                  </button>
                ) : null}
              </div>
              
              {uploadedFiles[document.id] ? (
                <div className="flex items-center mt-2 bg-blue-50 p-2 rounded">
                  <div className="mr-2">
                    {uploadStatus[document.id] === 'success' ? (
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    ) : (
                      <File className="h-4 w-4 text-blue-500" />
                    )}
                  </div>
                  <div className="text-sm truncate flex-1">
                    {uploadedFiles[document.id].name}
                  </div>
                </div>
              ) : (
                <div className="mt-2">
                  <label htmlFor={`file-${document.id}`}>
                    <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer hover:bg-gray-50">
                      <Upload className="h-6 w-6 mx-auto text-gray-400" />
                      <span className="block text-sm font-medium text-gray-700 mt-2">
                        Click to upload
                      </span>
                      <input
                        id={`file-${document.id}`}
                        type="file"
                        className="hidden"
                        onChange={(e) => handleFileChange(e, document.id)}
                        accept={document.allowedFormats?.join(',') || '*'}
                      />
                    </div>
                  </label>
                </div>
              )}
              
              {uploadStatus[document.id] === 'uploading' && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 rounded-lg">
                  <div className="text-center">
                    <Loader2 className="h-8 w-8 mx-auto animate-spin text-blue-500" />
                    <p className="text-sm text-blue-800 mt-2">Uploading...</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentUploader;
