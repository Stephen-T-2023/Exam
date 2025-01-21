import { useEffect } from "react";

const Map = () => {

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        
        });

    return ( 
        <div>Map</div>
     );
}
 
export default Map;