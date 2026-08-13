import { Link } from "react-router-dom";

function About() {
    return (
        <div className="page">
            <h2>About BrokerFinder</h2>

            <div className="about-card">
                <p>
                    BrokerFinder helps clients to find the right broker
                    for their services.
                </p>
            </div>

            <Link to="/" className="btn back">Back to Home</Link>
        </div>
    );
}

export default About;