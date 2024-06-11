import {useRef, useState, useEffect} from 'react' ; 
import './App.css';
import { uploadFile } from './services/api';

function App() {

  const [file, setFile] = useState('') ; 
  const fileInputRef = useRef() ; 

  const onUploadClick = () => {
    fileInputRef.current.click() ; 
  }

  const logo = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg' ; 

  useEffect(()=>{
    const getImage = async () => {
      if(file){
        const data = new FormData() ; 
        data.append("new", file.name) ; 
        data.append("file", file) ; 

        let response = await uploadFile(data) ; 
      }
    }
    getImage() ; 
  },[file])

  return (
    <div className="container" >
        <img src={logo} alt="banner"></img>
        <div className="wrapper">
          <h1>File Sharing Application</h1>
          <p>Upload and share file download links</p>

          <button 
          onClick={()=> onUploadClick()} >Upload</button>

          <input 
          type="file"
          ref={fileInputRef}
          style={{display: 'none'}}
          onChange={(e) => setFile(e.target.files)}
          ></input>
        </div>
    </div>
  );
}

export default App;
