import Link from 'next/link';
import styles from '../styles/Groups.module.css';

const Groups = () => {
    return ( 
        <div className={styles.wrapper}>
            <h1>grupos</h1>
            <div className={styles.groups}>
                <div className={styles.group}>
                    <div className={styles.left}>
                        <h3>Grupo 1</h3>
                        <p>Cantidad: 378</p>
                        <p>Edad (95%): 23-25</p>
                        <p>Permanencia: (95%) 34-36</p>
                    </div>
                    <div className={styles.right}>
                        <p>Sin churn: 32</p>
                        <p>Baja probabilidad: 98</p>
                        <p>Mediana probabilidad: 72</p>
                        <p>Alta probabilidad: 12</p>

                        <Link href="/" >
                            <p className={styles.link}>Ver predicciones</p>
                        </Link>
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.left}>
                        <h3>Grupo 1</h3>
                        <p>Cantidad: 378</p>
                        <p>Edad (95%): 23-25</p>
                        <p>Permanencia: (95%) 34-36</p>
                    </div>
                    <div className={styles.right}>
                        <p>Sin churn: 32</p>
                        <p>Baja probabilidad: 98</p>
                        <p>Mediana probabilidad: 72</p>
                        <p>Alta probabilidad: 12</p>


                        <Link href="/" >
                            <p className={styles.link}>Ver predicciones</p>
                        </Link>
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.left}>
                        <h3>Grupo 1</h3>
                        <p>Cantidad: 378</p>
                        <p>Edad (95%): 23-25</p>
                        <p>Permanencia: (95%) 34-36</p>
                    </div>
                    <div className={styles.right}>
                        <p>Sin churn: 32</p>
                        <p>Baja probabilidad: 98</p>
                        <p>Mediana probabilidad: 72</p>
                        <p>Alta probabilidad: 12</p>


                        <Link href="/" >
                            <p className={styles.link}>Ver predicciones</p>
                        </Link>
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.left}>
                        <h3>Grupo 1</h3>
                        <p>Cantidad: 378</p>
                        <p>Edad (95%): 23-25</p>
                        <p>Permanencia: (95%) 34-36</p>
                    </div>
                    <div className={styles.right}>
                        <p>Sin churn: 32</p>
                        <p>Baja probabilidad: 98</p>
                        <p>Mediana probabilidad: 72</p>
                        <p>Alta probabilidad: 12</p>


                        <Link href="/" >
                            <p className={styles.link}>Ver predicciones</p>
                        </Link>
                    </div>
                </div>
            </div>
            <button>Exportar csv</button>
        </div>
     );
}
 
export default Groups;