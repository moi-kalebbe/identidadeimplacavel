"use client";

export function Footer() {
  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--bgm)", padding: "40px 24px", textAlign: "center" }}>
      <div
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 13,
          letterSpacing: "0.4em",
          color: "var(--g)",
          marginBottom: 12,
        }}
      >
        IDENTIDADE IMPLACÁVEL 8.0
      </div>
      <div
        style={{
          width: 40,
          height: 1,
          background: "linear-gradient(to right, transparent, var(--gr), transparent)",
          margin: "14px auto",
        }}
      />
      <p
        style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: 12,
          color: "var(--mt)",
          fontWeight: 300,
          letterSpacing: "0.06em",
          lineHeight: 1.8,
        }}
      >
        23 de Maio · Limeira – SP · Vagas Limitadas
        <br />© 2026 Lu Burger — Todos os direitos reservados
      </p>
    </footer>
  );
}
