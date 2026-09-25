"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowUp, ArrowDown, ArrowLeftRight, Check } from "lucide-react";

export default function FinanceDashboard() {
  const [activeBarIndex, setActiveBarIndex] = useState(3);
  const [spotifyActive, setSpotifyActive] = useState(true);
  const [netflixActive, setNetflixActive] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-[#0B0F19] selection:bg-[#2563EB] selection:text-white">
      {/* ---------------------------------------------------- */}
      {/* 1. Header / Navigation                               */}
      {/* ---------------------------------------------------- */}
      <header className="w-full border-b border-transparent">
        <nav className="flex items-center justify-between px-6 sm:px-10 lg:px-16 py-6 max-w-[1400px] mx-auto">
          {/* Brand Logo */}
          <Link href="/finance-landing" className="flex items-center gap-2.5 group">
            {/* FinSuite Cute Wallet / Card Icon */}
            <div className="relative w-8 h-8 flex items-center justify-center">
              {/* Back Card: Lime Accent */}
              <div className="absolute top-0.5 right-1 w-5 h-3 bg-[#BAF84B] rounded-sm transform -rotate-12 transition-transform group-hover:rotate-0" />
              {/* Front Card / Wallet: Rich Blue */}
              <div className="relative w-7 h-5.5 bg-[#2563EB] rounded-[7px] shadow-sm flex items-center justify-center">
                <div className="w-3.5 h-1 bg-white/40 rounded-full" />
              </div>
            </div>
            <span className="font-bold text-[22px] tracking-tight text-[#0B0F19]">FinSuite</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-9 text-[14.5px] font-medium text-[#64748B]">
            <Link href="#" className="text-[#0B0F19] font-semibold transition-colors">
              Home
            </Link>
            <Link href="#" className="hover:text-[#0B0F19] transition-colors">
              About Us
            </Link>
            <Link href="#" className="hover:text-[#0B0F19] transition-colors">
              Blog
            </Link>
            <div className="relative group cursor-pointer flex items-center gap-1 hover:text-[#0B0F19] transition-colors">
              <span>Pages</span>
              <ChevronDown size={14} className="stroke-[2.5] text-[#94A3B8] group-hover:text-[#0B0F19] transition-colors" />
            </div>
            <Link href="#" className="hover:text-[#0B0F19] transition-colors">
              Pricing
            </Link>
          </div>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-6 sm:gap-7">
            <Link
              href="#"
              className="text-[14.5px] font-semibold text-[#0B0F19] hover:text-[#2563EB] transition-colors"
            >
              Log In
            </Link>
            <button className="px-6 py-2.5 rounded-full bg-[#0B0F19] text-white text-[14px] font-semibold hover:bg-black transition-all shadow-sm hover:shadow-md cursor-pointer active:scale-95">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {/* ---------------------------------------------------- */}
      {/* 2. Hero Section                                      */}
      {/* ---------------------------------------------------- */}
      <main className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-8 sm:pt-12 pb-20 lg:pb-28">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10">
          
          {/* Left Column: Hero Copy */}
          <div className="flex-1 w-full max-w-[580px]">
            {/* Pill Tag */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#F3E8FF] text-[#9333EA] text-[12.5px] font-semibold mb-6 tracking-tight">
              Finance Solutions for You
            </div>

            {/* Main Headline */}
            <h1 className="text-[52px] sm:text-[64px] lg:text-[72px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0B0F19] mb-6">
              <span className="inline-flex items-center gap-3">
                Maximize
                {/* Overlapping Circles: Black + Lime Green with Trend Arrow */}
                <span className="inline-flex items-center align-middle -mt-1 sm:-mt-2 select-none">
                  {/* Black Circle */}
                  <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0B0F19] flex items-center justify-center z-10 shadow-sm">
                    <span className="w-3 h-3 rounded-full bg-white/20" />
                  </span>
                  {/* Lime Green Overlapping Circle */}
                  <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#BAF84B] -ml-4 flex items-center justify-center z-20 shadow-md">
                    {/* Diagonal Trend Arrow */}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#0B0F19]"
                    >
                      <path
                        d="M4 14L9 9L12.5 12.5L16.5 6M16.5 6H12M16.5 6V10.5"
                        stroke="#0B0F19"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </span>
              <br />
              <span>Your </span>
              {/* Blue "Financial" with Hand-Drawn Underline */}
              <span className="relative text-[#2563EB] inline-block">
                Financial
                {/* Hand-Drawn Double Scribble SVG Underline */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-[14px] text-[#2563EB] pointer-events-none select-none"
                  viewBox="0 0 240 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2.5 7.5C55 2.5 170 -1.5 237.5 7"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10 11.5C65 7 185 4.5 230 11"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    opacity="0.85"
                  />
                </svg>
              </span>
              <br />
              <span>Potential</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[17px] leading-[1.6] text-[#64748B] mb-9 max-w-[480px]">
              Welcome to FinSuite, where financial management meets simplicity and efficiency.
            </p>

            {/* CTA Button */}
            <button className="px-9 py-4 rounded-full bg-[#0B0F19] text-white font-semibold text-[15px] hover:bg-black transition-all shadow-[0_12px_28px_-6px_rgba(11,15,25,0.25)] hover:shadow-[0_16px_32px_-6px_rgba(11,15,25,0.35)] active:scale-98 cursor-pointer">
              Get Started
            </button>
          </div>

          {/* Right Column: High-Fidelity Hero Dashboard Mockup */}
          <div className="flex-1 w-full max-w-[560px] lg:max-w-[590px] relative">
            
            {/* The Main Window Frame (Entire background is grey) */}
            <div className="w-full bg-[#F5F6F8] rounded-[32px] sm:rounded-[36px] border border-slate-200/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.07)] p-4 sm:p-6 relative overflow-hidden">
              
              {/* Soft Ambient Cyan/Blue Glow in Top-Right Corner */}
              <div className="absolute -top-12 -right-12 w-80 h-80 bg-gradient-to-br from-[#388BF5]/15 via-[#388BF5]/5 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

              {/* Top Action Bar (Clean Rounded White Row without shadow) */}
              <div className="w-full mb-4 relative z-10 select-none">
                <div className="w-full bg-white rounded-full border border-slate-200/50 shadow-none px-4 sm:px-5 py-2 flex items-center justify-between">
                  {/* Left: Traffic Light Control Dots */}
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FB7185]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#34D399]" />
                  </div>

                  {/* Center: Subtle Navigation Capsule */}
                  <div className="w-28 sm:w-40 h-2 bg-[#EDF0F5] rounded-full mx-auto" />

                  {/* Right: Window Control Pill */}
                  <div className="w-6 sm:w-7 h-2 bg-[#EDF0F5] rounded-full" />
                </div>
              </div>

              {/* Top Cards Row: Netflix & Floating Spotify */}
              <div className="relative mb-5 min-h-[160px] z-10">
                
                {/* 1. Netflix Card */}
                <div className="w-[215px] sm:w-[232px] bg-white rounded-[28px] border border-slate-100 shadow-[0_8px_24px_rgba(0,0,0,0.04)] p-5 sm:p-5.5 relative z-10 transition-transform hover:-translate-y-0.5 duration-200">
                  <div className="flex items-start justify-between">
                    <div>
                      {/* Netflix Logo & Label */}
                      <div className="flex items-center gap-2.5 mb-6">
                        {/* Netflix N Logo Ribbon */}
                        <div className="w-7 h-7 flex items-center justify-center">
                          <svg className="w-4 h-6" viewBox="0 0 16 24" fill="none">
                            <path d="M0 0H4.2V24H0V0Z" fill="#B81D24" />
                            <path d="M11.8 0H16V24H11.8V0Z" fill="#B81D24" />
                            <path d="M0 0H4.4L16 24H11.6L0 0Z" fill="#E50914" />
                          </svg>
                        </div>
                        <span className="font-bold text-[16px] text-[#0B0F19] tracking-tight">Netflix</span>
                      </div>

                      {/* Price */}
                      <div className="flex items-baseline gap-1">
                        <span className="text-[26px] sm:text-[28px] font-black text-[#0B0F19] tracking-tight leading-none">$24</span>
                        <span className="text-[12.5px] text-[#94A3B8] font-medium">/month</span>
                      </div>
                    </div>

                    {/* Vertical Pill Status Switch */}
                    <button
                      onClick={() => setNetflixActive(!netflixActive)}
                      className="w-6.5 sm:w-7 h-12 sm:h-13 bg-[#F4F5F7] rounded-full p-1 flex flex-col items-center justify-between cursor-pointer transition-colors mt-0.5"
                      title="Toggle Netflix status"
                    >
                      <span className="text-[11.5px] text-[#9CA3AF] font-bold leading-none mt-0.5">×</span>
                      <span
                        className={`w-4.5 h-4.5 rounded-full flex items-center justify-center transition-all ${
                          netflixActive ? "bg-[#2563EB] text-white shadow-xs" : "text-[#475569]"
                        }`}
                      >
                        <Check size={11} className="stroke-[3]" />
                      </span>
                    </button>
                  </div>
                </div>

                {/* 2. Floating Spotify Card (Vivid Blue, 2.5° Rotation, Bottom-Right Toggle) */}
                <div className="absolute top-[-6px] sm:top-[-10px] right-[-6px] sm:right-[-14px] w-[260px] sm:w-[286px] bg-[#388BF5] rounded-[30px] p-5.5 sm:p-6 text-white shadow-[0_20px_45px_-8px_rgba(56,139,245,0.48)] z-20 transform rotate-[2.5deg] hover:rotate-0 transition-transform duration-300">
                  
                  {/* Top: Spotify Icon with Halo & Brand Name */}
                  <div className="flex items-center gap-3 mb-5">
                    {/* Spotify Icon with Halo */}
                    <div className="w-10 h-10 rounded-full bg-[#5C9DFA] flex items-center justify-center shrink-0 shadow-xs">
                      <div className="w-6.5 h-6.5 rounded-full bg-white flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#388BF5]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.58 14.42c-.18.3-.56.4-.86.22-2.36-1.44-5.32-1.76-8.82-.96-.34.08-.68-.14-.76-.48-.08-.34.14-.68.48-.76 3.84-.88 7.12-.52 9.74 1.08.3.18.4.56.22.9zm1.22-2.72c-.22.36-.7.48-1.06.26-2.7-1.66-6.82-2.14-10.02-1.16-.42.12-.84-.12-.98-.52-.12-.42.12-.84.52-.98 3.66-1.12 8.22-.58 11.28 1.3.36.22.48.7.26 1.1zm.12-2.88c-3.24-1.92-8.58-2.1-11.68-1.16-.5.16-1.02-.12-1.18-.62-.16-.5.12-1.02.62-1.18 3.56-1.08 9.46-.86 13.2 1.36.46.28.6.86.32 1.32-.26.44-.86.58-1.28.28z" />
                        </svg>
                      </div>
                    </div>
                    <span className="font-bold text-[19px] tracking-tight text-white">Spotify</span>
                  </div>

                  {/* Bottom: Price on Left, White Toggle Pill on Right */}
                  <div className="flex items-end justify-between">
                    <div className="flex items-baseline gap-1">
                      <span className="text-[30px] sm:text-[34px] font-extrabold tracking-tight text-white leading-none">
                        $13
                      </span>
                      <span className="text-[13px] text-white/85 font-medium">/month</span>
                    </div>

                    {/* White Vertical Toggle Switch with Blue Knob */}
                    <button
                      onClick={() => setSpotifyActive(!spotifyActive)}
                      className="w-7 sm:w-8 h-14 sm:h-16 bg-white rounded-full p-1 flex flex-col items-center justify-between cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-transform active:scale-95"
                      title="Toggle Spotify status"
                    >
                      <span className="text-[12px] text-[#71717A] font-bold leading-none mt-1">×</span>
                      <span
                        className={`w-5 sm:w-6 h-5 sm:h-6 rounded-full flex items-center justify-center transition-all ${
                          spotifyActive ? "bg-[#388BF5] text-white shadow-xs" : "bg-[#CBD5E1] text-white"
                        }`}
                      >
                        <Check size={11} className="stroke-[3.5]" />
                      </span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Lower Section: Dedicated White Card holding Balance, Actions & Chart (Without Any Shadow) */}
              <div className="w-full bg-white rounded-[26px] sm:rounded-[30px] border border-slate-200/50 p-6 sm:p-7 shadow-none relative z-10">
                
                {/* Balance & Action Circular Buttons */}
                <div className="flex items-end justify-between mb-8">
                  <div>
                    <p className="text-[14px] font-medium text-[#4B5563] mb-1.5">My Balance</p>
                    <h2 className="text-[34px] sm:text-[40px] font-black tracking-tight text-[#0B0F19] leading-none mb-2">
                      $9,823,28
                    </h2>
                    <p className="text-[11.5px] text-[#94A3B8] font-medium tracking-tight">
                      Your made an extra $2,832.19 in this month.
                    </p>
                  </div>

                  {/* 3 Circular Actions: Send, Receive, Convert */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* 1. Send Button */}
                    <div className="flex flex-col items-center gap-1 group cursor-pointer">
                      <button className="w-10 h-10 rounded-full bg-[#F1F3F7] group-hover:bg-[#E2E8F0] flex items-center justify-center text-[#334155] transition-colors shadow-none">
                        <ArrowUp size={16} className="stroke-[2.5]" />
                      </button>
                      <span className="text-[11px] font-medium text-[#64748B] group-hover:text-[#0B0F19] transition-colors">
                        Send
                      </span>
                    </div>

                    {/* 2. Receive Button */}
                    <div className="flex flex-col items-center gap-1 group cursor-pointer">
                      <button className="w-10 h-10 rounded-full bg-[#F1F3F7] group-hover:bg-[#E2E8F0] flex items-center justify-center text-[#334155] transition-colors shadow-none">
                        <ArrowDown size={16} className="stroke-[2.5]" />
                      </button>
                      <span className="text-[11px] font-medium text-[#64748B] group-hover:text-[#0B0F19] transition-colors">
                        Receive
                      </span>
                    </div>

                    {/* 3. Convert Button */}
                    <div className="flex flex-col items-center gap-1 group cursor-pointer">
                      <button className="w-10 h-10 rounded-full bg-[#F1F3F7] group-hover:bg-[#E2E8F0] flex items-center justify-center text-[#334155] transition-colors shadow-none">
                        <ArrowLeftRight size={15} className="stroke-[2.5]" />
                      </button>
                      <span className="text-[11px] font-medium text-[#64748B] group-hover:text-[#0B0F19] transition-colors">
                        Convert
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hero Bar Chart */}
                <div className="relative pt-4 pb-2">
                  {/* Y-Axis Grid Labels */}
                  <div className="absolute left-0 top-0 bottom-4 flex flex-col justify-between text-[10.5px] font-semibold text-[#CBD5E1] pointer-events-none select-none">
                    <span>150K</span>
                    <span>125K</span>
                    <span>100K</span>
                  </div>

                  {/* Vertical Bars */}
                  <div className="pl-12 pr-2 h-36 flex items-end justify-between gap-3">
                    {[
                      { height: 42, active: false },
                      { height: 58, active: false },
                      { height: 35, active: false },
                      { height: 86, active: true }, // The Featured Purple-Blue Bar
                      { height: 48, active: false },
                      { height: 44, active: false },
                      { height: 75, active: false },
                    ].map((bar, i) => (
                      <div
                        key={i}
                        onClick={() => setActiveBarIndex(i)}
                        className="flex-1 flex flex-col items-center justify-end h-full cursor-pointer group"
                      >
                        {/* Active Tooltip ($4,239,12) */}
                        {i === activeBarIndex && (
                          <div className="relative -mb-1 z-20 flex flex-col items-center animate-fade-in">
                            <div className="bg-[#0B0F19] text-white text-[11px] font-bold px-2.5 py-1 rounded-[6px] shadow-lg tracking-tight whitespace-nowrap">
                              $4,239,12
                            </div>
                            {/* Triangle Down Pointer */}
                            <div className="w-0 h-0 border-x-4 border-x-transparent border-t-5 border-t-[#0B0F19] -mt-0.5" />
                          </div>
                        )}

                        {/* The Bar Pillar */}
                        <div
                          style={{ height: `${bar.height}%` }}
                          className={`w-full max-w-[34px] rounded-t-[10px] relative transition-all duration-300 ${
                            i === activeBarIndex
                              ? "bg-gradient-to-t from-[#2563EB] to-[#8B5CF6] shadow-[0_8px_20px_rgba(37,99,235,0.35)]"
                              : "bg-[#F1F3F7] group-hover:bg-[#E2E8F0]"
                          }`}
                        >
                          {/* Center Dotted Line inside Active Bar */}
                          {i === activeBarIndex && (
                            <div className="absolute inset-y-2 left-1/2 -translate-x-1/2 w-px border-r border-dashed border-white/50" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </main>

      {/* ---------------------------------------------------- */}
      {/* 3. Trust Bar / Social Proof                          */}
      {/* ---------------------------------------------------- */}
      <section className="w-full bg-[#FAFBFD] py-14 border-y border-slate-100">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          {/* Header Note */}
          <p className="text-[13.5px] font-bold text-[#2563EB] tracking-tight mb-8">
            Trusted by users across the platform
          </p>

          {/* 3 Social Proof Platform Badges */}
          <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16 lg:gap-24">
            
            {/* 1. Chrome Store */}
            <div className="flex items-center gap-3.5">
              <span className="text-[34px] font-extrabold text-[#0B0F19] tracking-tight leading-none">
                4.8
              </span>
              <div className="text-left flex flex-col">
                <div className="flex items-center gap-1.5 mb-1">
                  {/* Google Chrome Multi-Color Circular Icon */}
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#EA4335" />
                    <path d="M12 2C15.3 2 18.2 3.6 20 6.1L12 12V2Z" fill="#EA4335" />
                    <path d="M20 6.1C21.3 7.8 22 9.8 22 12C22 15.3 20.4 18.2 17.9 20L12 12H22C22 9.8 20 6.1 20 6.1Z" fill="#FBBC05" />
                    <path d="M17.9 20C16.2 21.3 14.2 22 12 22C6.5 22 2 17.5 2 12C2 8.7 3.6 5.8 6.1 4L12 12L17.9 20Z" fill="#34A853" />
                    <circle cx="12" cy="12" r="5" fill="#FFFFFF" />
                    <circle cx="12" cy="12" r="3.8" fill="#4285F4" />
                  </svg>
                  <span className="text-[13px] font-bold text-[#0B0F19]">Chrome store</span>
                </div>
                {/* 5 Filled Golden Yellow Stars */}
                <div className="flex gap-0.5 text-[#FBBF24]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[13px] leading-none">★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Product Hunt */}
            <div className="flex items-center gap-3.5">
              <span className="text-[34px] font-extrabold text-[#0B0F19] tracking-tight leading-none">
                4.9
              </span>
              <div className="text-left flex flex-col">
                <div className="flex items-center gap-1.5 mb-1">
                  {/* Product Hunt Brand Circle Icon */}
                  <div className="w-4 h-4 rounded-full bg-[#DA552F] flex items-center justify-center text-white text-[10px] font-black leading-none">
                    P
                  </div>
                  <span className="text-[13px] font-bold text-[#0B0F19]">Producthunt</span>
                </div>
                {/* 5 Filled Orange/Coral Stars */}
                <div className="flex gap-0.5 text-[#DA552F]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[13px] leading-none">★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Trustpilot */}
            <div className="flex items-center gap-3.5">
              <span className="text-[34px] font-extrabold text-[#0B0F19] tracking-tight leading-none">
                4.8
              </span>
              <div className="text-left flex flex-col">
                <div className="flex items-center gap-1.5 mb-1">
                  {/* Trustpilot Star Icon */}
                  <div className="w-4 h-4 rounded-full bg-[#00B67A] flex items-center justify-center text-white text-[10px]">
                    ★
                  </div>
                  <span className="text-[13px] font-bold text-[#0B0F19]">Trustpilot</span>
                </div>
                {/* 5 Filled Emerald Green Stars */}
                <div className="flex gap-0.5 text-[#00B67A]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[13px] leading-none">★</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. Bottom Feature Section: Empower Your Financial... */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[38px] sm:text-[46px] lg:text-[52px] font-extrabold text-[#0B0F19] tracking-tight leading-[1.15]">
            <span className="text-[#2563EB]">Empower</span> Your Financial <br />
            Future with us
          </h2>
        </div>

        {/* Feature Container: Light Gray Card */}
        <div className="bg-[#FAFBFD] rounded-[36px] sm:rounded-[44px] p-8 sm:p-12 lg:p-16 border border-slate-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Lime Card Floating Over White Chart Card */}
          <div className="flex-1 w-full relative max-w-[500px] mx-auto">
            
            {/* The Vibrant Lime Green Card (Tilted to the right) */}
            <div className="w-full bg-[#BAF84B] rounded-[26px] p-6 sm:p-7 shadow-[0_16px_36px_rgba(186,248,75,0.3)] relative z-20 transform rotate-1 sm:rotate-2 transition-transform duration-300 hover:rotate-0">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[12.5px] font-semibold text-[#2F5215] mb-1">My Balance</p>
                  <h3 className="text-[32px] sm:text-[36px] font-black text-[#0B0F19] tracking-tight leading-none mb-2">
                    $9,823,28
                  </h3>
                  <p className="text-[11px] text-[#3D691A] font-medium tracking-tight">
                    Your made an extra $2,832.19 in this month.
                  </p>
                </div>

                {/* 3 Circular Actions on Green Card */}
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Send */}
                  <div className="flex flex-col items-center gap-1 cursor-pointer group">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#0B0F19] shadow-xs group-hover:scale-105 transition-transform">
                      <ArrowUp size={15} className="stroke-[2.5]" />
                    </div>
                    <span className="text-[10px] font-semibold text-[#2F5215]">Send</span>
                  </div>

                  {/* Receive */}
                  <div className="flex flex-col items-center gap-1 cursor-pointer group">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#0B0F19] shadow-xs group-hover:scale-105 transition-transform">
                      <ArrowDown size={15} className="stroke-[2.5]" />
                    </div>
                    <span className="text-[10px] font-semibold text-[#2F5215]">Receive</span>
                  </div>

                  {/* Convert */}
                  <div className="flex flex-col items-center gap-1 cursor-pointer group">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#0B0F19] shadow-xs group-hover:scale-105 transition-transform">
                      <ArrowLeftRight size={14} className="stroke-[2.5]" />
                    </div>
                    <span className="text-[10px] font-semibold text-[#2F5215]">Convert</span>
                  </div>
                </div>
              </div>
            </div>

            {/* The White Background Chart Card Beneath */}
            <div className="w-full bg-white rounded-[26px] p-6 sm:p-7 pt-14 -mt-8 border border-slate-100 shadow-[0_12px_32px_rgba(0,0,0,0.04)] relative z-10">
              <div className="relative h-44 flex items-end">
                {/* Y-Axis Labels */}
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] font-semibold text-[#CBD5E1] select-none">
                  <span>125K</span>
                  <span>100K</span>
                  <span>75K</span>
                  <span>50K</span>
                  <span>25K</span>
                  <span>0</span>
                </div>

                {/* Bars Area */}
                <div className="pl-10 pr-2 w-full h-full flex items-end justify-between gap-3">
                  {[
                    { height: 45, isAnchor: false },
                    { height: 65, isAnchor: false },
                    { height: 98, isAnchor: true }, // The Long Gradient Pillar connected from top card
                    { height: 78, isAnchor: false },
                    { height: 52, isAnchor: false },
                    { height: 70, isAnchor: false },
                    { height: 40, isAnchor: false },
                  ].map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                      <div
                        style={{ height: `${bar.height}%` }}
                        className={`w-full max-w-[32px] rounded-full transition-all duration-300 ${
                          bar.isAnchor
                            ? "bg-gradient-to-t from-[#BAF84B] via-[#2563EB] to-[#8B5CF6] shadow-[0_10px_25px_rgba(37,99,235,0.25)]"
                            : "bg-[#F3F4F6]"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Feature Content & Bullet List */}
          <div className="flex-1 w-full max-w-[500px]">
            <h3 className="text-[34px] sm:text-[42px] font-extrabold text-[#0B0F19] leading-[1.12] tracking-tight mb-5">
              Comprehensive <br />
              Financial <span className="text-[#2563EB]">Analytics</span> <br />
              Dashboard
            </h3>

            <p className="text-[16px] text-[#64748B] leading-relaxed mb-8">
              Gain real-time visibility into your financial performance with intuitive dashboards.
            </p>

            {/* Divider */}
            <div className="w-full border-t border-slate-200/70 mb-8" />

            {/* 2x2 Feature Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 text-[14.5px] font-bold text-[#0B0F19]">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0B0F19] flex items-center justify-center text-white shrink-0 shadow-2xs">
                  <Check size={11} className="stroke-[3.5]" />
                </div>
                <span>Keep tracking balance</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0B0F19] flex items-center justify-center text-white shrink-0 shadow-2xs">
                  <Check size={11} className="stroke-[3.5]" />
                </div>
                <span>Send money easily</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0B0F19] flex items-center justify-center text-white shrink-0 shadow-2xs">
                  <Check size={11} className="stroke-[3.5]" />
                </div>
                <span>Receive money easily</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0B0F19] flex items-center justify-center text-white shrink-0 shadow-2xs">
                  <Check size={11} className="stroke-[3.5]" />
                </div>
                <span>Convert currency</span>
              </div>
            </div>

          </div>

        </div>

      </section>
    </div>
  );
}
