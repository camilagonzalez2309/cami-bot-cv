import React, { useEffect, useState } from "react";

function Home() {
  const [showBotHint, setShowBotHint] = useState(true);

  useEffect(() => {
    const bot = document.querySelector("df-messenger");
    if (!bot) return;
    const handleClick = () => setShowBotHint(false);
    bot.addEventListener("click", handleClick);
    return () => bot.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="portfolio">

      {/* ── HERO ── */}
      <section className="section-hero">
        <div className="hero-top">
          <div className="hero-text">
            <span className="tag">Frontend · UX · Diseño conversacional</span>
            <h1 className="hero-title">Soy diseñadora conversacional.</h1>
            <h2 className="hero-subtitle1">Por eso mi CV es un bot.</h2>
            <p className="hero-subtitle">
              Conecto desarrollo frontend, producto y UX para crear flujos y bots
              que respondan a necesidades reales de las personas que los usan.
            </p>
          </div>
          <div className="hero-photo">
            <a
              href="https://www.linkedin.com/in/camilanataliagonzalez23/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/foto-cami.png"
                alt="Camila González"
              />
            </a>
          </div>
        </div>
        <div className="hero-actions">
          <a
            href="https://www.linkedin.com/in/camilanataliagonzalez23/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-linkedin"
          >
            LinkedIn ↗
          </a>
        </div>
      </section>

      {/* ── WORKY ── */}
      <section className="section-project">
        <span className="project-number">Proyecto 01</span>
        <div className="project-body">
          <div className="project-info">
            <span className="project-label" style={{ color: "var(--sage-ink)" }}>
              Bot de HR · MVP
            </span>
            <h2 className="project-title">Worky</h2>
            <p className="project-desc">
              Un asistente conversacional para responder consultas frecuentes sobre
              vacaciones, licencias y gestiones diarias, sin perder tiempo navegando
              sistemas.
            </p>
            <div className="project-tags">
              <span className="chip">Dialogflow</span>
              <span className="chip">UX Writing</span>
              <span className="chip">Flujos conversacionales</span>
              <span className="chip">Figma</span>
            </div>
            <a href="/worky" className="btn btn-sage" style={{ marginTop: "8px", width: "fit-content" }}>
              Ver proyecto →
            </a>
          </div>
          <div className="project-visual visual-worky">
            <span className="visual-emoji">🤖</span>
          </div>
        </div>
      </section>

      {/* ── BOTI ── */}
      <section className="section-project">
        <span className="project-number">Proyecto 02</span>
        <div className="project-body">
          <div className="project-info">
            <span className="project-label" style={{ color: "var(--yellow-ink)" }}>
              Challenge CUX · Rediseño
            </span>
            <h2 className="project-title">BOTI</h2>
            <p className="project-desc">
              Rediseño de BOTI, el bot de BeBot, para el Challenge CUX. Propuesta de
              mejoras en flujos, lenguaje y experiencia conversacional.
            </p>
            <div className="project-tags">
              <span className="chip">CUX</span>
              <span className="chip">Rediseño conversacional</span>
              <span className="chip">Figma</span>
              <span className="chip">UX Writing</span>
            </div>
            <a
              href="https://www.figma.com/design/WMe7ZsES7F6LNznvvZMKtw/Challenge-CUX--BeBot?t=FbBVhGYxc4vj6R1p-0"
              target="_blank"
              rel="noreferrer"
              className="btn btn-yellow"
              style={{ marginTop: "8px", width: "fit-content" }}
            >
              Ver en Figma ↗
            </a>
          </div>
          <div className="project-visual visual-boti">
            <span className="visual-emoji">✨</span>
          </div>
        </div>
      </section>

      {/* BOT CV */}
      <df-messenger
        intent="WELCOME"
        chat-title="CamiCv"
        agent-id="09fb283a-fd2e-439e-a937-66628af2e863"
        language-code="es"
      ></df-messenger>

      {showBotHint && (
        <div className="bot-arrow-hint">
          <span className="bot-arrow-text">¡Hacé click en el bot!</span>
        </div>
      )}
    </div>
  );
}

export default Home;
