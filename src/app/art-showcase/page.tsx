"use client";

import React, { useState } from "react";
import { User, Sun, Menu, X } from "lucide-react";
import Link from "next/link";

interface ArtCard {
  id: number;
  title: string;
  src: string;
  rotation: string;
  translateY: string;
  translateX?: string;
  scale?: string;
  customShadow?: string;
  zIndex: string;
  badge?: {
    text: string;
    bg: string;
    shadow: string;
    position: string;
    tail: React.ReactNode;
  };
}

const artCards: ArtCard[] = [
  {
    id: 1,
    title: "Tesla Punk Dadaist Collage",
    src: "/art-showcase/card-1.jpg",
    rotation: "-rotate-[13deg]",
    translateY: "translate-y-3 sm:translate-y-5",
    zIndex: "z-10",
  },
  {
    id: 2,
    title: "Classical Statue Ink Sketch",
    src: "/art-showcase/card-2.svg",
    rotation: "-rotate-[8deg]",
    translateY: "-translate-y-2.5 sm:-translate-y-4 md:-translate-y-5 lg:-translate-y-6",
    translateX: "-translate-x-2 sm:-translate-x-3 md:-translate-x-4 lg:-translate-x-5",
    scale: "scale-[1.03]",
    customShadow: "shadow-[0_20px_45px_-6px_rgba(0,0,0,0.24)]",
    zIndex: "z-20",
    badge: {
      text: "@coplin",
      bg: "bg-[#1A6AF8]",
      shadow: "shadow-[0_4px_12px_rgba(26,106,248,0.28)]",
      position: "-top-9 left-1 sm:-top-11 sm:left-3",
      tail: (
        <svg
          width="12"
          height="9"
          viewBox="0 0 12 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -bottom-[7px] right-4 text-[#1A6AF8]"
        >
          <path d="M0 0C4 0 9 2 11 8C8 6 4 4 0 4V0Z" fill="currentColor" />
        </svg>
      ),
    },
  },
  {
    id: 3,
    title: "Friends Pop Art Matchbox",
    src: "/art-showcase/card-3.jpg",
    rotation: "-rotate-[4deg]",
    translateY: "-translate-y-1 sm:-translate-y-2",
    zIndex: "z-30",
  },
  {
    id: 4,
    title: "Sunset Peach Gravity Skater",
    src: "/art-showcase/card-4.svg",
    rotation: "rotate-[0deg]",
    translateY: "-translate-y-2 sm:-translate-y-3",
    zIndex: "z-40",
  },
  {
    id: 5,
    title: "Anatomy of Expression Renaissance",
    src: "/art-showcase/card-5.svg",
    rotation: "rotate-[4deg]",
    translateY: "-translate-y-1 sm:-translate-y-2",
    zIndex: "z-50",
  },
  {
    id: 6,
    title: "Pop Art Independence Day 66",
    src: "/art-showcase/card-6.svg",
    rotation: "rotate-[8deg]",
    translateY: "translate-y-0.5 sm:translate-y-1",
    zIndex: "z-60",
  },
  {
    id: 7,
    title: "Tyler The Creator Hip Hop Poster",
    src: "/art-showcase/card-7.svg",
    rotation: "rotate-[13deg]",
    translateY: "-translate-y-2.5 sm:-translate-y-4 md:-translate-y-5 lg:-translate-y-6",
    translateX: "translate-x-2 sm:translate-x-3 md:translate-x-4 lg:translate-x-5",
    scale: "scale-[1.03]",
    customShadow: "shadow-[0_20px_45px_-6px_rgba(0,0,0,0.24)]",
    zIndex: "z-70",
    badge: {
      text: "@andrea",
      bg: "bg-[#52B788]",
      shadow: "shadow-[0_4px_12px_rgba(82,183,136,0.28)]",
      position: "-top-9 right-1 sm:-top-11 sm:right-3",
      tail: (
        <svg
          width="12"
          height="9"
          viewBox="0 0 12 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -bottom-[7px] left-4 text-[#52B788]"
        >
          <path d="M12 0C8 0 3 2 1 8C4 6 8 4 12 4V0Z" fill="currentColor" />
        </svg>
      ),
    },
  },
];

