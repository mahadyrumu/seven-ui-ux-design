import React from "react";
import { Check, Zap, PenTool } from "lucide-react";

export default function PricingPlans() {
  return (
    <div className="min-h-screen lg:h-screen bg-[#EFEFEF] font-sans text-slate-900 selection:bg-black selection:text-white flex flex-col justify-between p-4 sm:p-6 lg:p-7 xl:px-12 overflow-y-auto overflow-x-hidden">
      <div className="w-full max-w-[1120px] mx-auto flex-1 flex flex-col justify-between">
        
        {/* Header */}
        <header className="flex justify-end pt-1 pb-1 sm:pb-2">
          <button className="flex items-center gap-1.5 text-[#8E8E93] hover:text-black transition-colors font-medium text-[13.5px] sm:text-[14px]">
            Schedule a Call <span className="text-black ml-0.5">→</span>
          </button>
        </header>

        {/* Title Area */}
        <div className="my-auto py-2">
          <div className="inline-block px-2 py-0.5 border border-[#8E8E93]/70 text-[#8E8E93] text-[9.5px] font-bold tracking-[0.2em] rounded-sm mb-2 sm:mb-3">
            PRICING
          </div>

          {/*
            4-row heading layout matching reference screenshot:
            Row 1: "Better tools"           — gray
            Row 2: "smooth [icons] workflow" — gray text + 3 icons + bold black
            Row 3: "including same great deal," — gray
            Row 4: "[toggle] annually."     — toggle pill + bold black
          */}
          <h1 className="text-[30px] sm:text-[38px] md:text-[44px] lg:text-[48px] xl:text-[50px] font-medium leading-[1.14] tracking-tight max-w-[850px]">

            {/* Row 1 */}
            <span className="block text-[#A1A1A6]">Better tools</span>

            {/* Row 2 */}
            <span className="flex items-center gap-2.5 sm:gap-3.5 flex-wrap">
              <span className="text-[#A1A1A6]">smooth</span>

              {/* App icons — standalone, individually tilted, overlapping */}
              <span className="inline-flex items-center self-center" style={{ gap: 0 }}>
                {/* Dribbble — tilted left */}
                <span className="flex items-center justify-center w-[38px] h-[38px] sm:w-[44px] sm:h-[44px] rounded-xl sm:rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.1)] overflow-hidden -rotate-[8deg] z-10 relative bg-white">
                  <svg viewBox="0 0 44 44" width="44" height="44" xmlns="http://www.w3.org/2000/svg">
                    <rect width="44" height="44" rx="11" fill="white"/>
                    <circle cx="22" cy="22" r="11" stroke="#EA4C89" strokeWidth="2.5" fill="none"/>
                    <path d="M11 18 Q17 20 20 30" stroke="#EA4C89" strokeWidth="2" fill="none"/>
                    <path d="M33 16.5 Q26 21 15 21" stroke="#EA4C89" strokeWidth="2" fill="none"/>
                    <path d="M22 10.5 Q25.5 17 33 24.5" stroke="#EA4C89" strokeWidth="2" fill="none"/>
                  </svg>
                </span>
                {/* Behance — tilted slightly right */}
                <span className="flex items-center justify-center w-[38px] h-[38px] sm:w-[44px] sm:h-[44px] rounded-xl sm:rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.1)] overflow-hidden rotate-[4deg] -ml-2.5 z-20 relative bg-white">
                  <svg viewBox="0 0 44 44" width="44" height="44" xmlns="http://www.w3.org/2000/svg">
                    <rect width="44" height="44" rx="11" fill="white"/>
                    <text x="6" y="30" fontSize="21" fontWeight="900" fill="#1769FF" fontFamily="Arial Black, sans-serif">Bē</text>
                  </svg>
                </span>
                {/* Miro — tilted more right */}
                <span className="flex items-center justify-center w-[38px] h-[38px] sm:w-[44px] sm:h-[44px] rounded-xl sm:rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.1)] overflow-hidden rotate-[10deg] -ml-2.5 z-30 relative bg-[#050038]">
                  <svg viewBox="0 0 44 44" width="44" height="44" xmlns="http://www.w3.org/2000/svg">
                    <rect width="44" height="44" rx="11" fill="#050038"/>
                    <g transform="translate(10, 9)" fill="#FFD02F">
                      <polygon points="0,3 3.5,0 6,5 2.5,8"/>
                      <polygon points="7,3 10.5,0 13,12 9.5,15"/>
                      <polygon points="14,3 17.5,0 20,20 16.5,23"/>
                    </g>
                  </svg>
                </span>
              </span>

              <span className="text-black font-semibold">workflow</span>
            </span>

            {/* Row 3 */}
            <span className="block text-[#A1A1A6]">including same great deal,</span>

            {/* Row 4 */}
            <span className="flex items-center gap-2.5 sm:gap-3.5">
              <span className="inline-flex items-center self-center shrink-0">
                <div className="w-[64px] h-[32px] sm:w-[70px] sm:h-[36px] rounded-full bg-gradient-to-r from-[#7B61FF] via-[#d946a8] to-[#f472b6] p-[3px] shadow-[0_6px_16px_rgba(200,80,160,0.22)] flex items-center justify-between px-2">
                  <div className="flex flex-col gap-[2.5px] opacity-60">
                    <div className="w-2.5 h-[1.5px] bg-white rounded-full" />
                    <div className="w-2.5 h-[1.5px] bg-white rounded-full" />
                  </div>
                  <div className="w-[26px] h-[26px] sm:w-[28px] sm:h-[28px] bg-white rounded-full shadow-md ml-auto" />
                </div>
              </span>
              <span className="text-black font-semibold">annually.</span>
            </span>

          </h1>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-5 lg:gap-6 pb-2 sm:pb-3">

          {/* Free Card */}
          <div className="flex-1 bg-white rounded-[24px] lg:rounded-[28px] p-5 sm:p-6 lg:p-7 shadow-[0_15px_35px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-3.5 sm:mb-4 lg:mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-[#111111] rounded-xl flex items-center justify-center text-white shadow-[0_6px_14px_rgba(0,0,0,0.12)]">
                    <PenTool size={19} />
                  </div>
                  <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-black">Free</h2>
                </div>
                <div className="text-right">
                  <span className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-black">$0</span>
                  <span className="text-[#8E8E93] font-medium text-[13.5px] sm:text-[14px]">/month</span>
                </div>
              </div>

              <button className="w-full py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200/90 font-semibold text-[13.5px] sm:text-[14px] text-slate-800 hover:bg-slate-50 transition-colors mb-3.5 sm:mb-4 lg:mb-5">
                Get Started
              </button>

              <ul className="space-y-2 sm:space-y-2.5 lg:space-y-3 text-[13px] sm:text-[13.5px] lg:text-[14px] font-medium text-[#737373]">
                <li className="flex items-center gap-2.5">
                  <Check size={15} className="text-black shrink-0" strokeWidth={2.5} />
                  <span>Nothing but a Hug</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Personal Card */}
          <div className="flex-1 bg-white rounded-[24px] lg:rounded-[28px] p-5 sm:p-6 lg:p-7 shadow-[0_15px_35px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-3.5 sm:mb-4 lg:mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-[#111111] rounded-xl flex items-center justify-center text-white shadow-[0_6px_14px_rgba(0,0,0,0.12)]">
                    <Zap size={19} />
                  </div>
                  <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-black">Personal</h2>
                </div>
                <div className="text-right">
                  <span className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-black">$69</span>
                  <span className="text-[#8E8E93] font-medium text-[13.5px] sm:text-[14px]">/month</span>
                </div>
              </div>

              <button className="w-full py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200/90 font-semibold text-[13.5px] sm:text-[14px] text-slate-800 hover:bg-slate-50 transition-colors mb-3.5 sm:mb-4 lg:mb-5">
                View Pricing
              </button>

              <ul className="space-y-2 sm:space-y-2.5 lg:space-y-3 text-[13px] sm:text-[13.5px] lg:text-[14px] font-medium text-[#737373]">
                <li className="flex items-center gap-2.5">
                  <Check size={15} className="text-black shrink-0" strokeWidth={2.5} />
                  <span>Full access to tools, 24/7 support</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={15} className="text-black shrink-0" strokeWidth={2.5} />
                  <span>Monthly updates</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={15} className="text-black shrink-0" strokeWidth={2.5} />
                  <span>Customization options</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
