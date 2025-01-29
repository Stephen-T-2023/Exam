import axios from "../interceptors/axios"
import {useState} from "react";
import Nav from 'react-bootstrap/Nav';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
            
        try {
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
        } catch {
            setError("A username or password is incorrect, Please try again.")
        }

    };

    return (  
        <>
            <div className="flex flex-col w-full h-screen bg-gray-400">
                <div className="w-full h-1/3 bg-Logo bg-center bg-no-repeat bg-cover rounded-b-xl">
                </div>
                <div className="w-full h-2/3 p-6 rounded-t-xl">
                    <div className="flex justify-center text-3xl font-bold text-green-600 mb-6">
                        Login
                    </div>
                    <p className="text-red-600 text-center">{error}</p>
                    <form className="flex flex-col items-center space-y-4 text-lg">
                        <div className="w-full">
                            <label for="email" class="block text-lg font-medium text-gray-700">Email:</label>
                            <input
                                id="email"
                                placeholder="e.g example@email.com"
                                type="email"
                                name="email"
                                required
                                onChange={e => setEmail(e.target.value)}
                                className="w-full p-3 bg-gray-200 border border-gray-300 rounded-md text-lg"/>
                        </div>
                        <div className="w-full">
                            <label for="password" class="block text-lg font-medium text-gray-700">Password:</label>
                            <input
                                id="password"
                                placeholder="At least 8 characters"
                                type="password"
                                name="password"
                                required
                                onChange={e => setPassword(e.target.value)}
                                className="w-full p-3 bg-gray-200 border border-gray-300 rounded-md text-lg"/>
                        </div>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="w-full py-3 bg-green-600 text-white text-xl rounded-md hover:bg-green-700 transition-all">
                            Login
                        </button>
                    </form>
                    <div className="text-center mt-6">
                        <Nav className="text-md text-green-600">
                            <Nav.Link href="/register" className="hover:text-green-800">Don't have an account? Click here.</Nav.Link>
                        </Nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;


{/* {error && <p style={{color:"red"}}>{error}</p>}
        { successMessage && <p style={{color:"green"}}>{successMessage}</p>} */}