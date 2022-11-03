import styles from '../styles/Hiperparametros.module.css';
import React from 'react';
import ButtonTemplate from '../components/Button';

const Third = () => {

    const [epochs, setEpochs] = React.useState(10);
    const [algorithm, setAlgorithm] = React.useState('Adam');
    const [learningRate, setLearningRate] = React.useState('0.0001');
    const [activation, setActivation] = React.useState('ReLu');
    const [ratio, setRatio] = React.useState(10);

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
        setActivation(e.target.value)
    }

    const handleRatio = (e) => {
        e.preventDefault()
        setRatio(e.target.value)
    }


    return ( 
        <div className={styles.general_wrapper}>
        <h1>Configuración de hiperparametros</h1>
        {/*<p>Epocas: {epochs}</p>
        <p>Algoritmo: {algorithm}</p>
        <p>tasa: {learningRate}</p>
        <p>Funcion: {activation}</p>
<p>ratio: {ratio}</p> */}
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
                            <option selected={true} value="adam">Adam</option>
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
                        <option selected={true} value="relu">ReLu</option>
                    </select>
                </div>

            </div>
            <div className={styles.input}>
                <label>Ratio de datos de entrenamiento y prueba</label>
                <div className={styles.group}>
                    <select name=''id='' className={styles.select} onChange={handleRatio}>
                        <option value="10">10%</option>
                        <option selected={true} value="20">20%</option>
                        <option value="30">30%</option>
                        <option value="40">40%</option>
                        <option value="50">50%</option>
                        <option value="60">60%</option>
                        <option value="70">70%</option>
                        <option value="80">80%</option>
                        <option value="90">90%</option>
                    </select>
                </div>

            </div>
            <div className={styles.button} >
                <ButtonTemplate text={"siguiente"}  />
            </div>
        </div>
    </div>
     );
}
 
export default Third;