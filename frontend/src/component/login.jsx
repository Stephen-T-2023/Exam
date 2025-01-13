import axios from "axios";
import {useState} from "react";
import Nav from 'react-bootstrap/Nav';

const Login = () => {

    const [formData, setFormData] = useState({
        username:"",
        password:""
    })


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
            if(isLoading){
                return
            }

            setIsLoading(true);

            try{
                const response = await axios.post('http://localhost:8000/token/', formData, {headers: {'Content-Type': 'application/json'}}, {withCredentials: true});
                console.log("Success!", response.data)
                setSuccessMessage("Login Successful!")
                localStorage.clear();
                localStorage.setItem("accessToken", response.access);
                localStorage.setItem("refreshToken", response.refresh);
                axios.defaults.headers.common['Authorization'] = 
                                        `Bearer ${data['access']}`;

            }
            catch(error){
                console.log("Error during Login!", error.response?.data);
                if(error.response && error.response.data){
                    Object.keys(error.response.data).forEach(field => {
                        const errorMessages = error.response.data[field];
                        if(errorMessages && errorMessages.length > 0){
                            setError(errorMessages[0]);
                        }
                    })
                }
            }
            finally{
                setIsLoading(false)
            }
    
            window.location.href = '/'

    };

    return (  

        <div>
    {error && <p style={{color:"red"}}>{error}</p>}
            { successMessage && <p style={{color:"green"}}>{successMessage}</p>}
			<h2>Login:</h2>
			<form>
	
				<label>Username:</label>
				<br />
				<input
					type="string"
					name="username"
					value={formData.username}
					onChange={handleChange}
				></input>{" "}
				<br />
				<br />
				<label>password:</label>
				<br />
				<input
					type="password"
					name="password"
					value={formData.password}
					onChange={handleChange}
				></input>{" "}
				
				<br />
        <br/>
				<button type="submit" disabled={isLoading} onClick={handleSubmit}>
					Login
				</button>
			</form>
            <Nav>
                <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
		</div>
    );
}

export default Login;