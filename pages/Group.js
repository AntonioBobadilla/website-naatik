import styles from '../styles/Group.module.css';
import React, {useState} from 'react';

const Group = () => {

    const [currentGroup, setCurrentGroup] = useState('1');
    const [currentTab, setCurrentTab] = useState('Diferencias');

    const handleGroup = (e) => {
        setCurrentGroup(e.target.value)
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
                    <tr>
                        <td className={styles.td}>Baja probabilidad</td>
                        <td className={styles.td}>$1,000</td>
                        <td className={styles.td}><input
                                type="checkbox" 
                                value={""}
                                name="time" 
                                onChange={handleSelect}
                                id={""}
                                // checked={item.checked}
                                /></td>
                    </tr>
                    <tr>
                        <td className={styles.td}>Mediana probabilidad</td>
                        <td className={styles.td}>$3,000</td>
                        <td className={styles.td}><input
                                type="checkbox" 
                                value={""}
                                name="time" 
                                onChange={handleSelect}
                                id={""}
                                // checked={item.checked}
                                /></td>
                    </tr>
                    <tr>
                        <td className={styles.td}>Alta probabilidad</td>
                        <td className={styles.td}>$400</td>
                        <td className={styles.td}><input
                                type="checkbox" 
                                value={""}
                                name="time" 
                                onChange={handleSelect}
                                id={""}
                                // checked={item.checked}
                                /></td>
                    </tr>
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
            return infoAhorros(currentGroup)
        } else if (currentTab === "Diferencias") {
            return infoDiferencias(currentGroup)
        } else if (currentTab === "Gráficas"){
            return infoGraficas(currentGroup)
        } else if (currentTab === "Desglose") {
            return infoDesglose(currentGroup)
        }
        }

    const handleChangeTab = (e) => {
        setCurrentTab(e.target.value)
        console.log("cambio: ", )
    }

    return ( 
        <div className={styles.wrapper}>
             <select name='birth-date'id='birth-date'className={styles.select} onChange={handleGroup}>
                <option value="2">Grupo 2</option>
                <option selected={true} value="1">Grupo 1</option>
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
 
export default Group;