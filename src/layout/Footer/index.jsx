import CopyrightButton from "../../components/buttons/copyrightButton";
import styles from "./style.module.css";

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.div}>All rights reserved</div>
            < CopyrightButton />
        </div>
    )
}
export default Footer;