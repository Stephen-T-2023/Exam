import React, { useState, useEffect } from "react";
import Navigation from "../component/navigation";
import { jwtDecode } from "jwt-decode"
import axios from "axios";

const Tickets = () => {

    const [ticket_id, setTicket_ID] = useState()

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
        }, []);

    const [tickets, setTickets] = useState({
        Adult: 0,
        Young: 0,
        Child: 0,
        Infant: 0,
    });

    const [price, setPrice] = useState(0);

    const ticketPrices = {
        Adult: 20,
        Young: 15,
        Child: 10,
        Infant: 0,
    };

    const handleTicketChange = (ticketType, value) => {
        if (value >= 0) {
            const updatedTickets = { ...tickets, [ticketType]: value };
            setTickets(updatedTickets);
            const newTotalPrice = Object.keys(updatedTickets).reduce(
            (total, type) => total + updatedTickets[type] * ticketPrices[type],
            0
        );
        setPrice(newTotalPrice);
        }
    };

    const resetTickets = () => {
        setTickets({
            Adult: 0,
            Young: 0,
            Child: 0,
            Infant: 0,
        });
        setPrice(0);
    };

    const checkout = () => {

        const totalTickets = tickets.Adult + tickets.Young + tickets.Child + tickets.Infant

        for (var i=0; i < totalTickets; i++){
            const [tickettype, setTicketType] = useState()
            const token = localStorage.getItem('access_token');
            const decoded = jwtDecode(token);

            const booking = {
                User_id: decoded.user_id,
                Ticket_type: "Adult",
            };

            axios.post('http://localhost:8000/tickets/', booking, {headers: {'Content-Type': 'application/json'}}, {withCredentials: true});
        }
    };

  return (
    <>
        <div className="flex flex-col w-screen h-auto bg-gray-300 min-h-screen">
            <Navigation />
            <div className="w-full text-6xl text-left p-4 font-heading text-green-600">
            Tickets Booking:
            </div>
            <div className="flex flex-col p-4 space-y-4">
                <h2 className="text-xl font-bold">Zoo Tickets</h2>
                {Object.keys(tickets).map((ticketType) => (
                <div
                    key={ticketType}
                    className="flex justify-between items-center bg-green-600 p-4 border-black border-2 rounded-md">
                    <span className="font-semibold">{ticketType} Tickets</span>
                    <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-700">
                        £{ticketPrices[ticketType]} per ticket
                    </span>
                    <input
                        type="number"
                        className="border p-2 w-20 text-center"
                        value={tickets[ticketType]}
                        min="0"
                        onChange={(e) =>
                            handleTicketChange(ticketType, parseInt(e.target.value) || 0)}/>
                </div>
            </div>
            ))}
        </div>
            <div className="w-full p-4 bg-white border-t-4 border-y-4 border-black mt-4">
                <h2 className="text-2xl font-bold">Total Price: £{price}</h2>
                    <div className="flex space-x-4 mt-4">
                        <button
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
                            onClick={checkout}>
                            Checkout
                        </button>
                        <button
                            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-700"
                            onClick={resetTickets}>
                            Reset
                        </button>
                    </div>
            </div>
        </div>
    </>
    );
};

export default Tickets;

