import "../assets/css/about.css";

// IMPORT DE IMÁGENES
import rubenImg from "../assets/img/about/ruben.jpg";
import int2Img from "../assets/img/about/integrante2.jpg";
import int3Img from "../assets/img/about/integrante3.jpg";
import int4Img from "../assets/img/about/integrante4.jpg";

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
          <div className="team-box">
            <img src={rubenImg} alt="Ruben López" className="team-photo" />
            <h4>Ruben López</h4>
            <span>Frontend Developer</span>
            <p>
              Encargado del diseño de interfaces, experiencia de usuario y
              estructura visual del proyecto.
            </p>
          </div>
        </div>

        {/* INTEGRANTE 2 */}
        <div className="col-md-3 col-sm-6 team-card">
          <div className="team-box">
            <img src={int2Img} alt="Integrante 2" className="team-photo" />
            <h4>Integrante 2</h4>
            <span>Backend Developer</span>
            <p>
              Responsable de la lógica del sistema, manejo de datos y
              funcionamiento interno.
            </p>
          </div>
        </div>

        {/* INTEGRANTE 3 */}
        <div className="col-md-3 col-sm-6 team-card">
          <div className="team-box">
            <img src={int3Img} alt="Integrante 3" className="team-photo" />
            <h4>Integrante 3</h4>
            <span>UX / UI Designer</span>
            <p>
              Aporta creatividad al proyecto, cuidando la estética y la
              experiencia del usuario.
            </p>
          </div>
        </div>

        {/* INTEGRANTE 4 */}
        <div className="col-md-3 col-sm-6 team-card">
          <div className="team-box">
            <img src={int4Img} alt="Integrante 4" className="team-photo" />
            <h4>Integrante 4</h4>
            <span>QA & Gestión</span>
            <p>
              Se encarga de las pruebas, control de calidad y organización del
              proyecto.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}

export default AboutScreen;
