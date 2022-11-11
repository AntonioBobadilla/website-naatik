import styles from '../styles/AhorrosReporte.module.css'

const AhorrosReporte = ( {accumulates, acc, setAccumulates, fontSize}) => {

    const results = []
    

    const sumCells = () => {

        const proba0 = acc['Alta probabilidad'];
        const proba1 = acc['Baja probabilidad'];
        const proba2 = acc['Mediana probabilidad'];
        const proba3 = acc['Nula probabilidad'];

        let sum = (proba0+proba1+proba2+proba3).toFixed(2)
        return (parseInt(sum).toLocaleString())
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
            <tr key={key}>
                <td className={styles.td}>{key}</td>
                <td className={styles.td}>$ {acc[key].toLocaleString()}</td>
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
                <td className={styles.td}>$ {sumCells()}</td>
            </tr>
        </table> 
    </div>
     );
}
 
export default AhorrosReporte;