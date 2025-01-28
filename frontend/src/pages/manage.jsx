import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode"
import axios from "axios";

const Manage = () => {

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
        axios.get('http://localhost:8000/tickets/',).then((response) => {setTickets(response.data)})
        axios.get('http://localhost:8000/hotels/',).then((response) => {console.log(response.data)})
        }, []);

        const [tickets, setTickets] = useState([])

    return ( 
        <div>{tickets.map()}</div>
    );
}

export default Manage;