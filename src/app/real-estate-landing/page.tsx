"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronDown,
  MapPin,
  Bed,
  Bath,
  Square,
  ShieldCheck,
  ChevronRight,
  Heart,
  TrendingUp,
} from "lucide-react";

interface Property {
  id: number;
  title: string;
  location: string;
  sqft: string;
  beds: number;
  baths: number;
  pricePerShare: string;
  image: string;
  thumbnail: string;
  isNew?: boolean;
  pinLeft: string;
  pinTop: string;
}

const PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Luxury Oceanfront Bungalow",
    location: "Catonsville, MD",
    sqft: "2,100 sq ft",
    beds: 3,
    baths: 2,
    pricePerShare: "$20,000",
    image: "/real-estate/bungalow-card.jpg",
    thumbnail: "/real-estate/thumb-1.jpg",
    isNew: true,
    pinLeft: "50%",
    pinTop: "80%",
  },
  {
    id: 2,
    title: "Modern Timber Villa",
    location: "Hamptons, NY",
    sqft: "3,400 sq ft",
    beds: 4,
    baths: 3,
    pricePerShare: "$35,000",
    image: "/real-estate/timber-villa.jpg",
    thumbnail: "/real-estate/thumb-2.jpg",
    pinLeft: "18.5%",
    pinTop: "46.0%",
  },
  {
    id: 3,
    title: "Whitehaven Glass Residence",
    location: "Greenwich, CT",
    sqft: "2,850 sq ft",
    beds: 3,
    baths: 3,
    pricePerShare: "$28,500",
    image: "/real-estate/bungalow-card.jpg",
    thumbnail: "/real-estate/thumb-3.jpg",
    pinLeft: "33.5%",
    pinTop: "43.0%",
  },
  {
    id: 4,
    title: "Sunset Hill Retreat",
    location: "Princeton, NJ",
    sqft: "2,200 sq ft",
    beds: 3,
    baths: 2,
    pricePerShare: "$18,000",
    image: "/real-estate/timber-villa.jpg",
    thumbnail: "/real-estate/thumb-4.jpg",
    pinLeft: "26.0%",
    pinTop: "69.0%",
  },
  {
    id: 5,
    title: "Meadowlands Estate",
    location: "Montclair, NJ",
    sqft: "2,450 sq ft",
    beds: 3,
    baths: 2,
    pricePerShare: "$22,000",
    image: "/real-estate/bungalow-card.jpg",
    thumbnail: "/real-estate/thumb-5.jpg",
    pinLeft: "36.0%",
    pinTop: "63.0%",
  },
  {
    id: 6,
    title: "Manhattan View Penthouse",
    location: "Jersey City, NJ",
    sqft: "1,950 sq ft",
    beds: 2,
    baths: 2,
    pricePerShare: "$24,000",
    image: "/real-estate/timber-villa.jpg",
    thumbnail: "/real-estate/thumb-6.jpg",
    pinLeft: "82.5%",
    pinTop: "45.0%",
  },
  {
    id: 7,
    title: "The Hudson Waterfront",
    location: "Hoboken, NJ",
    sqft: "2,600 sq ft",
    beds: 3,
    baths: 2,
    pricePerShare: "$26,000",
    image: "/real-estate/bungalow-card.jpg",
    thumbnail: "/real-estate/thumb-1.jpg",
    pinLeft: "83.5%",
    pinTop: "71.5%",
  },
];

