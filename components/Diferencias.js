import styles from '../styles/Diferencias.module.css'

const Diferencias = ({differencesImages, status, i}) => {
    console.log(differencesImages)
    console.log("cu gru: ", i)  
    const trueCondition = () => (
        

        differencesImages[i].map((obj, key) => (
            <div key={key}>
                <li  className={styles.text_plot}> {obj.text}</li>
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
 
export default Diferencias;