import {useState} from 'react';

const InputText = ({setTargetText}) => {

    const [text, setText] = useState('')

    const handleText = (e) => {
        setTargetText(e.target.value)
    }

    return ( 

        <div>
            <p>Ingresa el nombre de la columna de target:</p>
            <input type='text' onChange={handleText}  />
        </div>

     );
}
 
export default InputText;