export default function RealEstateInvestment() {
  const [activeProperty, setActiveProperty] = useState<Property>(PROPERTIES[0]);
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedBudget, setSelectedBudget] = useState("$500 - $1200");
  const [isSaved, setIsSaved] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [investSuccess, setInvestSuccess] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#111111] selection:text-white antialiased">
      
      {/* ================================================================= */}
      {/* 1. Header Navigation Bar (Full Width with Inner Container)         */}
      {/* ================================================================= */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between px-6 sm:px-10 lg:px-12 py-4 sm:py-5">
          {/* Logo */}
          <Link href="/real-estate-landing" className="flex items-center gap-2 group">
            <div className="flex items-end gap-[3px] h-4.5 w-4.5">
              <span className="w-1 h-2.5 bg-[#111111] rounded-full group-hover:h-3.5 transition-all duration-300" />
              <span className="w-1 h-4.5 bg-[#111111] rounded-full group-hover:h-3 transition-all duration-300" />
              <span className="w-1 h-3.5 bg-[#111111] rounded-full group-hover:h-4.5 transition-all duration-300" />
            </div>
            <span className="font-extrabold text-[17px] tracking-tight text-[#111111]">
              Brickwise
            </span>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[13.5px] font-medium text-slate-500">
            <Link href="/real-estate-landing" className="text-[#111111] font-semibold relative py-1">
              Home
              <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#111111] rounded-full" />
            </Link>
            <Link href="#properties" className="hover:text-[#111111] transition-colors py-1">
              Properties
            </Link>
            <Link href="#about" className="hover:text-[#111111] transition-colors py-1">
              About
            </Link>
            <Link href="#contact" className="hover:text-[#111111] transition-colors py-1">
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-4 text-[13.5px]">
            <Link
              href="#login"
              className="font-medium text-slate-600 hover:text-[#111111] transition-colors px-1 py-1"
            >
              Login
            </Link>
            <button className="inline-flex items-center gap-1 px-4.5 py-1.5 rounded-full bg-[#111111] text-white text-[12.5px] font-medium hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xs group">
              <span>Join Now</span>
              <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </header>

        {/* ================================================================= */}
        {/* 2. Hero Section: Full-Width Top Headline, Capsule, Search & Map   */}
        {/* ================================================================= */}
        <section className="relative w-full pt-8 sm:pt-12 pb-0 overflow-hidden bg-white">
          
          {/* Header Typography Area */}
          <div className="relative z-20 max-w-[860px] mx-auto px-4 text-center flex flex-col items-center mb-6 sm:mb-8">
            
            {/* Top Pill: "What is Arrived?" */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.03)] mb-4 cursor-pointer hover:border-slate-300 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
              </span>
              <span className="text-[11px] font-medium text-slate-700 tracking-tight">
                What is Arrived?
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[34px] sm:text-[44px] lg:text-[48px] font-bold text-[#111111] leading-[1.12] tracking-tight mb-3">
              Easily Invest in Real Estate <br className="hidden sm:inline" />
              to Grow{" "}
              {/* Sleek Dark Growth/Investor Capsule */}
              <span className="inline-flex items-center align-middle mx-1 px-2 py-1 rounded-full bg-[#182B34] text-white shadow-sm border border-slate-700/50 group hover:scale-105 transition-transform cursor-pointer">
                <div className="flex -space-x-1.5 mr-1.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-emerald-500/80 border border-[#182B34] flex items-center justify-center text-[8px] font-bold text-white overflow-hidden">
                    <img src="/real-estate/thumb-1.jpg" alt="Investor avatar" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-4.5 h-4.5 rounded-full bg-amber-500/80 border border-[#182B34] flex items-center justify-center text-[8px] font-bold text-white overflow-hidden">
                    <img src="/real-estate/thumb-2.jpg" alt="Investor avatar" className="w-full h-full object-cover" />
                  </div>
                </div>
                <TrendingUp size={12} className="text-emerald-400 stroke-[2.5]" />
              </span>{" "}
              Your Future
            </h1>

            {/* Subtitle */}
            <p className="text-[13.5px] sm:text-[14.5px] text-slate-400 leading-relaxed max-w-[650px]">
              Take control of your financial future by diversifying your portfolio with secure and high-yield real estate properties.
            </p>

          </div>

          {/* Full-Width Interactive Map Area */}
          <div className="relative w-full h-[520px] sm:h-[580px] lg:h-[640px] xl:h-[680px]">
            
            {/* Base Cartographic Map Background Spanning 100% Full Width */}
            <div 
              className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden"
              style={{
                maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 28%, rgba(0,0,0,0.4) 62%, rgba(0,0,0,0.92) 28%, rgba(0,0,0,0.4) 62%, rgba(0,0,0,0) 95%)",
                WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 28%, rgba(0,0,0,0.4) 62%, rgba(0,0,0,0) 95%)",
              }}
            >
              <img
                src="/real-estate/generated-map.jpg"
                alt="Real Estate Investment Map"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Soft Top Gradient Overlay to blend with the white header & headline */}
            <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none z-10" />

            {/* Soft Bottom Gradient to blend into the stats section */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none z-10" />

            {/* Interactive Pins & Cards Layer */}
            <div className="relative w-full max-w-[1360px] h-full mx-auto px-4">
              
              {/* 1. Search Filter Bar (Floating Capsule positioned over the map's upper region) - Increased width by 30% */}
              <div className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 w-[94%] sm:w-[700px] lg:w-[728px] max-w-[730px] bg-white rounded-full py-2 pl-5 sm:pl-6 pr-2 shadow-[0_10px_35px_rgba(0,0,0,0.07)] border border-slate-200/90 flex items-center justify-between z-30 transition-all">
                <div className="flex-1 grid grid-cols-3 divide-x divide-slate-100 text-left">
                  {/* Column 1: Location */}
                  <div className="px-3 sm:px-4 py-0.5 cursor-pointer group">
                    <p className="text-[9px] sm:text-[9.5px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                      Location
                    </p>
                    <div className="flex items-center justify-between pr-1">
                      <span className="text-[12px] sm:text-[13px] font-bold text-[#111111] truncate">
                        {selectedLocation}
                      </span>
                      <ChevronDown size={12} className="text-slate-400 group-hover:text-[#111111] transition-colors shrink-0" />
                    </div>
                  </div>

                  {/* Column 2: Property Type */}
                  <div className="px-3 sm:px-4 py-0.5 cursor-pointer group">
                    <p className="text-[9px] sm:text-[9.5px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                      Property Type
                    </p>
                    <div className="flex items-center justify-between pr-1">
                      <span className="text-[12px] sm:text-[13px] font-bold text-[#111111] truncate">
                        {selectedType}
                      </span>
                      <ChevronDown size={12} className="text-slate-400 group-hover:text-[#111111] transition-colors shrink-0" />
                    </div>
                  </div>

                  {/* Column 3: Budget */}
                  <div className="px-3 sm:px-4 py-0.5 cursor-pointer group">
                    <p className="text-[9px] sm:text-[9.5px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                      Budget
                    </p>
                    <div className="flex items-center justify-between pr-1">
                      <span className="text-[12px] sm:text-[13px] font-bold text-[#111111] truncate">
                        {selectedBudget}
                      </span>
                      <ChevronDown size={12} className="text-slate-400 group-hover:text-[#111111] transition-colors shrink-0" />
                    </div>
                  </div>
                </div>

                {/* Search Button */}
                <button
                  aria-label="Search properties"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#111111] text-white flex items-center justify-center hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-sm ml-2 shrink-0"
                >
                  <Search size={15} className="stroke-[2.5]" />
                </button>
              </div>

              {/* 2. The 6 Interactive Property Pins Scattered Over the Map */}
              {PROPERTIES.slice(1).map((prop) => {
                const isSelected = activeProperty.id === prop.id;

                return (
                  <button
                    key={prop.id}
                    onClick={() => setActiveProperty(prop)}
                    style={{ left: prop.pinLeft, top: prop.pinTop }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group focus:outline-none"
                    aria-label={`View ${prop.title}`}
                  >
                    <div className={`relative w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] rounded-full border-2 shadow-[0_3px_10px_rgba(0,0,0,0.18)] overflow-hidden transition-all duration-300 ${
                      isSelected
                        ? "border-[#111111] scale-125 ring-2 ring-[#111111]/30"
                        : "border-white bg-white hover:scale-125 hover:border-slate-800"
                    }`}>
                      <img
                        src={prop.thumbnail}
                        alt={prop.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Hover Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 hidden group-hover:flex flex-col items-center pointer-events-none z-30 animate-fade-in">
                      <div className="bg-[#111111] text-white text-[9.5px] font-bold px-2 py-0.5 rounded-[5px] shadow-lg whitespace-nowrap">
                        {prop.pricePerShare} /share
                      </div>
                      <div className="w-0 h-0 border-x-3 border-x-transparent border-t-3 border-t-[#111111]" />
                    </div>
                  </button>
                );
              })}

              {/* 3. Central Featured Property Card & "20" Location Pin */}
              <div className="absolute top-[20%] sm:top-[21%] left-1/2 -translate-x-1/2 z-30 w-[235px] sm:w-[260px]">
                
                {/* White Card Container */}
                <div className="bg-white rounded-[20px] p-2.5 sm:p-3 shadow-[0_20px_45px_rgba(0,0,0,0.12)] border border-slate-100 text-left transition-all">
                  
                  {/* Property Hero Image with Badge & Carousel Dots */}
                  <div className="relative w-full h-[115px] sm:h-[130px] rounded-[14px] overflow-hidden mb-2.5 bg-slate-100 group">
                    <img
                      src={activeProperty.image}
                      alt={activeProperty.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Top-Right "New" Pill Badge */}
                    {activeProperty.isNew && (
                      <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-full text-[8.5px] sm:text-[9px] font-bold text-slate-900 shadow-xs tracking-tight">
                        New
                      </div>
                    )}

                    {/* Bookmark Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsSaved(!isSaved);
                      }}
                      className="absolute top-2 left-2 w-5.5 h-5.5 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-700 hover:text-red-500 hover:bg-white transition-all shadow-xs"
                      aria-label="Save property"
                    >
                      <Heart size={11} className={isSaved ? "fill-red-500 text-red-500" : ""} />
                    </button>

                    {/* Bottom Carousel Indicator Dots */}
                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1">
                      {[0, 1, 2].map((dot) => (
                        <span
                          key={dot}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveSlide(dot);
                          }}
                          className={`h-1 rounded-full transition-all cursor-pointer ${
                            dot === activeSlide ? "w-3 bg-white" : "w-1 bg-white/60"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="px-1 pb-0.5">
                    {/* Title */}
                    <h3 className="font-bold text-[12.5px] sm:text-[13.5px] text-[#111111] leading-tight mb-1 truncate">
                      {activeProperty.title}
                    </h3>

                    {/* Location with Pin Icon */}
                    <div className="flex items-center gap-1 text-slate-400 text-[10px] font-medium mb-2">
                      <MapPin size={10.5} className="text-slate-400 shrink-0" />
                      <span>{activeProperty.location}</span>
                    </div>

                    {/* Specifications (SqFt, Beds, Baths) */}
                    <div className="flex items-center justify-between text-[9px] sm:text-[9.5px] text-slate-500 font-semibold mb-2.5 py-1.5 border-t border-b border-slate-100">
                      <div className="flex items-center gap-1">
                        <Square size={10} className="text-slate-400" />
                        <span>{activeProperty.sqft}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bed size={10} className="text-slate-400" />
                        <span>{activeProperty.beds} Bed</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath size={10} className="text-slate-400" />
                        <span>{activeProperty.baths} Bath</span>
                      </div>
                    </div>

                    {/* Price & CTA Action */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-extrabold text-[13px] sm:text-[14px] text-[#111111]">
                          {activeProperty.pricePerShare}
                        </span>
                        <span className="text-[9.5px] font-medium text-slate-400 ml-1">
                          /share
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          setInvestSuccess(true);
                          setTimeout(() => setInvestSuccess(false), 2500);
                        }}
                        className="px-3 py-1 bg-[#F1F3F5] hover:bg-[#E2E8F0] active:scale-95 rounded-full text-[9.5px] sm:text-[10px] font-bold text-[#111111] transition-all"
                      >
                        {investSuccess ? "Joined!" : "Invest Now"}
                      </button>
                    </div>
                  </div>

                </div>

                {/* Pin Indicator Under Card: Black Circle "20" with Downward Arrow */}
                <div className="relative mt-1 flex flex-col items-center">
                  <div className="relative w-6 h-6 rounded-full bg-[#111111] text-white flex items-center justify-center text-[9.5px] font-extrabold border-2 border-white shadow-md">
                    20
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#111111] rotate-45" />
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================================================================= */}
        {/* 3. Performance & Stats Section (Horizontal Key Metrics)           */}
        {/* ================================================================= */}
        <section className="border-t border-b border-slate-100 bg-white">
          <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-12 py-8 sm:py-9">
            <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8 w-full">
              
              {/* Metric 1: $1B+ (Flush Left - perfectly aligned with Header Logo) */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="text-[28px] sm:text-[34px] font-bold text-[#111111] tracking-tight leading-none">
                  $1B+
                </span>
                <span className="text-[8.5px] font-bold text-slate-400 uppercase tracking-widest leading-[1.25] text-left">
                  Total <br />
                  Invested
                </span>
              </div>

              {/* Metric 2: 20K+ */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="text-[28px] sm:text-[34px] font-bold text-[#111111] tracking-tight leading-none">
                  20K+
                </span>
                <span className="text-[8.5px] font-bold text-slate-400 uppercase tracking-widest leading-[1.25] text-left">
                  Happy <br />
                  Customers
                </span>
              </div>

              {/* Metric 3: 150K+ */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="text-[28px] sm:text-[34px] font-bold text-[#111111] tracking-tight leading-none">
                  150K+
                </span>
                <span className="text-[8.5px] font-bold text-slate-400 uppercase tracking-widest leading-[1.25] text-left">
                  Property <br />
                  Listed
                </span>
              </div>

              {/* Metric 4: 8-12% (Flush Right - perfectly aligned with Join Now button) */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="text-[28px] sm:text-[34px] font-bold text-[#111111] tracking-tight leading-none">
                  8-12%
                </span>
                <span className="text-[8.5px] font-bold text-slate-400 uppercase tracking-widest leading-[1.25] text-left">
                  Average <br />
                  Return Value
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 4. Bottom Features / Value Proposition Section                    */}
        {/* ================================================================= */}
        <section className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-12 py-14 sm:py-20">
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-16 w-full">
            
            {/* Left Column: Heading & Reason To Choose Us (Aligned with Header Logo) */}
            <div className="flex-1 max-w-[460px] flex flex-col justify-between text-left">
              {/* Top: Eyebrow & Headline */}
              <div>
                <p className="text-orange-500 text-[11px] font-bold tracking-tight mb-3 flex items-center gap-1.5">
                  <span className="w-3 h-[1.5px] bg-orange-500 rounded-full" />
                  Reason to choose us
                </p>

                <h2 className="text-[30px] sm:text-[36px] font-bold text-[#111111] leading-[1.14] tracking-tight mb-4">
                  Discover the value <br />
                  behind smart property <br />
                  investments
                </h2>
              </div>

              {/* Bottom: Description & CTA */}
              <div className="mt-8 lg:mt-0">
                <p className="text-[12.5px] sm:text-[13.5px] text-slate-400 leading-relaxed mb-6 max-w-[360px]">
                  We handle the heavy lifting by conducting in-depth research,
                  analyzing the numbers, and finding high-performing
                  properties for you.
                </p>

                <button className="inline-flex items-center gap-1.5 px-5.5 py-2.5 rounded-full bg-[#111111] text-white font-medium text-[12.5px] hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xs group">
                  <span>Find the best for you</span>
                  <ChevronRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: 3 Feature Cards Grid (Aligned with Join Now Button) */}
            <div className="flex-1 max-w-[580px] lg:max-w-[620px] w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Card 1: Smart Suggestions */}
                <div className="bg-[#F8F9FA] p-5 sm:p-6 rounded-[24px] border border-slate-100/90 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all flex flex-col justify-between h-[180px] text-left">
                  {/* Top Graphic: Search with "AI" pill */}
                  <div className="flex items-center justify-center pt-2">
                    <div className="bg-white rounded-full py-1.5 px-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-100 flex items-center gap-1.5">
                      <Search size={12} className="text-slate-400" />
                      <span className="text-[10.5px] text-slate-400 font-medium">
                        Search with &ldquo;AI&rdquo;
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[14px] text-[#111111] mb-1">
                      Smart Suggestions
                    </h3>
                    <p className="text-[11.5px] text-slate-400 leading-relaxed">
                      AI scans listings to find your best-fit property.
                    </p>
                  </div>
                </div>

                {/* Card 2: 99% Trusted Investor */}
                <div className="bg-[#F8F9FA] p-5 sm:p-6 rounded-[24px] border border-slate-100/90 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all flex flex-col justify-between h-[180px] text-left">
                  {/* Top Graphic: Black square badge with shield */}
                  <div className="flex items-center pt-1">
                    <div className="w-10 h-10 bg-[#111111] rounded-[12px] flex items-center justify-center text-white shadow-sm">
                      <ShieldCheck size={20} className="stroke-[2.2]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[14px] text-[#111111] mb-1">
                      99% Trusted Investor
                    </h3>
                    <p className="text-[11.5px] text-slate-400 leading-relaxed">
                      Users trust our picks and return for more deals.
                    </p>
                  </div>
                </div>

                {/* Card 3: Invest Where It Matters (Full Width Span) */}
                <div className="bg-[#F8F9FA] p-5 sm:p-6 rounded-[24px] border border-slate-100/90 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] col-span-1 sm:col-span-2 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between min-h-[155px] text-left">
                  
                  {/* Decorative Dotted Grid in Background */}
                  <div 
                    className="absolute inset-0 opacity-40 pointer-events-none"
                    style={{
                      backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)",
                      backgroundSize: "14px 14px",
                    }}
                  />

                  {/* Left Text */}
                  <div className="max-w-[220px] z-10 mb-4 sm:mb-0">
                    <h3 className="font-bold text-[14px] text-[#111111] mb-1">
                      Invest Where It Matters
                    </h3>
                    <p className="text-[11.5px] text-slate-400 leading-relaxed">
                      We pinpoint High-demand, high-grow areas backed by market data.
                    </p>
                  </div>

                  {/* Center Floating Red Price Tag & Curved Trajectory */}
                  <div className="hidden sm:block absolute left-[44%] top-5 z-10">
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white border border-red-100 shadow-xs text-[10px] font-extrabold text-red-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      $ 180
                    </div>
                  </div>

                  {/* Decorative Curved Dotted Trajectory */}
                  <svg className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 560 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M 270 32 Q 350 10 420 50"
                      fill="none"
                      stroke="#EF4444"
                      strokeWidth="1.2"
                      strokeDasharray="2.5 2.5"
                    />
                  </svg>

                  {/* Right: Stacked Architectural House Cards (Pure Component with Generated Photo) */}
                  <div className="relative z-10 shrink-0 w-[125px] sm:w-[135px] h-[130px] flex items-center justify-center group cursor-pointer mr-0.5">
                    {/* Background card 1 */}
                    <div className="absolute inset-0 bg-white/70 rounded-xl shadow-xs -rotate-6 -translate-x-1.5 translate-y-1 border border-slate-200/60" />
                    {/* Background card 2 */}
                    <div className="absolute inset-0 bg-white/90 rounded-xl shadow-xs rotate-3 translate-x-1 translate-y-0.5 border border-slate-200/80" />
                    {/* Front active card */}
                    <div className="relative w-full bg-white rounded-xl p-1.5 shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-slate-100 group-hover:scale-105 transition-transform duration-300">
                      <div className="w-full h-[68px] rounded-lg overflow-hidden bg-slate-100 mb-1.5">
                        <img
                          src="/real-estate/timber-villa.jpg"
                          alt="Modern Architectural Villa"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-bold text-[9.5px] text-[#111111] leading-tight truncate">
                        Modern Villa
                      </h4>
                      <p className="text-[8px] text-slate-400 font-medium">
                        Catonsville, MD
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

      {/* ================================================================= */}
      {/* 5. Minimalist Footer & Attribution                                */}
      {/* ================================================================= */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
          <span>Landing Page Design</span>
          <span>@shaikdesigns</span>
          <span>2025</span>
        </div>
      </footer>

    </div>
  );
}
