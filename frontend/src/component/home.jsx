import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {

    useEffect(() => {
        if(localStorage.getItem('accessToken') === null){                   
            window.location.href = '/login'
        }
        
        });

    return (  
        <div className="form-signin mt-5 text-center">
            <h3>Hi</h3>
        </div>
    );
}
export default Home;