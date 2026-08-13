function Hero({ name, title, description }) {
  return (
    <div className="hero">
      <h1>{title}</h1>

      <h2 className="hero__name">Hello {name}</h2>

      <p className="hero__desc">{description}</p>

      <button className="btn primary">Find Broker</button>
    </div>
  );
}

export default Hero;