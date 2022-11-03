import React, {useEffect, useRef, useState}  from 'react';
import Head from 'next/head'
import Image from 'next/image'

import axios from 'axios';
import styles from '../styles/Home.module.css'
import Slides from './Slides';
import First from '../components/first';
import Second from '../components/second';
import Third from '../components/Third';
import Fourth from '../components/Fourth';
import Fifth from '../components/Fifth';
import Sixth from '../components/Sixth';

export default function Home() {

  const [file, setFile] = React.useState('');
  const [re, setRe] = React.useState(0)
  const [render, setRender] = React.useState('');
  const [nums, setNums ] = React.useState({})
  const [hyperparams, setHyperparams] = React.useState({})
  const [currentGroup, setCurrentGroup] = React.useState(0);

  const [probabilities, setProbabilities] = React.useState({})

  const click = () => {
    console.log("cambiando...")
    setRe(re+1);
  }

  useEffect(() => {
    console.log("first render")
  }, []); 

  // use effect that tracks the state of hyperparams variable 
  useEffect(() => {
    if (re == 2){
      console.log("all data: ")
      console.log(file)
      console.log(nums)
      console.log(hyperparams)
      setRe(re+1);
      setTimeout(function(){ // timeout para simular entrenamiento y cambiar de render despues de 4 seg.
        setRe(re+2);
    }, 1000);
    }


  }, [hyperparams]); 

  const send = async (obj) => {
    console.log("Enviando archivos:")
    console.log("file: ", file)
    console.log("slides: ",obj )

    /*const UPLOAD_ENDPOINT = "http://localhost:5000/";

    const formData = new FormData();

    formData.append("data", file);
    formData.append("slides", JSON.stringify(obj));

    console.log(formData)

    const resp = await axios.post(UPLOAD_ENDPOINT, formData, {
      headers: {
        "content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*"
      },
    });

    if (resp.status === 200) {
      console.log("csv uploaded.")
      console.log("Probabilities: ", resp.data.acc)
      setProbabilities(resp.data.acc)
    } else {
      console.log("ERROR A LA VERGA PUTO ENDPOINT")
    }*/
    setRe(re+1); 
  }

  const goToGroup = () => {
    setRe(re+1)
    console.log("changing to individual group page...", currentGroup)
  }

//return(re ? <First click={click} setfile={setFile} file={file} /> : <Second setnums={setNums} send={send} />)
switch (re) {
  case 0: // uploading file
   return <First click={click} setfile={setFile} file={file} />
  case 1: // setting slides
   return <Second setnums={setNums} send={send} />
  case 2: // setting hyperparameteres
   return <Third setHyperparams={setHyperparams}   /> 
  case 3: // show loading page
   return <Fourth /> 
  case 4:
    return <Fifth goToGroup={goToGroup} setCurrentGroup={setCurrentGroup} />
  case 5:
    return <Sixth currentGp={currentGroup} setGp={setCurrentGroup} />
  default:
    return <h1>ola</h1>;
}

}
