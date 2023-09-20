import styles from "./component.module.css";
import {BiLogoLinkedin} from 'react-icons/bi'

function ProfileBar() {
    return(
        <div className={styles.center_bar}>
            <a className={styles.linkedin_icon} href="https://linkedin.com/in/gustavo-sm" target="_blank">
                <BiLogoLinkedin size={30}/>
            </a>
        </div>
    );

}

export default ProfileBar;