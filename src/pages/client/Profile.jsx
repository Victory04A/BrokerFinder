import { Link } from "react-router-dom";

function Profile() {
    return (
        <div>
            <h1>My Profile</h1>

            <form>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Phone" />
                <input type="text" placeholder="Location" />
                <button type="submit">Save Changes</button>
            </form>

            <Link to="/client">Back to Dashboard</Link>
        </div>
    );
}

export default Profile;
