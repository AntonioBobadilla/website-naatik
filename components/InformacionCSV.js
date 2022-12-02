import styles from '../styles/InformacionCSV.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFile, faSdCard} from "@fortawesome/free-solid-svg-icons"

const InformacionCSV = ({fileName_size, fileRows, generalInfoChurnData}) => {

    console.log("desde info csv: ", generalInfoChurnData)

    const kb = fileName_size.size / 1024;
    const mb = kb / 1024
    const calc = Math.round((mb + Number.EPSILON) * 100) / 100

    return ( 

        <>
        <div className={styles.wrapper_boxes}>
            <div className={styles.csv_box} >
                <p className={styles.text}> <FontAwesomeIcon className={styles.icon_csvfile} icon={faFile} /> <b>Nombre del archivo:</b> {fileName_size.name}</p>
            </div>
            <div className={styles.csv_box} >
                <p className={styles.text}> <FontAwesomeIcon className={styles.icon_csvfile} icon={faSdCard} />  <b>Tamaño del archivo:</b> {calc} MB</p>            
            </div>          
        </div>


        <p className={styles.text}><b>Columnas encontradas:</b></p>

        <div className={styles.rows_csv}>
            {
                fileRows.map((name, key) => (
                    <li  key={key} className={styles.li}>{name}</li>
                ))
            }
        </div>

        <div className={styles.churn_info}>

            <div className={styles.churn_box}>
                <p className={styles.text_churn}>Número total de datos:</p>
                <p className={styles.data_churn}>{generalInfoChurnData.total}</p>
            </div>

            <div  className={styles.churn_box}>
                <p className={styles.text_churn}>Cantidad de datos con churn:</p>
                <p  className={styles.data_churn}>{generalInfoChurnData.number_churn}</p>
            </div>

            <div  className={styles.churn_box}> 
                <p className={styles.text_churn}>Cantidad de datos sin churn: </p>
                <p  className={styles.data_churn}>{generalInfoChurnData.number_no_churn}</p>
            </div>

            <div  className={styles.churn_box}> 
                <p className={styles.text_churn}>Porcentaje de datos con churn:</p>
                <p  className={styles.data_churn}>{generalInfoChurnData.percentage_churn}%</p>
            </div>

            <div  className={styles.churn_box}>
                <p className={styles.text_churn}>Porcentaje de datos sin churn:</p>
                <p  className={styles.data_churn}>{generalInfoChurnData.percentage_no_churn}%</p>
            </div>
        </div>

        </>
     );
}
 
export default InformacionCSV;