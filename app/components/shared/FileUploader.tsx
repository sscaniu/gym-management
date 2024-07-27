import React, { useCallback } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

interface FileUploaderProps {
  onFilesAdded: (files: File[]) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFilesAdded }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onFilesAdded(acceptedFiles);
    },
    [onFilesAdded]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps({
        className: `w-full h-[176px] rounded-sm ${
          isDragActive ? `border-info` : `border-white`
        } border-2 border-dashed bg-table-odd cursor-pointer`,
      })}
    >
      <input {...getInputProps()} />
      <div className="w-full h-full flex flex-col justify-center items-center gap-4 font-jost text-base">
        <Image src="/upload.png" width={32} height={32} alt="Upload" />
        <p>
          Drop Files to Attach, or{" "}
          <span className="font-semibold text-warning underline">Browser</span>
        </p>
      </div>
    </div>
  );
};

export default FileUploader;
