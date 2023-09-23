import "../public/styles.css"
import Home from ".";
import OctoRequest from "../services/Github/GithubAPI";
import { useEffect } from "react";

async function getGiHubData() {
    const octo = OctoRequest();
    octo.initOctokitUnAuth();
    const resp = await octo.GETRequest("/repos/gustavo-sm/sitezinhonextjs/milestones/1", {});
    /*TODO: Colocar resp em um state para uso em popup na pagina*/
}

function App() {
    
    useEffect(() => {
        getGiHubData();
    });

    return(
        
        <Home/>
    )
}

export default App;