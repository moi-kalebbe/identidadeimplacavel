"use client";

const methodCards = [
  {
    label: "IDENTIDADE",
    text: "Toda mudança consistente começa quando a identidade certa é ativada.",
  },
  {
    label: "POSTURA",
    text: "Quando a identidade muda, a postura muda. E quando a postura muda, a vida se reposiciona.",
  },
  {
    label: "ATIVAÇÃO",
    text: "O próximo nível exige uma versão sua que talvez ainda não tenha sido sustentada.",
  },
];

export function MethodAuthority() {
  return (
    <section
      style={{
        background: "linear-gradient(160deg, #E8DCC8 0%, #D4C4A0 50%, #E8DCC8 100%)",
        padding: "80px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative rings */}
      {[600, 400].map((size, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: `min(${size}px, 90vw)`,
            height: `min(${size}px, 90vw)`,
            border: `1px solid rgba(201,168,76,${i === 0 ? "0.08" : "0.06"})`,
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
      ))}

      <div style={{ position: "relative", zIndex: 2, maxWidth: 700, margin: "0 auto" }}>
        <div
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 10,
            letterSpacing: "0.4em",
            color: "var(--gl)",
            marginBottom: 28,
          }}
        >
          ✦ &nbsp; O MÉTODO &nbsp; ✦
        </div>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(26px, 5vw, 50px)",
            color: "#1E1408",
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: 32,
          }}
        >
          Identidade Implacável
          <br />
          <span style={{ color: "#9A7318" }}>não é apenas um nome.</span>
          <br />
          <em style={{ fontSize: "0.85em", color: "#9A7318" }}>É um chamado.</em>
        </h2>

        <div style={{ width: 60, height: 2, background: "#B8922A", margin: "0 auto 32px" }} />

        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "clamp(17px, 2.5vw, 22px)",
            color: "#2A1E0A",
            lineHeight: 1.85,
            marginBottom: 20,
          }}
        >
          A proposta não é gerar apenas emoção momentânea.
          <br />
          <strong style={{ color: "#9A7318" }}>É provocar transformação real.</strong>
        </p>

        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "clamp(16px, 2.2vw, 20px)",
            color: "#3A2E1C",
            lineHeight: 1.9,
            marginBottom: 48,
          }}
        >
          Porque uma vida forte não se constrói apenas com inspiração.
          <br />
          Se constrói com identidade.
          <br /><br />
          E quando a identidade está alinhada, a mente se fortalece, a postura se firma
          <br />
          e as decisões passam a refletir quem você realmente nasceu para ser.
        </p>

        {/* 3 impact cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 20,
            marginBottom: 48,
          }}
        >
          {methodCards.map((card) => (
            <div
              key={card.label}
              style={{
                border: "1.5px solid #B8922A",
                padding: "24px 20px",
                background: "rgba(255,255,255,0.55)",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  color: "#9A7318",
                  fontFamily: "'Cinzel', serif",
                  fontSize: 11,
                  letterSpacing: "0.3em",
                  marginBottom: 12,
                }}
              >
                {card.label}
              </div>
              <p
                style={{
                  color: "#1E1408",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 15,
                  lineHeight: 1.55,
                }}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#inscricao"
          className="btn-gold"
          style={{
            display: "inline-block",
            padding: "20px 52px",
            fontSize: 12,
            textDecoration: "none",
            borderRadius: 2,
          }}
        >
          GARANTIR MINHA VAGA AGORA
        </a>
      </div>
    </section>
  );
}
