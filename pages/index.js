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
import FirstPage from '../components/FirstPage'
import SaveModel from '../components/SaveModel'
import SelectModel from '../components/SelectModel'
import FirstPredict from '../components/FirstPredict'
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
  const [modelName, setModelName] = React.useState('')

  // selected custom model to predict
  const [customModel, setCustomModel] = React.useState('')

  const [action, setAction] = React.useState('')

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
    else {
      console.log("finish fetching...")
    }
  },[loadingFetch])

  const send = async (obj) => {
    console.log("sending data...")
    console.log("target: ", targetText)
    setLoadingFetch(true)
    const UPLOAD_ENDPOINT = "http://localhost:5000/";
    const formData = new FormData();
    formData.append("data", file);

    formData.append("slides", JSON.stringify(obj));
    formData.append("target", JSON.stringify(targetText));
    formData.append("model_name", JSON.stringify(modelName));
    formData.append("action", JSON.stringify(action));

    if (customModel !== "") 
      formData.append("custom_model", JSON.stringify(customModel))

    const resp = await axios.post(UPLOAD_ENDPOINT, formData, {
      headers: {
        "content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*"
      },
    });

    if (resp.status === 200) {
      setRe(re+1);
      console.log("clust: ", resp.data.info)
      setGroups(resp.data.info)
      const ui = resp.data.ui
      setUi(ui)
      setFileRows(resp.data.fileRows) // pasar esto a componente sixth
      setLoadingFetch(false)
      console.log("changing page: ", re)
    }
     
    //setRe(re+4);  // DELETE ON PRODUCTION  
  }

  const goToGroup = () => {
    setRe(re+1)
  }

  useEffect(() => {
    if (action !== "") {
        goToGroup()
    }
  },[action])

  useEffect(() => {
    if (modelName !== "") {
        goToGroup()
    }
  },[modelName])

  useEffect(() => {
    if (customModel !== "") {
        console.log("cambio en custom model: ", customModel)
    }
  },[customModel])

//return(re ? <First click={click} setfile={setFile} file={file} /> : <Second setnums={setNums} send={send} />)
if (loadingFetch) {
  return <LoadingPage />
} else { 


  /*switch (re) {
    case 0: // uploading file
    return <First setTargetText={setTargetText} fileError={fileError} setFileError={setFileError} click={click} setfile={setFile} setFileName_size={setFileName_size} file={file} />
  case 1: // setting slides
    return <Second slides={nums} setnums={setNums} send={send} goBack={previousRender}  />
  case 2: // show training page
    return <Fourth /> 
  case 3: 
    return <Fifth goToGroup={goToGroup} setCurrentGroup={setCurrentGroup} goBack={previousRender} groups={groups} />
  case 4:
    return <Sixth groups={groups} ui={ui} currentGp={currentGroup} setGp={setCurrentGroup} goBack={previousRender} fileName_size={fileName_size} fileRows={fileRows} loadingFetch={loadingFetch} setLoadingFetch={setLoadingFetch} />
  default:
    return <Reporte />;
  }*/

  if (re === 0)
    return <FirstPage setAction={setAction}  />
    //return <SaveModel setModelName={setModelName}  />
    //return <SelectModel /> 
  // conditions for train 
  else if (re === 1 && action === 'train')
    return <First setTargetText={setTargetText} fileError={fileError} setFileError={setFileError} click={click} setfile={setFile} setFileName_size={setFileName_size} file={file} />
  else if (re === 2 && action === 'train' )
    return <SaveModel setModelName={setModelName}  />
  else if (re === 3 && action === 'train')
    return <Second slides={nums} setnums={setNums} send={send} goBack={previousRender}  />
  else if (re === 4 && action === 'train')
    return <Fifth goToGroup={goToGroup} setCurrentGroup={setCurrentGroup} goBack={previousRender} groups={groups} />
  else if (re === 5 && action === 'train')
    return <Sixth  groups={groups} ui={ui} currentGp={currentGroup} setGp={setCurrentGroup} goBack={previousRender} fileName_size={fileName_size} fileRows={fileRows} loadingFetch={loadingFetch} setLoadingFetch={setLoadingFetch} />
  // conditions for predict
  else if (re === 1 && action === 'predict')
    return <FirstPredict fileError={fileError} setFileError={setFileError} click={click} setfile={setFile} setFileName_size={setFileName_size} file={file} />
  else if (re === 2 && action === 'predict')
    return <SelectModel goToGroup={goToGroup} setCustomModel={setCustomModel} /> 
  else if (re === 3 && action === 'predict')
    return <Second slides={nums} setnums={setNums} send={send} goBack={previousRender}  />
  else if (re === 4 && action === 'predict')
    return <Fifth goToGroup={goToGroup} setCurrentGroup={setCurrentGroup} goBack={previousRender} groups={groups} />
  else if (re === 5 && action === 'predict')
    return <Sixth groups={groups} ui={ui} currentGp={currentGroup} setGp={setCurrentGroup} goBack={previousRender} fileName_size={fileName_size} fileRows={fileRows} loadingFetch={loadingFetch} setLoadingFetch={setLoadingFetch} />

  /*switch (re) {
    case 0: // uploading file
    return <FirstPage setAction={setAction} />
  case 1: // setting slides
    return <First setTargetText={setTargetText} fileError={fileError} setFileError={setFileError} click={click} setfile={setFile} setFileName_size={setFileName_size} file={file} />
  case 2: // show training page
    return <Second slides={nums} setnums={setNums} send={send} goBack={previousRender}  />
  case 3: 
    return <Fourth /> 
  case 4:
    return <Fifth goToGroup={goToGroup} setCurrentGroup={setCurrentGroup} goBack={previousRender} groups={groups} />
  case 5:
    return <Sixth groups={groups} ui={ui} currentGp={currentGroup} setGp={setCurrentGroup} goBack={previousRender} fileName_size={fileName_size} fileRows={fileRows} loadingFetch={loadingFetch} setLoadingFetch={setLoadingFetch} />
  default:
    return  <Reporte />;
  }*/

}

}
