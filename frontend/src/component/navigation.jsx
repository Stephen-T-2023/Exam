import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect} from 'react';

const Navigation = () => {

    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
        setIsAuth(true); 
        }
    }, [isAuth]);

    return ( 
        <div>
            <Navbar bg="dark" variant="dark" className='text-white flex w-screen bg-slate-400'>
                <Navbar.Brand href="/" >Riget Zoo Adventures</Navbar.Brand>
                <Nav>
                    {isAuth ? <Nav.Link href="/logout" >Logout</Nav.Link> : <Nav.Link href="/login">Login</Nav.Link>}
                </Nav>
            </Navbar>
        </div>
        );
}

export default Navigation;