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


const Sixth = ({currentGp, setGp, acc, ui, goBack, noDifferences}) => {

    const [currentGroup, setCurrentGroup] = useState(currentGp);
    const [currentTab, setCurrentTab] = useState('Diferencias');
    const [accumulates, setAccumulates] = useState(0);
    const [differencesImages, setDifferencesImages] = useState([])
    const [plots, setPlots] = useState([])
    const [newDifferencesImages, setNewDifferencesImages] = useState([])
    const [start, setStart] = useState(true);

    const addDifferenceText = () => {
        console.log("SOLO ENTRA UNA VEZ EN FUNC")
       const text_bill_amount = 'El grupo con churn tiene 23% mayor pago que el grupo sin churn';
       const text_complaints = 'El grupo con churn tiene 23% mayor quejas que el grupo sin churn';
       const text_years_stayed = 'El grupo con churn tiene 23% mayor años en el servicio que el grupo sin churn';
       const text_party_gender = 'El grupo con churn tiene 23% más mujeres pago que el grupo sin churn';
       const text_pty_profile_sub_type = 'El grupo con churn tiene 23% más gente en Prestige/Residential que el grupo sin churn';
    
       const obj = []

       const dummyobj1 = { 'text':text_bill_amount, 'url':differencesImages[0]}
       const dummyobj2 = { 'text':text_complaints, 'url':differencesImages[1]}
       const dummyobj3 = { 'text':text_party_gender, 'url':differencesImages[2]}
       const dummyobj4 = { 'text':text_pty_profile_sub_type, 'url':differencesImages[3]}
       const dummyobj5 = { 'text':text_years_stayed, 'url':differencesImages[4]}

       obj.push(dummyobj1);
       obj.push(dummyobj2);
       obj.push(dummyobj3);
       obj.push(dummyobj4);
       obj.push(dummyobj5);

       console.log("new obj: ", obj)
       setNewDifferencesImages(obj)
    }

    const fetchDifferences = async () => {
        console.log("SOLO ENTRA UNA VEZ")
        await axios.get("http://localhost:5000/getdifferences", { params: { ui: ui} } )
        .then((res) => {
            setDifferencesImages(res.data)
            setStart(false)

        })
    }

    const fetchGraficas = async () => {
        await axios.get("http://localhost:5000/getgraphs", { params: { ui: ui} }  )
        .then((res) => {
            console.log("plots: ", res.data)
            setPlots(res.data)
            setStart(false)
        })
    }

    useEffect(() => {
        if (start === true) {
            if (noDifferences)
                fetchDifferences();
            fetchGraficas();
        } else {
            addDifferenceText()
        }
        }, [start])



  
    if(!acc)
        return



    const  downloadCSV = () => {
        console.log("downloading...")
        console.log(ui)
        window.open('http://localhost:5000/retrievecsv?ui='+ui, '_blank', 'noopener,noreferrer');
    } 

    const  downloadReporte = async () => {
        console.log("downloading reporte...")
        /*
        const report = new JsPDF('portrait','pt','letter');
        report.html(document.querySelector('#__next')).then(() => {
            report.save('report.pdf');
        });*/


            /* MULTI PAGES */
            /*const datas = document.querySelector('#reporte');
            html2canvas(datas).then((canvas) => {
                 //! MAKE YOUR PDF
                 var pdf = new JsPDF('p', 'pt', 'letter');
         
                 for (var i = 0; i <= datas.clientHeight/980; i++) {
                     //! This is all just html2canvas stuff
                     var srcImg  = canvas;
                     var sX      = 0;
                     var sY      = 980*i; // start 980 pixels down for every new page
                     var sWidth  = 900;
                     var sHeight = 980;
                     var dX      = 0;
                     var dY      = 0;
                     var dWidth  = 900;
                     var dHeight = 980;
         
                     window.onePageCanvas = document.createElement("canvas");
                     onePageCanvas.setAttribute('width', 900);
                     onePageCanvas.setAttribute('height', 980);
                     var ctx = onePageCanvas.getContext('2d');
                     // details on this usage of this function: 
                     // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images#Slicing
                     ctx.drawImage(srcImg,sX,sY,sWidth,sHeight,dX,dY,dWidth,dHeight);
         
                     // document.body.appendChild(canvas);
                     var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);
         
                     var width         = onePageCanvas.width;
                     var height        = onePageCanvas.clientHeight;
         
                     //! If we're on anything other than the first page,
                     // add another page
                     if (i > 0) {
                         pdf.addPage(612, 791); //8.5" x 11" in pts (in*72)
                     }
                     //! now we declare that we're working on that page
                     pdf.setPage(i+1);
                     //! now we add content to that page!
                     pdf.addImage(canvasDataURL, 'PNG', 20, 40, (width*.62), (height*.62));
         
                 }
                 //! after the for loop is finished running, we save the pdf.
                 pdf.save('Test.pdf');
           });*/

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
                compression: "FAST", //'NONE', 'FAST', 'MEDIUM' and 'SLOW'
                rotation: 0,
              })             
              doc.addImage(img, 'PNG', 0, position, imgWidth, imgHeight);
              heightLeft -= pageHeight;
            }
            doc.save( 'reporte.pdf');

            /* MULTI PAGES */
            /*const datas = document.querySelector('#reporte');
            const pdf = new JsPDF("portrait", "pt", "a4"); 
            const data = await html2canvas(datas, {
                allowTaint:true,
                useCORS:true
            });
            const img = data.toDataURL("image/png");  
            const imgProperties = pdf.getImageProperties(img);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
            pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save("shipping_label.pdf");*/

            /*const report = new JsPDF('portrait','pt','a4');
            report.html(document.querySelector('#reporte')).then(() => {
                report.save('report.pdf');
            });*/

        //console.log(ui)
        //window.open('http://localhost:5000/retrievecsv?ui='+ui, '_blank', 'noopener,noreferrer');
    } 


 


    const handleGroup = (e) => {
        setGp(e.target.value)
    }


    const infoAhorros = (group) => { return ( <Ahorros accumulates={accumulates} acc={acc} setAccumulates={setAccumulates}/> ) }

    const infoDiferencias = (group) => {
        return (
         <Diferencias noDifferences={noDifferences} differencesImages={newDifferencesImages}/>
        )
    }

    const infoGraficas = (group) => {
        return (
            <Graficas plots={plots}/>
        )
    }

    const infoDesglose = (group) => {
        return (
            <div className={styles.desglose}>
                <h1> info desglose de grupo {group}</h1>
                <ButtonTemplate text={"descargar csv"} click={downloadCSV} />
            </div>
        )
    }

    const infoReporte = (group) => {
        return (
            <div className={styles.desglose}>
                <h1> info reporte de grupo {group}</h1>
                <ButtonTemplate text={"Generar reporte PDF"} click={downloadReporte} />
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
        }
        }

    const handleChangeTab = (e) => {
        setCurrentTab(e.target.value)
        console.log("cambio: ", )
    }

    const conditionalRendering = () => {
        if ( !start ){
            return (
                <div className={styles.reporte} id="reporte">
                    <Reporte differencesImages={newDifferencesImages} accumulates={accumulates} acc={acc} setAccumulates={setAccumulates} plots={plots}  noDifferences={noDifferences}  />
                </div> 
            )
        } else {
            return (<>ola</>)
        }
    }


    return ( 
        <div className={styles.wrapper}>
             <select name='birth-date'id='birth-date'className={styles.select} onChange={handleGroup}>
                <option value="1">Grupo 1</option>
                <option value="2">Grupo 2</option>
                <option value="3">Grupo 3</option>
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