import { Link } from "react-router-dom";

function BrokerRequest() {
    return (
        <div className="page">
            <h1>Create a Request</h1>

            <form className="form-card">
                <input type="text" placeholder="Request Title" />
                <textarea placeholder="Describe the service you offer" />
                <input type="text" placeholder="Location" />
                <input type="text" placeholder="Specialty" />
                <button className="btn primary" type="submit">Submit</button>
            </form>

            <Link to="/broker" className="btn back">Back to Dashboard</Link>
        </div>
    );
}

export default BrokerRequest;
