import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import BrokerCard from "../components/BrokerCard";
import { brokers } from "../data/brokers";

function Home() {
    return (
        <div className="page">
            <Hero
                name="Welcome"
                title="Broker Finder"
                description="Find the right broker for your service."
            />

            <SearchBar />

            <div className="broker-grid">
                {brokers.slice(0, 3).map((broker) => (
                    <BrokerCard
                        key={broker.id}
                        name={broker.name}
                        location={broker.location}
                        specialty={broker.specialty}
                        phone={broker.phone}
                    />
                ))}
            </div>

            <Link to="/brokers" className="btn outline">View All Brokers</Link>
        </div>
    );
}

export default Home;
