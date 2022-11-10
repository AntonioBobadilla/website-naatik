import styles from '../styles/AhorrosReporte.module.css'

const AhorrosReporte = ( {accumulates, acc, setAccumulates, fontSize}) => {

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
                <td className={styles.td}>$ {acc[key]}</td>
            </tr>
             )
      })

    return ( 
        <div className={styles.savings}>
        <p> Posibles cuentas canceladas</p>
        <table className={styles.table} >
            <tr>
                <th className={styles.th}>Grupo de probabilidad</th>
                <th className={styles.th}>Monto a pagar</th>
            </tr>
            {results}

            <tr className={styles.results}>
                <td className={styles.td}>TOTAL</td>
                <td className={styles.td}>$ {accumulates}</td>
            </tr>
        </table> 
    </div>
     );
}
 
export default AhorrosReporte;