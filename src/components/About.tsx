"use client";

export function About() {
  return (
    <section style={{ background: "var(--iv)", padding: "72px 24px" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 64,
          alignItems: "center",
        }}
      >
        {/* Photo */}
        <div className="rv" style={{ position: "relative" }}>
          <div style={{ width: "100%", aspectRatio: "3/4", position: "relative", overflow: "hidden" }}>
            <picture>
              <source media="(max-width: 767px)" srcSet="https://blog.luburger.com.br/wp-content/uploads/2026/03/identidade-1080-x-1920-px-8.png" />
              <source media="(min-width: 768px)" srcSet="https://blog.luburger.com.br/wp-content/uploads/2026/03/Implacavel-2.png" />
              <img
                src="https://blog.luburger.com.br/wp-content/uploads/2026/03/Implacavel-2.png"
                alt="Lu Burger"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
              />
            </picture>
          </div>
          {/* Badge */}
          <div
            style={{
              position: "absolute",
              right: 8,
              bottom: 8,
              background: "linear-gradient(135deg, #9A7220, var(--gr))",
              color: "var(--iv)",
              padding: "14px 20px",
              zIndex: 10,
              boxShadow: "0 12px 32px rgba(184,146,42,0.3)",
            }}
          >
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, lineHeight: 1 }}>+10.000</div>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: "0.18em", fontWeight: 300, marginTop: 4, opacity: 0.9 }}>Vidas transformadas</div>
          </div>
        </div>

        {/* Text */}
        <div className="about-text" style={{ textAlign: "left" }}>
          <div className="section-tag rv" style={{ marginBottom: 16 }}>QUEM É</div>
          <h2
            className="rv d1"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(26px, 3.5vw, 42px)",
              fontWeight: 700,
              color: "var(--txt)",
              lineHeight: 1.2,
              marginBottom: 8,
              marginTop: 16,
            }}
          >
            Conheça a criadora do método
          </h2>
          <div
            className="rv d1"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(20px, 3vw, 32px)",
              fontWeight: 900,
              color: "var(--g)",
              letterSpacing: "0.08em",
              marginBottom: 24,
            }}
          >
            LU BURGER
          </div>
          <p
            className="rv d2"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "clamp(15px, 2vw, 18px)",
              fontWeight: 300,
              color: "var(--txs)",
              lineHeight: 1.85,
            }}
          >
            Eu sou a imagem e semelhança do meu Criador. Filha amada do meu Pai, esposa do Gustavo
            e mãe dos filhos Bruno e Valentina. Compreendo profundamente a importância de{" "}
            <strong>relacionamentos saudáveis e duradouros.</strong>
            <br /><br />
            Sou treinadora comportamental, <strong>Master Coach com formação internacional</strong>, analista
            comportamental, <strong>Especialista em doenças psicossomáticas</strong>, palestrante e escritora
            apaixonada por transformar vidas.
            <br /><br />
            Como Evangelista, empresária e criadora do método <strong>Identidade Implacável</strong>, meu
            objetivo é restaurar sonhos, projetos, casamentos, identidades e relacionamentos entre
            pais e filhos. Dedico minha carreira a ativar a fé e a esperança em pessoas que se
            sentem adormecidas ou sem direção na vida.
            <br /><br />
            Estou comprometida em conduzir cada pessoa a viver seu plano original, alinhando suas
            vidas aos valores e princípios e descobrindo seu{" "}
            <strong>propósito em Deus.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
