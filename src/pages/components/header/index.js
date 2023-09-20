import styles from "./component.module.css";
import {LiaStackOverflow} from "react-icons/lia"


function Header() {
    return (
        <div>
            <h1 className={styles.heading}>Em construção!</h1>
            <p className={styles.parag}>Depois de várias pesquisas no <LiaStackOverflow title="StackOverflow"/>, espero logo terminar a V1 😅 </p>
        </div>

    );
}

export default Header;
