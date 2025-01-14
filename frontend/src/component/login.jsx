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

        const {response} = await axios.post('http://localhost:8000/token/', user, {headers: {'Content-Type': 'application/json'}}, {withCredentials: true});
        
        localStorage.clear();
        localStorage.setItem("access_token", response.access);
        localStorage.setItem("refresh_token", response.refresh);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response['access']}`;
    
            // window.location.href = '/'

    };

    return (  
        <>
            <div className="flex w-screen h-screen">
                <div className="w-1/2 ">
                    <img src="../src/assets/zooEntrance.jpg" alt="" className="w-full h-5/6 m-10"/>
                </div>
                <div className="p-10 m-10 justify-center content-center w-1/2 flex">
                    <div className="rounded bg-red-600">
                        <h2 className="w-full text-xl">Login:</h2>
                    </div>
                    <form>
                        <label>Email:
                        <br />
                        <input
                            type="string"
                            name="email"
                            value={email}
                            required
                            onChange={e => setEmail(e.target.value)}
                            className="bg-gray-500 border border-red-500"
                        ></input>{" "}
                        </label>
                        <br />
                        <br />
                        <label>password:
                        <br />
                        <input
                            type="password"
                            name="password"
                            value={password}
                            required
                            onChange={e => setPassword(e.target.value)}
                            className="bg-gray-500 border border-red-500"
                        ></input>{" "}
                        </label>
                        
                        <br />
                <br/>
                        <button type="submit" onClick={handleSubmit}>
                            Login
                        </button>
                    </form>
                    <Nav>
                        <Nav.Link href="/register">Register</Nav.Link>
                    </Nav>
                </div>
            </div>
        </>
    );
}

export default Login;


{/* {error && <p style={{color:"red"}}>{error}</p>}
        { successMessage && <p style={{color:"green"}}>{successMessage}</p>} */}