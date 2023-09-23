import { useEffect, useState } from "react";
import styles from "./component.module.css";

function getGreeting(){
    const hour_now = new Date().getHours();
    let greeting = '';
    switch(true) {
        case hour_now > 0 && hour_now <= 6:
            greeting = "Bem cedo, não? hahaha. Bom dia!"
            break;
        case hour_now > 6 && hour_now <= 12:
            greeting = "Bom dia!";
            break;
        case hour_now > 12 && hour_now <= 18:
            greeting = "Boa tarde!";
            break;
        case hour_now > 18 && hour_now <= 0:
            greeting = "Boa noite!";
            break;
    }
    return greeting;
}

function Header() {
    const [greeting, setGreeting] = useState('');
    useEffect(() => {
        setGreeting(getGreeting());
    }); 

    return (
        <div>
            <h1 className={styles.heading}>{greeting} </h1>
            <p className={styles.parag}> 
                Prazer, Gustavo, tenho 24 anos e atualmente trabalho no Itaú Unibanco como Engenheiro de Software.<br/>
                Tentarei contar um pouco da minha tragetória profissional :) <br/>
            </p>
            {/*<button className={styles.button}>Ok</button>*/}
        </div>

    );
}

export default Header;
