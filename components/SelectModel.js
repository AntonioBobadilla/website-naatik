import styles from '../styles/SelectModel.module.css';
import React, { useEffect, useState } from "react";
import ButtonTemplate from '../components/Button';

const SelectModel = ({goToGroup}) => {

    const [selectedModel, setSelectedModel] = useState('')

    const changeColor = (element) => {
        if (element.style.backgroundColor ==  '#00AEEF')
            element.style.backgroundColor = '#D9D9D9';
        else 
            element.style.backgroundColor = '#00AEEF';
    }

    const handleSelect = (e) => {
        console.log("click on model xd: ", e.target.getAttribute('value'))
        const selection = e.target.getAttribute('value')
        const id = e.target.getAttribute('id')
        setSelectedModel(selection)
        changeColor(e.target)
    }

    return ( 
        <div className={styles.wrapper}>
            <h1 className={styles.title}>selección del modelo</h1>
            <div className={styles.box}>
                <h4 className={styles.title_models}>Modelos guardados:</h4>
                <div className={styles.models}>
                    <button className={styles.model} id={'1'} onClick={handleSelect} value={'modelo_1'}>modelo_1</button>
                    <button className={styles.model} id={'2'} onClick={handleSelect} value={'modelo_2'}>modelo_2</button>
                    <button className={styles.model} id={'3'} onClick={handleSelect} value={'modelo_3'}>modelo_3</button>
                    <button className={styles.model} id={'4'} onClick={handleSelect} value={'modelo_4'}>modelo_4</button>
                    <button className={styles.model} id={'5'} onClick={handleSelect} value={'modelo_5'}>modelo_5</button>
                </div>
            </div>
            <div className={styles.button}>
                <ButtonTemplate text={"siguiente"} click={goToGroup} />
            </div>

        </div>
     );
}
 
export default SelectModel;