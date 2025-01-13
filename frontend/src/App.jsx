import './App.css';
import './interceptors/axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./component/home.jsx";
import Navigation from './component/navigation.jsx';
import Login from './component/login.jsx';
import Logout from './component/logout.jsx';
import Register from './component/register.jsx';

function App() {
    return (
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    )
}
export default App;
