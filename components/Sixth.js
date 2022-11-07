import styles from '../styles/Group.module.css';
import React, {useState} from 'react';
import ButtonTemplate from '../components/Button';

const Sixth = ({currentGp, setGp, acc, ui, goBack }) => {

    const [currentGroup, setCurrentGroup] = useState(currentGp);
    const [currentTab, setCurrentTab] = useState('Diferencias');
    const [accumulates, setAccumulates] = useState(0);

    if(!acc)
        return

    const results = [];

    const  downloadCSV = () => {
        console.log("downloading...")
        console.log(ui)
        window.open('http://localhost:5000/retrievecsv?ui='+ui, '_blank', 'noopener,noreferrer');
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
            <h1> info diferencias de grupo {group}</h1>
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


    const showTabInformation = () => {

        if (currentTab === "Ahorros"){
            return infoAhorros(currentGp)
        } else if (currentTab === "Diferencias") {
            return infoDiferencias(currentGp)
        } else if (currentTab === "Gráficas"){
            return infoGraficas(currentGp)
        } else if (currentTab === "Desglose") {
            return infoDesglose(currentGp)
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



        </div>
     );
}
 
export default Sixth;