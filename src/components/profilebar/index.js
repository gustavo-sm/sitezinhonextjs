import styles from "./component.module.css";
import {BiLogoLinkedin, BiLogoGithub} from 'react-icons/bi'

function ProfileBar() {
    return(
        <div className={styles.center_bar}>
            <div id={styles.inner_div}>
                <p className={styles.parag_smaller}>Redes sociais:</p>
                <a id={styles.linkedin_icon} className={styles.icons_spacing} href="https://linkedin.com/in/gustavo-sm" target="_blank">
                    <BiLogoLinkedin size={30}/>
                </a>
                <a id={styles.github_icon} className={styles.icons_spacing} href="https://github.com/gustavo-sm/" target="_blank">
                    <BiLogoGithub size={30}/>
                </a>
            </div>
        </div>
    );

}

export default ProfileBar;