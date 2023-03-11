import { useEffect, useState } from "react";

function Home() {
    const [counter, updateCounter] = useState(10);

    useEffect(()=>{

        let curr_counter = counter;
        setInterval(() => {
            updateCounter(curr_counter--);
        }, 1000);
    
        setTimeout(()=>{
            window.location.href = 'https://www.youtube.com/watch?v=oCEZC9w5cMc'
        }, 10000);

       
    },[]);
    
    return (
        <>
        
            <h1 style={{ color: "red" }}>Cuidado mamãe!</h1>    
            <h3>O sistema detectou altos niveis de estresse no seu trabalho! <br />Favor considerar a saúde em primeiro lugar</h3>
            <p>{counter}</p>
        </>);

}

export default Home;