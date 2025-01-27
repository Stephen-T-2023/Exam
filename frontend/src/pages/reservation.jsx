import axios from "axios";
import React, { useState, useEffect } from "react";
import Navigation from "../component/navigation";
import { jwtDecode } from "jwt-decode"

const Reservations = () => {

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
        }, []);

    const [roomtypes, setRoomtypes] = useState({
        Single: 0,
        Double: 0,
        Suite: 0,
    });

    const [price, setPrice] = useState(0);

    const roomPrices = {
        Single: 80,
        Double: 100,
        Suite: 120,
    };

    const [startDate, setStartDate] = useState(new Date().toJSON().slice(0, 10))
    const [endDate, setEndDate] = useState()

    var date = new Date(startDate)
    date.setDate(date.getDate() + 2);
    const newDate = date.toJSON().slice(0, 10)

    const handleHotelChange = (ticketType, value) => {
        if (value >= 0) {
            const updatedTickets = { ...roomtypes, [ticketType]: value };
            setRoomtypes(updatedTickets);
            const newTotalPrice = Object.keys(updatedTickets).reduce(
            (total, type) => total + updatedTickets[type] * roomPrices[type],
            0
        );
        setPrice(newTotalPrice);
        }
    };

    const resetTickets = () => {
        setRoomtypes({
            Single: 0,
            Double: 0,
            Suite: 0,
        });
        setPrice(0);
    };
    
    const checkout = () => {
        const token = localStorage.getItem('access_token');
        const decoded = jwtDecode(token);

        Object.keys(roomtypes).forEach(roomType => {
            for (let i = 0; i < roomtypes[roomType]; i++) {
                const booking = {
                    User_id: decoded.user_id,
                    Room_type: roomType,
                    Start_Date: startDate,
                    End_Date: endDate,
                };
                axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
                axios.post('http://localhost:8000/hotels/', booking, {headers: {'Content-Type': 'application/json'}}, {withCredentials: true});
            }
        });
    };

    return ( 
        <>
            <div className="flex flex-col w-screen h-auto bg-gray-300 min-h-screen">
                <Navigation />
                <div className="w-full text-6xl text-left p-4 font-heading text-green-600">
                Hotel Room Booking:
                </div>
                <div className="flex flex-col p-4 space-y-4">
                    <h2 className="text-xl font-bold">Room Types</h2>
                    {Object.keys(roomtypes).map((ticketType) => (
                <div
                    key={ticketType}
                    className="flex justify-between items-center bg-green-600 p-4 border-black border-2 rounded-md">
                    <span className="font-semibold">{ticketType} Tickets</span>
                    <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-700">
                        £{roomPrices[ticketType]} per ticket
                    </span>
                    <input
                        type="number"
                        className="border p-2 w-20 text-center"
                        value={roomtypes[ticketType]}
                        min="0"
                        max="10"
                        onChange={(e) =>
                            handleHotelChange(ticketType, parseInt(e.target.value) || 0)}/>
                </div>
            </div>
            ))}
        <div className="flex flex-col p-4 space-y-4">
            <h2 className="text-xl font-bold">Dates Booked</h2>
            <input
                type="date"
                className="border p-2 w-full text-center"
                min={new Date().toJSON().slice(0, 10)}
                onChange={(e) => setStartDate(e.target.value)}/>
            <input
                type="date"
                className="border p-2 w-full text-center"
                min={startDate}
                max={newDate}
                onChange={(e) => setEndDate(e.target.value)}/>
        </div>
        </div>
            <div className="w-full p-4 bg-white border-t-4 border-y-4 border-black mt-4">
                <h2 className="text-2xl font-bold">Total Price: £{price}</h2>
                    <div className="flex space-x-4 mt-4">
                        <button
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
                            onClick={checkout}
                            >
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
}

export default Reservations;