import { useEffect } from "react";

const Booking = () => {

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        
        });

    return ( 
        <div>Booking</div>
     );
}
 
export default Booking;