import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import * as  properties from "../../env";
import {Image} from "cloudinary-react";



interface ImageDropZoneProps {
    onSelect: (file: File) => void;
}

const ImageDropZone: React.FC<ImageDropZoneProps>  = ({ onSelect }) => {
    // const [uploadedFiles, setUploadedFiles] =useState([
    //     {
    //         "asset_id": "f05d8ead152eeeaf42635eea4bb89e21",
    //         "public_id": "laah9wx8uzy2twgnzbx3",
    //         "version": 1716207955,
    //         "version_id": "d6bdc25741c7b59aa40cf515b03ce6cc",
    //         "signature": "f99f2280f886f77eff830540a8dc64252ef887e4",
    //         "width": 1920,
    //         "height": 1080,
    //         "format": "png",
    //         "resource_type": "image",
    //         "created_at": "2024-05-20T12:25:55Z",
    //         "tags": [],
    //         "bytes": 901524,
    //         "type": "upload",
    //         "etag": "393734114addbb73653e834121db5640",
    //         "placeholder": false,
    //         "url": "http://res.cloudinary.com/dwj0v6ggh/image/upload/v1716207955/laah9wx8uzy2twgnzbx3.png",
    //         "secure_url": "https://res.cloudinary.com/dwj0v6ggh/image/upload/v1716207955/laah9wx8uzy2twgnzbx3.png",
    //         "folder": "",
    //         "access_mode": "public",
    //         "original_filename": "Screenshot from 2024-04-10 19-53-50"
    //     },

    // ])

    const onDrop = useCallback((acceptedFiles: File[]) => {
        // const url = `https://api.cloudinary.com/v1_1/${properties.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;

        // acceptedFiles.forEach(async (acceptedFile) => {
        //     const formData = new FormData()
        // formData.append('file',acceptedFile)
        // formData.append("upload_preset", properties.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);

        // const response = await fetch(url, {
        //     method: 'post',
        //     body: formData
        // });
        // const data = await response.json();
        // setUploadedFiles(old => [...old, data])
        // console.log(data)

        // })
         
       

        if (acceptedFiles.length > 0) {
            onSelect(acceptedFiles[0]);
        }
        
        console.log(acceptedFiles);
    }, [onSelect]);

    

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { types: ['image/jpeg', 'image/*'] }, 
        multiple: false,
    });
    
    return (
        <div {...getRootProps()} className='dropzone h-[230px] m-1 p-1 border-[3px] border-dashed border-blue-300 flex justify-center font-bold cursor-pointer rounded-3xl align-middle items-center' 
        
        >
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <div className='opt items-center flex flex-col '>
                     <FileUploadOutlinedIcon sx={{fontSize:"3.5rem",opacity:"0.6"}}/>
                     <p className='d text-2xl font-serif opacity-75'>Drop the files here ...</p>
                    </div>:
                    <div className='opt items-center flex flex-col ' >
                     <FileUploadOutlinedIcon sx={{fontSize:"3.5rem",opacity:"0.6"}}/>
                    <p className='d text-2xl font-serif opacity-75'>Drag and drop or <span className='sp text-blue-600'>Choose file</span></p>
                    <p className='size opacity-50 mt-4'>240 X 240 px Recommended, max size 1mb</p>
                    
                    </div>
                   
            }
            {/* <ul>
                {
                    uploadedFiles.map(file => <li key={file.public_id}>
                       <Image 
                       cloudName={properties.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                       publicId={file.public_id}
                       width={300}
                       crop="scale"
                       />
                    </li>)
                }
            </ul> */}
        </div>
    );
}

export default ImageDropZone;
