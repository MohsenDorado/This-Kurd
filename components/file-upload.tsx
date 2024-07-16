"use client"
interface FileUploadProps{
    onChange:(url?:string)=>void;
    value:string;
    endpoint:"messageFile" | "serverImage"
}
const FileUpload = ({endpoint,onChange,value}:FileUploadProps) => {
    return ( 
        <div>fileUpload</div>
     );
}
 
export default FileUpload;