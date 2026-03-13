"use client";

import React, { useEffect, useState } from "react";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

const TARGET = new Date("2026-05-23T09:00:00");

export function Countdown() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    function tick() {
      const diff = TARGET.getTime() - Date.now();
      if (diff <= 0) return;
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: time.d, label: "DIAS" },
    { value: time.h, label: "HORAS" },
    { value: time.m, label: "MINUTOS" },
    { value: time.s, label: "SEGUNDOS" },
  ];

  return (
    <section
      className="py-12 px-6 text-center"
      style={{ background: "var(--cr)", borderTop: "1px solid var(--bgm)", borderBottom: "1px solid var(--bgm)" }}
    >
      <p
        className="mb-8"
        style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: "0.45em", color: "var(--g)" }}
      >
        A IMERSÃO COMEÇA EM
      </p>
      <div className="flex justify-center items-start gap-1 flex-wrap">
        {units.map((u, i) => (
          <React.Fragment key={u.label}>
            <div className="flex flex-col items-center" style={{ minWidth: "clamp(52px, 14vw, 88px)" }}>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(40px, 11vw, 80px)",
                  fontWeight: 700,
                  color: "var(--txt)",
                  lineHeight: 1,
                  position: "relative",
                  display: "block",
                }}
              >
                {pad(u.value)}
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "15%",
                    right: "15%",
                    height: 1,
                    background: "var(--gr)",
                    opacity: 0.35,
                  }}
                />
              </span>
              <span
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(9px, 2vw, 12px)",
                  letterSpacing: "0.3em",
                  color: "var(--mt)",
                  marginTop: 10,
                }}
              >
                {u.label}
              </span>
            </div>
            {i < units.length - 1 && (
              <span
                className="cd-sep"
                style={{ alignSelf: "flex-start", paddingTop: "4px" }}
              >
                :
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
