import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { uploadFile } from "./services/api";

export default function App() {
  const [file, setFile] = useState();
  const [fileUrl, setFileUrl] = useState('');
  const fileInputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setFileUrl(response.path);
      }
    }
    getImage();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  return (
    <div className="bg-slate-800 flex flex-col items-center justify-center h-screen text-white">
      {/* <img src={logo} alt="banner" className="object-cover w-full h-screen overflow-hidden" /> */}
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-3xl border-b-2">File sharing</h1>
        <p>( upload file & share download link )</p>

        <button className="py-2 px-6 bg-orange-600 rounded-md transition-transform"
          onClick={onUploadClick}>
          {fileUrl ? 'Upload another' : 'Upload'}
        </button>
        <p>{file?.name}</p>
        <input type="file" ref={fileInputRef} className="hidden"
          onChange={e => setFile(e.target.files[0])}
        />

        {fileUrl && <a
          href={fileUrl}
          target="_blank"
          className="text-orange-400 underline"
        >{fileUrl}</a>
        }
      </div>
    </div>
  )
}
