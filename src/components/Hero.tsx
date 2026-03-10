"use client";

export function Hero() {
  return (
    <section
      className="flex flex-col w-full"
      style={{ background: "linear-gradient(160deg, #F0EBE0 0%, #E8DFD0 60%, #DDD0BC 100%)" }}
    >
      {/* Photo */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "clamp(380px, 110vw, 720px)" }}
      >
        <picture
          style={{
            position: "absolute",
            inset: 0,
            display: "block",
            width: "100%",
            height: "100%",
          }}
        >
          <source
            media="(max-width: 767px)"
            srcSet="https://blog.luburger.com.br/wp-content/uploads/2026/03/identidade-1080-x-1920-px-2.png"
          />
          <source
            media="(min-width: 768px)"
            srcSet="https://blog.luburger.com.br/wp-content/uploads/2026/03/ChatGPT-Image-9-de-mar.-de-2026-07_42_59.png"
          />
          <img
            src="https://blog.luburger.com.br/wp-content/uploads/2026/03/identidade-1080-x-1920-px-2.png"
            alt="Lu Burger — Identidade Implacável"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
        </picture>
      </div>

      {/* Content */}
      <div
        className="flex flex-col items-center text-center px-6 pt-12 pb-16 w-full max-w-3xl mx-auto"
        style={{ background: "linear-gradient(180deg, #F0EBE0 0%, #E8DFD0 100%)" }}
      >
        {/* Badge */}
        <div
          className="inline-flex items-center gap-3 opacity-0 btn-gold"
          style={{
            border: "none",
            padding: "10px 28px",
            marginBottom: "28px",
            animation: "fadeUp 0.8s ease forwards 0.2s, shimmer 3s linear infinite",
            fontFamily: "'Cinzel', serif",
            fontSize: "12px",
            letterSpacing: "0.45em",
            color: "#1A0F00",
            fontWeight: 700,
            borderRadius: 2,
            boxShadow: "0 6px 28px rgba(184,146,42,0.45)",
          }}
        >
          <span
            className="animate-blink"
            style={{ width: 6, height: 6, background: "#1A0F00", borderRadius: "50%", display: "inline-block", opacity: 0.6 }}
          />
          EDIÇÃO 8.0 · 2026
        </div>

        {/* Subtitle */}
        <p
          className="opacity-0"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "clamp(18px, 4.5vw, 26px)",
            fontWeight: 300,
            color: "var(--txs)",
            lineHeight: 1.75,
            marginBottom: "28px",
            animation: "fadeUp 0.8s ease forwards 0.4s",
            maxWidth: 520,
          }}
        >
          Para pessoas que entenderam que existe muito mais para viver.
        </p>

        {/* Divider */}
        <div
          className="opacity-0"
          style={{
            width: 48,
            height: 2,
            background: "linear-gradient(to right, var(--g), var(--gl))",
            marginBottom: 28,
            animation: "fadeUp 0.8s ease forwards 0.55s",
          }}
        />

        {/* Meta */}
        <div
          className="flex flex-col gap-4 mb-10 opacity-0"
          style={{
            animation: "fadeUp 0.8s ease forwards 0.7s",
            borderTop: "1px solid rgba(184,146,42,0.25)",
            paddingTop: 24,
            width: "100%",
            maxWidth: 340,
          }}
        >
          {/* Date */}
          <div className="flex items-center justify-center gap-3" style={{ fontFamily: "'Jost', sans-serif", fontSize: "clamp(16px,3.5vw,20px)", color: "var(--txt)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--g)" strokeWidth="1.5" strokeLinecap="round">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>
              <strong style={{ color: "var(--g)", fontWeight: 600, fontSize: "clamp(18px,4vw,22px)" }}>25 de Abril de 2026</strong>
            </span>
          </div>
          {/* Location */}
          <div className="flex items-center justify-center gap-3" style={{ fontFamily: "'Jost', sans-serif", fontSize: "clamp(16px,3.5vw,20px)", color: "var(--txt)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--g)" strokeWidth="1.5" strokeLinecap="round">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>
              <strong style={{ color: "var(--g)", fontWeight: 600, fontSize: "clamp(18px,4vw,22px)" }}>Limeira — SP</strong>
            </span>
          </div>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col items-center gap-3 w-full opacity-0"
          style={{ maxWidth: 380, animation: "fadeUp 0.8s ease forwards 0.9s", margin: "0 auto" }}
        >
          <a
            href="#inscricao"
            className="btn-gold block w-full text-center"
            style={{ padding: "20px 44px", fontSize: 12, textDecoration: "none", borderRadius: 2 }}
          >
            ENTRAR PARA ESSA EXPERIÊNCIA
          </a>
          <a
            href="#sobre"
            className="block w-full text-center"
            style={{
              border: "1.5px solid var(--g)",
              color: "var(--g)",
              fontFamily: "'Cinzel', serif",
              fontSize: 11,
              letterSpacing: "0.28em",
              padding: "16px 32px",
              textDecoration: "none",
              background: "transparent",
              transition: "all 0.3s",
            }}
          >
            SAIBA MAIS
          </a>
        </div>
      </div>
    </section>
  );
}
