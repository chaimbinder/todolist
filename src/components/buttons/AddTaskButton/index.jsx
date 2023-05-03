import styles from "./style.module.css";

function AddTaskButton({ onClick }) {
        
    return (
        <div className={styles.container}>
            <span className={styles.background} onClick={() => { onClick && onClick() }}>
                <button className={styles.plus}>
                  add task
                </button>
            </span>
        </div>
    )
}

export default AddTaskButton;

