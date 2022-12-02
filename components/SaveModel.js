import styles from '../styles/SaveModel.module.css'
import React, {useEffect, useRef, useState}  from 'react';
import ButtonTemplate from '../components/Button';

const SaveModel = ({goBack,setModelName }) => {

    const [input, setInput] = useState('')

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const sendModelName = () => {
        setModelName(input)
    }
    return ( 
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>nombre del modelo a guardar</h1>
                <div className={styles.box}>
                    <label className={styles.label}>Nombre del modelo a guardar:</label>
                    <input className={styles.input} type="text" id="model_name" name="model_name" onChange={handleInput}/>
                </div>
            </div>
            <div className={styles.buttons}>
                    <ButtonTemplate text={"atrás"} click={goBack} />
                    <ButtonTemplate text={"siguiente"} click={sendModelName} />
            </div>
        </>
     );
}
 
export default SaveModel;