
import React from 'react';
import { SiteHeader } from '../types';

interface HeaderProps {
  header: SiteHeader;
}

const Header: React.FC<HeaderProps> = ({ header }) => {
  return (
    <div className="w-full mb-6">
      <nav className="flex items-center justify-between py-2 border-b border-gray-100">
        <div className="flex gap-4 text-[9px] font-black tracking-widest uppercase">
          <span className="text-gray-400">{header.workPage}</span>
          <span className="text-black border-b-2 border-black pb-1">{header.product}</span>
          <span className="text-gray-400">{header.payment}</span>
          <span className="text-gray-400">{header.account}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full border border-gray-100">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_#22c55e]"></div>
            <span className="text-gray-900 text-[8px] font-bold tracking-tight">{header.managementStatus}</span>
          </div>
          <span className="text-[8px] font-black text-gray-300 tracking-widest">HELP</span>
        </div>
      </nav>

      <div className="flex justify-center mt-10 gap-16 text-[11px] font-black tracking-[0.5em] text-gray-200">
        <div className="flex flex-col items-center group">
          <span className="text-black mb-2 transition-colors">REGULER</span>
          <div className="h-[3px] w-20 bg-gradient-to-r from-[#d4af37] via-[#fff9c4] to-[#d4af37] shadow-[0_0_10px_rgba(212,175,55,0.8)] rounded-full"></div>
        </div>
        <div className="flex flex-col items-center opacity-30">
          <span className="mb-2">MAGIC</span>
          <div className="h-[1px] w-12 bg-gray-200"></div>
        </div>
        <div className="flex flex-col items-center opacity-30">
          <span className="mb-2">TREASURE</span>
          <div className="h-[1px] w-12 bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
