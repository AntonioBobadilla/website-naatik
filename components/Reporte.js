import Navbar from "./Navbar";
import styles from '../styles/Reporte.module.css';

// import separated components 
import AhorrosReporte from '../components/AhorrosReporte';
import DiferenciasReporte from  '../components/DiferenciasReporte';
import Graficas from '../components/Graficas';
import ClassificationModel from '../components/ClassificationModel'

const Reporte = ({differencesImages, accumulates, acc, setAccumulates, plots, noDifferences}) => {
    return ( 
        <div className={styles.reporte}>
            <Navbar />
            <div className={styles.container_titles}>
                <h4 className={styles.title}>Reporte PDF</h4>
                <h4 className={styles.title}>08/11/22</h4>
            </div>
            <div className={styles.section}>
                <h5>Diferencias entre clientes con churn y no churn:</h5>
                <DiferenciasReporte noDifferences={noDifferences} differencesImages={differencesImages}/>
            </div>
            <div className={styles.section}>
                <h5>Posibles cuentas canceladas:</h5>
                <AhorrosReporte fontSize={12} accumulates={accumulates} acc={acc} setAccumulates={setAccumulates}/>
            </div>
            <div className={styles.section}>
                <h5>Gráficas entre clientes con churn y no churn:</h5>
                <Graficas plots={plots} />
            </div>
            <div className={styles.section}>
                <h5>Modelo de clasificación usado:</h5>
                <ClassificationModel />
            </div>
        </div>
     );
}
 
export default Reporte;