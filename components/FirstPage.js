import styles from '../styles/FirstPage.module.css'

const FirstPage = ({ setAction}) => {

    const handleClick = (e) => {
        const buttonValue = e.target.getAttribute('value')

        if (buttonValue === "train"){
            console.log("button: ", buttonValue)
            setAction(buttonValue)
        } else {
            setAction(buttonValue)
            console.log("button: ", buttonValue)
        }
    }

    return ( 
        <div className={styles.home}>
            <h1 className={styles.title}>ANALIZADOR DE ABANDONO DE CLIENTES</h1>
            <div className={styles.boxes}>
                <div value={"train"} className={styles.button} onClick={handleClick}>
                    ENTRENAR NUEVO MODELO
                </div>
                <div value={"predict"} className={styles.button} onClick={handleClick}>
                    REALIZAR PREDICCIONES
                </div>
            </div>
        </div>
     );
}
 
export default FirstPage;