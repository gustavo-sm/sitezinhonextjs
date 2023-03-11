import { useEffect, useState } from "react";

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
        
            <h1 style={{ color: "red" }}>Cuidado mamãe!</h1>    
            <h3>O sistema detectou altos niveis de estresse no seu trabalho! <br />Favor considerar a saúde em primeiro lugar</h3>
            <p>{counter}</p>
        </>);

}

export default Home;