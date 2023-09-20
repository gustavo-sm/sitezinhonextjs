// import { useEffect, useState } from "react";
import style from './index.module.css'
import Header from "./components/header";
import ProfileBar from './components/profilebar';

function Home() {
    
    return (
        <>
  
            <div className={style.centered_content}>
                <ul>
                    <Header/>
                    <ProfileBar/>
                </ul>
            </div>

        </>
    );

}

export default Home;