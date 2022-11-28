import {useState} from 'react';
import styles from '../styles/InputText.module.css'

const InputText = ({setTargetText}) => {

    const [text, setText] = useState('')

    const handleText = (e) => {
        setTargetText(e.target.value)
    }

    return ( 

        <div className={styles.wrapper}>
            <p>Ingresa el nombre de la columna de target:</p>
            <input type='text' onChange={handleText}  />
        </div>

     );
}
 
export default InputText;