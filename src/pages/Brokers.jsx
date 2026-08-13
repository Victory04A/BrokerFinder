import { Link } from "react-router-dom";

import SearchForm from "../components/SearchForm";
import BrokerCard from "../components/BrokerCard";
import { brokers } from "../data/brokers";

function Brokers() {
    return (
        <div className="page">
            <h1>Find a Broker</h1>

            <SearchForm />

            <div className="broker-grid">
                {brokers.map((broker) => (
                    
                    <BrokerCard
                        key={broker.id}
                        name={broker.name}
                        location={broker.location}
                        specialty={broker.specialty}
                        phone={broker.phone}
                    />
                ))}
            </div>
            <div className="quick-links">
                <Link to="/brokers/1">John mwita</Link>
                <Link to="/brokers/2">Asha Hassan</Link>
                <Link to="/brokers/3">peter Juma</Link>
            </div>
            <Link to="/" className="btn back">Back to Home</Link>
        </div>
    );
}

export default Brokers;
