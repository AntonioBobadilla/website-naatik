import styles from '../styles/DiferenciasReporte.module.css'
import React, {useState, useEffect} from 'react';

const DiferenciasReporte = ({differencesImages, status, i}) => {

    const trueCondition = () => {
        
        if(differencesImages.length === 0)
            return<></>
        else return(
            <div>
                {differencesImages ? differencesImages.map((item,index) => {
                    return (
                        <>
                            <h4 key={index}>Grupo # {index+1}</h4>
                            {differencesImages[index] ? differencesImages[index].map((obj, key) => {
                                return (
                                <div key={key} className={styles.flex}>
                                    <li  className={styles.text_plot}> {obj.text}</li>
                                    <img src={"http://localhost:5000"+obj.url} alt={"http://localhost:5000"+obj.url} className={styles.plot_img} />
                                </div>
                            );
                            }) : null
                            }
                        </>

                    )
                }) : null}
            </div>
        )}

    const falseCondition = () => {
        return ( 
            <div className={styles.center_wrapper}>
                <p>Dados los slides proporcionados, no hay churn.</p>
            </div>
        )
    }
    return ( 

        <div className={styles.imageswrapper}>

        { ( (status === 'both') ? trueCondition() : falseCondition()) }
                
        </div>
     );
}
 
export default DiferenciasReporte;