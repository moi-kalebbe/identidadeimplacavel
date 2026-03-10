"use client";

const items = [
  { text: "Sente que <strong>nasceu para mais</strong>, mas está vivendo abaixo do próprio potencial" },
  { text: "Percebe ciclos de <strong>autossabotagem, insegurança</strong> ou paralisação" },
  { text: "Está cansado de depender de <strong>motivação momentânea</strong> para continuar" },
  { text: "Quer desenvolver <strong>firmeza emocional</strong> e clareza de identidade" },
  { text: "Sente que precisa de uma <strong>virada real</strong>, não apenas de mais uma mensagem bonita" },
  { text: "Quer <strong>romper com a versão fragilizada</strong> e ativar uma identidade forte e alinhada ao propósito" },
];

export function ParaQuemE() {
  return (
    <section style={{ background: "var(--cr)", padding: "72px 24px", overflow: "hidden" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        <div className="section-tag rv" style={{ justifyContent: "center", marginBottom: 12 }}>
          ESSA IMERSÃO É PARA VOCÊ
        </div>
        <h2
          className="rv d1"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(26px, 5vw, 42px)",
            fontWeight: 700,
            color: "var(--txt)",
            marginBottom: 48,
            lineHeight: 1.25,
          }}
        >
          Se você se reconhece
          <br />
          <span style={{ color: "var(--g)" }}>
            <em>em pelo menos um desses pontos</em>
          </span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
            textAlign: "left",
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="rv"
              style={{
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
                padding: "20px 24px",
                background: "rgba(255,255,255,0.7)",
                borderBottom: "2px solid var(--gr)",
              }}
            >
              <span style={{ color: "var(--g)", fontSize: 22, lineHeight: 1, flexShrink: 0 }}>✦</span>
              <p
                style={{ fontFamily: "'Jost', sans-serif", fontSize: 16, color: "var(--txt)", lineHeight: 1.65 }}
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </div>
          ))}
        </div>

        {/* Quote + CTA */}
        <div
          className="rv d2"
          style={{
            marginTop: 48,
            padding: "36px 40px",
            background: "linear-gradient(135deg, #7A5810, #B8922A, #C9A84C)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(17px, 2.5vw, 23px)",
              color: "#FFF8EE",
              fontStyle: "italic",
              lineHeight: 1.6,
              marginBottom: 28,
              textShadow: "0 1px 4px rgba(0,0,0,0.3)",
            }}
          >
            &ldquo;Não é sobre parecer forte por fora.
            <br />
            É sobre se tornar <strong style={{ color: "#FFE88A" }}>firme por dentro.</strong>&rdquo;
          </p>
          <a
            href="#inscricao"
            className="btn-dark"
            style={{
              display: "inline-block",
              fontSize: 11,
              padding: "18px 36px",
              textDecoration: "none",
              maxWidth: 320,
            }}
          >
            ESSA IMERSÃO É PARA MIM
          </a>
        </div>
      </div>
    </section>
  );
}
