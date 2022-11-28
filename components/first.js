import styles from '../styles/Home.module.css'
import DragAndDrop from '../components/dragdrop'
import React from 'react';
import ButtonTemplate from '../components/Button';
import InputText from '../components/InputText';



const First = ({click, setfile, file, fileError, setFileError, setFileName_size,setTargetText}) => {

    const checkFileError = () => {
        if (fileError) {
          const error = document.querySelector("#errorFile");
          error.style.opacity = "1"; 

          setTimeout(() => {
            error.style.opacity = "0"; 
          },3000)
          setFileError(false)
        }
    } 


    return ( 
        <div className={styles.container}>
        <h1>Analizador de abandono de clientes</h1>
        <div className={styles.file_container} >
          <p>Selecciona el archivo a analizar</p>
          <DragAndDrop file={file} setFile={setfile} setFileName_size={setFileName_size}/>
        </div>
        { checkFileError() }
        <div className={styles.error} id="errorFile">
            <p>Selecciona un archivo para continuar.</p>
        </div>
        <InputText setTargetText={setTargetText} />
        <ButtonTemplate text={"siguiente"} click={click} />
      </div>
     );
}
 
export default First ;