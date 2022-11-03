import React from 'react';
import Head from 'next/head'
import Image from 'next/image'

import axios from 'axios';
import styles from '../styles/Home.module.css'
import Slides from './Slides';
import First from '../components/first';
import Second from '../components/second';
import Third from '../components/Third';


export default function Home() {

  const [file, setFile] = React.useState('');
  const [re, setRe] = React.useState(0)
  const [render, setRender] = React.useState('');
  const [nums, setNums ] = React.useState({})

  const click = () => {
    console.log("cambiando...")
    console.log("file: ",file)
    setRe(1);


    console.log("from parent")
    return <Slides />
  }

  const send = async (obj) => {
    console.log("sendinddddddddd")
    console.log("file: ", file)
    console.log("slides: ",obj )


    /*const UPLOAD_ENDPOINT = "http://localhost:5000/";

    const formData = new FormData();

    formData.append("data", file);
    formData.append("slides", obj);

    const resp = await axios.post(UPLOAD_ENDPOINT, formData, {
      headers: {
        "content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*"
      },
    });

    if (resp.status === 200) {
      console.log("csv uploaded.")
    } else {
      console.log("ERROR A LA VERGA PUTO ENDPOINT")
    }*/
    setRe(2); 
  }

//return(re ? <First click={click} setfile={setFile} file={file} /> : <Second setnums={setNums} send={send} />)
switch (re) {
  case 0:
   return <First click={click} setfile={setFile} file={file} />
  case 1:
   return <Second setnums={setNums} send={send} />
  case 2:
   return <Third  /> 
  default:
    return <h1>ola</h1>;
}

}
