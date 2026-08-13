import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <h2>About BrokerFinder</h2>

            <div>
                <p>
                    BrokerFinder helps clients to find the right broker
                    for their services.
                </p>
            </div>

            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default About;