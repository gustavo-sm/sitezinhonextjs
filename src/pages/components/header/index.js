import styles from "./component.module.css";
import {LiaStackOverflow} from "react-icons/lia"


function Header() {
    return (
        <div>
            <h1 className={styles.heading}>Em construção! <br/>
                Depois de várias pesquisas no <LiaStackOverflow/>, espero logo terminar a V1 😅 
            </h1>
        </div>

    );
}

export default Header;
