"use client";

import { UploadDropzone } from "@/lib/uploadthing";

import "@uploadthing/react/styles.css";
import { X } from "lucide-react";
import Image from "next/image";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}
const FileUpload = ({ endpoint, onChange, value }: FileUploadProps) => {
    const fileType=value.split('.').pop();
    if (value&&fileType!=="pdf") {
        return(
            <div className="relative h-20 w-20">
                <Image fill src={value} alt="Uploaded Image" className="rounded-full" />
                <button onClick={()=>onChange("")} className="bg-rose-500 text-white p-1 rounded-full top-0 right-0 shadow-sm absolute "><X className="w-4 h-4"/></button>

            </div>
        )
        
    }
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(err) => {
        console.log(err);
      }}
    />
  );
};

export default FileUpload;