export default function ArtShowcase() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen lg:h-screen lg:max-h-screen bg-white font-sans text-[#1C1C1E] flex flex-col justify-between selection:bg-black selection:text-white relative overflow-x-hidden">
      
      {/* Top Navigation */}
      <header className="w-full relative z-50 shrink-0">
        <nav className="flex items-center justify-between px-6 sm:px-10 lg:px-16 pt-5 sm:pt-6 pb-2 sm:pb-3 max-w-[1400px] w-full mx-auto">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group cursor-pointer select-none">
            <div className="w-7 h-7 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
              {/* Authentic Mint Origami Bird Vector (matching reference #7ECEB7) */}
              <svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Top-Right Wing Wedge */}
                <path d="M15 6L25 6L25 16L19 16L15 12V6Z" fill="#7ECEB7" />
                {/* Left Horizontal Wing Leaf */}
                <path d="M6 14C4.5 14 3 15.2 3 17C3 18.8 4.5 20 6 20H15V14H6Z" fill="#7ECEB7" />
                {/* Bottom Vertical Stem Leaf */}
                <path d="M16 16H22V24C22 26 20.8 27.5 19 27.5C17.2 27.5 16 26 16 24V16Z" fill="#7ECEB7" />
              </svg>
            </div>
            <span className="font-bold text-[19px] tracking-tight text-[#111111]">Pallet Ross</span>
          </Link>

          {/* Right Side Group: Desktop Navigation Links + Action Icons */}
          <div className="flex items-center gap-6 lg:gap-8 xl:gap-9">
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-7 xl:gap-8 text-[14px] font-[450] text-[#1C1C1E]">
              <Link href="#" className="hover:text-black font-semibold transition-colors">
                Get Started
              </Link>
              
              <Link href="#" className="flex items-center gap-1.5 hover:text-black transition-colors group">
                {/* Audio wave circular icon */}
                <span className="w-3.5 h-3.5 bg-black rounded-full flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                  <svg width="7" height="7" viewBox="0 0 10 10" fill="currentColor">
                    <rect x="1" y="3" width="1.5" height="4" rx="0.75" />
                    <rect x="4.25" y="1" width="1.5" height="8" rx="0.75" />
                    <rect x="7.5" y="3" width="1.5" height="4" rx="0.75" />
                  </svg>
                </span>
                <span>Create strategy</span>
              </Link>

              <Link href="#" className="hover:text-black transition-colors">
                Pricing
              </Link>
              <Link href="#" className="hover:text-black transition-colors">
                Contact
              </Link>
              <Link href="#" className="hover:text-black transition-colors">
                Solution
              </Link>
              <Link href="#" className="hover:text-black transition-colors">
                E-Commerce
              </Link>
            </div>

            {/* Right Side Icons & Mobile Menu Toggle */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <button
                aria-label="User Profile"
                className="w-9 h-9 rounded-full bg-white border border-[#E5E5EA] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex items-center justify-center hover:bg-[#F9F9FB] transition-all hover:scale-105 active:scale-95"
              >
                <User size={16} strokeWidth={2} className="text-[#1C1C1E]" />
              </button>
              
              <button
                aria-label="Toggle Theme"
                className="w-9 h-9 rounded-full bg-white border border-[#E5E5EA] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex items-center justify-center hover:bg-[#F9F9FB] transition-all hover:scale-105 active:scale-95"
              >
                <Sun size={16} strokeWidth={2} className="text-[#1C1C1E]" />
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="md:hidden w-9 h-9 rounded-full bg-white border border-[#E5E5EA] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex items-center justify-center hover:bg-[#F9F9FB] transition-colors"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex flex-col gap-3.5 text-[15px] font-medium shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <Link href="#" className="py-1 font-semibold text-black">Get Started</Link>
            <Link href="#" className="py-1 flex items-center gap-2 text-[#1C1C1E]">
              <span className="w-3.5 h-3.5 bg-black rounded-full flex items-center justify-center text-white shrink-0">
                <svg width="7" height="7" viewBox="0 0 10 10" fill="currentColor">
                  <rect x="1" y="3" width="1.5" height="4" rx="0.75" />
                  <rect x="4.25" y="1" width="1.5" height="8" rx="0.75" />
                  <rect x="7.5" y="3" width="1.5" height="4" rx="0.75" />
                </svg>
              </span>
              Create strategy
            </Link>
            <Link href="#" className="py-1 text-[#1C1C1E]">Pricing</Link>
            <Link href="#" className="py-1 text-[#1C1C1E]">Contact</Link>
            <Link href="#" className="py-1 text-[#1C1C1E]">Solution</Link>
            <Link href="#" className="py-1 text-[#1C1C1E]">E-Commerce</Link>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-1 sm:pt-2 pb-6 sm:pb-8 text-center w-full relative z-10 flex-1 flex flex-col items-center justify-center">
        
        {/* Main Headline */}
        <div className="mb-0">
          <h1 className="text-[38px] sm:text-[54px] md:text-[66px] lg:text-[76px] xl:text-[80px] font-[600] leading-[1.06] tracking-[-0.035em] max-w-4xl mx-auto text-[#1C1C1E]">
            A place to display your <br />
            masterpiece.
          </h1>
        </div>

        {/* 7 Fanned Art Masterpieces Showcase with Floating Speech Bubbles */}
        <div className="relative w-full max-w-[1000px] mx-auto mt-0 py-0 flex flex-col items-center">
          
          {/* The 7 Interactive Cards Cluster (Zoomed-Out Compact Scale) */}
          <div className="flex items-center justify-center -space-x-7 sm:-space-x-10 md:-space-x-12 lg:-space-x-14 xl:-space-x-16 select-none pt-9 pb-2 sm:pt-11 sm:pb-3">
            {artCards.map((card) => (
              <div
                key={card.id}
                className={`group relative shrink-0 transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-6 hover:!z-[100] cursor-pointer ${card.rotation} ${card.translateY} ${card.translateX || ""} ${card.scale || ""} ${card.zIndex}`}
              >
                {/* Floating Speech Bubble Badge if present */}
                {card.badge && (
                  <div className={`absolute ${card.badge.position} z-40 pointer-events-auto transition-transform duration-300 group-hover:scale-105`}>
                    <div className={`relative inline-flex items-center px-3.5 sm:px-4 py-1 sm:py-1.5 ${card.badge.bg} text-white text-[12px] sm:text-[13px] font-semibold rounded-full ${card.badge.shadow}`}>
                      {card.badge.text}
                      {card.badge.tail}
                    </div>
                  </div>
                )}

                {/* Card Artwork Container with Rounded Corners & Shadow */}
                <div className={`w-[85px] sm:w-[115px] md:w-[135px] lg:w-[155px] xl:w-[170px] aspect-[3/4] rounded-[14px] sm:rounded-[18px] lg:rounded-[22px] overflow-hidden bg-white ${card.customShadow || "shadow-[0_12px_28px_-4px_rgba(0,0,0,0.16)]"} border border-black/[0.04] transition-shadow duration-300 group-hover:shadow-[0_24px_50px_-8px_rgba(0,0,0,0.28)]`}>
                  <img
                    src={card.src}
                    alt={card.title}
                    className="w-full h-full object-cover object-center select-none"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Subtext and Dual Action Pill Buttons */}
        <div className="max-w-[580px] mx-auto mt-6 sm:mt-8 md:mt-10 mb-2 sm:mb-4 shrink-0">
          <p className="text-[#4A4A4F] text-[14px] sm:text-[15px] leading-[1.45] mb-3 sm:mb-4 font-normal">
            Artists can display their masterpieces, and buyers can discover and <br className="hidden sm:inline" />
            purchase works that resonate with them.
          </p>

          <div className="flex items-center justify-center gap-3">
            <button className="bg-[#18181A] text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-[13.5px] sm:text-[14px] font-medium hover:bg-black transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm cursor-pointer">
              Join for $9.99/m
            </button>
            <button className="bg-[#F3F3F5] text-[#1C1C1E] px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-[13.5px] sm:text-[14px] font-medium hover:bg-[#EBEBED] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
              Read more
            </button>
          </div>
        </div>

      </main>

    </div>
  );
}
