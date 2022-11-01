import styles from '../styles/Loading.module.css';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Loading = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className={styles.wrapper_img}>
                
                <FontAwesomeIcon icon={faSpinner} className={styles.spinner} />
                <h1>Entrenando modelo</h1>
                <h2>1/10 ÉPOCAS</h2>
            </div>
        </div>
     );
}
 
export default Loading;