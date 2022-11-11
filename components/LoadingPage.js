import styles from '../styles/LoadingPage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSpinner} from "@fortawesome/free-solid-svg-icons"

const LoadingPage = () => {
    return ( 
        <div className={styles.loadingWrapper}>
            <h1 className={styles.title}>Cargando</h1>
            <FontAwesomeIcon className={styles.icon_loading} icon={faSpinner} />
        </div>
     );
}
 
export default LoadingPage;