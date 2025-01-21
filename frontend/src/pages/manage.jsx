import { useEffect } from "react";

const Manage = () => {

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        
        });

    return ( 
        <div>Manage</div>
     );
}
 
export default Manage;