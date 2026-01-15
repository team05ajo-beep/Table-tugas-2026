
import React from 'react';
import { TaskItem } from '../types';

interface TaskCardProps {
  task: TaskItem;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const profitNum = parseInt(task.profitLabel.match(/\d+/)?.[0] || '0');
  const isPremiumGold = profitNum >= 30;

  return (
    <div 
      className={`flex-none h-[23.5%] w-full flex items-center gap-4 border-b border-[#d4af37]/20 last:border-0 py-2 relative overflow-hidden box-border transition-all duration-500 ${task.isRightAligned ? 'flex-row-reverse' : 'flex-row'} ${isPremiumGold ? 'bg-gradient-to-r from-[#d4af37]/15 via-[#fcf6ba]/25 to-[#d4af37]/15' : ''}`}
    >
      {/* Glossy Overlay for Premium */}
      {isPremiumGold && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/5 via-[#fcf6ba]/15 to-[#d4af37]/5 opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_4s_infinite]"></div>
          <style>{`
            @keyframes shimmer {
              0% { transform: translateX(-100%) skewX(-15deg); }
              40% { transform: translateX(100%) skewX(-15deg); }
              100% { transform: translateX(100%) skewX(-15deg); }
            }
          `}</style>
        </div>
      )}

      {/* Content Area */}
      <div className={`flex-1 h-full flex flex-col justify-between relative z-10 box-border py-0.5 ${task.isRightAligned ? 'text-right items-end pl-2' : 'text-left items-start pr-2'}`}>
        
        {/* Top Section: Letter & Type */}
        <div className={`flex items-center gap-2 mb-0.5 ${task.isRightAligned ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className="bg-gray-900 text-[#d4af37] w-5 h-5 flex items-center justify-center rounded-sm shadow-md border border-[#d4af37]/40 shrink-0">
            <span className="font-black font-cinzel text-[10px] leading-none">{task.productLetter}</span>
          </div>
          <span className={`text-[8px] font-black uppercase tracking-widest leading-none ${isPremiumGold ? 'text-gray-900' : 'text-gray-500'}`}>
            {task.type}
          </span>
        </div>

        {/* Title Section */}
        <div className="w-full mb-1">
          <h2 className={`text-[16px] leading-tight font-cinzel font-black tracking-tight uppercase line-clamp-1 ${isPremiumGold ? 'text-gray-900' : 'text-gray-800'}`}>
            {task.title}
          </h2>
          <div className={`inline-block px-1.5 py-0.5 mt-0.5 text-[7px] border rounded-sm font-black uppercase tracking-wider shadow-sm ${isPremiumGold ? 'bg-gradient-to-r from-[#d4af37] via-[#fff9c4] to-[#d4af37] text-black border-[#d4af37]' : 'bg-gray-800 text-white border-gray-700'}`}>
            {task.profitLabel}
          </div>
        </div>

        {/* Description Section */}
        <p className={`text-[7.5px] leading-[1.3] font-medium mb-1.5 line-clamp-2 max-w-[95%] ${isPremiumGold ? 'text-gray-700' : 'text-gray-500'}`}>
          {task.description}
        </p>

        {/* Action Section */}
        <div className={`flex gap-3 mb-2.5 ${task.isRightAligned ? 'flex-row-reverse' : 'flex-row'}`}>
           <button className={`px-2.5 py-0.5 text-[7.5px] border rounded-sm font-black uppercase tracking-widest shadow-sm transition-colors ${isPremiumGold ? 'border-gray-900 text-gray-900 bg-black/5 hover:bg-black/10' : 'border-gray-300 text-gray-600 hover:bg-gray-100'}`}>
              LEARN MORE
           </button>
           <button className={`flex items-center gap-1.5 text-[7.5px] font-black uppercase tracking-widest ${isPremiumGold ? 'text-gray-800' : 'text-gray-500'}`}>
              <div className={`w-4 h-4 border rounded-full flex items-center justify-center text-[4px] ${isPremiumGold ? 'border-gray-800 text-gray-800' : 'border-gray-400'}`}>
                ▶
              </div>
              WATCH
           </button>
        </div>

        {/* Data Table Section */}
        <div className="w-full relative mt-auto box-border pt-1">
           <div 
             className="px-2.5 py-0.5 text-[7px] absolute -top-1.5 rounded-sm font-black shadow-lg z-20 font-cinzel tracking-widest border border-white/40 whitespace-nowrap"
             style={{ 
               backgroundColor: task.tagColor, 
               color: '#FFFFFF',
               left: task.isRightAligned ? 'auto' : '15%',
               right: task.isRightAligned ? '15%' : 'auto',
               transform: 'translateX(-50%)',
             }}
           >
             {task.tag}
           </div>

           <div className={`rounded-md overflow-hidden p-1.5 pt-4 shadow-xl border-t ${isPremiumGold ? 'bg-gradient-to-b from-[#fff9c4] via-[#d4af37] to-[#b8860b] border-white/80' : 'bg-white border-gray-200'}`}>
              <div className={`grid grid-cols-3 gap-1 mb-1 border-b pb-1 px-1 ${isPremiumGold ? 'border-black/20' : 'border-black/5'}`}>
                 <div className="text-center flex flex-col justify-center h-full">
                    <p className="text-[6.5px] font-black opacity-50 uppercase tracking-tighter text-black leading-none mb-1">HARGA</p>
                    <p className="text-[12.5px] font-black text-[#800] leading-none tracking-tighter">{task.price}</p>
                 </div>
                 <div className={`text-center border-x px-1 flex flex-col justify-center h-full ${isPremiumGold ? 'border-black/20' : 'border-black/5'}`}>
                    <p className="text-[6.5px] font-black opacity-50 uppercase tracking-tighter text-black leading-none mb-1">BENEFIT</p>
                    <p className="text-[12.5px] font-black text-black leading-none tracking-tighter">{task.benefit}</p>
                 </div>
                 <div className="text-center flex flex-col justify-center h-full">
                    <p className="text-[6.5px] font-black opacity-50 uppercase tracking-tighter text-black leading-none mb-1">REWARD</p>
                    <p className="text-[12.5px] font-black text-black leading-none tracking-tighter">{task.reward}</p>
                 </div>
              </div>
              <div className="text-center py-1">
                 <p className={`text-[22px] font-black leading-none tracking-tighter drop-shadow-sm ${isPremiumGold ? 'text-[#064e3b]' : 'text-[#15803D]'}`}>
                    {task.income}
                 </p>
              </div>
           </div>
        </div>
      </div>

      {/* Image Container */}
      <div className={`h-[150px] w-[240px] overflow-hidden rounded-lg shadow-2xl shrink-0 border relative z-10 transition-transform duration-300 ${isPremiumGold ? 'border-[#d4af37] border-[2px] shadow-[0_4px_20px_rgba(212,175,55,0.4)]' : 'border-white/80 shadow-lg'}`}>
         <img src={task.imageUrl} alt={task.title} className="w-full h-full object-cover" />
         <div className="absolute inset-0 bg-gradient-to-tr from-black/15 via-transparent to-white/5 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default TaskCard;
