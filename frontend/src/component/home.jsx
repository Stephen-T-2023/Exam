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
        <>
            <Navigation></Navigation>
            <div className="form-signin mt-5 text-center">
                <h3>Hi</h3>
            </div>
        </>
    );
}
export default Home;