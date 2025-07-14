import './Transport.css';

const Transport = () => {
  return (
    <div className="transport-layout">
      <h1>Pronađite odgovarajući transport za Vaše potrebe</h1>
      <div className="transport-opcije">
        <div className="transport-karta">
          <img src="/taxi-image.png" />
          <a href="https://www.test.com" target="_blank" rel="noopener noreferrer">Taxi službe</a>
        </div>
        <div className="transport-karta">
          <img src="/bus-image.png" />
          <a href="https://www.test.com" target="_blank" rel="noopener noreferrer">Gradski prevoz</a>
        </div>
      </div>
    </div>
  );
};

export default Transport;
