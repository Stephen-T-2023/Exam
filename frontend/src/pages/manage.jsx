import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../component/navigation";

const Manage = () => {
    const [tickets, setTickets] = useState([]);
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("access_token") === null) {
            window.location.href = "/login";
        }

        axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("access_token")}`;

        axios.get("http://localhost:8000/tickets/").then((response) => {
                setTickets(response.data);
            })

        axios.get("http://localhost:8000/hotels/").then((response) => {
            setReservations(response.data);
        });
    }, []);

    return (
        <div className="bg-gray-400">
            <div className="flex flex-col w-full h-screen">
                <Navigation />
                <ul>
                    <div>Tickets:</div>
                    {tickets.map((ticket, index) => (
                        <li key={index}>
                            <strong>{ticket.Ticket_type}</strong> (ID: {ticket.Ticket_id})
                        </li>
                    ))}
                </ul>
                <ul>
                    <div>Reservations:</div>
                    {reservations.map((reservation, index) => (
                        <li key={index}>
                            <strong>{reservation.Room_type}</strong> (ID: {reservation.Reservation_id}) (Start Date: {reservation.Start_Date}) (End Date: {reservation.End_Date})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Manage;
