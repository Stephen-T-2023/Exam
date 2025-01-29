import { useEffect } from "react";
import Navigation from "../component/navigation";

const BookingChoice = () => {

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
            window.location.href = '/login'
        }
        
        });

        const bookingZoo = () => {
            window.location.href = '/zooBooking'
        }
        const bookingHotel = () => {
            window.location.href = '/hotelReservation'
        }

    return ( 
        <>
            <div className="flex flex-col w-full h-screen bg-gray-400 overflow-hidden">
                <Navigation />
                <div className="w-full h-full p-6 rounded-t-xl space-y-4 overflow-hidden">
                    <a href = '/zooBooking'
                        className="w-full h-2/5 flex flex-col items-center justify-center bg-green-600 hover:bg-green-700 transition-all text-white text-center rounded-md">
                        <div className="w-full h-full bg-Ticket bg-center bg-no-repeat bg-cover rounded-lg"></div>
                        <div className="w-full text-lg font-semibold py-3">
                            Book a Zoo Ticket
                        </div>
                    </a>
                    <a href = '/hotelReservation'
                        className="w-full h-2/5 flex flex-col items-center justify-center bg-green-600 hover:bg-green-700 transition-all text-white text-center rounded-md">
                        <div className="w-full h-full bg-Hotel bg-center bg-no-repeat bg-cover rounded-lg"></div>
                        <div className="w-full text-lg font-semibold py-3">
                            Reserve a Hotel Room
                        </div>
                    </a>
                </div>
            </div>
        </>
     );
}
 
export default BookingChoice;