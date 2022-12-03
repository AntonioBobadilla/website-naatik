import styles from '../styles/Hiperparametros.module.css';
import React from 'react';
import ButtonTemplate from '../components/Button';


const Hiperparametros = ({epochs, learningRate, setEpochs, setAlgorithm, setLearningRate, setActivation, goToGroup}) => {



    const handleEpochs = (e) => {
        e.preventDefault()
        setEpochs(e.target.value)
    }

    const handleAlgorithm = (e) => {
        e.preventDefault()
        setAlgorithm(e.target.value)
    }

    const handleLearningRate = (e) => {
        e.preventDefault()
        setLearningRate(e.target.value)
    }

    const handleActivation = (e) => {
        e.preventDefault()
        console.log("aaa: ", e.target.value)
        setActivation(e.target.value)
    }


    return ( 
        <div className={styles.general_wrapper}>
            <h1>Configuración de hiperparametros</h1>
                
            <div className={styles.wrapper}>
                <h3>Configuración Básica</h3>

                <div className={styles.input}>
                    <label>Número de épocas</label>
                    <div  className={styles.group}>
                        <input type="text" id="name" name="name" value={epochs} onChange={handleEpochs} required />
                    </div>
                </div>
                <div className={styles.input}>
                    <label>Algoritmo de optimización de pesos</label>
                        <div  className={styles.group} >
                            <select name='algorithm' id='algorithm'onChange={handleAlgorithm} className={styles.select}>
                                <option value="lbfgs">LBFGS</option>
                                <option value="sgd">SGD</option>
                                <option value="adam" selected={true} >Adam</option>
                            </select>
                        </div>
                </div>
                <div className={styles.input}>
                    <label>Tasa de aprendizaje</label>
                    <div  className={styles.group}>
                        <input type="text" value={learningRate} id="name" name="name" onChange={handleLearningRate} required />
                    </div>

                </div>
                <div className={styles.input}>
                    <label>Función de activación</label>
                    <div  className={styles.group}> 
                        <select name=''id='' className={styles.select} onChange={handleActivation}>
                            <option value="identity">Identity</option>
                            <option value="logistic">Logistic</option>
                            <option value="tanh">Tanh</option>
                            <option value="relu" selected={true} >ReLu</option>
                        </select>
                    </div>

                </div>
                <ButtonTemplate text={"siguiente"} click={goToGroup} />
            </div>
        </div>
     );
}
 
export default Hiperparametros;