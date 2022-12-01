import styles from '../styles/SelectModel.module.css';
import React, { useEffect, useState } from "react";
import ButtonTemplate from '../components/Button';
import axios from 'axios';

const SelectModel = ({goToGroup, setCustomModel}) => {

    const [models, setModels] = useState([])
    const [finishGettingModels, setFinishGettingModels] = useState(false)

    useEffect(() => {
        const fetchGraficas = async () => {
            await axios.get("http://localhost:5000/getmodels" )
            .then((res) => {
                console.log(res.data)
                setModels(res.data)
                setFinishGettingModels(true)
            })
        }
        
        fetchGraficas()
    }, [])

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
        setCustomModel(selection)
        changeColor(e.target)
    }


    const trueCondition = () => {
        
        if(models.length === 0)
            return<></>
        else return(
            <div className={styles.wrapper}>
                <h1 className={styles.title}>selección del modelo</h1>
                <div className={styles.box}>
                    <h4 className={styles.title_models}>Modelos guardados:</h4>
                    <div className={styles.models}>
                    {models.map((item,index) => {
                    return (
                        <button className={styles.model} id={index} onClick={handleSelect} value={item}>{item}</button>
                    )})
                    }
                    </div>
                </div>
                <div className={styles.button}>
                    <ButtonTemplate text={"siguiente"} click={goToGroup} />
                </div>
            </div>           
        )}

    const falseCondition = () => {
        return ( 
            <div className={styles.center_wrapper}>
                <p>aun no carga</p>
            </div>
        )
    }

    

    return ( 
        <div className={styles.imageswrapper}>

        { ( (finishGettingModels) ? trueCondition() : falseCondition()) }
                
        </div>

     );
}
 
export default SelectModel;


