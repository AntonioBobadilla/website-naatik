
import styles from '../styles/Perfilacion.module.css';

const PerfilacionReporte = ({Allclusts}) => {


    console.log("REPORTE PERF: ", Allclusts)



    return ( 
        <>
            <h1 className={styles.title}>Perfilación de clientes </h1>
            <div className={styles.clusting_reporte}>
            {Allclusts.map((cluster) => {
                return (
                    <div className={styles.clusting_group}>
                        <p>Grupo {cluster.group}</p>
                        <div>
                            <h4 className={styles.title_img}>Distribución:</h4>
                            <img src={"http://localhost:5000"+cluster.distribution} width={300} />
                        </div>
                        <div>
                            <h4 className={styles.title_img}>Gráfica polar:</h4>
                            <img src={"http://localhost:5000"+cluster.polar_plot} width={300}  />
                        </div>
                    </div>

                )
            }) }
            </div>

        </>
     );
}
 
export default PerfilacionReporte;

/*


        <h1 className={styles.title}>Perfilación de clientes </h1>
        <div className={styles.clusting}>
            <div>
                <h4 className={styles.title_img}>Distribución:</h4>
                <img src={"http://localhost:5000"+Allclusting['distribution']} width={500} />
            </div>
            <div>
                <h4 className={styles.title_img}>Gráfica polar:</h4>
                <img src={"http://localhost:5000"+Allclusting['polar_plot']} width={500}  />
            </div>
        </div>

        */