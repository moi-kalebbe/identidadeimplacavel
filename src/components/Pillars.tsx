"use client";

const pillars = [
  {
    num: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={20} height={20}>
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    name: "RECONHECIMENTO",
    desc: "Enxergar com clareza os padrões, dores, travas e narrativas internas que enfraquecem sua identidade e travam sua evolução.",
  },
  {
    num: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={20} height={20}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    name: "CONFRONTO",
    desc: "Encarar aquilo que vem impedindo você de viver com firmeza, posicionamento e plenitude. Sem máscaras, sem fugas.",
  },
  {
    num: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={20} height={20}>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    name: "REPOSICIONAMENTO",
    desc: "Reconstruir a forma como você se vê, interpreta sua história e sustenta sua presença no mundo.",
  },
  {
    num: "04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={20} height={20}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    name: "FORTALECIMENTO",
    desc: "Consolidar uma identidade mais consciente, estável, madura e inegociável através de direcionamentos práticos e profundos.",
  },
  {
    num: "05",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={20} height={20}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    name: "ATIVAÇÃO",
    desc: "Sair com clareza sobre quem você precisa ser, o que precisa romper e o que precisa sustentar daqui para frente.",
  },
];

export function Pillars() {
  return (
    <section style={{ background: "var(--iv)", padding: "72px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <div className="section-tag rv" style={{ justifyContent: "center", marginBottom: 12 }}>A JORNADA DA IMERSÃO</div>
          <h2
            className="rv d1"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 700,
              color: "var(--txt)",
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Você será conduzido por
            <br />
            <span style={{ color: "var(--g)" }}>5 etapas de ativação</span>
          </h2>
          <p
            className="rv d1"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "clamp(15px, 2vw, 18px)",
              fontWeight: 300,
              color: "var(--txs)",
              maxWidth: 600,
              margin: "0 auto 48px",
              lineHeight: 1.7,
            }}
          >
            Cada etapa foi desenhada para tocar áreas profundas da identidade e ajudar a romper
            com a versão enfraquecida que vem limitando seus passos.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 16,
          }}
          className="pillars-grid"
        >
          {pillars.map((p, i) => (
            <div
              key={p.num}
              className={`rv d${Math.min(i, 3)}`}
              style={{
                background: "var(--cr)",
                padding: "32px 28px",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.4s ease",
                borderBottom: "2px solid transparent",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#fff";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 48px rgba(184,146,42,0.1)";
                (e.currentTarget as HTMLElement).style.borderBottom = "2px solid var(--gr)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--cr)";
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "";
                (e.currentTarget as HTMLElement).style.borderBottom = "2px solid transparent";
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(28px,4vw,40px)",
                  fontWeight: 700,
                  color: "#5C3A1E",
                  lineHeight: 1,
                  marginBottom: 12,
                }}
              >
                {p.num}
              </div>
              <div
                style={{
                  width: 40,
                  height: 40,
                  border: "1px solid rgba(184,146,42,0.3)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.5)",
                  marginBottom: 16,
                  color: "var(--g)",
                }}
              >
                {p.icon}
              </div>
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  color: "var(--g)",
                  marginBottom: 12,
                }}
              >
                {p.name}
              </div>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: 15,
                  fontWeight: 300,
                  color: "var(--txs)",
                  lineHeight: 1.8,
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
