import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import mypic from '../assets/imgs/naatik-logo.png'

const Navbar = () => {
    return ( 

        <nav className={styles.Navbar}>
                <div className={styles.logo}>
                    <Image
                        src={mypic}
                        alt="Naatik logo"
                        width={45}
                        height={45}
                        />
                </div>
        </nav>
     );
}
 
export default Navbar;