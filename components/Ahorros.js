import styles from '../styles/Ahorros.module.css'

const Ahorros = ( {accumulates, acc, setAccumulates, fontSize}) => {

    const results = []
    
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
                <td className={styles.td}>$ {acc[key].toLocaleString()}</td>
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

    return ( 
        <div className={styles.savings}>
        <p> Posibles cuentas canceladas</p>
        <table className={styles.table} >
            <thead>
                <tr>
                    <th className={styles.th}>Grupo de probabilidad</th>
                    <th className={styles.th}>Monto a pagar basado en probabilidad de churn</th>
                    <th className={styles.th}>Seleccionar/Deseleccionar</th>
                </tr>
            </thead>
            <tbody>
                {results}

                <tr className={styles.results}>
                    <td className={styles.td}>TOTAL</td>
                    <td className={styles.td}>$ {accumulates.toLocaleString()}</td>
                </tr>
            </tbody>
        </table> 
    </div>
     );
}
 
export default Ahorros;