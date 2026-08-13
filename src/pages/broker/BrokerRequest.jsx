import { Link } from "react-router-dom";

function BrokerRequest() {
    return (
        <div>
            <h1>Create a Request</h1>

            <form>
                <input type="text" placeholder="Request Title" />
                <textarea placeholder="Describe the service you offer" />
                <input type="text" placeholder="Location" />
                <input type="text" placeholder="Specialty" />
                <button type="submit">Submit</button>
            </form>

            <Link to="/broker">Back to Dashboard</Link>
        </div>
    );
}

export default BrokerRequest;
