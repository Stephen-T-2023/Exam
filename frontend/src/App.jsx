import './interceptors/axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./component/home.jsx";
import Login from './component/login.jsx';
import Logout from './component/logout.jsx';
import Register from './component/register.jsx';
import BookingChoice from './component/booking.jsx';
import Manage from './component/manage.jsx';
import Map from './component/map.jsx';
import About from './component/about.jsx';
import Tickets from './component/tickets.jsx';
import Reservations from './component/reservation.jsx';

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/bookingchoice" element={<BookingChoice/>}/>
          <Route path="/manage" element={<Manage/>}/>
          <Route path="/map" element={<Map/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/zooBooking" element={<Tickets/>}/>
          <Route path="/hotelReservation" element={<Reservations/>}/>
        </Routes>
      </BrowserRouter>
    )
}
export default App;
