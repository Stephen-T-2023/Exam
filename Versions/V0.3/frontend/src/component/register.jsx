import React, { useState } from "react";
import axios from "axios";

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
        
        <div>
			<h2>Register:</h2>
			<form>
				<label>username:</label>
				<br />
				<input
					type="text"
					name="username"
					value={username}
					onChange={e => setUsername(e.target.value)}
				></input>{" "}
				<br />
				<br />
				<label>email:</label>
				<br />
				<input
					type="email"
					name="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
				></input>{" "}
				<br />
				<br />
				<label>password:</label>
				<br />
				<input
					type="password"
					name="password1"
					value={password1}
					onChange={e => setPassword1(e.target.value)}
				></input>{" "}
				<br />
				<br />
				<label>confirm password:</label>
				<br />
				<input
					type="password"
					name="password2"
					value={password2}
					onChange={e => setPassword2(e.target.value)}
				></input>{" "}
				<br />
				<br />
				<button type="submit" onClick={handleSubmit}>
					Register
				</button>
			</form>
		</div>

    );
}

export default Register;