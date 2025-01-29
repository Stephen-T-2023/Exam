import { useEffect } from "react";
import Navigation from "../component/navigation";

const About = () => {

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        
        });

    return ( 
        <>
            <div className="bg-gray-400">
                <div className="flex flex-col w-full h-screen bg-gray-400">
                    <Navigation />
                    <div className="w-full h-full p-6 rounded-t-xl space-y-4 overflow-hidden">
                        <div
                            className="w-full h-1/3 flex flex-col items-center justify-center bg-green-600 hover:bg-green-700 transition-all text-white text-center rounded-md">
                            <div className="w-full h-full bg-zooEntrance bg-no-repeat bg-cover rounded-lg"></div>
                            <div className="w-full text-lg font-semibold py-3">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate voluptatem exercitationem et quis inventore! Tempore.
                            </div>
                        </div>
                        <div
                            className="w-full h-1/3 flex flex-col items-center justify-center bg-green-600 hover:bg-green-700 transition-all text-white text-center rounded-md">
                            <div className="w-full h-full bg-zooEntrance bg-no-repeat bg-cover rounded-lg"></div>
                            <div className="w-full text-lg font-semibold py-3">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate voluptatem exercitationem et quis inventore! Tempore.
                            </div>
                        </div>
                        <div
                            className="w-full h-1/3 flex flex-col items-center justify-center bg-green-600 hover:bg-green-700 transition-all text-white text-center rounded-md">
                            <div className="w-full h-full bg-zooEntrance bg-no-repeat bg-cover rounded-lg"></div>
                            <div className="w-full text-lg font-semibold py-3">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate voluptatem exercitationem et quis inventore! Tempore.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;