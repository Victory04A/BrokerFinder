import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    function handlelogin(){
        navigate("/client-dashboard");
    }
    return (
        <div className="page page--centered">
            <h1>Login</h1>

            <form className="form-card">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
        
            </form>

            <p className="auth-switch">
                Don't have an account? <Link to="/register">Register</Link>
            </p>
            <button onClick={handlelogin} className="btn primary">Login</button>
            <Link to="/" className="btn back">Back to Home</Link>
        </div>
    );
}

export default Login;
