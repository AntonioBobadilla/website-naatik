
import styles from '../styles/Perfilacion.module.css';

const Perfilacion = ({clusting}) => {

    console.log("clusting desde perfilacion:", clusting )

    return ( 
        <>

        <h1 className={styles.title}>Perfilación de clientes </h1>
        <div className={styles.clusting}>
            <div>
                <h4 className={styles.title_img}>Distribución:</h4>
                <img src={"http://localhost:5000"+clusting['distribution']} width={500} />
            </div>
            <div>
                <h4 className={styles.title_img}>Gráfica polar:</h4>
                <img src={"http://localhost:5000"+clusting['polar_plot']} width={500}  />
            </div>
        </div>
        </>
     );
}
 
export default Perfilacion;