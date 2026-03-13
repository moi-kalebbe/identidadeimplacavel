"use client";

export function Topbar() {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #8A6512, #C9A84C, #8A6512)",
      }}
      className="sticky top-0 z-50 py-3 px-4 text-center"
    >
      <p
        className="font-cinzel text-[#FFF8EE] overflow-hidden text-ellipsis whitespace-nowrap"
        style={{ fontSize: "10px", letterSpacing: "0.3em" }}
      >
        23 DE MAIO &nbsp;|&nbsp; LIMEIRA &nbsp;|&nbsp; VAGAS LIMITADAS
      </p>
    </div>
  );
}
