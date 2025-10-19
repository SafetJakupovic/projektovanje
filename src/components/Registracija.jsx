import './Registracija.css';

const Registracija = () => {

  async function handleSubmit(e) {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    const confirmPassword = e.target[2].value;

    if (password !== confirmPassword) {
      alert("Lozinke se ne poklapaju");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const text = await res.text();
      console.log(text);
      alert(text);
    } catch (err) {
      console.error(err);
      alert("Greska pri registraciji");
    }
  }

  return (
    <div className='registracija-layout'>
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
