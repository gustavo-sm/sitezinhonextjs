import { useEffect, useState } from "react";
import style from "../styles/globals.module.css";

function Home() {
    const [counter, updateCounter] = useState(10);

    useEffect(()=>{

        setInterval(() => {
            updateCounter(counter-1);
        }, 1000);
    
        setTimeout(()=>{
            window.location.href = 'https://youtu.be/oCEZC9w5cMc?t=33'
        }, 10000);

       
    },[counter]);
    
    return (
        <>
            <h1 className={style.heading} style = {{color:"red"}}>Cuidado mamãe!</h1>    
            <h3 className={style.parag}>O sistema detectou altos niveis de estresse no seu trabalho! <br />Favor considerar a saúde em primeiro lugar</h3>
            <p className={style.parag}>{counter}</p>
        </>);

}

export default Home;