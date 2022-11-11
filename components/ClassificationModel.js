import styles from '../styles/ClassificationModel.module.css';

const ClassificationModel = () => {
    return ( 
        <>
        <p className={styles.text}> <b>Modelo:</b> MLP (Multi Layer Perceptron)</p>
        <p className={styles.text}><b>Épocas:</b> 100</p>
        <p className={styles.text}><b>Capas profundas:</b> 2 </p>
        <p className={styles.text}><b>Nodos en cada capa profunda:</b> 50</p>
        <p className={styles.text}><b>Algoritmo de optimización de pesos:</b> Adam</p>
        <p className={styles.text}><b>Función de activación:</b> Logística</p>
        <p className={styles.text}><b>Precisión:</b> 96%</p>
        <p className={styles.text}><b>Matriz de confusión:</b></p>

        <div className={styles.cm_wrapper}>
            <div className={styles.confussion_matrix}> 
                <div className={styles.true_positives}>
                    <p className={styles.text_cm}>Verdaderos positivos:</p>
                    <p className={styles.text_cm}>20</p> 
                </div>
                <div className={styles.false_positives}>
                    <p className={styles.text_cm}>Falsos positivos:</p>
                    <p className={styles.text_cm}>20</p> 
                </div>
                <div className={styles.false_negatives}>
                    <p className={styles.text_cm}>Falsos negativos:</p>
                    <p className={styles.text_cm}>20</p> 
                </div>
                <div className={styles.true_negatives}>
                    <p className={styles.text_cm}>Verdaderos negativos:</p>
                    <p className={styles.text_cm}>20</p> 
                </div>
            </div>
        </div>
        </>
     );
}
 
export default ClassificationModel;