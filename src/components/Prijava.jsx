import React from 'react';
import './Prijava.css';
import { Link } from 'react-router-dom';

export default function Prijava() {
  return (
    <div className='prijava-layout'>
      <div className='pale-outline'>
        <h1>visit BANJALUKA</h1>
        <div className='wrapper'>
          <form action="">
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
              <p>Nemaš nalog? <Link to="/registracija">Registruj se</Link> </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
