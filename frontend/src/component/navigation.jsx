import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {

    return ( 
        <div>
            <Navbar bg="dark" variant="dark" className='text-white flex w-screen bg-slate-400'>
                <Navbar.Brand href="/" className='flex-grow border-black border-2'>Riget Zoo Adventures</Navbar.Brand>
                <Nav.Link href='/bookingchoice' className='px-5 border-black border-2'>Shop</Nav.Link>
                <Nav.Link href='/map' className='px-5 border-black border-2'>Map</Nav.Link>
                <Nav.Link href='/about' className='px-5 border-black border-2'>About</Nav.Link>
                <Nav.Link href="/logout" className='px-5 border-black border-2'>Logout</Nav.Link>
            </Navbar>
        </div>
        );
}

export default Navigation;