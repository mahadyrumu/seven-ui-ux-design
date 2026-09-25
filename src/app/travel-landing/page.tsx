import React from "react";
import Link from "next/link";
import { ChevronDown, Apple, PlusCircle, Plane } from "lucide-react";

export default function TravelApp() {
  return (
    <div
      className="h-[100dvh] bg-blue-400 font-sans text-white overflow-hidden relative flex flex-col items-center selection:bg-white selection:text-blue-500"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-blue-500/15 mix-blend-overlay pointer-events-none" />

      {/* ── Navbar ───────────────────────────────────────── */}
      <nav className="mt-6 relative z-50 shrink-0">
        <div className="flex items-center gap-8 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
          {/* Logo */}
          <div className="flex items-center gap-2 pr-6 border-r border-white/20">
            <div className="relative w-6 h-6 flex items-center justify-center">
              <div className="absolute left-0 w-4 h-4 rounded-full bg-white opacity-90" />
              <div className="absolute right-0 w-4 h-4 rounded-full bg-white/60 backdrop-blur-sm" />
            </div>
            <span className="font-semibold text-lg tracking-tight">Capsule</span>
          </div>
          {/* Links */}
          <div className="hidden md:flex items-center gap-6 text-[14px] font-medium text-white/90">
            <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="#" className="flex items-center gap-1 hover:text-white transition-colors">
              Company <ChevronDown size={14} className="opacity-70" />
            </Link>
            <Link href="#" className="flex items-center gap-1 hover:text-white transition-colors">
              Help <ChevronDown size={14} className="opacity-70" />
            </Link>
          </div>
          {/* Login */}
          <div className="pl-6 border-l border-white/20">
            <Link href="#" className="text-[14px] font-medium hover:text-white/80 transition-colors">
              Log in
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────── */}
      <main className="relative z-10 flex flex-col items-center text-center px-6 w-full flex-1 min-h-0">

        {/* Heading — 3 lines with vertical opacity fade */}
        <div className="mt-6 leading-none select-none text-center">
          {/* Line 1 — full white */}
          <p
            className="text-[clamp(52px,8vw,92px)] font-bold tracking-tight leading-[1.05]"
            style={{ color: "rgba(255,255,255,1)" }}
          >
            Place for your
          </p>
          {/* Line 2 — slightly faded */}
          <p
            className="text-[clamp(52px,8vw,92px)] font-bold tracking-tight leading-[1.05]"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            tickets, booking
          </p>
          {/* Line 3 — most faded */}
          <p
            className="text-[clamp(52px,8vw,92px)] font-bold tracking-tight leading-[1.05]"
            style={{ color: "rgba(255,255,255,0.30)" }}
          >
            and documents
          </p>
        </div>

        {/* ── Cards — negative margin pulls them up ~33% of last line height ── */}
        {/* At 92px font × 1.05 leading ≈ 97px/line → 33% ≈ 32px overlap */}
        <div
          className="relative w-full flex justify-center"
          style={{ marginTop: "-18px" }}
        >
          <div className="relative w-[860px] h-[240px] flex items-start justify-center">

            {/* LEFT CARD — white, tilted left */}
            <div
              className="absolute w-[220px] bg-white rounded-2xl p-5 shadow-2xl text-[#111111]"
              style={{
                transform: "translateX(-370px) translateY(20px) rotate(-10deg)",
                zIndex: 20,
              }}
            >
              <p className="text-left text-[14px] font-medium leading-snug mb-5">
                Manage your flights, <span className="text-blue-500">✈</span><br />
                bookings and documents <span className="text-blue-400">📄</span><br />
                directly in one app <span className="text-blue-300">📱</span>
              </p>
              <button className="w-full py-2.5 bg-[#111111] text-white rounded-xl text-[13px] font-semibold flex items-center justify-center gap-2 hover:bg-black transition-colors">
                <PlusCircle size={15} /> Add your stuff
              </button>
            </div>

            {/* BACK CARD — Norway, white, square, peeks upper-left behind USA */}
            <div
              className="absolute w-[210px] h-[210px] bg-white rounded-2xl p-4 shadow-xl text-[#111111] flex flex-col justify-between"
              style={{
                transform: "translateX(-85px) translateY(-10px) rotate(8deg)",
                zIndex: 10,
              }}
            >
              {/* Norway flag + name stacked vertically */}
              <div className="flex flex-col gap-1">
                <svg width="36" height="23" viewBox="0 0 28 18" xmlns="http://www.w3.org/2000/svg">
                  <rect width="28" height="18" fill="#EF2B2D" rx="2" />
                  <rect x="6" y="0" width="4" height="18" fill="white" />
                  <rect x="0" y="7" width="28" height="4" fill="white" />
                  <rect x="7" y="0" width="2" height="18" fill="#002868" />
                  <rect x="0" y="8" width="28" height="2" fill="#002868" />
                </svg>
              </div>
              <div className="text-left">
                <span className="font-bold text-[14px]">Norway</span>
              </div>
              {/* Days + date */}
              <div className="text-left">
                <h2 className="text-[30px] font-bold leading-none mb-1">12 Days</h2>
                <p className="text-[12px] font-medium text-slate-400">Thu. 5 Dec</p>
              </div>
            </div>

            {/* FRONT CARD — USA, dark square, peeks upper-right in front */}
            <div
              className="absolute w-[225px] h-[225px] bg-[#111111] rounded-[22px] p-5 shadow-2xl flex flex-col"
              style={{
                transform: "translateX(30px) translateY(0px) rotate(-6deg)",
                zIndex: 30,
              }}
            >
              {/* Row 1: Flag left, flight ID right */}
              <div className="flex justify-between items-start">
                <svg width="44" height="28" viewBox="0 0 32 20" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="20" fill="#BF0A30" rx="2" />
                  <rect y="1.5" width="32" height="1.4" fill="white" />
                  <rect y="4.3" width="32" height="1.4" fill="white" />
                  <rect y="7.1" width="32" height="1.4" fill="white" />
                  <rect y="9.9" width="32" height="1.4" fill="white" />
                  <rect y="12.7" width="32" height="1.4" fill="white" />
                  <rect y="15.5" width="32" height="1.4" fill="white" />
                  <rect width="13" height="10.8" fill="#002868" rx="2" />
                  <circle cx="2.2" cy="2" r="0.9" fill="white" />
                  <circle cx="4.6" cy="2" r="0.9" fill="white" />
                  <circle cx="7" cy="2" r="0.9" fill="white" />
                  <circle cx="9.4" cy="2" r="0.9" fill="white" />
                  <circle cx="11.8" cy="2" r="0.9" fill="white" />
                  <circle cx="3.4" cy="4" r="0.9" fill="white" />
                  <circle cx="5.8" cy="4" r="0.9" fill="white" />
                  <circle cx="8.2" cy="4" r="0.9" fill="white" />
                  <circle cx="10.6" cy="4" r="0.9" fill="white" />
                  <circle cx="2.2" cy="6" r="0.9" fill="white" />
                  <circle cx="4.6" cy="6" r="0.9" fill="white" />
                  <circle cx="7" cy="6" r="0.9" fill="white" />
                  <circle cx="9.4" cy="6" r="0.9" fill="white" />
                  <circle cx="11.8" cy="6" r="0.9" fill="white" />
                  <circle cx="3.4" cy="8.5" r="0.9" fill="white" />
                  <circle cx="5.8" cy="8.5" r="0.9" fill="white" />
                  <circle cx="8.2" cy="8.5" r="0.9" fill="white" />
                  <circle cx="10.6" cy="8.5" r="0.9" fill="white" />
                </svg>
                <div className="text-right text-white">
                  <p className="text-[13px] font-bold leading-tight">WE1786</p>
                  <p className="text-[10px] text-slate-400">#WE975333</p>
                </div>
              </div>

              {/* Row 2: USA label on its own line */}
              <div className="text-left mt-3">
                <span className="font-bold text-[14px]">USA</span>
              </div>
              {/* Row 3: 25 Days + plane icons */}
              <div className="flex justify-between items-end flex-1">
                <div className="text-left text-white">
                  <h2 className="text-[30px] font-bold leading-none mb-1">25 Days</h2>
                  <p className="text-[12px] font-medium text-slate-400">Fri, 18 Dec</p>
                </div>
                <div className="flex flex-col items-center gap-1 pb-1">
                  <Plane size={16} className="text-blue-400 -rotate-45" />
                  <div className="w-[1px] h-6 border-l border-dashed border-slate-500" />
                  <Plane size={16} className="text-blue-400 rotate-[135deg]" />
                </div>
              </div>
            </div>

            {/* RIGHT CARD — white, tilted right */}
            <div
              className="absolute w-[210px] bg-white rounded-2xl p-5 shadow-2xl text-[#111111]"
              style={{
                transform: "translateX(310px) translateY(20px) rotate(12deg)",
                zIndex: 20,
              }}
            >
              {/* New Jersey row */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-bold text-[16px]">New Jersey</p>
                  <div className="flex items-center gap-1 mt-0.5 text-slate-400 text-[11px] font-semibold">
                    <Plane size={11} className="text-blue-500" /> 5:23pm
                  </div>
                </div>
                <ArrowIcon direction="up-right" />
              </div>
              {/* Dashed line */}
              <div className="flex justify-left my-3 mx-1">
                <div className="h-9 border-l-[1.5px] border-dashed border-slate-300" />
              </div>
              {/* California row */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="flex items-center gap-1 mb-0.5 text-slate-400 text-[11px] font-semibold">
                    <Plane size={11} className="text-blue-500 rotate-90" /> 8:43pm
                  </div>
                  <p className="font-bold text-[16px]">California</p>
                </div>
                <ArrowIcon direction="down-right" />
              </div>
              <button className="w-full py-2.5 bg-[#111111] text-white rounded-xl text-[13px] font-semibold hover:bg-black transition-colors">
                Check it live
              </button>
            </div>

          </div>{/* /inner card container */}
        </div>{/* /cards margin wrapper */}

        {/* ── Subtext + CTA ──────────────────────────────── */}
        <div className="mt-auto mb-8 flex flex-col items-center gap-6">
          <p className="text-[20px] font-medium text-green-200 leading-relaxed text-center">
            Everything related to travelling<br />
            stored in one place. Never<br />
            forget anything important.
          </p>
          <button className="flex items-center gap-2 px-8 py-4 bg-white text-[#111111] rounded-full font-bold text-[16px] hover:bg-slate-100 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:scale-105">
            <Apple size={20} fill="currentColor" /> Download for iOS
          </button>
        </div>

      </main>
    </div>
  );
}

function ArrowIcon({ direction }: { direction: "up-right" | "down-right" }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={direction === "down-right" ? "rotate-90" : ""}
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}
