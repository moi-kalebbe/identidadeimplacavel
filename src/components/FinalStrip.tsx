"use client";

import React from "react";

export function FinalStrip() {
  return (
    <section
      style={{
        padding: "100px 24px",
        textAlign: "center",
        background: "linear-gradient(160deg, var(--iv) 0%, var(--cr) 50%, var(--bg) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Big watermark */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'Cinzel', serif",
          fontSize: "clamp(100px, 22vw, 240px)",
          fontWeight: 900,
          color: "rgba(184,146,42,0.045)",
          lineHeight: 1,
          pointerEvents: "none",
          whiteSpace: "nowrap",
          userSelect: "none",
        }}
        aria-hidden
      >
        8.0
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div className="section-tag rv" style={{ justifyContent: "center", marginBottom: 12 }}>
          O MOMENTO É AGORA
        </div>
        <h2
          className="rv d1"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(28px, 5.5vw, 60px)",
            fontWeight: 900,
            color: "var(--txt)",
            lineHeight: 1.05,
            margin: "16px 0 20px",
          }}
        >
          Pare de adiar.
          <span
            className="gold-text"
            style={{ display: "block", fontFamily: "'Cinzel', serif" }}
          >
            Comece a viver.
          </span>
        </h2>

        <p
          className="rv d2"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(17px, 2.2vw, 22px)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "var(--txs)",
            marginBottom: 48,
            lineHeight: 1.55,
          }}
        >
          Sua identidade original está esperando para ser resgatada.
        </p>

        {/* Date strip */}
        <div
          className="rv d3"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 24,
            border: "1px solid var(--gr)",
            padding: "16px 36px",
            marginBottom: 44,
            background: "rgba(255,255,255,0.5)",
            backdropFilter: "blur(6px)",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            { n: "23", l: "MAIO" },
            { n: "2026", l: "ANO" },
            { n: "Limeira", l: "LOCAL" },
          ].map((item, i, arr) => (
            <React.Fragment key={item.l}>
              <div style={{ textAlign: "center" }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 700, color: "var(--txt)", display: "block", lineHeight: 1 }}>
                  {item.n}
                </span>
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: 7, letterSpacing: "0.35em", color: "var(--g)" }}>
                  {item.l}
                </span>
              </div>
              {i < arr.length - 1 && (
                <div style={{ width: 1, height: 36, background: "var(--bgm)" }} />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="rv d4">
          <a
            href="#inscricao"
            className="btn-gold"
            style={{ display: "inline-block", padding: "22px 64px", fontSize: 11, textDecoration: "none", borderRadius: 2 }}
          >
            ENTRAR PARA ESSA EXPERIÊNCIA
          </a>
        </div>
      </div>
    </section>
  );
}
