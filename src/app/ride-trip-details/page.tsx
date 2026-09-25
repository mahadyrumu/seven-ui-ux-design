import React from "react";
import { Star, Phone, Wifi, BatteryFull, X } from "lucide-react";

export default function RideTripDetails() {
  return (
    <div className="bg-white font-sans text-[#1C1C1E] h-dvh max-h-screen md:h-auto md:min-h-screen md:max-h-none w-full flex flex-col overflow-hidden md:overflow-y-auto relative selection:bg-slate-100">
      
      {/* Mobile Device Status Bar (hidden on tablet and desktop) */}
      <div className="md:hidden flex justify-between items-center px-7 pt-1.5 pb-0.5 text-[15px] font-semibold shrink-0">
        <span className="font-semibold tracking-tight">9:41</span>
        <div className="flex items-center gap-1.5">
          <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="8" width="3" height="3" rx="0.5" fill="black" />
            <rect x="4.5" y="5.5" width="3" height="5.5" rx="0.5" fill="black" />
            <rect x="8.5" y="3" width="3" height="8" rx="0.5" fill="black" />
            <rect x="12.5" y="0.5" width="3" height="10.5" rx="0.5" fill="black" />
          </svg>
          <Wifi size={16} strokeWidth={2.5} />
          <BatteryFull size={20} strokeWidth={2} />
        </div>
      </div>

      {/* Main Content Area - Full width responsive grid on tablet/desktop, compact single-column on mobile */}
      <div className="flex-1 max-w-[440px] md:max-w-5xl lg:max-w-6xl mx-auto w-full px-5 md:px-8 lg:px-12 flex flex-col justify-between md:justify-start pt-1 md:pt-6 pb-4 md:pb-12">
        
        {/* Header & 3-Segment Progress Indicator */}
        <div className="shrink-0 md:mb-6">
          <div className="flex justify-between items-center mb-2.5 md:mb-3">
            <div className="flex items-center gap-2">
              {/* HoPon Bunny popping out of hole SVG Logo */}
              <svg width="36" height="36" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Hole base */}
                <ellipse cx="26" cy="40" rx="22" ry="7.5" fill="#1C1C1E" />
                {/* Bunny head and ears */}
                <path
                  d="M 16 40 C 15 35, 14 31, 14 26 C 14 20, 12 12, 15 6 C 17.5 2, 21.5 4, 21.5 13 C 21.5 18, 22.5 23, 23 26 C 24 23, 24.5 18, 26 10 C 27.5 3, 32 3, 33.5 8 C 35 14, 34 20, 32 26 C 35 30, 35.5 35, 35 40 Z"
                  fill="white"
                  stroke="#1C1C1E"
                  strokeWidth="3.8"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                {/* Inner ear lines */}
                <path d="M 17.5 14 C 16.5 10, 16.5 7, 17.5 6" stroke="#1C1C1E" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 29.5 13 C 30.5 9, 30.5 7, 29.5 6" stroke="#1C1C1E" strokeWidth="2.5" strokeLinecap="round" />
                {/* Eyes */}
                <circle cx="20" cy="32" r="2.2" fill="#1C1C1E" />
                <circle cx="29" cy="32" r="2.2" fill="#1C1C1E" />
                {/* Nose */}
                <circle cx="24.5" cy="35.5" r="1.4" fill="#1C1C1E" />
              </svg>
              <span className="text-[26px] md:text-[28px] font-[900] tracking-tight text-[#1C1C1E] ml-1">HoPon</span>
            </div>
            <button className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center text-[#1C1C1E] hover:opacity-70 transition-opacity">
              <X size={22} strokeWidth={2.4} />
            </button>
          </div>

          {/* 3-Segment Progress Indicator */}
          <div className="flex items-center gap-2 md:max-w-xs">
            <div className="h-[3.5px] flex-1 bg-[#EBEBF0] rounded-full" />
            <div className="h-[4px] flex-1 bg-[#1C1C1E] rounded-full" />
            <div className="h-[3.5px] flex-1 bg-[#EBEBF0] rounded-full" />
          </div>
        </div>

        {/* Responsive Content Grid: single flex flow on mobile (< md), 12-col two-column layout on tablet & desktop (md+) */}
        <div className="flex-1 flex flex-col justify-between md:grid md:grid-cols-12 md:gap-8 lg:gap-10 md:items-start">

          {/* Left Column on Tablet/Desktop: Driver Info & Trip Timeline */}
          <div className="contents md:flex md:flex-col md:col-span-7 lg:col-span-7 md:gap-6">
            
            {/* Section 1: Driver Info Card & Badges */}
            <div className="shrink-0">
              <div className="bg-[#F8F8FA] rounded-[24px] px-5 py-4 md:py-4.5 mt-4 mb-4 md:mt-5 md:mb-5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3.5">
                    {/* Pink silhouette user bust */}
                    <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center shrink-0">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="7" r="4.5" fill="#FF72B6" />
                        <path
                          d="M3.5 20.5C3.5 16.5 7.3 14 12 14C16.7 14 20.5 16.5 20.5 20.5C20.5 21.3 19.8 22 19 22H5C4.2 22 3.5 21.3 3.5 20.5Z"
                          fill="#FF72B6"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[16px] md:text-[17px] text-[#1C1C1E] leading-tight">Lara Larsson</h3>
                      <div className="flex items-center gap-1.5 text-[13.5px] md:text-[14px] mt-0.5">
                        <Star size={13} fill="#007AFF" strokeWidth={0} className="text-[#007AFF]" />
                        <span className="font-bold text-[#007AFF]">4.9</span>
                        <span className="text-[#8E8E93] font-medium">•</span>
                        <span className="text-[#8E8E93] font-normal">(120 rides)</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right text-[13.5px] md:text-[14px] leading-tight space-y-0.5">
                    <p className="text-[#8E8E93] font-normal">Tesla Model X • Gray</p>
                    <p>
                      <span className="text-[#8E8E93] font-normal">Plate: </span>
                      <span className="text-[#1C1C1E] font-bold">ABC 432 KJ</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#EAF2FF] text-[#007AFF] rounded-full font-semibold text-[13px]">
                  {/* Starburst Verified Icon */}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 1L14.7 3.6L18.4 3.1L19.7 6.6L23 8.6L21.5 12L23 15.4L19.7 17.4L18.4 20.9L14.7 20.4L12 23L9.3 20.4L5.6 20.9L4.3 17.4L1 15.4L2.5 12L1 8.6L4.3 6.6L5.6 3.1L9.3 3.6L12 1Z"
                      fill="#007AFF"
                    />
                    <path
                      d="M7.5 11.8L10.5 14.8L16.5 8.8"
                      stroke="white"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Verified ID</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#EAF8F0] text-[#22C55E] rounded-full font-semibold text-[13px]">
                  {/* Safe Driver Shield Icon */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2L4 5V11C4 16.5 7.4 21.6 12 22.8C16.6 21.6 20 16.5 20 11V5L12 2Z"
                      fill="#22C55E"
                    />
                  </svg>
                  <span>Safe Driver</span>
                </div>
              </div>
            </div>

            {/* Section 2: Trip Info */}
            <div className="shrink-0 md:bg-[#FAFAFC] md:border md:border-slate-100 md:rounded-[28px] md:p-6 lg:p-7">
              <h2 className="text-[17px] md:text-[18px] font-bold text-[#1C1C1E] mb-2.5 md:mb-5">Trip Info</h2>
              
              <div className="flex flex-col space-y-[28px] md:space-y-[32px] relative">
                
                {/* Stop 1 */}
                <div className="flex items-start gap-3.5 relative">
                  {/* Connecting glowing capsule & blue line to Stop 2 */}
                  <div className="absolute left-[4px] top-[14px] -bottom-[30px] md:-bottom-[34px] w-[12px] bg-[#D4E7FE] rounded-full -z-0" />
                  <div className="absolute left-[8.5px] top-[14px] -bottom-[30px] md:-bottom-[34px] w-[3px] bg-[#007AFF] -z-0" />
                  
                  {/* Stop 1 Dot */}
                  <div className="w-[20px] h-[20px] rounded-full border-[3.5px] border-[#007AFF] bg-white ring-2 ring-white shrink-0 mt-0.5 z-10" />
                  
                  <div className="flex-1 flex justify-between items-start">
                    <div>
                      <p className="text-[13px] md:text-[13.5px] font-medium text-[#8E8E93] leading-none mb-1">Pickup</p>
                      <p className="text-[15.5px] md:text-[16px] font-bold text-[#1C1C1E] leading-tight">Main Street Bus Stop</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-[16px] md:text-[16.5px] font-bold text-[#1C1C1E] leading-none">08:15 AM</p>
                      <p className="text-[12.5px] font-medium text-[#8E8E93] leading-none mt-1">(in 5 mins)</p>
                    </div>
                  </div>
                </div>

                {/* Stop 2 */}
                <div className="flex items-start gap-3.5 relative">
                  {/* Connecting gray line to Stop 3 */}
                  <div className="absolute left-[9px] top-[14px] -bottom-[30px] md:-bottom-[34px] w-[2px] bg-[#E5E5EA] -z-0" />
                  
                  {/* Stop 2 Dot */}
                  <div className="w-[20px] h-[20px] rounded-full border-[3px] border-[#96C4FF] bg-white ring-2 ring-white shrink-0 mt-0.5 z-10" />
                  
                  <div className="flex-1 flex justify-between items-start">
                    <div>
                      <p className="text-[13px] md:text-[13.5px] font-medium text-[#8E8E93] leading-none mb-1">Passenger 2</p>
                      <p className="text-[15.5px] md:text-[16px] font-semibold text-[#1C1C1E] leading-tight">Oakwood Apartments</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-[16px] md:text-[16.5px] font-bold text-[#1C1C1E] leading-none">08:20 AM</p>
                    </div>
                  </div>
                </div>

                {/* Stop 3 */}
                <div className="flex items-start gap-3.5 relative">
                  {/* Connecting gray line to Stop 4 */}
                  <div className="absolute left-[9px] top-[14px] -bottom-[30px] md:-bottom-[34px] w-[2px] bg-[#E5E5EA] -z-0" />
                  
                  {/* Stop 3 Dot */}
                  <div className="w-[20px] h-[20px] rounded-full border-[2.5px] border-[#D1D1D6] bg-white ring-2 ring-white shrink-0 mt-0.5 z-10" />
                  
                  <div className="flex-1 flex justify-between items-start">
                    <div>
                      <p className="text-[13px] md:text-[13.5px] font-medium text-[#8E8E93] leading-none mb-1">Passenger 3</p>
                      <p className="text-[15.5px] md:text-[16px] font-semibold text-[#1C1C1E] leading-tight">Central Mall Entrance B</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-[16px] md:text-[16.5px] font-bold text-[#1C1C1E] leading-none">08:25 AM</p>
                    </div>
                  </div>
                </div>

                {/* Stop 4 */}
                <div className="flex items-start gap-3.5 relative">
                  {/* Stop 4 Dot */}
                  <div className="w-[20px] h-[20px] rounded-full border-[2.5px] border-[#D1D1D6] bg-white ring-2 ring-white flex items-center justify-center shrink-0 mt-0.5 z-10">
                    <div className="w-[6px] h-[6px] rounded-full bg-[#AEAEB2]" />
                  </div>
                  
                  <div className="flex-1 flex justify-between items-start">
                    <div>
                      <p className="text-[13px] md:text-[13.5px] font-medium text-[#8E8E93] leading-none mb-1">Dropoff</p>
                      <p className="text-[15.5px] md:text-[16px] font-semibold text-[#1C1C1E] leading-tight">Tech Park, Building A</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-[16px] md:text-[16.5px] font-bold text-[#1C1C1E] leading-none">08:40 AM</p>
                      <p className="text-[12px] font-medium text-[#8E8E93] leading-none mt-1">(Estimated arrival)</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column on Tablet/Desktop: Fare Split, Reminder & Join Action */}
          <div className="contents md:flex md:flex-col md:col-span-5 lg:col-span-5 md:gap-5 md:sticky md:top-8">
            
            {/* Section 3: Fare Split Card */}
            <div className="shrink-0 bg-gradient-to-b from-[#DCF7E7] via-[#EDFAF1] to-[#F9FCFA] rounded-[28px] py-6 px-6 text-center md:border md:border-emerald-100/60 md:shadow-xs">
              <p className="text-[#20B26C] font-semibold text-[14px] tracking-wide mb-1.5">Fare Split</p>
              <div className="flex items-baseline justify-center mb-2.5">
                <span className="text-[46px] md:text-[52px] font-[900] tracking-tight text-[#1C1C1E] leading-none">$4.20</span>
                <span className="text-[#8E8E93] text-[18px] md:text-[20px] font-normal ml-1">/seat</span>
              </div>
              <div className="inline-flex items-center px-4 py-1.5 bg-black/[0.04] text-[#8E8E93] rounded-full text-[12.5px] font-semibold">
                × 3 riders
              </div>
              {/* Desktop-only subtle breakdown */}
              <div className="hidden md:block mt-4 pt-3 border-t border-black/[0.05] text-[13px] text-[#8E8E93]">
                Total route fare: <span className="font-semibold text-[#1C1C1E]">$12.60</span> • Split evenly
              </div>
            </div>

            {/* Section 4: Set Reminder */}
            <div className="shrink-0 flex items-center justify-between py-1 md:bg-[#F8F8FA] md:p-5 md:rounded-[24px]">
              <div>
                <h3 className="text-[16px] font-bold text-[#1C1C1E] leading-tight mb-0.5">Set Reminder</h3>
                <p className="text-[13px] text-[#8E8E93] leading-snug">
                  Get notified 10 minutes before pickup<br />so you're ready on time.
                </p>
              </div>
              <button className="px-7.5 py-2.5 bg-[#F2F2F7] hover:bg-[#E5E5EA] text-[#1C1C1E] font-bold text-[14.5px] rounded-full transition-colors shrink-0">
                Set
              </button>
            </div>

            {/* Section 5: Bottom Action Bar */}
            <div className="shrink-0 md:pt-1">
              <div className="flex items-center gap-3">
                <button className="w-[72px] h-[58px] bg-[#F2F2F7] hover:bg-[#E5E5EA] rounded-[24px] flex items-center justify-center transition-colors shrink-0">
                  <Phone size={22} className="fill-[#1C1C1E] text-[#1C1C1E] rotate-[-10deg]" />
                </button>
                <button className="flex-1 h-[58px] bg-[#3A3A3C] hover:bg-[#2C2C2E] text-white font-bold text-[16.5px] md:text-[17px] rounded-[24px] transition-colors flex items-center justify-center shadow-sm">
                  Join Ride
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
