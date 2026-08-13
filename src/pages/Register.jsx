import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="page page--centered">
            <h1>Create an Account</h1>

            <form className="form-card">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <select>
                    <option>Register as</option>
                    <option>Client</option>
                    <option>Broker</option>
                </select>
                <button className="btn primary" type="submit">Register</button>
            </form>

            <p className="auth-switch">
                Already have an account? <Link to="/login">Login</Link>
            </p>
            <Link to="/" className="btn back">Back to Home</Link>
        </div>
    );
}

export default Register;
