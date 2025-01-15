import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./navigation";

const Home = () => {

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        
        });

    return (  
        <div className="flex flex-wrap w-screen h-screen bg-black">
            <Navigation></Navigation>
            <div className="w-full h-1/4 items-center">
                <div className="w-10/12 h-5/6 bg-zooEntrance bg-no-repeat bg-cover mx-10"></div>
                <div className="w-10/12 bg-orange-300 mx-10">Manage/Make Bookings</div>
            </div>
            <div className="w-full h-1/4 items-center">
                <div className="w-10/12 h-5/6 bg-zooEntrance bg-no-repeat bg-cover mx-10"></div>
                <div className="w-10/12 bg-orange-300 mx-10">Map of the Park</div>
            </div>
            <div className="w-full h-1/4 items-center">
                <div className="w-10/12 h-5/6 bg-zooEntrance bg-no-repeat bg-cover mx-10"></div>
                <div className="w-10/12 bg-orange-300 mx-10">About us</div>
            </div>
        </div>
    );
}
export default Home;