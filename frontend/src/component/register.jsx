import React, { useState } from "react";
import axios from "axios";
import Nav from 'react-bootstrap/Nav';

const Register = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
	const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
	
    const handleSubmit = async (e) => {
		e.preventDefault();

		const user = {
			username: username,
			email: email,
			password1: password1,
			password2: password2
		}

        const {data} = await axios.post('http://localhost:8000/register/', user, {headers: {'Content-Type': 'application/json'}}, {withCredentials: true});

        window.location.href = '/login'

	};

    return ( 
        
        <>
			<div className="flex flex-col w-full h-screen bg-gray-400">
				<div className="w-full h-1/3 bg-zooEntrance bg-no-repeat bg-cover rounded-b-xl">
				</div>
				<div className="w-full h-2/3 p-6 rounded-t-xl">
					<div className="flex justify-center text-3xl font-bold text-green-600 mb-6">
						Register
					</div>
					<form className="flex flex-col items-center space-y-4 text-lg">
						<div className="w-full">
							<label for="username" class="block text-lg font-medium text-gray-700">Username:</label>
							<input
								id="username"
								type="text"
								name="username"
								value={username}
								onChange={e => setUsername(e.target.value)}
								required
								className="w-full p-3 bg-gray-200 border border-gray-300 rounded-md text-lg"/>
						</div>
						<div className="w-full">
							<label for="email" class="block text-lg font-medium text-gray-700">Email:</label>
							<input
								id="email"
								type="email"
								name="email"
								value={email}
								onChange={e => setEmail(e.target.value)}
								required
								className="w-full p-3 bg-gray-200 border border-gray-300 rounded-md text-lg"/>
						</div>
						<div className="w-full">
							<label for="password1" class="block text-lg font-medium text-gray-700">Password:</label>
							<input
								id="password1"
								type="password"
								name="password1"
								value={password1}
								onChange={e => setPassword1(e.target.value)}
								required
								className="w-full p-3 bg-gray-200 border border-gray-300 rounded-md text-lg"/>
						</div>
						<div className="w-full">
							<label for="password2" class="block text-lg font-medium text-gray-700">Confirm Password:</label>
							<input
								id="password2"
								type="password"
								name="password2"
								value={password2}
								onChange={e => setPassword2(e.target.value)}
								required
								className="w-full p-3 bg-gray-200 border border-gray-300 rounded-md text-lg"/>
						</div>
						<button
							type="submit"
							onClick={handleSubmit}
							className="w-full py-3 bg-green-600 text-white text-xl rounded-md hover:bg-green-700 transition-all">
							Register
						</button>
					</form>

					<div className="text-center mt-6">
						<Nav className="text-md text-green-600">
							<Nav.Link href="/login" className="hover:text-green-800">Have an account? Click here.</Nav.Link>
						</Nav>
					</div>
				</div>
			</div>
		</>

    );
}

export default Register;