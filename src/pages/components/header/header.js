import styles from "./component.module.css";
import {AiFillLinkedin} from "react-icons/ai"

function Header() {
    return (
        <>
            <h1 className={styles.heading}>Em construção, depois de várias pesquisas no stackoverflow espero terminar a V1 😅 </h1>
            <a className={styles.url} href="linkedin.com/gustavo-sm" target="_blank"><AiFillLinkedin/></a>
        </>

    );
}

export default Header;
