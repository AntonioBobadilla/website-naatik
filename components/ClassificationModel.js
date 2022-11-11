import styles from '../styles/ClassificationModel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons"


const ClassificationModel = () => {
    return ( 
        <>
        <div className={styles.model_performance_wrapper} >
            <div className={styles.model_performance} >
                <h5 className={styles.title_performance}>Rendimiento del modelo</h5>
                <h2 className={styles.model_accuracy}>94%</h2>

                <h6 className={styles.subtitle_model}>Hiperparámetros: </h6>

                <p className={styles.text}> <FontAwesomeIcon className={styles.icon_check1} icon={faCircleCheck} /><b>Modelo:</b> <span className={styles.span}>MLP (Multi Layer Perceptron)</span></p>
                <p className={styles.text}> <FontAwesomeIcon className={styles.icon_check2} icon={faCircleCheck} /><b>Épocas:</b> <span className={styles.span}>100</span></p>
                <p className={styles.text}> <FontAwesomeIcon className={styles.icon_check3} icon={faCircleCheck} /><b>Capas profundas:</b> <span className={styles.span}>2</span> </p>
                <p className={styles.text}> <FontAwesomeIcon className={styles.icon_check4} icon={faCircleCheck} /><b>Nodos en cada capa profunda:</b> <span className={styles.span}>50</span></p>
                <p className={styles.text}> <FontAwesomeIcon className={styles.icon_check5} icon={faCircleCheck} /><b>Algoritmo de optimización de pesos:</b> <span className={styles.span}>Adam</span></p>
                <p className={styles.text}> <FontAwesomeIcon className={styles.icon_check6} icon={faCircleCheck} /><b>Función de activación:</b> <span className={styles.span}>Logística</span></p>
            </div>
        </div>

        
        <p className={styles.title_Text}><b>Matriz de confusión:</b></p>

        <div className={styles.cm_wrapper}>
            <div className={styles.confussion_matrix}> 
                <div className={styles.true_positives}>
                    <p className={styles.text_cm}>Verdaderos positivos:</p>
                    <p className={styles.text_cm}>323638</p> 
                </div>
                <div className={styles.false_positives}>
                    <p className={styles.text_cm}>Falsos positivos:</p>
                    <p className={styles.text_cm}>15291</p> 
                </div>
                <div className={styles.false_negatives}>
                    <p className={styles.text_cm}>Falsos negativos:</p>
                    <p className={styles.text_cm}>0</p> 
                </div>
                <div className={styles.true_negatives}>
                    <p className={styles.text_cm}>Verdaderos negativos:</p>
                    <p className={styles.text_cm}>3252</p> 
                </div>
            </div>
        </div>
        </>
     );
}
 
export default ClassificationModel;