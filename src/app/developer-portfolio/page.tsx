"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, Sun, Moon, Menu, X } from "lucide-react";

export default function DeveloperPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phoneDark, setPhoneDark] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-[#111111] overflow-x-hidden selection:bg-black selection:text-white relative flex flex-col justify-between">
      
      {/* Background Concentric Circular Lines radiating from the Phone Mockup */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden z-0"
      >
        <svg
          className="absolute right-[-100px] lg:right-[60px] top-[140px] lg:top-[120px] w-[1300px] h-[1300px] -translate-y-1/4 lg:translate-x-1/4 opacity-40 lg:opacity-60"
          viewBox="0 0 1200 1200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Concentric subtle circles expanding outwards */}
          <circle cx="600" cy="600" r="220" stroke="#E5E7EB" strokeWidth="1" />
          <circle cx="600" cy="600" r="360" stroke="#E5E7EB" strokeWidth="1" />
          <circle cx="600" cy="600" r="500" stroke="#E5E7EB" strokeWidth="1" />
          <circle cx="600" cy="600" r="660" stroke="#E5E7EB" strokeWidth="1" />
          <circle cx="600" cy="600" r="840" stroke="#F0F0F2" strokeWidth="1" />
        </svg>
      </div>

      {/* Header Navigation */}
      <header className="w-full relative z-50 shrink-0">
        <nav className="flex items-center justify-between px-6 sm:px-10 lg:px-16 pt-7 pb-4 max-w-[1440px] mx-auto w-full">
          
          {/* Left: Brand Logo & Main Nav Links */}
          <div className="flex items-center gap-10 lg:gap-14">
            <Link 
              href="/developer-portfolio" 
              className="font-bold text-[22px] tracking-tight text-[#111111] hover:opacity-85 transition-opacity"
            >
              Stage
            </Link>

            <div className="hidden md:flex items-center gap-8 text-[14.5px] text-[#555555] font-normal">
              <Link href="#" className="hover:text-black transition-colors">Features</Link>
              <Link href="#" className="hover:text-black transition-colors">Design System</Link>
              <Link href="#" className="hover:text-black transition-colors">Documentation</Link>
            </div>
          </div>

          {/* Right: Contact & Sign Up Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg border border-[#E4E4E7] text-[13.5px] font-medium text-[#27272A] hover:bg-[#F4F4F5] hover:border-[#D4D4D8] transition-all">
              Contact
            </button>
            <button className="inline-flex items-center justify-center px-4.5 py-2 rounded-lg bg-[#111111] text-white text-[13.5px] font-medium hover:bg-black transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm">
              Sign up
            </button>

            {/* Mobile menu hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors ml-1"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-200 px-6 py-4 flex flex-col gap-3.5 text-[15px] font-medium shadow-md">
            <Link href="#" className="py-1 text-black font-semibold">Features</Link>
            <Link href="#" className="py-1 text-[#555555]">Design System</Link>
            <Link href="#" className="py-1 text-[#555555]">Documentation</Link>
            <div className="pt-2 border-t border-gray-100 flex gap-3">
              <button className="flex-1 py-2 text-center rounded-lg border border-gray-200 text-sm font-medium">
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Hero */}
      <main className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-8 sm:pt-12 lg:pt-14 pb-16 lg:pb-24 w-full relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Column: Headline, Bio & Social Proof Logos */}
        <div className="flex-1 max-w-[640px] lg:max-w-[680px] w-full z-10">
          
          {/* Main Headline - Guaranteed 2-Row Hierarchy */}
          <h1 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] xl:text-[45px] font-semibold leading-[1.12] tracking-[-0.03em] mb-5 text-[#111111]">
            <span className="block sm:whitespace-nowrap">API-based developer portfolio,</span>
            <span className="block">that converts.</span>
          </h1>

          {/* Subtext Description */}
          <p className="text-[16px] sm:text-[17px] leading-[1.58] text-[#555555] mb-8 sm:mb-9 max-w-[500px]">
            Next-gen developer portfolio that helps you showcase your projects,
            skills, and experience. Personalize it by an evergrowing collection of
            building blocks and analyse your growth.
          </p>

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-14 sm:mb-16">
            <button className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-[#111111] text-white font-medium text-[14.5px] hover:bg-black transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm cursor-pointer">
              Get started
            </button>
            <button className="flex items-center gap-2.5 px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg bg-white border border-[#E4E4E7] text-[#27272A] font-medium text-[14.5px] hover:bg-[#F9F9FB] hover:border-[#D4D4D8] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm cursor-pointer">
              <span className="flex items-center justify-center w-4.5 h-4.5 rounded-full border border-[#71717A]/40 text-[#27272A]">
                <Play size={8.5} className="ml-0.5 fill-[#27272A]" />
              </span>
              <span>Experience the future</span>
            </button>
          </div>

          {/* Partner & Customer Logos Social Proof */}
          <div className="pt-2">
            <p className="text-[12.5px] font-semibold text-[#111111] mb-5 tracking-tight">
              Built with feedback from amazing engineers at
            </p>

            {/* Exact Brand Vector Logos matching reference design */}
            <div className="w-full max-w-[460px] sm:max-w-[500px] pt-1">
              <img
                src="/developer-portfolio/logos-master@2x.png"
                srcSet="/developer-portfolio/logos-master.png 1x, /developer-portfolio/logos-master@2x.png 2x"
                alt="Uber, Zillow, MUI, Google, CodeIgniter, Drupal, Go, Continuous Integration"
                width={556}
                height={109}
                className="w-full h-auto object-contain select-none opacity-85 hover:opacity-100 transition-opacity duration-300"
                draggable={false}
              />
            </div>
          </div>

        </div>

        {/* Right Column: Precision White iPhone Frame Mockup */}
        <div className="flex-1 relative flex justify-center lg:justify-end items-center w-full min-h-[580px] lg:min-h-[660px]">
          
          {/* The Phone Exterior Housing */}
          <div className="relative w-[320px] sm:w-[350px] h-[640px] sm:h-[680px] bg-white rounded-[50px] shadow-[0_25px_65px_-12px_rgba(0,0,0,0.14),0_0_0_1px_rgba(0,0,0,0.06)] border-[10px] sm:border-[12px] border-white ring-1 ring-black/[0.04] overflow-hidden transform lg:translate-x-6 transition-all">
            
            {/* Top Speaker Ear Slit & Front Camera Sensor */}
            <div className="absolute top-0 inset-x-0 h-6 flex items-center justify-center z-30 pointer-events-none">
              <div className="flex items-center gap-2">
                {/* Speaker pill slit */}
                <div className="w-12 h-1 bg-[#D1D1D6] rounded-full"></div>
                {/* Front camera lens dot */}
                <div className="w-1.5 h-1.5 bg-[#8E8E93] rounded-full"></div>
              </div>
            </div>

            {/* Phone Screen Canvas (Interactive Dark/Light Mode) */}
            <div className={`w-full h-full p-6 sm:p-7 pt-16 sm:pt-20 relative flex flex-col justify-between transition-colors duration-300 ${
              phoneDark ? "bg-[#18181B] text-white" : "bg-[#FAFAFA] text-[#111111]"
            }`}>
              
              {/* Interactive Theme Toggle Button (Top Right of Screen) */}
              <button 
                onClick={() => setPhoneDark(!phoneDark)}
                title={phoneDark ? "Switch phone to light mode" : "Switch phone to dark mode"}
                aria-label="Toggle Phone Theme"
                className={`absolute top-9 sm:top-10 right-6 w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-[0_2px_8px_rgba(0,0,0,0.08)] cursor-pointer hover:scale-105 active:scale-95 ${
                  phoneDark 
                    ? "bg-[#27272A] border border-[#3F3F46] text-[#F4F4F5]" 
                    : "bg-white border border-[#E4E4E7] text-[#555555]"
                }`}
              >
                {phoneDark ? (
                  <Moon size={16} className="text-amber-300" />
                ) : (
                  <Sun size={17} className="text-[#555555]" />
                )}
              </button>

              {/* Developer Profile Header Card */}
              <div className="mt-3">
                {/* Circular Profile Avatar (Felix) */}
                <div className="w-15 h-15 rounded-full overflow-hidden mb-5.5 ring-3 ring-white/80 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80" 
                    alt="Felix - Software Designer" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Profile Headline */}
                <h2 className={`text-[25px] sm:text-[27px] font-bold leading-[1.18] tracking-[-0.025em] mb-4.5 pr-2 ${
                  phoneDark ? "text-white" : "text-[#111111]"
                }`}>
                  Software designer, <br />
                  founder, and amateur <br />
                  astronaut.
                </h2>

                {/* Profile Bio */}
                <p className={`text-[14.5px] sm:text-[15px] leading-[1.5] mb-6.5 font-normal ${
                  phoneDark ? "text-[#A1A1AA]" : "text-[#555555]"
                }`}>
                  I'm Felix, a software designer and entrepreneur based in New York City.
                  I'm currently working on a new project called Stage.
                </p>

                {/* Social Channels Row */}
                <div className={`flex items-center gap-5 pt-1 ${
                  phoneDark ? "text-[#71717A]" : "text-[#8E8E93]"
                }`}>
                  {/* Twitter / X Bird Icon (Matching reference icon) */}
                  <button className="hover:text-[#1DA1F2] transition-colors cursor-pointer" aria-label="Twitter">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </button>

                  {/* Instagram Camera Icon */}
                  <button className="hover:text-[#E1306C] transition-colors cursor-pointer" aria-label="Instagram">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </button>

                  {/* GitHub Octocat Icon */}
                  <button className="hover:text-black dark:hover:text-white transition-colors cursor-pointer" aria-label="GitHub">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </button>

                  {/* LinkedIn Icon */}
                  <button className="hover:text-[#0A66C2] transition-colors cursor-pointer" aria-label="LinkedIn">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Bottom Project Blocks Preview in Phone */}
              <div className="pt-6 pb-2">
                <div className={`p-3 rounded-2xl border transition-colors ${
                  phoneDark 
                    ? "bg-[#27272A]/70 border-[#3F3F46]" 
                    : "bg-white border-[#E4E4E7] shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                }`}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[12px] font-semibold ${phoneDark ? "text-white" : "text-[#18181B]"}`}>
                      Featured Project
                    </span>
                    <span className="text-[10.5px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 font-medium">
                      Active
                    </span>
                  </div>
                  <p className={`text-[11.5px] leading-relaxed ${phoneDark ? "text-[#A1A1AA]" : "text-[#71717A]"}`}>
                    Stage Component Kit — High-fidelity developer design system.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </main>

    </div>
  );
}
