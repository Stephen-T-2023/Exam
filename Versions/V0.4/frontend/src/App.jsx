import './interceptors/axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/home.jsx";
import Login from './pages/login.jsx';
import Logout from './component/logout.jsx';
import Register from './pages/register.jsx';
import BookingChoice from './pages/booking.jsx';
import Manage from './pages/manage.jsx';
import Map from './pages/map.jsx';
import About from './pages/about.jsx';
import Tickets from './pages/tickets.jsx';
import Reservations from './pages/reservation.jsx';

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
