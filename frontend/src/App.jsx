import './App.css';
import './interceptors/axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./component/home.jsx";
import Navigation from './component/navigation.jsx';
import LoginForm from './component/login.jsx';
import Logout from './component/logout.jsx';

function App() {
    return (
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
      </BrowserRouter>
    )
}
export default App;
