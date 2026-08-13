import { Link } from "react-router-dom";

import SearchForm from "../components/SearchForm";
import BrokerCard from "../components/BrokerCard";
import { brokers } from "../data/brokers";

function Brokers() {
    return (
        <div>
            <h1>Find a Broker</h1>

            <SearchForm />

            <div>
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
            <Link to="/brokers/1">John mwita</Link>
            <Link to="/brokers/2">Asha Hassan</Link>
            <Link to="/brokers/3">peter Juma</Link>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default Brokers;
