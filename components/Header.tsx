
import React from 'react';
import { SiteHeader } from '../types';

interface HeaderProps {
  header: SiteHeader;
}

const Header: React.FC<HeaderProps> = ({ header }) => {
  return (
    <div className="w-full text-gray-900 box-border mb-1">
      <nav className="flex items-center justify-between py-1 border-b border-black/10">
        {/* Navigasi Utama */}
        <div className="flex gap-3 text-[8px] font-black tracking-widest uppercase">
           <span className="opacity-40">{header.workPage}</span>
           <span className="text-black border-b-2 border-black pb-0.5">{header.product}</span>
           <span className="opacity-40">{header.payment}</span>
           <span className="opacity-40">{header.account}</span>
        </div>
        
        {/* Management Status */}
        <div className="flex items-center gap-2.5 font-black">
           <div className="flex items-center gap-1.5 px-2 py-0.5 bg-black/5 rounded-full border border-black/15 shadow-sm">
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse"></div>
              <span className="text-gray-900 text-[7.5px] whitespace-nowrap tracking-tight">{header.managementStatus}</span>
           </div>
           <span className="opacity-40 uppercase tracking-widest text-[7px]">HELP</span>
        </div>
      </nav>
      
      {/* Sub-Navigasi dengan Garis Pemisah Emas yang Lebih Terang dan Cantik */}
      <div className="flex justify-center mt-7 gap-12 text-[10px] font-black tracking-[0.5em] uppercase relative">
        <div className="relative group flex flex-col items-center">
          <span className="text-black mb-1.5">REGULER</span>
          {/* Garis Aktif Emas Terang dengan efek Glow Ultra Terang */}
          <div className="relative h-[4px] w-full min-w-[60px]">
            {/* Glow effect layer */}
            <div className="absolute inset-0 bg-[#fcf6ba] blur-[4px] opacity-70 rounded-full"></div>
            {/* Main Gradient line */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-[#fff9c4] to-[#d4af37] border-t border-white/40 shadow-[0_2px_10px_rgba(212,175,55,0.9)] rounded-full z-10"></div>
            {/* Sparkling dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-white/80 z-20 animate-pulse"></div>
          </div>
        </div>
        
        <div className="relative flex flex-col items-center">
          <span className="text-black/20 mb-1.5">MAGIC</span>
          <div className="h-[1px] w-full bg-black/5 rounded-full"></div>
        </div>

        <div className="relative flex flex-col items-center">
          <span className="text-black/20 mb-1.5">TREASURE</span>
          <div className="h-[1px] w-full bg-black/5 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
