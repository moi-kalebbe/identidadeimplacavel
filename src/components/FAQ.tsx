"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Como faço para garantir minha vaga na imersão?",
    a: "Basta clicar no botão de inscrição, escolher a modalidade e realizar o pagamento. Após a confirmação, você receberá todos os detalhes de acesso no e-mail cadastrado.",
  },
  {
    q: "O que acontece se eu não puder comparecer presencialmente?",
    a: "Você pode optar pela modalidade Online Zoom e participar ao vivo de onde estiver. A experiência é transmitida com a mesma energia e conteúdo completo da imersão presencial.",
  },
  {
    q: "Qual a diferença entre o ingresso Ouro e o VIP?",
    a: "No Ouro você tem acesso integral à imersão presencial. No VIP você recebe, além de tudo do Ouro, camiseta exclusiva, livro, devocional, sacola personalizada e almoço incluso.",
  },
  {
    q: "Ainda tenho dúvidas. Como entro em contato?",
    a: "Fale diretamente pelo WhatsApp clicando no botão abaixo. Nossa equipe vai te atender e esclarecer todas as dúvidas para você tomar a melhor decisão.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  function toggle(i: number) {
    setOpen(open === i ? null : i);
  }

  return (
    <section style={{ background: "var(--iv)", padding: "72px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 16px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-tag rv" style={{ justifyContent: "center", marginBottom: 12 }}>PERGUNTAS FREQUENTES</div>
          <h2
            className="rv d1"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(24px, 4vw, 40px)",
              fontWeight: 700,
              color: "var(--txt)",
              lineHeight: 1.2,
            }}
          >
            Dúvidas? <em style={{ color: "var(--g)" }}>Respondemos aqui.</em>
          </h2>
        </div>

        <div
          className="rv d2"
          style={{
            border: "1px solid var(--bgm)",
            overflow: "hidden",
          }}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{ borderBottom: i < faqs.length - 1 ? "1px solid var(--bgm)" : undefined, overflow: "hidden" }}
            >
              <button
                onClick={() => toggle(i)}
                style={{
                  width: "100%",
                  padding: "22px 28px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "clamp(14px, 2vw, 17px)",
                  fontWeight: 400,
                  color: open === i ? "var(--g)" : "var(--txt)",
                  textAlign: "left",
                  transition: "background 0.25s",
                  outline: "none",
                }}
              >
                <span style={{ wordBreak: "break-word", overflowWrap: "break-word", flex: 1 }}>{faq.q}</span>
                <span
                  style={{
                    width: 24,
                    height: 24,
                    border: "1px solid rgba(184,146,42,0.4)",
                    borderRadius: "50%",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 17,
                    color: "var(--g)",
                    transition: "transform 0.3s",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    background: open === i ? "rgba(184,146,42,0.08)" : undefined,
                  }}
                >
                  +
                </span>
              </button>
              <div
                className={`faq-a${open === i ? " open" : ""}`}
                style={{ padding: open === i ? "0 28px 22px" : "0 28px" }}
              >
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "clamp(13px, 1.8vw, 16px)",
                    fontWeight: 300,
                    color: "var(--txs)",
                    lineHeight: 1.8,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
