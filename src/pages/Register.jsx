import { Link } from "react-router-dom";

function Register() {
    return (
        <div>
            <h1>Create an Account</h1>

            <form>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <select>
                    <option>Register as</option>
                    <option>Client</option>
                    <option>Broker</option>
                </select>
                <button type="submit">Register</button>
            </form>

            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default Register;
