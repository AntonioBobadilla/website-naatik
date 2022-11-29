import styles from '../styles/Group.module.css';
import React, {useState, useEffect} from 'react';
import ButtonTemplate from '../components/Button';
import axios from 'axios';
import JsPDF from 'jspdf';
import html2canvas from "html2canvas";
import Reporte from '../components/Reporte'

// import separated components 
import Ahorros from '../components/Ahorros';
import Diferencias from  '../components/Diferencias';
import Graficas from '../components/Graficas';
import Perfilacion from '../components/Perfilacion';

import ButtonWithIcon from '../components/ButtonWithIcon';

const Sixth = ({groups,  currentGp,ui, setGp, goBack, fileName_size, fileRows, loadingFetch, setLoadingFetch}) => {

    
    const [currentGroup, setCurrentGroup] = useState(currentGp);
    const [currentTab, setCurrentTab] = useState('Diferencias');
    const [accumulates, setAccumulates] = useState(0);
    const [differencesImages, setDifferencesImages] = useState([])
    const [plots, setPlots] = useState([])
    const [newDifferencesImages, setNewDifferencesImages] = useState([])
    const [start, setStart] = useState(true);


    const [acc, setAcc] = useState(groups[currentGroup].acc)
    const [status, setStatus] = useState(groups[currentGroup].state)
    const [textDifferences, setTextDifferences] = useState(groups[currentGroup].differences)

    /*console.log("acc: ", acc)
    console.log("ui: ", ui)
    console.log("status: ", status)
    console.log("textDifferences: ", textDifferences)*/


    const addDifferenceText = () => {

        console.log("imagenes: ", differencesImages)

       const text_bill_amount = 'El grupo con churn tiene 23% mayor pago que el grupo sin churn';
       const text_nationality = 'El grupo con churn tiene 23% mayor quejas que el grupo sin churn';
       const text_years_stayed = 'El grupo con churn tiene 23% mayor años en el servicio que el grupo sin churn';
       const text_status = 'El grupo con churn tiene 23% más gente en Prestige/Residential que el grupo sin churn';
    
       const objArray = []

       for (let i = 0; i<3; i++ ){

            const obj = []

            const dummyobj1 = { 'text':textDifferences['BILL_AMOUNT'], 'url':differencesImages[i].imgs[0]}
            const dummyobj2 = { 'text':textDifferences['PARTY_NATIONALITY'], 'url':differencesImages[0].imgs[1]}
            const dummyobj3 = { 'text':textDifferences['STATUS'], 'url':differencesImages[0].imgs[2]}
            const dummyobj4 = { 'text':textDifferences['Years_stayed'], 'url':differencesImages[0].imgs[3]}
    
            obj.push(dummyobj1);
            obj.push(dummyobj2);
            obj.push(dummyobj3);
            obj.push(dummyobj4);

            objArray.push(obj)
       }
    
       setNewDifferencesImages(objArray)
    }

    const fetchDifferences = async () => {
        let obj = []
        for (let i = 1; i<2; i++ ){
            let data = await axios.get("http://localhost:5000/getdifferences", { params: { ui: ui, i:i} } )
            let dummyArr = {"imgs":data.data}
            //setDifferencesImages([...differencesImages, dummyArr])
            obj = [...obj, dummyArr]
        }
        console.log("OBJJJJ_:", obj )
        setDifferencesImages(obj)
        return obj
    }

    const fetchGraficas = async () => {
        await axios.get("http://localhost:5000/getgraphs", { params: { ui: ui, i:currentGp} }  )
        .then((res) => {
            setPlots(res.data)
            setStart(false)
        })
    }

    useEffect( () => {

        const getDifferencesTextImages = async () => {
        if (status === 'both'){
            let differencesImagesLocal = []
            for (let i = 1; i<4; i++ ){
                let data = await axios.get("http://localhost:5000/getdifferences", { params: { ui: ui, i:i} } )
                let dummyArr = {"imgs":data.data}
                //setDifferencesImages([...differencesImages, dummyArr])
                differencesImagesLocal = [...differencesImagesLocal, dummyArr]
            }
            console.log("OBJJJJ_:", differencesImagesLocal )
            setDifferencesImages(differencesImagesLocal)
         
            const objArray = []
     
            for (let i = 0; i<3; i++ ){
     
                 const obj = []
     
                 const dummyobj1 = { 'text':groups[i].differences['BILL_AMOUNT'], 'url':differencesImagesLocal[i].imgs[0]}
                 const dummyobj2 = { 'text':groups[i].differences['PARTY_NATIONALITY'], 'url':differencesImagesLocal[i].imgs[1]}
                 const dummyobj3 = { 'text':groups[i].differences['STATUS'], 'url':differencesImagesLocal[i].imgs[2]}
                 const dummyobj4 = { 'text':groups[i].differences['Years_stayed'], 'url':differencesImagesLocal[i].imgs[3]}
         
                 obj.push(dummyobj1);
                 obj.push(dummyobj2);
                 obj.push(dummyobj3);
                 obj.push(dummyobj4);
     
                 objArray.push(obj)
            }
         
            setNewDifferencesImages(objArray)
        }
        fetchGraficas();
        }

        getDifferencesTextImages()
        }, [])



  
    if(!acc)
        return



    const  downloadCSV = () => {
        window.open('http://localhost:5000/retrievecsv?ui='+ui, '_blank', 'noopener,noreferrer');
    } 

    const  downloadReporte = async () => {
            setLoadingFetch(true)
            const datas = document.querySelector('#reporte');
            const pdf = new JsPDF("portrait", "pt", "a4"); 
            const canvas = await html2canvas(datas, {
                allowTaint:true,
                useCORS:true
            });
            const img = canvas.toDataURL("image/png");  
            var imgWidth = 210; 
            var pageHeight = 295;  
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
      
            var doc = new JsPDF('p', 'mm');
            var position = 0;
      
            doc.addImage({
                imageData: img,
                format: "PNG",
                x: 0,
                y: 0,
                width: imgWidth,
                height: imgHeight,
                alias: undefined,
                compression: "FAST", //'NONE', 'FAST', 'MEDIUM' and 'SLOW'
                rotation: 0,
              })
            //doc.addImage(img, 'PNG', 0, position, imgWidth, imgHeight, compression="FAST");
            heightLeft -= pageHeight;
      
            while (heightLeft >= 0) {
              position = heightLeft - imgHeight;
              doc.addPage();
              doc.addImage({
                imageData: img,
                format: "PNG",
                x: 0,
                y: position,
                width: imgWidth,
                height: imgHeight,
                alias: undefined,
                compression: "MEDIUM", //'NONE', 'FAST', 'MEDIUM' and 'SLOW'
                rotation: 0,
              })             
              doc.addImage(img, 'PNG', 0, position, imgWidth, imgHeight);
              heightLeft -= pageHeight;
            }
            doc.save( 'reporte.pdf');
            setLoadingFetch(false)
    } 


 


    const handleGroup = (e) => {
        setCurrentGroup(e.target.value)
    }


    const infoAhorros = (group) => { return ( <Ahorros accumulates={accumulates} acc={acc} setAccumulates={setAccumulates}/> ) }

    const infoDiferencias = (group) => {
        return (
         <Diferencias i={currentGroup} status={status} differencesImages={newDifferencesImages}/>
        )
    }

    const infoGraficas = (group) => {
        return (
            <Graficas plots={plots}/>
        )
    }

    const infoPerfilacion = (group) => {
        return (
            <Perfilacion/>
        )
    }

    const infoDesglose = (group) => {
        return (
            <div className={styles.desglose}>
                <ButtonWithIcon text={"Exportar desglose CSV"} click={downloadCSV} />
            </div>
        )
    }

    const infoReporte = (group) => {
        return (
            <div className={styles.desglose}>
                {
                     <ButtonWithIcon text={"Generar reporte PDF"} click={downloadReporte} />
                }
               
                {
                    //<ButtonTemplate text={"Generar reporte PDF"} click={downloadReporte} />
                }
            </div>
        )
    }

    const showTabInformation = () => {

        if (currentTab === "Ahorros"){
            return infoAhorros(currentGp)
        } else if (currentTab === "Diferencias") {
            return infoDiferencias(currentGp)
        } else if (currentTab === "Gráficas"){
            return infoGraficas(currentGp)
        } else if (currentTab === "Desglose") {
            return infoDesglose(currentGp)
        } else if (currentTab === "Reporte") {
            return infoReporte(currentGp)
        } else if (currentTab === "Perfilacion") {
            return infoPerfilacion(currentGp)
        }
        }

    const handleChangeTab = (e) => {
        setCurrentTab(e.target.value)
    }

    const conditionalRendering = () => {
        if ( !start ){
            return (
                <div className={styles.reporte} id="reporte">
                    <Reporte fileRows={fileRows} differencesImages={newDifferencesImages} accumulates={accumulates} acc={acc} setAccumulates={setAccumulates} plots={plots}  status={status} fileName_size={fileName_size}  />
                </div> 
            )
        } else {
            return (<>ola</>)
        }
    }


    return ( 
        <div className={styles.wrapper}>
             <select name='birth-date'id='birth-date'className={styles.select} onChange={handleGroup}>
                <option value="0">Grupo 1</option>
                <option value="1">Grupo 2</option>
                <option value="2">Grupo 3</option>
            </select>

            <div className={styles.content}>
                <nav>
                    <ul>
                        <li>
                            <button onClick={handleChangeTab} value="Diferencias"> Diferencias</button>
                        </li>
                        <li>
                            <button onClick={handleChangeTab} value="Ahorros"> Ahorros</button>
                        </li>
                        <li>
                            <button onClick={handleChangeTab} value="Gráficas"> Gráficas</button>
                        </li>
                        <li>
                            <button onClick={handleChangeTab} value="Desglose"> Desglose</button>
                        </li>
                        <li>
                            <button onClick={handleChangeTab} value="Reporte"> Reporte</button>
                        </li>
                        <li>
                            <button onClick={handleChangeTab} value="Perfilacion"> Perfilación</button>
                        </li>
                    </ul>
                </nav>
                <div className={styles.tab_content}>
                    {showTabInformation()}
                </div>
                { 
                <div className={styles.buttons} >
                    <ButtonTemplate text={"Atras"} click={goBack} />
                </div>
                }
            </div>

            { conditionalRendering() }

        </div>
     );
}
 
export default Sixth;