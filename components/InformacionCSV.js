import styles from '../styles/InformacionCSV.module.css';

const InformacionCSV = ({fileName_size, fileRows}) => {

    const kb = fileName_size.size / 1024;
    const mb = kb / 1024
    const calc = Math.round((mb + Number.EPSILON) * 100) / 100

    return ( 

        <>
            <p className={styles.text}><b>Tamaño del archivo:</b> {calc} MB</p>
            <p className={styles.text}><b>Nombre del archivo:</b> {fileName_size.name}</p>

            <p className={styles.text}><b>Columnas encontradas:</b></p>

            <div className={styles.rows_csv}>
                {
                    fileRows.map((name, key) => (
                        <li  key={key} className={styles.li}>{name}</li>
                    ))
                }
            </div>

        </>
     );
}
 
export default InformacionCSV;