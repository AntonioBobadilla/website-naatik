import styles from '../styles/ButtonWithIcon.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileArrowDown} from "@fortawesome/free-solid-svg-icons"

const ButtonWithIcon = ({text, click}) => {
    return ( 
        <div className={styles.wrapper}>
            <button onClick={click} className={styles.button}>
                <FontAwesomeIcon className={styles.icon} icon={faFileArrowDown} />
            </button>
            <p className={styles.text}>{text}</p>
        </div>

    );
}
 
export default ButtonWithIcon;