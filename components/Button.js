import Link from 'next/link';
import styles from '../styles/ButtonTemplate.module.css'

const ButtonTemplate = ({text, click}) => {
    return ( 
            <button onClick={click} className={styles.button}>{text}</button>
     );
}
 
export default ButtonTemplate;