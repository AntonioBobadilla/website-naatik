import styles from '../styles/Group.module.css';
import React, {useState} from 'react';

const Sixth = ({currentGp, setGp }) => {

    const [currentGroup, setCurrentGroup] = useState(currentGp);
    const [currentTab, setCurrentTab] = useState('Diferencias');

    let dummyData =
        {
            "acc": {
              "group1": 0.0,
              "group2": 0.0,
              "group3": 0.0,
              "group4": 7.706112859999999
            },
            "ui": "a623ec71-fe1e-4c3e-9455-7c612e43252c"
          };

    let { acc } = dummyData;

   const renameKeys = (obj) => {
        obj['Nula probabilidad'] = obj['group1'];
        delete obj['group1'];

        obj['Baja probabilidad'] = obj['group2'];
        delete obj['group2'];

        obj['Mediana probabilidad'] = obj['group3'];
        delete obj['group3'];

        obj['Alta probabilidad'] = obj['group4'];
        delete obj['group4'];

        return obj;
   }

    acc = renameKeys(acc)
    console.log(acc)

    const results = [];

    Object.keys(acc).forEach(function(key, index) {
        results.push(
            <tr>
                <td className={styles.td}>{key}</td>
                <td className={styles.td}>$ {acc[key]}</td>
                <td className={styles.td}><input
                        type="checkbox" 
                        value={""}
                        name="time" 
                        id={""}
                        // checked={item.checked}
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
                        <td className={styles.td}>$ 5, 000, 200.00</td>
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
                <button>Descargar CSV</button>
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
            </div>
        </div>
     );
}
 
export default Sixth;