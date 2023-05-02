import styles from "./style.module.css";

function PlusButton({ onClick }) {
        
    return (
        <div className={styles.container}>
            <span className={styles.background} onClick={() => { onClick && onClick() }}>
                <span className={styles.plus}>
                    &#43;
                </span>
            </span>
        </div>
    )
}

export default PlusButton;