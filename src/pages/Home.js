function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-text">
            <p className="eyebrow">Frontend · UX · Bots</p>
            <h1 className="hero-title">
              Más allá del CV. Diseñando experiencias conversacionales.
            </h1>
            <p className="hero-subtitle">
              Conecto desarrollo frontend, producto y UX para crear flujos y
              bots que respondan a necesidades reales de las personas que los
              usan.
            </p>
            <div className="hero-buttons">
              <a href="/worky" className="btn btn-primary">
                Ver Worky Bot 🤖
              </a>
              <a
                href="https://www.linkedin.com/in/camilanataliagonzalez23/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-avatar">
            <a href="https://www.linkedin.com/in/camilanataliagonzalez23/">
              <img
                className="contact-btn"
                src="https://i.ibb.co/RkGttnCc/fotodeperfil.jpg"
                alt="fotodeperfil"
                border="0"
              />
            </a>
          </div>
        </div>
      <df-messenger
        intent="WELCOME"
        chat-title="CamiCv"
        agent-id="09fb283a-fd2e-439e-a937-66628af2e863"
        language-code="es"
      ></df-messenger>
      </section>
    </>
  );
}

export default Home;
