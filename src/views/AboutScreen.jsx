import "../assets/css/about.css";
import team from "../data/team";

function AboutScreen() {
  return (
    <div className="about-page container-lg">
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
          En <strong>Comercio Libre</strong> trabajamos en conjunto para crear
          una plataforma moderna, clara y fácil de usar. Cada integrante aporta
          habilidades distintas para lograr un producto de calidad.
        </p>
      </section>

      {/* INTEGRANTES */}
      <section className="about-team row">
        {team.map((member, index) => (
          <div key={index} className="col-md-3 col-sm-6 team-card">
            <div className="team-box">
              <img src={member.img} alt={member.name} className="team-photo" />

              <h4>{member.name}</h4>
              <span className="team-role">{member.role}</span>

              <div className="team-contribution">
                <span>Mi aporte fue:</span>
                <ul>
                  {member.contributions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default AboutScreen;
