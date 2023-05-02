import styles from "./style.module.css";

function MinusButton({ onClick }) {
        
    return (
        <div className={styles.container}>
            <span className={styles.background} onClick={() => { onClick && onClick() }}>
                <span className={styles.minus}>
                &#215;
                </span>
            </span>
        </div>
    )
}

export default MinusButton;