import styles from '../styles/SelectModel.module.css';
import React, { useEffect, useState } from "react";
import ButtonTemplate from '../components/Button';
import axios from 'axios';

// import toast object and toast container from react-nextjs-toast
import {toast, ToastContainer} from 'react-nextjs-toast'

const SelectModel = ({goToGroup, setCustomModel}) => {

    const [models, setModels] = useState([])
    const [finishGettingModels, setFinishGettingModels] = useState(false)
    const [customModelsNames, setCustomModelNames] = useState([])

    useEffect(() => {
        const fetchGraficas = async () => {
            await axios.get("http://localhost:5000/getmodels" )
            .then((res) => {
                console.log("DATAAAAAA: ", res.data)
                setModels(res.data.models)
                setCustomModelNames(res.data.names)
                setFinishGettingModels(true)
            })
        }
        
        fetchGraficas()
    }, [])

    const changeColorOfAllButtons = (element, actualElement) => {
        const wrapper = element.childNodes;
        wrapper.forEach(button => {
            if (button != actualElement){ 
                button.style.backgroundColor = '#D9D9D9';  // gris   
                button.style.color = 'black';       
            }
        });

 
        
    }

    const changeColor = (element) => {
        if (element.style.backgroundColor ==  '#00AEEF'){ // azul
            element.style.backgroundColor = '#D9D9D9'; // gris
            element.style.color = 'black';
        } else { 
            element.style.backgroundColor = '#00AEEF';
            element.style.color = '#f1f0ea'; // blanco
        }
    }

    const handleSelect = (e) => {
        toast.notify(`Modelo seleccionado correctamente !`, {
            duration: 2.1,
            type: "success",
            title: 'Success.'
          })

        const selection = e.target.getAttribute('value')
        const id = e.target.getAttribute('id')
        setCustomModel(selection)
        changeColor(e.target)
        changeColorOfAllButtons(e.target.parentElement, e.target)
        
    }


    const trueCondition = () => {
        
        if(models.length === 0)
            return<></>
        else return(
            <>
                { <ToastContainer />}
                
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>selección del modelo</h1>
                    <div className={styles.box}>
                        <h6 className={styles.title_models}>Selecciona el modelo que quieres usar.</h6>
                        <div className={styles.models}>
                        {models.map((item,index) => {
                        return (
                            <button className={styles.model} id={index} onClick={handleSelect} value={item}><b>{customModelsNames[index]}</b></button>
                        )})
                        }

                        </div>
                    </div>
                    <div className={styles.button}>
                        <ButtonTemplate text={"siguiente"} click={goToGroup} />
                    </div>
                </div>      
            </>     
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


