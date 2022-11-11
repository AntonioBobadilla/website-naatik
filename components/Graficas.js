import styles from '../styles/Graphs.module.css';

const Graficas = ({plots}) => {

    return ( 
        <div className={styles.wrapper}>
            <h1>Info Gráficas</h1>
            <div className={styles.plot}>
                <p>Gráfica de barras sobre churn y no churn: </p>
                <img className={styles.img} src={"http://localhost:5000"+plots[0]}  />
            </div>

            <div className={styles.plot}>
            <p>Gráfica de pastel sobre churn y no churn: </p>
                <img className={styles.img} src={"http://localhost:5000"+plots[1]}  />
            </div>
        </div>
     );
}
 
export default Graficas;