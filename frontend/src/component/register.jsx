import React, { useState } from "react";
import axios from "axios";

const Register = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    // const [password2, setPassword2] = useState('');

	const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null)
	
    const handleSubmit = async (e) => {
		e.preventDefault();

		const user = {
			username: username,
			email: email,
			password: password
		}

            const {response} = await axios.post('http://localhost:8000/token/', user, {headers: {'Content-Type': 'application/json'}}, {withCredentials: true});
            console.log("Success!", response.data)
            setSuccessMessage("Registration Successful!")

        // window.location.href = '/login'

	};

    return ( 
        
        <div>
            {error && <p style={{color:"red"}}>{error}</p>}
            { successMessage && <p style={{color:"green"}}>{successMessage}</p>}
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
					name="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
				></input>{" "}
				{/* <br />
				<br />
				<label>confirm password:</label>
				<br />
				<input
					type="password"
					name="password2"
					value={password2}
					onChange={e => setPassword2(e.target.value)}
				></input>{" "} */}
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