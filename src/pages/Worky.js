import React, { useEffect, useState } from "react";

function Worky() {
  const [showBotHint, setShowBotHint] = useState(true);

  useEffect(() => {
    const bot = document.querySelector("df-messenger");
    if (!bot) return;
    const handleClick = () => setShowBotHint(false);
    bot.addEventListener("click", handleClick);
    return () => bot.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="worky-page">

      {/* INFO */}
      <div className="worky-hero">
        <span className="tag">Proyecto personal · MVP</span>
        <h1 className="hero-title">Worky, un bot para HR.</h1>
        <h2 className="hero-subtitle1">Soluciones reales a problemas reales.</h2>
        <p className="hero-subtitle">
          Un asistente para responder consultas frecuentes sobre vacaciones,
          licencias y gestiones diarias sin perder tiempo navegando sistemas.
        </p>
      </div>

      {/* VISUAL */}
      <div className="worky-visual">
        <span style={{ animation: "bob 3.5s ease-in-out infinite", display: "block" }}>
          🤖
        </span>
      </div>

      {/* ACTIONS */}
      <div className="worky-actions">
        <a
          href="https://www.figma.com/design/xEM8BQpoKvbUHFAX55HfxS/Bot-Workday?node-id=0-1&t=9cLXJO8NiW9HMjed-1"
          target="_blank"
          rel="noreferrer"
          className="btn btn-sage"
        >
          Abrir diseño en Figma ↗
        </a>
        <a href="/" className="back-link">
          ← Volver al portfolio
        </a>
      </div>

      {/* BOT */}
      <div className="bot-container">
        <df-messenger
          intent="WELCOME"
          chat-title="Chat con Worky"
          agent-id="78949543-dbf5-4021-b127-5c5ef7750f65"
          language-code="es"
        ></df-messenger>
      </div>

      {showBotHint && (
        <div className="bot-arrow-hint">
          <span className="bot-arrow-text">¡Hacé click en Worky!</span>
        </div>
      )}
    </div>
  );
}

export default Worky;
