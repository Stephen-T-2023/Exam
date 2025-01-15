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
        
        <div className="flex flex-wrap w-screen h-screen">
			<div className="w-full h-2/6 m-2 bg-zooEntrance bg-no-repeat bg-cover rounded"/>
			<div className="w-full h-3/6 flex flex-wrap">
				<div className="flex bg-red-600 w-full text-4xl text-left content-center font-heading">Register:</div>
				<form className="w-full justify-center text-xl flex flex-col place-items-center font-body">
					<label>username:</label>
					<input
						type="text"
						name="username"
						value={username}
						onChange={e => setUsername(e.target.value)}
						className="bg-gray-500 border w-5/6 rounded-md"
					></input>{" "}
					<br />
					<label>email:</label>
					<input
						type="email"
						name="email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						className="bg-gray-500 border w-5/6 rounded-md"
					></input>{" "}
					<br />
					<label>password:</label>
					<input
						type="password"
						name="password1"
						value={password1}
						onChange={e => setPassword1(e.target.value)}
						className="bg-gray-500 border w-5/6 rounded-md"
					></input>{" "}
					<br />
					<label>confirm password:</label>
					<input
						type="password"
						name="password2"
						value={password2}
						onChange={e => setPassword2(e.target.value)}
						className="bg-gray-500 border w-5/6 rounded-md"
					></input>{" "}
					<br />
					<button type="submit" onClick={handleSubmit}>
						Register
					</button>
				</form>
				<Nav className="w-full text-xl text-center">
                    <Nav.Link href="/login">Have an account? Click here.</Nav.Link>
                </Nav>
			</div>
		</div>

    );
}

export default Register;