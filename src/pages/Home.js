import React, { useEffect, useRef, useState } from "react";

function Home() {
  const [showBotHint, setShowBotHint] = useState(true);
  const botRef = useRef(null);

  useEffect(() => {
    const bot = document.querySelector("df-messenger");
    if (!bot) return;
    const handleClick = () => setShowBotHint(false);
    bot.addEventListener("click", handleClick);
    return () => bot.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-text">
            <p className="eyebrow">Frontend · UX · Bots</p>
            <h1 className="hero-title">
              Quiero ser analista conversacional. 😎
            </h1>
            <h1> Por eso ahora mi cv es un bot</h1>
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
          ref={botRef}
          intent="WELCOME"
          chat-title="CamiCv"
          agent-id="09fb283a-fd2e-439e-a937-66628af2e863"
          language-code="es"
        ></df-messenger>
        {/* Flecha y texto para el bot */}
        {showBotHint && (
          <div className="bot-arrow-hint">
            <span className="bot-arrow-text">¡Hace click en el bot!</span>
            <img src="https://images.vexels.com/media/users/3/150936/isolated/preview/73014b10f3ddce8f87903227d112deeb-doodle-de-trazo-de-flecha-curva.png" alt="Flecha hacia el bot" className="bot-arrow-img" />
          </div>
        )}
      </section>
    </>
  );
}

export default Home;
