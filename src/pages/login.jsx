import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function login() {
    const navigate = useNavigate();
    function handlelogin(){
        navigate("/client-dashboard");
    }
    return (
        <div>
            <h1>Login</h1>

            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
        
            </form>

            <p>
                Don't have an account? <Link to="/register">Register</Link>
            </p>
            <button onClick={handlelogin}>Login</button>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default login;
