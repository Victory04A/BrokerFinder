import { Link } from "react-router-dom";

const requests = [
    { id: 1, title: "House for Sale", client: "Amina Juma", status: "Pending" },
    { id: 2, title: "Insurance Plan", client: "Peter Mushi", status: "Approved" },
    { id: 3, title: "Tech Consultation", client: "Grace Komba", status: "Rejected" },
];

function MyRequest() {
    return (
        <div>
            <h1>My Requests</h1>

            <div>
                {requests.map((request) => (
                    <div key={request.id}>
                        <h3>{request.title}</h3>
                        <p>Client: {request.client}</p>
                        <p>Status: {request.status}</p>
                    </div>
                ))}
            </div>

            <Link to="/broker">Back to Dashboard</Link>
        </div>
    );
}

export default MyRequest;
