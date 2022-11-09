import styles from '../styles/Group.module.css';
import React, {useState, useEffect} from 'react';
import ButtonTemplate from '../components/Button';
import axios from 'axios';
import JsPDF from 'jspdf';
import html2canvas from "html2canvas";
import Reporte from '../components/Reporte'

const Sixth = ({currentGp, setGp, acc, ui, goBack}) => {

    const [currentGroup, setCurrentGroup] = useState(currentGp);
    const [currentTab, setCurrentTab] = useState('Diferencias');
    const [accumulates, setAccumulates] = useState(0);
    const [differencesImages, setDifferencesImages] = useState([])
    const [start, setStart] = useState(true);

    const addDifferenceText = () => {
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
       setDifferencesImages(obj)
    }

    useEffect(() => {
        console.log("cambio en variable start.")
        addDifferenceText()
    },[start])

    const fetchDifferences = async () => {
        await axios.get("http://localhost:5000/getdifferences")
        .then((res) => {
            console.log(res.data)
            setDifferencesImages(res.data)
            setStart(false);
            
        })
    }

    useEffect(() => {
        if (start === true)
            fetchDifferences();
        }, [start])

  
    if(!acc)
        return

    const results = [];

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
            const pdf = new JsPDF("portrait", "pt", "a4"); 
            const data = await html2canvas(document.querySelector('#reporte'));
            const img = data.toDataURL("image/png");  
            const imgProperties = pdf.getImageProperties(img);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
            pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save("shipping_label.pdf");

        //console.log(ui)
        //window.open('http://localhost:5000/retrievecsv?ui='+ui, '_blank', 'noopener,noreferrer');
    } 

    const handleCheckbox = (e, key) => {
        const quantity =  acc[key]
        if(e.target.checked){
            setAccumulates(accumulates + quantity)
        }else{
            setAccumulates(accumulates - quantity)
        }
   }

    Object.keys(acc).forEach(function(key, index) {
        results.push(
            <tr>
                <td className={styles.td}>{key}</td>
                <td className={styles.td}>$ {acc[key]}</td>
                <td className={styles.td}><input
                        type="checkbox" 
                        value={""}
                        key={key}
                        onChange={(e) => handleCheckbox(e, key)}
                        name="time" 
                        id={""}
                        /></td>
            </tr>
             )
      })

    console.log("gp enviado: ", currentGp)

    const handleGroup = (e) => {
        setGp(e.target.value)
        console.log("group: ",e.target.value)
        console.log("Pestaña: ", currentTab)
    }

    const handleSelect = (e) => {
        console.log("selected" ,e.target.value)
    }

    const infoAhorros = (group) => {
        return (
            <>
                <p> Posibles cuentas canceladas</p>
                <table className={styles.table} >
                    <tr>
                        <th className={styles.th}>Grupo de probabilidad</th>
                        <th className={styles.th}>Monto a pagar</th>
                        <th className={styles.th}>Seleccionar/Deseleccionar</th>
                    </tr>
                    {results}

                    <tr className={styles.results}>
                        <td className={styles.td}>TOTAL</td>
                        <td className={styles.td}>$ {accumulates}</td>
                    </tr>
                </table> 
            </>

        )
    }

    const infoDiferencias = (group) => {
        return (
            <div className={styles.imageswrapper}>
                
                { differencesImages.map((obj, key) => (
                    <>
                        {console.log("OBJETO:  ", obj)}
                        <li key={key} className={styles.text_plot}> {obj.text}</li>
                        <img src={"http://localhost:5000"+obj.url} alt={"http://localhost:5000"+obj.url} className={styles.plot_img} />
                    </>
                ))}
            </div>

            
        )
    }

    const infoGraficas = (group) => {
        return (
            <h1> info graficas de grupo {group}</h1>
        )
    }

    const infoDesglose = (group) => {
        return (
            <>
                <h1> info desglose de grupo {group}</h1>
                <ButtonTemplate text={"descargar csv"} click={downloadCSV} />
            </>
        )
    }

    const infoReporte = (group) => {
        return (
            <>
                <h1> info reporte de grupo {group}</h1>
                <ButtonTemplate text={"descargar reporte PDF"} click={downloadReporte} />
            </>
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

            <div className={styles.reporte} id="reporte">
                <Reporte />
            </div> 

        </div>
     );
}
 
export default Sixth;