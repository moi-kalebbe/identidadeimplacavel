"use client";

const testimonials = [
  {
    name: "LAURA MATOS",
    role: "Empresária — São Paulo",
    text: '"Estava completamente perdida, sem saber quem eu era fora dos meus papéis de mãe e esposa. A Identidade Implacável me devolveu minha essência. Hoje tomo decisões com clareza e propósito."',
  },
  {
    name: "NUNO FREITAS",
    role: "Gestor Comercial — Rio de Janeiro",
    text: '"Nunca pensei que uma imersão pudesse mudar tanto minha forma de enxergar a mim mesmo. Em dois meses depois do evento, meu relacionamento melhorou e consegui a promoção que esperava há anos."',
  },
  {
    name: "ANDREA FURTADO",
    role: "Psicóloga — Campinas",
    text: '"A Lu tem um dom especial para tocar a alma das pessoas. Saí da imersão com um plano claro de vida, cura de feridas antigas e, o mais importante, com coragem de ser eu mesma."',
  },
];

function Stars() {
  return (
    <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="star" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section style={{ background: "var(--cr)", padding: "72px 24px", overflow: "hidden" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <div className="section-tag rv" style={{ justifyContent: "center", marginBottom: 12 }}>DEPOIMENTOS</div>
          <h2
            className="rv d1"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(26px, 4vw, 46px)",
              fontWeight: 700,
              color: "var(--txt)",
              lineHeight: 1.2,
              marginBottom: 48,
            }}
          >
            Vidas que foram <em style={{ color: "var(--g)" }}>realmente transformadas</em>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`rv d${i}`}
              style={{
                background: "var(--iv)",
                padding: "40px 32px",
                position: "relative",
                transition: "all 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#fff";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(184,146,42,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--iv)";
                (e.currentTarget as HTMLElement).style.boxShadow = "";
              }}
            >
              {/* Large quote mark */}
              <span
                style={{
                  position: "absolute",
                  top: 16,
                  right: 24,
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 72,
                  color: "rgba(184,146,42,0.12)",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                "
              </span>
              <Stars />
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(15px, 1.8vw, 17px)",
                  fontStyle: "italic",
                  color: "var(--txs)",
                  lineHeight: 1.75,
                  marginBottom: 24,
                }}
              >
                {t.text}
              </p>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: 10, letterSpacing: "0.2em", color: "var(--g)", marginBottom: 4 }}>
                {t.name}
              </div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, fontWeight: 300, color: "var(--mt)" }}>
                {t.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
