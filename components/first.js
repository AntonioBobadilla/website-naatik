import styles from '../styles/Home.module.css'
import DragAndDrop from '../components/dragdrop'
import React from 'react';
import ButtonTemplate from '../components/Button';

const First = ({click, setfile, file}) => {
    console.log(click)
    return ( 
        <div className={styles.container}>
        <h1>Analizador de abandono de clientes</h1>
        <div className={styles.file_container} >
          <p>Selecciona el archivo a analizar</p>
          <DragAndDrop file={file} setFile={setfile}/>
        </div>
        <ButtonTemplate text={"siguiente"} click={click} />
      </div>
     );
}
 
export default First ;