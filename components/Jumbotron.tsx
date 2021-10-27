import styles from "../styles/Jumbotron.module.scss"
import Image from "next/image"
import iphone from "../public/iphone.png"


export const Jumbotron = () =>{
    return (
        <div>
            <div className={styles.backgroundimage}>
                <Image src={iphone}></Image>
            </div>
            <div className={styles.promotionalmessage}>
                <h3>SHOP</h3>
                <h2>IPHONE</h2>
                An <strong>exclusive collection</strong> available
            </div>
        </div>
    )
}
