import styles from '../styles/Diferencias.module.css'

const Diferencias = ({differencesImages, noDifferences}) => {
    
    console.log("data imgs: ",differencesImages)
    const trueCondition = () => (
        
        differencesImages.map((obj, key) => (
            <>
                <li key={key} className={styles.text_plot}> {obj.text}</li>
                <img src={"http://localhost:5000"+obj.url} alt={"http://localhost:5000"+obj.url} className={styles.plot_img} />
            </>
        ))
    )

    const falseCondition = () => {
        console.log("aaaaa")
        return ( <h1>No hay churn.</h1>)
    }
    return ( 

        <div className={styles.imageswrapper}>

            { (noDifferences ? falseCondition() : trueCondition()) }
                
        </div>
     );
}
 
export default Diferencias;