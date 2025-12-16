import { Link } from "react-router-dom";
import "../../assets/css/footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function FooterApp() {
  return (
    <footer className="footer-app">
      <div className="container-fluid footer-container">

        {/* IZQUIERDA */}
        <div className="footer-left">
          <span>© {new Date().getFullYear()} Comercio Libre</span>
        </div>

        {/* CENTRO - LINK ABOUT */}
        <div className="footer-center">
          <Link to="/about" className="footer-link">
            Acerca de nosotros
          </Link>
          <Link to="/about" className="footer-link">
            Contacto
          </Link>
        </div>

        {/* DERECHA - REDES */}
        <div className="footer-right">
          <a href="#" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>

          <a href="#" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>

          <a href="#" aria-label="Twitter / X">
            <i className="bi bi-twitter-x"></i>
          </a>

          <a href="#" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default FooterApp;
