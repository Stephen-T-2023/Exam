import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navigation from "./navigation";

const Home = () => {

    const navigate = useNavigate();

    const makeBookings = () => {
        navigate('/booking')
    }
    const manageBookings = () => {
        navigate('/manage')
    }
    const zooMap = () => {
        navigate('/map')
    }
    const aboutUs = () => {
        navigate('/about')
    }

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        
        });

    return (  
        <div className="flex flex-wrap w-screen h-screen bg-black">
            <Navigation></Navigation>
            <button className="w-full h-1/5 items-center" onClick={() => {makeBookings()}}>
                <div className="w-10/12 h-5/6 bg-zooEntrance bg-no-repeat bg-cover mx-10"></div>
                <div className="w-10/12 bg-orange-300 mx-10">Make Bookings</div>
            </button>
            <button className="w-full h-1/5 items-center" onClick={() => {manageBookings()}}>
                <div className="w-10/12 h-5/6 bg-zooEntrance bg-no-repeat bg-cover mx-10"></div>
                <div className="w-10/12 bg-orange-300 mx-10">Manage Bookings</div>
            </button>
            <button className="w-full h-1/5 items-center" onClick={() => {zooMap()}}>
                <div className="w-10/12 h-5/6 bg-zooEntrance bg-no-repeat bg-cover mx-10"></div>
                <div className="w-10/12 bg-orange-300 mx-10">Map of the Zoo</div>
            </button>
            <button className="w-full h-1/5 items-center" onClick={() => {aboutUs()}}>
                <div className="w-10/12 h-5/6 bg-zooEntrance bg-no-repeat bg-cover mx-10"></div>
                <div className="w-10/12 bg-orange-300 mx-10">About us</div>
            </button>
        </div>
    );
}
export default Home;