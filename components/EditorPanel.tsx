
import React from 'react';
import { TaskItem, SiteHeader } from '../types';

interface EditorPanelProps {
  tasks: TaskItem[];
  updateTask: (id: string, field: keyof TaskItem, value: string) => void;
  header: SiteHeader;
  updateHeader: (field: keyof SiteHeader, value: string) => void;
}

const EditorPanel: React.FC<EditorPanelProps> = ({ tasks, updateTask, header, updateHeader }) => {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h3 className="text-[#d4af37] font-cinzel font-bold border-b border-[#d4af37]/30 pb-1 text-sm tracking-widest">Site Navigation</h3>
        <div className="grid grid-cols-2 gap-3">
          {(Object.keys(header) as Array<keyof SiteHeader>).map((key) => (
            <div key={key} className="flex flex-col gap-1">
              <label className="text-[9px] font-bold uppercase opacity-50 tracking-tighter">{key.replace(/([A-Z])/g, ' $1')}</label>
              <input 
                type="text" 
                value={header[key]} 
                onChange={(e) => updateHeader(key, e.target.value)}
                className="bg-white/5 border border-white/10 rounded px-2 py-1.5 text-[11px] focus:outline-none focus:border-[#d4af37]/50 text-white"
              />
            </div>
          ))}
        </div>
      </section>

      <div className="space-y-6">
        <h3 className="text-[#d4af37] font-cinzel font-bold border-b border-[#d4af37]/30 pb-1 text-sm tracking-widest">Task Content</h3>
        {tasks.map((task, idx) => (
          <section key={task.id} className="space-y-4 bg-white/[0.03] p-4 rounded-xl border border-white/5">
            <div className="flex justify-between items-center">
              <h4 className="text-[10px] font-black text-[#d4af37] uppercase tracking-[0.2em]">
                Task Item #{idx + 1}
              </h4>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-[8px] uppercase font-bold opacity-40">Option</span>
                  <select 
                    value={task.productLetter}
                    onChange={(e) => updateTask(task.id, 'productLetter', e.target.value)}
                    className="bg-black border border-[#d4af37]/50 text-[#d4af37] text-[10px] rounded px-1"
                  >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[8px] uppercase font-bold opacity-40">Tag Color</span>
                  <input 
                    type="color" 
                    value={task.tagColor}
                    onChange={(e) => updateTask(task.id, 'tagColor', e.target.value)}
                    className="w-5 h-5 rounded-full overflow-hidden bg-transparent cursor-pointer border-none p-0"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
               <div className="flex flex-col gap-1">
                  <label className="text-[9px] font-bold uppercase opacity-50">Nama Tugas (Title)</label>
                  <input 
                    type="text" 
                    value={task.title} 
                    onChange={(e) => updateTask(task.id, 'title', e.target.value)}
                    className="bg-white/5 border border-white/10 rounded px-2 py-1.5 text-[12px] text-white"
                  />
               </div>
               
               <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col gap-1">
                      <label className="text-[9px] font-bold uppercase opacity-50">Persen Profit</label>
                      <input 
                        type="text" 
                        value={task.profitLabel} 
                        onChange={(e) => updateTask(task.id, 'profitLabel', e.target.value)}
                        className="bg-white/5 border border-white/10 rounded px-2 py-1.5 text-[12px] text-white"
                      />
                  </div>
                  <div className="flex flex-col gap-1">
                      <label className="text-[9px] font-bold uppercase opacity-50">Badge Name (e.g. Essence)</label>
                      <input 
                        type="text" 
                        value={task.tag} 
                        onChange={(e) => updateTask(task.id, 'tag', e.target.value)}
                        className="bg-white/5 border border-white/10 rounded px-2 py-1.5 text-[12px] text-white"
                      />
                  </div>
               </div>

               <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col gap-1">
                      <label className="text-[8px] font-bold uppercase opacity-50">Harga Produk</label>
                      <input 
                        type="text" 
                        value={task.price} 
                        onChange={(e) => updateTask(task.id, 'price', e.target.value)}
                        className="bg-white/5 border border-white/10 rounded px-2 py-1.5 text-[11px] text-white"
                      />
                  </div>
                  <div className="flex flex-col gap-1">
                      <label className="text-[8px] font-bold uppercase opacity-50">Benefit (Komisi)</label>
                      <input 
                        type="text" 
                        value={task.benefit} 
                        onChange={(e) => updateTask(task.id, 'benefit', e.target.value)}
                        className="bg-white/5 border border-white/10 rounded px-2 py-1.5 text-[11px] text-white"
                      />
                  </div>
                  <div className="flex flex-col gap-1">
                      <label className="text-[8px] font-bold uppercase opacity-50">Magic Reward</label>
                      <input 
                        type="text" 
                        value={task.reward} 
                        onChange={(e) => updateTask(task.id, 'reward', e.target.value)}
                        className="bg-white/5 border border-white/10 rounded px-2 py-1.5 text-[11px] text-white"
                      />
                  </div>
               </div>

               <div className="flex flex-col gap-1">
                  <label className="text-[9px] font-bold uppercase opacity-50">Total Income</label>
                  <input 
                    type="text" 
                    value={task.income} 
                    onChange={(e) => updateTask(task.id, 'income', e.target.value)}
                    className="bg-white/5 border border-white/10 rounded px-2 py-1.5 text-[12px] text-green-400 font-black"
                  />
               </div>

               <div className="flex flex-col gap-1">
                  <label className="text-[9px] font-bold uppercase opacity-50">Image URL</label>
                  <input 
                    type="text" 
                    value={task.imageUrl} 
                    onChange={(e) => updateTask(task.id, 'imageUrl', e.target.value)}
                    className="bg-white/5 border border-white/10 rounded px-2 py-1.5 text-[10px] text-white/50 italic"
                  />
               </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default EditorPanel;
