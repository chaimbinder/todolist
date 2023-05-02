import styles from "./style.module.css";

function CopyrightButton({ onClick }) {
        
    return (
        <div className={styles.container}>
            <span className={styles.background} onClick={() => { onClick && onClick() }}>
                <span className={styles.copyright}>
                &#169;
                </span>
            </span>
        </div>
    )
}

export default CopyrightButton;