import styles from '../styles/DiferenciasReporte.module.css'

const DiferenciasReporte = ({differencesImages, noDifferences}) => {
    console.log("no diff: ",noDifferences)
    const trueCondition = () => {
        
        differencesImages.map((obj, key) => (
            <>
                <li key={key} className={styles.text_plot}> {obj.text}</li>
                <img src={"http://localhost:5000"+obj.url} alt={"http://localhost:5000"+obj.url} className={styles.plot_img} />
            </>
        ))
    }

    const falseCondition = () => {
        console.log("aaaaa")
        return ( <h1>No hay churn.</h1>)
    }
    return ( 

        <div className={styles.imageswrapper}>

            { (noDifferences ? trueCondition() : falseCondition()) }
                
        </div>
     );
}
 
export default DiferenciasReporte;