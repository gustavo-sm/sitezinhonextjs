import style from './component.module.css';
import ProgressBar from "@ramonak/react-progress-bar";
import {useEffect, useState } from "react";

function MilestonePG(props) {
    const [open_issues, setOpenIssues] = useState(0);
    const [closed_issues, setClosedIssues] = useState(0);
    const [milestone_title, setMilestoneTitle] = useState('');
    const [milestone_url, setMilestoneUrl] = useState('');
    const [percentage, setPercentage] = useState(0);
    
    function calcPercentage(){
        const value = (closed_issues*100)/(open_issues+closed_issues);
        setPercentage(value.toFixed(2));
    }

    useEffect(()=> {
        setOpenIssues(props.open);
        setClosedIssues(props.closed);
        setMilestoneTitle(props.title);
        setMilestoneUrl(props.link);

        calcPercentage();
    });



    return (
        <div>
            <p className={style.text}>
                Progresso da Milestone: 
                <a className={style.link} href={milestone_url} target='_blank'>
                    {milestone_title}
                </a>
            </p>
            <ProgressBar id={style.wrapper} completed={percentage}/>
            <p style = {{float:'right'}}className={style.text}>{closed_issues}/{open_issues + closed_issues}</p>
        </div>


    );

}

export default MilestonePG;