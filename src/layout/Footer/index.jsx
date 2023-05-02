import { useState } from "react";
import CopyrightButton from "../../components/buttons/copyrightButton";
import styles from "./style.module.css";
import Creators_show from "../../components/Creators_show";

function Footer() {
    const [flagPlusButton, setFlagPlusButton] = useState(false)
    return (
        <div className={styles.footer}>
            <div className={styles.div}>All rights reserved</div>
            {flagPlusButton && <Creators_show />}
            < CopyrightButton 
             onClick={() => {
                setFlagPlusButton(true)
              }}
            />
        </div>
    )
}
export default Footer;