import { Link } from "react-router-dom";

function Profile() {
    return (
        <div className="page page--centered">
            <h1>My Profile</h1>

            <form className="form-card">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Phone" />
                <input type="text" placeholder="Location" />
                <button className="btn primary" type="submit">Save Changes</button>
            </form>

            <Link to="/client" className="btn back">Back to Dashboard</Link>
        </div>
    );
}

export default Profile;
