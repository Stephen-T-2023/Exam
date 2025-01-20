import { useEffect } from "react";
import Navigation from "./navigation";

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
        <div className="flex flex-wrap w-screen h-screen bg-black">
            <Navigation></Navigation>
            <button className="w-full h-2/5 place-items-center" onClick={() => {bookingZoo()}}>
                <div className="w-10/12 h-5/6 bg-zooEntrance bg-no-repeat bg-cover"></div>
                <div className="w-10/12 bg-orange-300">Zoo Ticket Bookings</div>
            </button>
            <button className="w-full h-2/5  place-items-center" onClick={() => {bookingHotel()}}>
                <div className="w-10/12 h-5/6 bg-zooEntrance bg-no-repeat bg-cover"></div>
                <div className="w-10/12 bg-orange-300">Hotel Reservations</div>
            </button>
        </div>
     );
}
 
export default BookingChoice;