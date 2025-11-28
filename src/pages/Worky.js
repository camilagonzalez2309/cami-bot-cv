import React from "react";

function Worky() {
  return (
    <div className="worky-page">
      <div className="bot-container">
        <df-messenger
          intent="WELCOME"
          chat-title="Chat con Worky"
          agent-id="78949543-dbf5-4021-b127-5c5ef7750f65"
          language-code="es"
        ></df-messenger>
      </div>
      <section className="worky-header">
        <p className="eyebrow">Proyecto personal · MVP</p>
        <h1 className="hero-title">Worky, un bot para las dudas de HR.</h1>
        <p className="hero-subtitle">
          Un asistente pensado para responder consultas frecuentes sobre
          vacaciones, licencias y gestiones diarias sin perder tiempo navegando
          sistemas.
        </p>
      </section>

      <a
        href="https://www.figma.com/design/xEM8BQpoKvbUHFAX55HfxS/Bot-Workday?node-id=0-1&t=9cLXJO8NiW9HMjed-1"
        target="_blank"
        rel="noreferrer"
        className="btn btn-primary"
      >
        Abrir diseño en Figma
      </a>
    </div>
  );
}

export default Worky;
