import styles from '../styles/Contact.module.scss'

export default function Contact (){
    return (
        <div className={styles.contact}>
            <h2 className={styles.contact}> Vous avez des questions ? <span>Contact us</span></h2>
            <a href="">
                <button>Contact US</button>
            </a>
        </div>
    )
}