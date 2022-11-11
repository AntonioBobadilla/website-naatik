import styles from '../styles/DiferenciasReporte.module.css'

const DiferenciasReporte = ({differencesImages, status}) => {

    console.log("status: ", status)
    const trueCondition = () => (
        
        differencesImages.map((obj, key) => (
            <div key={key} className={styles.plot_difference}>
                <p  className={styles.text_plot}> {obj.text}</p>
                <img src={"http://localhost:5000"+obj.url} alt={"http://localhost:5000"+obj.url} className={styles.plot_img} />
            </div>
        ))
    )

    const falseCondition = () => {
        return ( 
            <div className={styles.center_wrapper}>
                <p>Dados los slides proporcionados, no hay churn.</p>
            </div>
        )
    }
    return ( 

        <div className={styles.imageswrapper}>

        { ( (status === 'both') ? trueCondition() : falseCondition()) }
                
        </div>
     );
}
 
export default DiferenciasReporte;