import styles from '../styles/Diferencias.module.css'
import Image from 'next/image'
import noData from '../assets/imgs/no_data.png'

const Diferencias = ({differencesImages, status, i}) => {


    const trueCondition = () => {
        
        if(differencesImages.length === 0 || differencesImages[i] === null)
            return ( 
                <div className={styles.center_wrapper}>
                    <p  className={styles.text_wrapper}>Dados los slides proporcionados del grupo, no hay churn.</p>
                </div>
            )
        else return(
        differencesImages[i].map((obj, key) => (
            <div key={key}>
                <li  className={styles.text_plot}> {obj.text}</li>
                <img src={"http://localhost:5000"+obj.url} alt={"http://localhost:5000"+obj.url} className={styles.plot_img} />
            </div>
        )
        ))
        }

    const falseCondition = () => {
        return ( 
            <div className={styles.center_wrapper}>
                <Image
                    src={noData}
                    alt="no data img"
                    width={250}
                />
                <p  className={styles.text_wrapper}>Dados los slides proporcionados del grupo, no hay churn.</p>
            </div>
        )
    }
    return ( 

        <div className={styles.imageswrapper}>

            { ( (status === 'both') ? trueCondition() : falseCondition()) }
                
        </div>
     );
}
 
export default Diferencias;