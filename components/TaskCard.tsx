
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
      className={`group relative flex items-center gap-4 py-3 border-b border-black/5 last:border-0 transition-all duration-700 ${task.isRightAligned ? 'flex-row-reverse' : 'flex-row'} ${isPremiumGold ? 'bg-gradient-to-r from-[#fff9c4]/10 via-[#d4af37]/5 to-transparent' : ''}`}
    >
      {/* Background Shimmer Effect */}
      {isPremiumGold && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_3s_infinite]"></div>
        </div>
      )}

      {/* Information Area */}
      <div className={`flex-1 flex flex-col justify-between ${task.isRightAligned ? 'text-right items-end' : 'text-left items-start'}`}>
        
        {/* Badge & Type */}
        <div className={`flex items-center gap-2 mb-1 ${task.isRightAligned ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className="bg-black text-[#d4af37] px-1.5 py-0.5 rounded-sm font-cinzel font-black text-[9px] border border-[#d4af37]/40">
            {task.productLetter}
          </div>
          <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">{task.type}</span>
        </div>

        {/* Title & Profit */}
        <div className="mb-1 w-full">
          <h2 className="text-[15px] font-cinzel font-black text-gray-900 leading-tight uppercase tracking-tight">
            {task.title}
          </h2>
          <div className="inline-block mt-1 px-2 py-0.5 rounded-full bg-black text-[#d4af37] text-[7px] font-bold tracking-widest uppercase shadow-sm">
            {task.profitLabel}
          </div>
        </div>

        {/* Description */}
        <p className="text-[8px] text-gray-500 leading-relaxed font-medium mb-3 max-w-[90%]">
          {task.description}
        </p>

        {/* Financial Table */}
        <div className="w-full relative">
          {/* Floating Tag */}
          <div 
            className="absolute -top-3 px-3 py-0.5 text-[8px] font-black text-white rounded-sm shadow-xl z-20 tracking-tighter"
            style={{ 
              backgroundColor: task.tagColor,
              [task.isRightAligned ? 'right' : 'left']: '15%',
              transform: 'translateX(-50%)'
            }}
          >
            {task.tag}
          </div>

          <div className={`rounded-lg overflow-hidden border shadow-lg ${isPremiumGold ? 'border-[#d4af37] bg-gradient-to-b from-[#fff9c4] via-[#d4af37] to-[#b8860b]' : 'border-gray-100 bg-white'}`}>
            <div className={`grid grid-cols-3 border-b ${isPremiumGold ? 'border-black/10' : 'border-gray-50'}`}>
              <div className="p-1.5 pt-3 text-center">
                <p className="text-[6px] font-bold text-black/40 uppercase mb-0.5">HARGA</p>
                <p className={`text-[11px] font-black ${isPremiumGold ? 'text-black' : 'text-[#800]'}`}>{task.price}</p>
              </div>
              <div className={`p-1.5 pt-3 text-center border-x ${isPremiumGold ? 'border-black/10' : 'border-gray-50'}`}>
                <p className="text-[6px] font-bold text-black/40 uppercase mb-0.5">BENEFIT</p>
                <p className="text-[11px] font-black text-black">{task.benefit}</p>
              </div>
              <div className="p-1.5 pt-3 text-center">
                <p className="text-[6px] font-bold text-black/40 uppercase mb-0.5">REWARD</p>
                <p className="text-[11px] font-black text-black">{task.reward}</p>
              </div>
            </div>
            <div className="py-2 text-center bg-white/50 backdrop-blur-sm">
              <p className={`text-2xl font-black leading-none tracking-tighter drop-shadow-sm ${isPremiumGold ? 'text-[#064e3b]' : 'text-green-600'}`}>
                {task.income}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Image */}
      <div className={`w-[220px] h-[160px] rounded-xl overflow-hidden shadow-2xl shrink-0 border-2 transition-transform duration-500 group-hover:scale-[1.02] ${isPremiumGold ? 'border-[#d4af37]' : 'border-white'}`}>
        <img src={task.imageUrl} alt={task.title} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default TaskCard;
