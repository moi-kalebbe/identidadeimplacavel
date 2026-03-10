"use client";

export function WhySection() {
  return (
    <section style={{ background: "var(--cr)", padding: "72px 24px" }} id="sobre">
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
        {/* Image */}
        <div className="rv" style={{ position: "relative" }}>
          <div style={{ width: "100%", aspectRatio: "4/5", position: "relative", overflow: "hidden" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                border: "1px solid rgba(184,146,42,0.25)",
                zIndex: 2,
                pointerEvents: "none",
                margin: 16,
              }}
            />
            <picture>
              <img
                src="https://blog.luburger.com.br/wp-content/uploads/2026/03/ChatGPT-Image-10-de-mar.-de-2026-07_33_26.png"
                alt="Identidade Implacável"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
              />
            </picture>
          </div>
          {/* Float stat */}
          <div
            style={{
              position: "absolute",
              right: 8,
              bottom: 8,
              background: "rgba(255,255,255,0.92)",
              border: "1px solid rgba(184,146,42,0.3)",
              padding: "8px 14px",
              zIndex: 10,
              boxShadow: "0 8px 24px rgba(184,146,42,0.12)",
            }}
          >
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "var(--g)", lineHeight: 1 }}>+7</div>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: "0.12em", color: "var(--txs)", fontWeight: 300 }}>Edições realizadas</div>
          </div>
        </div>

        {/* Text */}
        <div>
          <div className="section-tag rv" style={{ marginBottom: 16 }}>POR QUE PARTICIPAR</div>
          <h2
            className="rv d1"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(26px, 4vw, 44px)",
              fontWeight: 700,
              color: "var(--txt)",
              lineHeight: 1.25,
              marginBottom: 24,
              marginTop: 16,
            }}
          >
            Não é sobre motivação.
            <br />
            <em style={{ color: "var(--g)" }}>É sobre identidade.</em>
          </h2>
          <p
            className="rv d2"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "clamp(15px, 2vw, 18px)",
              fontWeight: 300,
              color: "var(--txs)",
              lineHeight: 1.85,
              marginBottom: 24,
            }}
          >
            A Imersão Identidade Implacável nasceu para provocar uma virada real.
            <br /><br />
            Não para entregar mais conteúdo solto. Não para emocionar por algumas horas e depois
            deixar tudo voltar ao mesmo lugar.
            <br /><br />
            Mas para conduzir você por uma experiência de{" "}
            <strong>confronto, consciência, fortalecimento e ativação.</strong>
            <br /><br />
            Porque quando a identidade muda, a postura muda.
            <br />
            Quando a postura muda, as decisões mudam.
            <br />
            E quando as decisões mudam,{" "}
            <strong>a vida começa a se reposicionar.</strong>
          </p>
          <blockquote
            className="rv d3 pull-quote"
            style={{ fontSize: "clamp(15px, 2vw, 20px)", marginBottom: 28 }}
          >
            "O que está travando sua vida pode não ser falta de capacidade, mas uma identidade
            enfraquecida."
          </blockquote>
          <a
            href="#inscricao"
            className="rv d3 btn-gold"
            style={{
              display: "inline-block",
              padding: "20px 44px",
              fontSize: 12,
              textDecoration: "none",
              borderRadius: 2,
            }}
          >
            QUERO ME TRANSFORMAR
          </a>
        </div>
      </div>
    </section>
  );
}
