import style from './component.module.css';
import ProgressBar from "@ramonak/react-progress-bar";
import OctoRequest from "../../services/Github/GithubAPI";
import { useEffect, useState } from "react";

async function getMilestoneData(id = -1) {
    const octo = OctoRequest();
    octo.initOctokitUnAuth();
    return await octo.GETRequest(`/repos/gustavo-sm/sitezinhonextjs/milestones/${id}`, {});
}

function MilestonePG(props) {
    const [milestone_data, setMilestoneData] = useState({});
    const [fetch_error, setFetchError] = useState('');
    const [percentage, setPercentage] = useState(0);

    function calcPercentage(open_issues, closed_issues) {
        const value = (closed_issues * 100) / (open_issues + closed_issues);
        setPercentage(value.toFixed(2));
    }

    useEffect(() => {
        const fetchData = async () => {
            const promise_return = await getMilestoneData(props.milestone_id);
            console.log(promise_return.data);
            if (promise_return.error)
                setFetchError(promise_return.message);

            else
                setMilestoneData(promise_return.data);

            calcPercentage(promise_return.data.open_issues, promise_return.data.closed_issues);

        }
        fetchData();
    }, [setMilestoneData, setFetchError, setPercentage]);


    return (
        <div>
            {!fetch_error ? 
                <>
                <p className={style.text}>
                    Progresso da Milestone:&nbsp;
                    <a className={style.link} href='' target='_blank'>
                        {milestone_data.title}
                    </a>
                </p>
                <ProgressBar id={style.wrapper} completed={percentage}/>
                <p style = {{float:'right'}} className={style.text}>
                    {milestone_data.closed_issues}/{milestone_data.open_issues + milestone_data.closed_issues}
                </p>
                </>
                : <p>Erro na request da Milestone: {fetch_error}</p>
            }
        </div>


    );

}

export default MilestonePG;