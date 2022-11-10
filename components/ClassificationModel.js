import styles from '../styles/ClassificationModel.module.css';

const ClassificationModel = () => {
    return ( 
        <>
        <p className={styles.text}> <b>Modelo:</b> MLP (Multi Layer Perceptron)</p>
        <p className={styles.text}><b>Épocas:</b> 30</p>
        <p className={styles.text}><b>Algoritmo de optimización de pesos:</b> Adam</p>
        <p className={styles.text}><b>Learning rate:</b> 0.001</p>
        <p className={styles.text}><b>Precisión:</b> 94%</p>

        <p className={styles.text}><b>Matriz de confusión:</b></p>
        </>
     );
}
 
export default ClassificationModel;