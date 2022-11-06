import React, {useEffect, useRef, useState}  from 'react';
import styles from '../styles/Groups.module.css';
import ButtonTemplate from '../components/Button';

const Fifth = ({goToGroup, setCurrentGroup, goBack}) => {

    const handleClick = (group) => {
        setCurrentGroup(group)
        console.log("click on button ", group)
        goToGroup()
    }

    return ( 

        <div className={styles.wrapper}>
            <h1>grupos</h1>
            <div className={styles.groups}>
                <div className={styles.group}>
                    <div className={styles.left}>
                        <h3>Grupo 1</h3>
                        <p>Cantidad: 378</p>
                        <p>Edad (95%): 23-25</p>
                        <p>Permanencia: (95%) 34-36</p>
                    </div>
                    <div className={styles.right}>
                        <p>Sin churn: 32</p>
                        <p>Baja probabilidad: 98</p>
                        <p>Mediana probabilidad: 72</p>
                        <p>Alta probabilidad: 12</p>

                            <button onClick={() => handleClick(1)} className={styles.link}>Ver predicciones</button>
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.left}>
                        <h3>Grupo 1</h3>
                        <p>Cantidad: 378</p>
                        <p>Edad (95%): 23-25</p>
                        <p>Permanencia: (95%) 34-36</p>
                    </div>
                    <div className={styles.right}>
                        <p>Sin churn: 32</p>
                        <p>Baja probabilidad: 98</p>
                        <p>Mediana probabilidad: 72</p>
                        <p>Alta probabilidad: 12</p>



                        <button onClick={() => handleClick(2)} className={styles.link}>Ver predicciones</button>
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.left}>
                        <h3>Grupo 1</h3>
                        <p>Cantidad: 378</p>
                        <p>Edad (95%): 23-25</p>
                        <p>Permanencia: (95%) 34-36</p>
                    </div>
                    <div className={styles.right}>
                        <p>Sin churn: 32</p>
                        <p>Baja probabilidad: 98</p>
                        <p>Mediana probabilidad: 72</p>
                        <p>Alta probabilidad: 12</p>



                        <button onClick={() => handleClick(3)} className={styles.link}>Ver predicciones</button>
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.left}>
                        <h3>Grupo 1</h3>
                        <p>Cantidad: 378</p>
                        <p>Edad (95%): 23-25</p>
                        <p>Permanencia: (95%) 34-36</p>
                    </div>
                    <div className={styles.right}>
                        <p>Sin churn: 32</p>
                        <p>Baja probabilidad: 98</p>
                        <p>Mediana probabilidad: 72</p>
                        <p>Alta probabilidad: 12</p>



                        <button onClick={() => handleClick(4)} className={styles.link}>Ver predicciones</button>
                    </div>
                </div>

            </div>
            <div className={styles.buttons} >
                <ButtonTemplate text={"Atras"} click={(e) => goBack(e,2)} />
            </div>
        </div>

     );
}
 
export default Fifth;