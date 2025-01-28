import { useEffect, useState } from "react";
import axios from "../interceptors/axios"
import Navigation from "../component/navigation";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const newDate = (day + '-' + month + '-' + year)
    return newDate;
};

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
        });

        axios.get("http://localhost:8000/hotels/").then((response) => {
            setReservations(response.data);
        });
    }, []);

    return (
        <div className="bg-green-100 w-full h-screen overflow-hidden">
            <Navigation />
            <div className="flex flex-col items-center justify-start p-6 space-y-8 h-full overflow-y-auto">
                <div className="w-full bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-green-600 mb-4">Tickets</h2>
                    <ul className="space-y-2">
                        {tickets.map((ticket, index) => (
                                <li
                                    key={index}
                                    className="p-4 bg-gray-200 rounded-md text-gray-800 shadow-sm"
                                >
                                    <strong>Type:</strong> {ticket.Ticket_type} <br />
                                    <strong>ID:</strong> {ticket.Ticket_id}
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="w-full bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-green-600 mb-4">Reservations</h2>
                    <ul className="space-y-2">
                            {reservations.map((reservation, index) => (
                                <li
                                    key={index}
                                    className="p-4 bg-gray-200 rounded-md text-gray-800 shadow-sm"
                                >
                                    <strong>Room Type:</strong> {reservation.Room_type} <br />
                                    <strong>ID:</strong> {reservation.Reservation_id} <br />
                                    <strong>Start Date:</strong> {formatDate(reservation.Start_Date)} <br />
                                    <strong>End Date:</strong> {formatDate(reservation.End_Date)}
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Manage;
