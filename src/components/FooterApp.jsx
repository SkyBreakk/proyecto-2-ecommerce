import { Link } from "react-router-dom";
import "../assets/css/footer.css";
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
          <Link to="/about" className="footer-link fs-5 mx-3">
            Acerca de nosotros
          </Link>
          <Link to="/contact" className="footer-link fs-5 mx-3">
            Contacto
          </Link>
        </div>

        {/* DERECHA - REDES */}
        <div className="footer-right">
          <Link to="/404" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </Link>

          <Link to="/404" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </Link>

          <Link to="/404" aria-label="Twitter / X">
            <i className="bi bi-twitter-x"></i>
          </Link>

          <Link to="/404" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default FooterApp;
