import React from 'react'; 
import './Prijava.css'; 
import { Link } from 'react-router-dom';

const Prijava = () => {

  async function handleSubmit(e) {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    try {
      const res = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const text = await res.text();
      alert(text);
    } catch (err) {
      console.error(err);
      alert("Greska pri prijavi");
    }
  }

  return (
    <div className='prijava-layout'>
      <div className='pale-outline'>
        <h1>visit BANJALUKA</h1>
        <div className='wrapper'>
          <form onSubmit={handleSubmit}>
            <h1>Dobrodošli</h1>
            <div className='input-box'>
              <input type="text" placeholder='Broj telefona, e-mail' required />
            </div>

            <div className='input-box'>
              <input type="password" placeholder='Lozinka' required />
            </div>

            <div className='ostani-prijavljen-prijava'>
              <label><input type="checkbox" />Ostani prijavljen</label>
              <button type="submit">Prijavi se</button>
            </div>

            <div className='registracija-link'>
              <p>Nemaš nalog? <Link to="/registracija">Registruj se</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );


}

export default Prijava;
