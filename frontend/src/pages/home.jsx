import { useEffect, useState } from "react";
import axios from "../interceptors/axios"
import Navigation from "../component/navigation";

const Home = () => {

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        }, []);

    return (  
        <>
            <div className="flex flex-col w-full h-screen bg-gray-400 overflow-hidden">
                <Navigation />
                <div className="w-full h-full p-6 rounded-t-xl space-y-4 overflow-hidden">
                    <a href = '/bookingchoice'
                        className="w-full h-1/5 flex flex-col items-center justify-center bg-green-600 hover:bg-green-700 transition-all text-white text-center rounded-md">
                        <div className="w-full h-full bg-Ticket bg-center bg-no-repeat bg-cover rounded-lg"></div>
                        <div className="w-full text-lg font-semibold py-3">
                            Make Bookings
                        </div>
                    </a>
                    <a href = '/manage'
                        className="w-full h-1/5 flex flex-col items-center justify-center bg-green-600 hover:bg-green-700 transition-all text-white text-center rounded-md">
                        <div className="w-full h-full bg-zooEntrance bg-no-repeat bg-cover rounded-lg"></div>
                        <div className="w-full text-lg font-semibold py-3">
                            Manage Bookings
                        </div>
                    </a>
                    <a href = '/map'
                        className="w-full h-1/5 flex flex-col items-center justify-center bg-green-600 hover:bg-green-700 transition-all text-white text-center rounded-md">
                        <div className="w-full h-full bg-Map bg-center bg-no-repeat bg-cover rounded-lg"></div>
                        <div className="w-full text-lg font-semibold py-3">
                            Map of the Zoo
                        </div>
                    </a>
                    <a href = '/about'
                        className="w-full h-1/5 flex flex-col items-center justify-center bg-green-600 hover:bg-green-700 transition-all text-white text-center rounded-md">
                        <div className="w-full h-full bg-zooEntrance bg-no-repeat bg-cover rounded-lg"></div>
                        <div className="w-full text-lg font-semibold py-3">
                            About Us
                        </div>
                    </a>
                </div>
            </div>
        </>




    );
}
export default Home;