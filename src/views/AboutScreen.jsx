import "../assets/css/about.css";

// IMPORT DE IMÁGENES
import rubenImg from "../assets/img/about/ruben.jpg";
import samuelImg from "../assets/img/about/samuel.jpg";
import mariaImg from "../assets/img/about/maria.jpg";
import pabloImg from "../assets/img/about/pablo.jpg";

function AboutScreen() {
  return (
    <div className="about-page container">

      {/* HEADER */}
      <header className="about-header">
        <h1>Acerca de Nosotros</h1>
        <p>
          Somos un equipo de 4 personas apasionadas por el desarrollo y el
          comercio digital.
        </p>
      </header>

      {/* DESCRIPCIÓN */}
      <section className="about-description">
        <p>
          En <strong>Comercio Libre</strong> trabajamos en conjunto para crear una
          plataforma moderna, clara y fácil de usar. Cada integrante aporta
          habilidades distintas para lograr un producto de calidad.
        </p>
      </section>

      {/* INTEGRANTES */}
      <section className="about-team row">

        {/* INTEGRANTE 1 */}
        <div className="col-md-3 col-sm-6 team-card">
        <div div className="team-box">

        <img
        src={rubenImg}
        alt="Ruben López"
        className="team-photo"
        />

        <h4>Ruben López</h4>
        <span className="team-role">
      Scrum Master · Frontend Developer
        </span>

        

        <div className="team-contribution">
        <span>Mi aporte fue:</span>
        <ul>
            <li>Scrum Master</li>
            <li>Encargado del tabler de Trello</li>
            <li>Navbar</li>
            <li>Footer</li>
            <li>Acerca de nosotros</li>
            <li>...</li>
        </ul>
        </div>

        </div>
        </div>


        {/* INTEGRANTE 2 */}
        <div className="col-md-3 col-sm-6 team-card">
        <div div className="team-box">

        <img
        src={samuelImg}
        alt="Samuel Fernandez"
        className="team-photo"
        />

        <h4>Samuel Fernandez</h4>
        <span className="team-role">
      Encargado Tecnico · Frontend Developer
        </span>

        <div className="team-contribution">
        <span>Mi aporte fue:</span>
        <ul>
            <li>Encargado Tecnico</li>
            <li>Maqueteador de la web</li>
            <li>Pagina Principal</li>
            <li>Buscador</li>
            <li>...</li>
        </ul>
        </div>

        </div>
        </div>

        {/* INTEGRANTE 3 */}
        <div className="col-md-3 col-sm-6 team-card">
        <div div className="team-box">

        <img
        src={mariaImg}
        alt="Maria Morales"
        className="team-photo"
        />

        <h4>Maria Morales</h4>
        <span className="team-role">
            Frontend Developer
        </span>

        <div className="team-contribution">
        <span>Mi aporte fue:</span>
        <ul>
            <li>Pagina Error 404</li>
            <li>Pagina de contacto</li>
            <li>...</li>
        </ul>
        </div>

        </div>
        </div>

        {/* INTEGRANTE 4 */}
        <div className="col-md-3 col-sm-6 team-card">
        <div div className="team-box">

        <img
        src={pabloImg}
        alt="Pablo Padilla"
        className="team-photo"
        />

        <h4>Pablo Padilla</h4>
        <span className="team-role">
        Frontend Developer
        </span>


        <div className="team-contribution">
        <span>Mi aporte fue:</span>
        <ul>
            <li>Login</li>
            <li>Logout</li>
            <li>Register</li>
            <li>...</li>
        </ul>
        </div>

        </div>
        </div>

      </section>

    </div>
  );
}

export default AboutScreen;
