import styles from '../styles/Graphs.module.css';

const Graficas = ({plots}) => {
    return ( 
        <div className={styles.wrapper}>
            <div className={styles.plot}>
                <p>Gráfica de barras: </p>
                <img className={styles.img} src={"http://localhost:5000"+plots[0]}  />
            </div>

            <div className={styles.plot}>
            <p>Gráfica de pastel: </p>
                <img className={styles.img} src={"http://localhost:5000"+plots[1]}  />
            </div>
        </div>
     );
}
 
export default Graficas;