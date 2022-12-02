import Navbar from "./Navbar";
import styles from '../styles/Reporte.module.css';

// import separated components 
import AhorrosReporte from '../components/AhorrosReporte';
import DiferenciasReporte from  '../components/DiferenciasReporte';
import Graficas from '../components/Graficas';
import ClassificationModel from '../components/ClassificationModel'
import InformacionCSV from '../components/InformacionCSV';
import Perfilacion from '../components/PerfilacionReporte';

const Reporte = ({differencesImages, plots, noDifferences, fileName_size, fileRows, status, i, Allclusts, generalInfoChurnData, confussionMatrix, modelAccuracy}) => {
    return ( 
        <div className={styles.reporte}>
            <Navbar />
            <div className={styles.container_titles}>
                <h4 className={styles.title}>Reporte PDF</h4>
                <h4 className={styles.title}>08/11/22</h4>
            </div>
            <div className={styles.section}>
                <h5>Información general del archivo de entrada:</h5>
                <InformacionCSV generalInfoChurnData={generalInfoChurnData} fileRows={fileRows} fileName_size={fileName_size} />
            </div>
            <div className={styles.section}>
                <h5>Perfilación de clientes con churn:</h5>
                <p className={styles.abstract_text}> A continuación se muestran la perfilación de los diferentes tipos de clientes que hacen churn.</p>
                <Perfilacion Allclusts={Allclusts} />
            </div>     
            <div className={styles.section}>
                <h5>Diferencias entre clientes con churn y no churn:</h5>
                <p className={styles.abstract_text}>A continuación se muestran las diferencias entre los clientes con churn y no churn con algunas variables que tienen una alta importancia en el modelo de clasificación.</p>
                <DiferenciasReporte i={i} status={status} noDifferences={noDifferences} differencesImages={differencesImages}/>
            </div>
            <div className={styles.section}>
                <h5>Gráficas entre clientes con churn y no churn:</h5>
                <p className={styles.abstract_text}> A continuación se muestran gráficas que resumen los datos entre los clientes con churn y no churn.</p>
                <Graficas plots={plots} />
            </div>       
            <div className={styles.section}>
                <h5>Modelo de clasificación usado:</h5>
                <p className={styles.abstract_text}>A continuación se muestra el modelo de clasificación usado para detectar el churn, así como su rendimiento, sus hiperparámetros y la matriz de confusión.</p>
                <ClassificationModel modelAccuracy={modelAccuracy} confussionMatrix={confussionMatrix} />
            </div>
        </div>
     );
}
 
export default Reporte;