import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import DragAndDrop from '../components/dragdrop'
import axios from 'axios';
import styles from '../styles/Home.module.css'


export default function Home() {

  const [file, SetFile] = React.useState('');

  if (file !== ""){ // handle post
    const UPLOAD_ENDPOINT = "";
    const formData = new FormData();
    formData.append("csv", file);
    const resp = axios.post(UPLOAD_ENDPOINT, formData, {
      headers: {
        "content-type": "multipart/form-data"
      },
    });
    if (resp.status === 200) {
      console.log("csv uploaded.")
    } else {
      console.log("ERROR A LA VERGA PUTO ENDPOINT")
    }
    
  } else {
    console.log("no hay archivo xd ")
  }


  return (
    <div className={styles.container}>
        <h1>Analizador de abandono de clientes</h1>
        <div className={styles.file_container} >
          <p>Selecciona el archivo a analizar</p>
          <DragAndDrop file={file} setFile={SetFile}/>
        </div>
    </div>
  )
}
