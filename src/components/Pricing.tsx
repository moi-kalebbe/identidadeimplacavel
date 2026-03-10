"use client";

const checkIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width={8} height={8}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ouroFeatures = [
  "Acesso integral à imersão presencial",
  "Material exclusivo da imersão",
  "Conexões com outros participantes",
  "25/04 · Limeira, SP",
  <><strong>Café da tarde</strong> incluso no evento</>,
];

const vipFeatures = [
  "Tudo do ingresso Ouro",
  <><strong>Camiseta exclusiva</strong> Identidade Implacável</>,
  <><strong>Livro</strong> &ldquo;Ative sua fé como dinamite&rdquo;</>,
  <><strong>Devocional</strong> &ldquo;Deus, Você e eu&rdquo;</>,
  <><strong>Sacola personalizada</strong> Identidade Implacável</>,
  <><strong>Almoço</strong> incluso no evento</>,
  <><strong>Café da tarde</strong> incluso no evento</>,
];

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={12} height={12}>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

interface CardProps {
  tag: string;
  type: string;
  desc: string;
  oldPrice: string;
  price: string;
  installment: string;
  features: React.ReactNode[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
}

function PricingCard({ tag, type, desc, oldPrice, price, installment, features, ctaLabel, ctaHref, featured }: CardProps) {
  return (
    <div
      className={`rv${featured ? " d1" : ""}`}
      style={{
        background: "#F5F0E8",
        border: `${featured ? "2px" : "1px"} solid ${featured ? "var(--gr)" : "var(--bgm)"}`,
        boxShadow: featured
          ? "0 12px 48px rgba(184,146,42,0.2)"
          : "0 8px 40px rgba(184,146,42,0.08)",
        overflow: "visible",
        transition: "all 0.3s",
        position: "relative",
        marginTop: featured ? 24 : 0,
      }}
    >
      {featured && (
        <div
          style={{
            position: "absolute",
            top: -14,
            left: "50%",
            transform: "translateX(-50%)",
            background: "linear-gradient(135deg, var(--g), var(--gl))",
            color: "#FFF8EE",
            fontFamily: "'Cinzel', serif",
            fontSize: 9,
            letterSpacing: "0.25em",
            padding: "5px 20px",
            whiteSpace: "nowrap",
            zIndex: 5,
          }}
        >
          ✦ VIP — MAIS COMPLETO
        </div>
      )}

      {/* Top */}
      <div style={{ padding: "36px 32px 24px" }}>
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: 8, letterSpacing: "0.4em", color: "var(--g)", marginBottom: 12 }}>
          {tag}
        </div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(20px,2.5vw,26px)", fontWeight: 700, color: "var(--txt)", marginBottom: 8 }}>
          {type}
        </div>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 300, color: "var(--txs)", lineHeight: 1.65 }}>
          {desc}
        </p>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "linear-gradient(to right, transparent, var(--bgm), transparent)", margin: "0 32px" }} />

      {/* Price */}
      <div style={{ padding: "24px 32px" }}>
        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, color: "var(--mt)", textDecoration: "line-through", fontWeight: 300, marginBottom: 4 }}>
          {oldPrice}
        </div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px,6vw,60px)", fontWeight: 700, color: "var(--g)", lineHeight: 1, marginBottom: 6 }}>
          {price}
        </div>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, color: "var(--txs)", fontWeight: 300, marginBottom: 28 }}>
          {installment}
        </p>
      </div>

      {/* Features */}
      <div style={{ padding: "0 32px 24px" }}>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
          {features.map((feat, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 300, color: "var(--txs)" }}>
              <div style={{
                width: 16, height: 16, flexShrink: 0, marginTop: 1,
                border: "1px solid var(--gr)", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: featured && i > 0 ? "rgba(184,146,42,0.12)" : undefined,
                color: "var(--g)",
              }}>
                {checkIcon}
              </div>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div style={{ padding: "24px 32px 32px" }}>
        <a
          href={ctaHref}
          className="btn-gold"
          style={{
            display: "block",
            textAlign: "center",
            padding: 20,
            fontSize: 11,
            textDecoration: "none",
            borderRadius: 2,
          }}
        >
          {ctaLabel}
        </a>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 14, fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: 300, color: "var(--mt)" }}>
          <LockIcon />
          Compra 100% segura e protegida
        </div>
      </div>
    </div>
  );
}

export function Pricing() {
  return (
    <section style={{ background: "var(--cr)", padding: "72px 24px" }} id="inscricao">
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <div className="section-tag rv" style={{ justifyContent: "center", marginBottom: 12 }}>GARANTA SUA VAGA</div>
          <h2
            className="rv d1"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,5vw,48px)", fontWeight: 700, color: "var(--txt)", marginBottom: 12 }}
          >
            Escolha seu <span style={{ color: "var(--g)" }}>ingresso</span>
          </h2>
          <p
            className="rv d2"
            style={{ fontFamily: "'Jost', sans-serif", fontSize: 16, fontWeight: 300, color: "var(--txs)", maxWidth: 540, margin: "0 auto 16px", lineHeight: 1.7 }}
          >
            Escolha o ingresso ideal para você e garanta sua transformação em 25 de Abril, em Limeira.
          </p>
        </div>

        {/* Urgency bar */}
        <div style={{ textAlign: "center", background: "linear-gradient(135deg, #9A7318, #C9A84C)", padding: "12px 24px", marginBottom: 32 }}>
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: "0.3em", color: "#FFF8EE", margin: 0 }}>
            ⏳ &nbsp; ATENÇÃO: VALORES DO 1º LOTE — ENCERRAM EM BREVE &nbsp; ⏳
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          <PricingCard
            tag="INGRESSO OURO · 1º LOTE"
            type="Ouro"
            desc="Acesso completo à imersão presencial em Limeira com toda a experiência de transformação ao vivo."
            oldPrice="De R$ 997"
            price="R$ 697"
            installment="ou 12× de R$ 69,70 no cartão"
            features={ouroFeatures}
            ctaLabel="GARANTIR VAGA OURO"
            ctaHref="#"
          />
          <PricingCard
            tag="INGRESSO VIP · 1º LOTE"
            type="VIP — Experiência Completa"
            desc="Tudo do Ouro + uma experiência exclusiva pensada para quem quer viver a imersão no mais alto nível."
            oldPrice="De R$ 1.197"
            price="R$ 897"
            installment="ou 12× de R$ 89,70 no cartão"
            features={vipFeatures}
            ctaLabel="GARANTIR VAGA VIP"
            ctaHref="#"
            featured
          />
        </div>
      </div>
    </section>
  );
}
