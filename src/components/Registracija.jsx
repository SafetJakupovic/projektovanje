import './Registracija.css';

const Registracija = () => {
  return (
    <div className='registracija-layout'>
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
            <div className="input-box">
              <input type="password" placeholder='Potvrdite lozinku' required />
            </div>
            <div className='registracija-dugme'>
              <button type="submit">Registruj se</button>
            </div>
          </form>
        </div >
      </div >
    </div>
  );
}

export default Registracija
