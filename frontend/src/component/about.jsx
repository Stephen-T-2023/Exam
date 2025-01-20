import { useEffect } from "react";
import Navigation from "./navigation";

const About = () => {

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        
        });

    return ( 
        <div className="flex flex-wrap w-screen h-screen bg-black">
            <Navigation></Navigation>
            <div className="w-full h-1/5 place-items-center py-10">
                <div className="w-10/12 h-5/6 bg-zooEntrance bg-no-repeat bg-cover"></div>
                <div className="w-10/12 bg-orange-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae neque distinctio sit voluptates? Fugiat culpa aspernatur dolor dolorum eveniet? Eos.</div>
            </div>
            <div className="w-full h-1/5  place-items-center py-10">
                <div className="w-10/12 h-5/6 bg-zooEntrance bg-no-repeat bg-cover"></div>
                <div className="w-10/12 bg-orange-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae neque distinctio sit voluptates? Fugiat culpa aspernatur dolor dolorum eveniet? Eos.</div>
            </div>
            <div className="w-full h-1/5 place-items-center py-10">
                <div className="w-10/12 h-5/6 bg-zooEntrance bg-no-repeat bg-cover"></div>
                <div className="w-10/12 bg-orange-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae neque distinctio sit voluptates? Fugiat culpa aspernatur dolor dolorum eveniet? Eos.</div>
            </div>
            <div className="w-full h-1/5 place-items-center py-10">
                <div className="w-10/12 h-5/6 bg-zooEntrance bg-no-repeat bg-cover"></div>
                <div className="w-10/12 bg-orange-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae neque distinctio sit voluptates? Fugiat culpa aspernatur dolor dolorum eveniet? Eos.</div>
            </div>
        </div>
    );
}

export default About;