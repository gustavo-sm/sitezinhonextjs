import style from './index.module.css'
import Header from "../components/header";
import ProfileBar from '../components/profilebar';
import MilestonePG from '../components/milestonepg';
import OctoRequest from "../services/Github/GithubAPI";
import { useEffect, useState } from "react";

async function getMilestoneData() {
    const octo = OctoRequest();
    octo.initOctokitUnAuth();
    return await octo.GETRequest("/repos/gustavo-sm/sitezinhonextjs/milestones/1", {});
}

function Home() {
    const [fetch_error, setError] = useState('');
    const [milestone_data, setMilestoneData] = useState({});


    useEffect(() => {
        const fetchData = async () => {
            const promise_return = await getMilestoneData();
            if(promise_return.status >= 400 || promise_return.status === -1)
                setError(promise_return.message);
            else
                setMilestoneData(promise_return.data);
        }
        fetchData();
    }, [setMilestoneData, setError]);

    return (
        <div className={style.centered_content}>           
            <ul id={style.content_list}>
                <p>{fetch_error}</p>
                <Header/>
                <ProfileBar/>
                <MilestonePG 
                    open = {milestone_data.open_issues} 
                    closed = {milestone_data.closed_issues} 
                    title = {milestone_data.title} 
                    link = {milestone_data.html_url}/>

            </ul>
        </div>
    );

}

export default Home;