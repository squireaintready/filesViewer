import react, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

export default function App() {
  const [files, setFiles] = useState([]);

  const addNewFile = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      setFiles([...files, { key: uuidv4(), text: text }]);
    };
    reader.readAsText(e.target.files[0]);
  };

  const saveImportedFile = (e) => {
    e.preventDefault();
    addNewFile(e);
  };

  const showAllText = () => (
    files.map(file => (
      <div className='singleFile'>
        <p className='singleFile__p'>{file.text}</p>
      </div>
    ))
  )

  // on each file, allow for the following features
  // edit file
  // delete file
  // highlight file
  

  return (
    <div>
      <input type="file" onChange={saveImportedFile} />
      <br />
      {showAllText()}
    </div>
  );
}
