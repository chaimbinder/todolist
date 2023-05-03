import styles from "./style.module.css";
import { CiEdit } from "react-icons/ci";


function MinusButton({ onClick }) {
    return (
        <div className={styles.container}>

            <span className={styles.background} onClick={() => { onClick && onClick() }}>
                <span className={styles.minus}>
                {<CiEdit />}
                </span>
            </span>
        </div>
    
    )
}

export default MinusButton;