import style from './index.module.css'
import Header from "../components/header";
import ProfileBar from '../components/profilebar';
import MilestonePG from '../components/milestonepg';

function Home() {

    return (
        <div className={style.centered_content}>           
            <ul id={style.content_list}>
                <Header/>
                <ProfileBar/> 
                <MilestonePG milestone_id={2}/>

            </ul>
        </div>
    );

}

export default Home;