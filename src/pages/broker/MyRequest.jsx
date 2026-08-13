import { Link } from "react-router-dom";

const requests = [
    { id: 1, title: "House for Sale", client: "Amina Juma", status: "Pending" },
    { id: 2, title: "Insurance Plan", client: "Peter Mushi", status: "Approved" },
    { id: 3, title: "Tech Consultation", client: "Grace Komba", status: "Rejected" },
];

function MyRequest() {
    return (
        <div className="page">
            <h1>My Requests</h1>

            <div className="request-list">
                {requests.map((request) => (
                    <div className="request-card" key={request.id}>
                        <h3 className="request-card__title">{request.title}</h3>
                        <p>Client: {request.client}</p>
                        <span className={"status status--" + request.status.toLowerCase()}>{request.status}</span>
                    </div>
                ))}
            </div>

            <Link to="/broker" className="btn back">Back to Dashboard</Link>
        </div>
    );
}

export default MyRequest;
