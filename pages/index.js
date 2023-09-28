import style from './index.module.css'
import Header from "../components/header";
import ProfileBar from '../components/profilebar';
import MilestonePG from '../components/milestonepg';
import Image from 'next/image'

function Home() {

    return (
        <div className={style.centered_content}>           
            <ul id={style.content_list}>
                <Image alt="logo" src="/logo_site.png" width={100} height={100}/>
                <Header/>
                <ProfileBar/> 
                <MilestonePG milestone_id={1}/>
            </ul>
        </div>
    );

}

export default Home;