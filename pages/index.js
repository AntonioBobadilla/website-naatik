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
import Reporte from '../components/Reporte'
import LoadingPage from '../components/LoadingPage'


export default function Home() {

  const [file, setFile] = React.useState('');
  const [re, setRe] = React.useState(0)
  const [render, setRender] = React.useState('');
  const [nums, setNums ] = React.useState({})
  const [hyperparams, setHyperparams] = React.useState({})
  const [currentGroup, setCurrentGroup] = React.useState(0);
  const [acc, setAcc] = React.useState({});
  const [ui, setUi] = React.useState('');
  const [noDifferences, setNoDifferences ] = React.useState(false)
  const [textDifferences, setTextDifferences] = React.useState({})
  const [fileError, setFileError] = React.useState(false);
  const [fileName_size, setFileName_size] = React.useState({});
  const [fileRows, setFileRows] = React.useState([])
  const [status, setStatus] = React.useState('')
  const [groups, setGroups] = React.useState([])

  const [loadingFetch, setLoadingFetch] = React.useState(false)

  const [probabilities, setProbabilities] = React.useState({})
  const [targetText, setTargetText] = React.useState('')

  const previousRender = (e, numRenders = 1) => {
    setRe(re-numRenders)
  }

  const nextRender = (e, numRenders = 1) => {
    setRe(re+numRenders)
  }

  const click = () => {
    if (file === ''){
      setFileError(true);
    } else{
      setRe(re+1);
    }

  }


  // use effect that tracks the state of hyperparams variable 
  useEffect(() => {
    if (re == 2){
      setRe(re+1);
      setTimeout(function(){ // timeout para simular entrenamiento y cambiar de render despues de 4 seg.
        setRe(re+2);
    }, 1000);
    }


  }, [hyperparams]);
  
  
  useEffect(() => {
    if (loadingFetch)
      console.log("fetching....")
    else
      console.log("finish fetching...")
  },[loadingFetch])

  const send = async (obj) => {
    console.log("target: ", targetText)
    setLoadingFetch(true)
    const UPLOAD_ENDPOINT = "http://localhost:5000/";
    const formData = new FormData();
    formData.append("data", file);

    formData.append("slides", JSON.stringify(obj));
    formData.append("target", targetText);

    const resp = await axios.post(UPLOAD_ENDPOINT, formData, {
      headers: {
        "content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*"
      },
    });

    if (resp.status === 200) {
      console.log("clust: ", resp.data.info)
      setGroups(resp.data.info)
      const ui = resp.data.ui
      setUi(ui)
      setFileRows(resp.data.fileRows) // pasar esto a componente sixth
      /*setStatus(resp.data.state)
      setProbabilities(resp.data.acc)
      setTextDifferences(resp.data.differences)



      const obj = resp.data.acc
      obj['Nula probabilidad'] = obj['group1'];
      delete obj['group1'];

      obj['Baja probabilidad'] = obj['group2'];
      delete obj['group2'];

      obj['Mediana probabilidad'] = obj['group3'];
      delete obj['group3'];

      obj['Alta probabilidad'] = obj['group4'];
      delete obj['group4'];

      setAcc(obj)*/


      setLoadingFetch(false)
    } else {
    }
    setRe(re+1); 
    //setRe(re+4);  // DELETE ON PRODUCTION  
  }

  const goToGroup = () => {
    setRe(re+1)
  }

//return(re ? <First click={click} setfile={setFile} file={file} /> : <Second setnums={setNums} send={send} />)
if (loadingFetch) {
  return <LoadingPage />
} else { 
  switch (re) {

    case 0: // uploading file
    return <First setTargetText={setTargetText} fileError={fileError} setFileError={setFileError} click={click} setfile={setFile} setFileName_size={setFileName_size} file={file} />
  case 1: // setting slides
    return <Second slides={nums} setnums={setNums} send={send} goBack={previousRender}  />
  case 2: // setting hyperparameteres
    return <Third setHyperparams={setHyperparams} goBack={previousRender}   /> 
  case 3: // show loading page
    return <Fourth /> 
  case 4:
    return <Fifth goToGroup={goToGroup} setCurrentGroup={setCurrentGroup} goBack={previousRender} groups={groups} />
  case 5:
    return <Sixth groups={groups} ui={ui} currentGp={currentGroup} setGp={setCurrentGroup} goBack={previousRender} fileName_size={fileName_size} fileRows={fileRows} loadingFetch={loadingFetch} setLoadingFetch={setLoadingFetch} />
  default:
    return <Reporte />;

    
  }

}

}
