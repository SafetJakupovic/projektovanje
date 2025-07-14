import { Link } from "react-router-dom";
import './Navbar.css';
import { useEffect, useState } from "react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/dogadaji">Događaji</Link>

          <div className="dropdown-wrapper"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}>
            <Link>Objekti ▾</Link>
            <div className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
              <Link to="/objekti/smjestaj">Smještaj</Link>
              <Link to="/objekti/restorani">Restorani</Link>
              <Link to="/objekti/kafici-barovi">Kafići i barovi</Link>
              <Link to="/objekti/klubovi">Klubovi</Link>
            </div>
          </div>

          <Link to="/galerija">Galerija</Link>
          <Link to="/transport">Transport</Link>
          <Link to="/o_nama">O nama</Link>
        </div>


        <Link to="/" className="logo">visit Banjaluka</Link>

        <div className="nav-right">
          <Link to="/prijava">Prijavi se</Link>
          <Link to="/registracija">Registruj se</Link>
          <Link to="/pretraga" className="pretraga-link">
            <img src="/search.png"
              alt="Pretraga" />
          </Link>

        </div>
      </nav>
    </header >
  );
}
