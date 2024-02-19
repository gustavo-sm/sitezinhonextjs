import style from './index.module.css'
import Header from "../components/header";
import ProfileBar from '../components/profilebar';
import MilestonePG from '../components/milestonepg';

function Home() {

    return (
        <div className={style.centered_content}>           
            <ul>
                <Header/>
                <ProfileBar/> 
            </ul>
        </div>
    );

}

export default Home;