import axios from "axios";
import {useState} from "react";
import Nav from 'react-bootstrap/Nav';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
            
        const user = {
            email : email,
            password: password
        };

        const {data} = await axios.post('http://localhost:8000/token/', user, {headers: {'Content-Type': 'application/json'}}, {withCredentials: true});
        console.log(data)
        localStorage.clear();
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
    
        window.location.href = '/'

    };

    return (  
        <>
            <div className="flex flex-wrap w-screen h-screen">
                <div className="w-full h-2/6 m-10 bg-zooEntrance bg-no-repeat bg-cover rounded"/>
                <div className="w-full h-3/6 flex flex-wrap">
                    <div className="flex bg-red-600 w-full text-6xl text-left content-center font-heading">
                        Login:
                    </div>
                    <form className="w-full justify-center text-2xl flex flex-col place-items-center font-body">
                        <label>Email:</label>
                        <br />
                        <input
                            type="string"
                            name="email"
                            value={email}
                            required
                            onChange={e => setEmail(e.target.value)}
                            className="bg-gray-500 border w-5/6"
                        ></input>{""}
                        <br />
                        <label>Password:</label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            value={password}
                            required
                            onChange={e => setPassword(e.target.value)}
                            className="bg-gray-500 border w-5/6"
                        ></input>{" "}
                        <br />
                        <button type="submit" onClick={handleSubmit} className="border">
                            Login
                        </button>
                    </form>
                    <Nav className="w-full text-xl text-center">
                        <Nav.Link href="/register">Don't have an account? Click here.</Nav.Link>
                    </Nav>
                </div>
            </div>
        </>
    );
}

export default Login;


{/* {error && <p style={{color:"red"}}>{error}</p>}
        { successMessage && <p style={{color:"green"}}>{successMessage}</p>} */}