"use client";

export function DorSection() {
  const tries = [
    "Você tenta seguir.",
    "Tenta ser forte.",
    "Tenta se reorganizar.",
    "Tenta recomeçar.",
  ];

  return (
    <section style={{ background: "var(--iv)", padding: "72px 24px", overflow: "hidden" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        {/* Impact phrase */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, var(--g), var(--gl))",
              padding: "4px 28px",
              fontFamily: "'Cinzel', serif",
              fontSize: 10,
              letterSpacing: "0.35em",
              color: "#FFF8EE",
              marginBottom: 24,
            }}
          >
            VOCÊ SE IDENTIFICA COM ISSO?
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(26px, 5vw, 42px)",
              fontWeight: 700,
              color: "var(--txt)",
              lineHeight: 1.25,
            }}
          >
            Talvez por fora muita coisa
            <br />
            pareça{" "}
            <em style={{ color: "var(--g)" }}>normal.</em>
          </h2>
        </div>

        {/* Pain text */}
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "var(--txs)",
            lineHeight: 1.85,
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          Mas por dentro, existe um cansaço de repetir padrões, carregar inseguranças, se diminuir,
          se sabotar e viver{" "}
          <strong style={{ color: "var(--txt)" }}>aquém do que você sabe que poderia viver.</strong>
        </p>

        {/* Tries list */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            maxWidth: 480,
            margin: "0 auto",
          }}
        >
          {tries.map((t, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "14px 20px",
                background: "rgba(255,255,255,0.6)",
                borderLeft: "3px solid var(--gr)",
              }}
            >
              <span style={{ color: "var(--g)", fontSize: 20 }}>→</span>
              <span
                style={{ fontFamily: "'Jost', sans-serif", fontSize: 16, color: "var(--txt)" }}
                dangerouslySetInnerHTML={{
                  __html: t.replace(/(seguir|forte|reorganizar|recomeçar)/, "<strong>$1</strong>"),
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
