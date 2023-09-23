import style from './index.module.css'
import Header from "../components/header";
import ProfileBar from '../components/profilebar';
import OctoRequest from "../services/Github/GithubAPI";
import { useEffect, useState } from "react";

async function getMilestoneData() {
    const octo = OctoRequest();
    octo.initOctokitUnAuth();
    return await octo.GETRequest("/repos/gustavo-sm/sitezinhonextjs/milestones/1", {});
}

function Home() {
    const [fetch_error, setError] = useState('');
    //const [success_msg, setMessage] = useState('');

    useEffect(() => {
        getMilestoneData().then((promise_return) => {
            if(promise_return.status >= 400 || promise_return.status === -1) 
                setError(promise_return.message);

        });
    });

    return (
        <>

        <div className={style.centered_content}>           
            <ul id={style.content_list}>
                <p>{fetch_error}</p>
                <Header/>
                <ProfileBar/>
            </ul>
        </div>
        </>
    );

}

export default Home;