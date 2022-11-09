import Navbar from "./Navbar";
import styles from '../styles/Reporte.module.css'
const Reporte = () => {
    return ( 
        <div className={styles.reporte}>
            <Navbar />
            <h1 className={styles.title}>Reporte PDF Naatik</h1>
        </div>
     );
}
 
export default Reporte;