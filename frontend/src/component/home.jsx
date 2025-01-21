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
        <>
            <div className="flex flex-col w-full h-screen bg-gray-400 overflow-hidden">
                <Navigation />
                <div className="w-full h-full p-6 rounded-t-xl space-y-4 overflow-hidden">
                    <button 
                        className="w-full h-1/5 flex flex-col items-center justify-center bg-green-600 text-white text-center rounded-md">
                        <div className="w-full h-full bg-zooEntrance bg-no-repeat bg-cover rounded-lg"></div>
                        <div className="w-full text-lg font-semibold py-3">
                            Make Bookings
                        </div>
                    </button>
                    <button 
                        className="w-full h-1/5 flex flex-col items-center justify-center bg-green-600 text-white text-center rounded-md">
                        <div className="w-full h-full bg-zooEntrance bg-no-repeat bg-cover rounded-lg"></div>
                        <div className="w-full text-lg font-semibold py-3">
                            Manage Bookings
                        </div>
                    </button>
                    <button 
                        className="w-full h-1/5 flex flex-col items-center justify-center bg-green-600 text-white text-center rounded-md">
                        <div className="w-full h-full bg-zooEntrance bg-no-repeat bg-cover rounded-lg"></div>
                        <div className="w-full text-lg font-semibold py-3">
                            Map of the Zoo
                        </div>
                    </button>
                    <button 
                        className="w-full h-1/5 flex flex-col items-center justify-center bg-green-600 text-white text-center rounded-md">
                        <div className="w-full h-full bg-zooEntrance bg-no-repeat bg-cover rounded-lg"></div>
                        <div className="w-full text-lg font-semibold py-3">
                            About Us
                        </div>
                    </button>
                </div>
            </div>
        </>




    );
}
export default Home;