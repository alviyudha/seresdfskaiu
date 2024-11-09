import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Logo, LogoAiu } from "../assets/Image/ImportImage";

export default function NavbarComp() {

  const [showNavbar, setShowNavbar] = useState(true);
  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setShowNavbar(false); // Menghilangkan navbar ketika menggulir ke bawah
      } else {
        setShowNavbar(true); // Menampilkan navbar ketika menggulir ke atas
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar sticky-top navbar-expand-lg shadow ${showNavbar ? 'fixed-top' : 'navbar-hide'}`} id="navbar">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="DFSK Seres AIU" width="100" height="44" />
          </Link>
          <Link to="/">
          <img src={LogoAiu} alt="Logo PT AIU" width="80" height="44" className="ms-3" />
          </Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link nav-link-underline me-4 active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-underline me-4" to="/Models">Models</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Booking
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to='/booking/test-drive'>Test Drive</Link></li>
                <li><Link className="dropdown-item" to='/booking/services'>Service</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to='/dealer' className="nav-link nav-link-underline me-4" href="#">Dealer</Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link nav-link-underline me-4" href="#">About</a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}
