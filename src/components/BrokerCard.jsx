function BrokerCard({ name, location, specialty, phone }) {
  return (
    <div className="broker-card">
      <h2 className="broker-card__name">{name}</h2>
      <p className="broker-card__detail">Location: {location}</p>
      <p className="broker-card__detail">Specialty: {specialty}</p>
      <p className="broker-card__detail">Phone: {phone}</p>

      <button className="btn outline">Contact Broker</button>
    </div>
  );
}

export default BrokerCard;