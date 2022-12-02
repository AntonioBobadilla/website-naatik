
import styles from '../styles/Perfilacion.module.css';
import Image from 'next/image'
import noProfiles from '../assets/imgs/no_profiles.png'


const Perfilacion = ({clusting}) => {

    console.log("clusting desde perfilacion:", clusting )


    const trueCondition = () => (
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
    )


    const falseCondition = () => (
            <div className={styles.empty}>
                <Image
                    src={noProfiles}
                    alt="no profiles img"
                    width={250}
                />
                <p className={styles.no_perfilation}>No hay perfilación para este grupo, ya que no hay clientes con churn.</p>
            </div>
    )


    return ( 

        <div className={styles.imageswrapper}>

            { ( (Object.keys(clusting).length != 0) ? trueCondition() : falseCondition()) }
        </div>

     );
}
 
export default Perfilacion;