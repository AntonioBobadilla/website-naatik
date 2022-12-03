import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import mypic from '../assets/imgs/naatik-logo.png'
import Link from 'next/link';

const Navbar2 = () => {
    return ( 

        <nav className={styles.Navbar}>
            <Link href="/" >
                <p className={styles.link}>GRUPOS</p>
            </Link>
                <div className={styles.logo}>
                    <Image
                        src={mypic}
                        alt="Naatik logo"
                        width={45}
                        height={45}
                        />
                </div>    
                <Link href="/" >
                    <p className={styles.link}>PREDICCIONES</p>
                </Link>
        </nav>
     );
}
 
export default Navbar2;