import styles from "./style.module.css";
import { BsTrash3 } from "react-icons/bs";


function DeleteButton({ onClick }) {
    return (
        <div className={styles.container}>

            <span className={styles.background} onClick={() => { onClick && onClick() }}>
                <span className={styles.minus}>
                {<BsTrash3 />}
                </span>
            </span>
        </div>
    
    )
}

export default DeleteButton;