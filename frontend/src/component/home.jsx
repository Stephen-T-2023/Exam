import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./navigation";

const Home = () => {

    const makeBookings = () => {
        window.location.href = '/bookingchoice'
    }
    const manageBookings = () => {
        window.location.href = '/manage'
    }
    const zooMap = () => {
        window.location.href = '/map'
    }
    const aboutUs = () => {
        window.location.href = '/about'
    }

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        
        });

    return (  
        <div className="flex flex-wrap w-screen h-screen bg-black">
            <Navigation></Navigation>
            <button className="w-full h-1/5 place-items-center" onClick={() => {makeBookings()}}>
                <div className="w-10/12 h-5/6 bg-zooEntrance bg-no-repeat bg-cover"></div>
                <div className="w-10/12 bg-orange-300">Make Bookings</div>
            </button>
            <button className="w-full h-1/5  place-items-center" onClick={() => {manageBookings()}}>
                <div className="w-10/12 h-5/6 bg-zooEntrance bg-no-repeat bg-cover"></div>
                <div className="w-10/12 bg-orange-300">Manage Bookings</div>
            </button>
            <button className="w-full h-1/5 place-items-center" onClick={() => {zooMap()}}>
                <div className="w-10/12 h-5/6 bg-zooEntrance bg-no-repeat bg-cover"></div>
                <div className="w-10/12 bg-orange-300">Map of the Zoo</div>
            </button>
            <button className="w-full h-1/5 place-items-center" onClick={() => {aboutUs()}}>
                <div className="w-10/12 h-5/6 bg-zooEntrance bg-no-repeat bg-cover"></div>
                <div className="w-10/12 bg-orange-300">About us</div>
            </button>
        </div>
    );
}
export default Home;