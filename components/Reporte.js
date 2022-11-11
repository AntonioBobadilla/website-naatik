import Navbar from "./Navbar";
import styles from '../styles/Reporte.module.css';

// import separated components 
import AhorrosReporte from '../components/AhorrosReporte';
import DiferenciasReporte from  '../components/DiferenciasReporte';
import Graficas from '../components/Graficas';
import ClassificationModel from '../components/ClassificationModel'
import InformacionCSV from '../components/InformacionCSV';

const Reporte = ({differencesImages, accumulates, acc, setAccumulates, plots, noDifferences, fileName_size, fileRows}) => {
    return ( 
        <div className={styles.reporte}>
            <Navbar />
            <div className={styles.container_titles}>
                <h4 className={styles.title}>Reporte PDF</h4>
                <h4 className={styles.title}>08/11/22</h4>
            </div>
            <div className={styles.section}>
                <h5>Información general del archivo de entrada:</h5>
                <InformacionCSV fileRows={fileRows} fileName_size={fileName_size} />
            </div>
            <div className={styles.section}>
                <h5>Diferencias entre clientes con churn y no churn:</h5>
                <p className={styles.abstract_text}>A continuación se muestran las diferencias entre los clientes con churn y no churn con algunas variables que tienen una alta importancia en el modelo de clasificación.</p>
                <DiferenciasReporte noDifferences={noDifferences} differencesImages={differencesImages}/>
            </div>
            <div className={styles.section}>
                <h5>Posibles cuentas canceladas:</h5>
                <p className={styles.abstract_text}> A continuación se muestra una tabla que contiene la suma de la variable BILL_AMOUNT de cada uno de los diferentes grupos de churn: Nula, Baja, Mediana y Alta probabilidad junto con su suma total.</p>
                <AhorrosReporte fontSize={12} accumulates={accumulates} acc={acc} setAccumulates={setAccumulates}/>
            </div>
            <div className={styles.section}>
                <h5>Gráficas entre clientes con churn y no churn:</h5>
                <p className={styles.abstract_text}> A continuación se muestran gráficas que resumen los datos entre los clientes con churn y no churn.</p>
                <Graficas plots={plots} />
            </div>
            <div className={styles.section}>
                <h5>Modelo de clasificación usado:</h5>
                <p className={styles.abstract_text}>A continuación se muestra el modelo de clasificación usado para detectar el churn, así como su rendimiento, sus hiperparámetros y la matriz de confusión.</p>
                <ClassificationModel />
            </div>
        </div>
     );
}
 
export default Reporte;