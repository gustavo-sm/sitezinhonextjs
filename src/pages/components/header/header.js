import styles from "./component.module.css";
import {AiFillLinkedin} from "react-icons/ai"
import {LiaStackOverflow} from "react-icons/lia"

function Header() {
    return (
        <>
            <h1 className={styles.heading}>Em construção, depois de várias pesquisas no <LiaStackOverflow/> espero logo terminar a V1 😅 </h1>
            <a className={styles.url} href="https://linkedin.com/in/gustavo-sm" target="_blank"><AiFillLinkedin/></a>
        </>

    );
}

export default Header;
