import { useEffect } from "react";
import Navigation from "../component/navigation";

const Map = () => {

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        
        });

    return ( 
        <>
            <Navigation/>
            <div>Map</div>
        </>
    );
}

export default Map;