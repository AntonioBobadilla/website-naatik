import React, {useEffect, useRef, useState}  from 'react';
import styles from '../styles/Groups.module.css';
import ButtonTemplate from '../components/Button';

const Fifth = ({goToGroup, setCurrentGroup, goBack, groups, clustering}) => {

    console.log("AAAAA: ", clustering)

    const handleClick = (group) => {
        setCurrentGroup(group-1)
        goToGroup()
    }

    return ( 

        <div className={styles.wrapper}>
            <h1>grupos</h1>
            <div className={styles.general_clusting}> 
                <h3>Clusterización general: </h3>
                <img src={"http://localhost:5000"+clustering['main_cluster_img']} className={styles.general_clusting_img} />
            </div>
            <div className={styles.groups}>
                <h3 className={styles.groups_title} >Grupos correspondientes:</h3>
                {
                    groups.map((group) => (
                        <div className={styles.group}>
                            <div className={styles.left}>
                                <h3>Grupo {group.i}</h3>
                                <p>Cantidad: {group.all_groups}</p>
                            </div>
                            <div className={styles.right}>
                                <p>Sin churn: {group.total.group1}</p>
                                <p>Baja probabilidad: {group.total.group2}</p>
                                <p>Mediana probabilidad: {group.total.group3}</p>
                                <p>Alta probabilidad: {group.total.group4}</p>

                                    <button onClick={() => handleClick(group.i)} className={styles.link}>Ver predicciones {">>"}</button>
                            </div>
                     </div>
                    ) )
                    
                }
            </div>
            <div className={styles.general_clusting}> 
                <h3>Distribución general: </h3>
                <img src={"http://localhost:5000"+clustering['main_cluster_distribution']} className={styles.general_clusting_img} />
            </div>
            <div className={styles.buttons} >
                <ButtonTemplate text={"Atras"} click={(e) => goBack(e,2)} />
            </div>
        </div>

     );
}
 
export default Fifth;