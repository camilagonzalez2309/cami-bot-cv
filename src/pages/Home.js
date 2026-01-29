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
            <h1 className="hero-title">Soy diseñadora conversacional.</h1>
            <h1 className="hero-subtitle1"> Por eso mi cv es un bot</h1>
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
                href="https://www.figma.com/design/WMe7ZsES7F6LNznvvZMKtw/Challenge-CUX--BeBot?t=FbBVhGYxc4vj6R1p-0"
                className="btn btn-primary boti"
              >
                Ver resideño BOTI 🤖
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
                src="https://media.licdn.com/dms/image/v2/D4D03AQEio7Bz2z3chw/profile-displayphoto-crop_800_800/B4DZwCliiDJsAI-/0/1769569922258?e=1771459200&v=beta&t=_JoQPgzeXIHcmiYslpmP6PYnDA6gsBbJyn1At7S0ir0"
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
        {/* Texto de hint para el bot (sin flecha) */}
        {showBotHint && (
          <div className="bot-arrow-hint">
            <span className="bot-arrow-text">¡Hace click en el bot!</span>
          </div>
        )}
      </section>
    </>
  );
}

export default Home;
