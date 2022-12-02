import styles from '../styles/FirstPage.module.css'
import Image from 'next/image'
import trainImg from '../assets/imgs/train.png'
import predictImg from '../assets/imgs/predict.png'

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
            <h1 className={styles.title}>ANALIZADOR Y PERFILADOR DE ABANDONO DE CLIENTES</h1>
            <div className={styles.boxes}>
                <div value={"train"} className={styles.button} onClick={handleClick}>
                    <div className={styles.icon}>
                    <Image
                        src={trainImg}
                        alt="train img"
                        width={250}
                        />
                    </div>
                    <div className={styles.tool_info}>
                        <p className={styles.tool_title}>Entrenar un modelo de clasificación</p>
                        <p className={styles.tool_description}>Entrenar un modelo de clasificación MLP para realizar predicciones sobre cuáles clientes harán churn. </p>
                    </div>
                </div>
                <div value={"predict"} className={styles.button} onClick={handleClick}>
                    <div className={styles.icon}>
                    <Image
                        src={predictImg}
                        alt="predict img"
                        width={250}
                        />
                    </div>
                    <div className={styles.tool_info}>
                        <p className={styles.tool_title}>Realizar predicciones con nuevos datos</p>
                        <p className={styles.tool_description}>Realizar predicciones sobre datos nuevos y perfilación de clientes que tienen churn. </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FirstPage;

/*
<div value={"train"} className={styles.button} onClick={handleClick}>
ENTRENAR NUEVO MODELO
</div>
<div value={"predict"} className={styles.button} onClick={handleClick}>
REALIZAR PREDICCIONES
</div>

*/