import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        
        });

    return ( 
        <div>About</div>
     );
}
 
export default About;