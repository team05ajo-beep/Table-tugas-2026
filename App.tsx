
import React, { useState } from 'react';
import { TaskItem, SiteHeader } from './types';
import TaskCard from './components/TaskCard';
import EditorPanel from './components/EditorPanel';
import Header from './components/Header';

const DEFAULT_IMAGE = 'https://i.pinimg.com/1200x/ca/16/df/ca16df32e061d77036328927837c0d23.jpg';

const INITIAL_TASKS: TaskItem[] = [
  {
    id: '1',
    title: 'CHARLOTTE TILBURY GIFT',
    type: 'KIT',
    profitLabel: 'PROFIT 20%',
    description: '1 Package • 1 Product Total. Complete the full cycle and receive your instant withdrawal.',
    price: 'Rp 1.270.000',
    benefit: 'Rp 254.000',
    reward: 'Rp 50.000',
    income: 'Rp 1.574.000',
    tag: 'ESSENCE',
    imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=800',
    isRightAligned: false,
    tagColor: '#C5A059',
    productLetter: 'A'
  },
  {
    id: '2',
    title: 'MINI LIPSTICK CHARMS',
    type: 'SET',
    profitLabel: 'PROFIT 25%',
    description: '1 Package • 1 Product Total. Complete the full cycle and enjoy exclusive rewards.',
    price: 'Rp 1.588.000',
    benefit: 'Rp 397.000',
    reward: 'Rp 75.000',
    income: 'Rp 2.060.000',
    tag: 'PRESTIGE',
    imageUrl: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&q=80&w=800',
    isRightAligned: true,
    tagColor: '#B8860B',
    productLetter: 'B'
  },
  {
    id: '3',
    title: 'ICONIC MINI LIP TRIO',
    type: 'KIT',
    profitLabel: 'PROFIT 40%',
    description: '1 Package • 1 Product Total. Premium access and high-speed processing.',
    price: 'Rp 3.888.000',
    benefit: 'Rp 1.166.400',
    reward: 'Rp 150.000',
    income: 'Rp 5.204.400',
    tag: 'MAJESTIC',
    imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800',
    isRightAligned: false,
    tagColor: '#DAA520',
    productLetter: 'C'
  },
  {
    id: '4',
    title: "BEAUTY CHEST SUPREME",
    type: 'TREASURE',
    profitLabel: 'PROFIT 50%',
    description: '3 Package • 3 Product Total. The ultimate achievement for professional traders.',
    price: 'Rp 5.699.000',
    benefit: 'Rp 2.849.500',
    reward: 'Rp 500.000',
    income: 'Rp 9.048.500',
    tag: 'SUPREME',
    imageUrl: 'https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?auto=format&fit=crop&q=80&w=800',
    isRightAligned: true,
    tagColor: '#8B4513',
    productLetter: 'D'
  }
];

const INITIAL_HEADER: SiteHeader = {
  workPage: 'WORK PAGE',
  product: 'PRODUCT',
  payment: 'PAYMENT',
  account: 'ACCOUNT',
  managementStatus: 'Management Online'
};

const App: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>(INITIAL_TASKS);
  const [header, setHeader] = useState<SiteHeader>(INITIAL_HEADER);
  const [isResultOnly, setIsResultOnly] = useState(false);

  const updateTask = (id: string, field: keyof TaskItem, value: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, [field]: value } : t));
  };

  const updateHeader = (field: keyof SiteHeader, value: string) => {
    setHeader(prev => ({ ...prev, [field]: value }));
  };

  const toggleScreenshotMode = () => {
    setIsResultOnly(!isResultOnly);
  };

  return (
    <div className={`min-h-screen ${isResultOnly ? 'bg-black' : 'bg-[#1a0b0b]'} transition-colors duration-500 flex flex-col md:flex-row overflow-hidden`}>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-15deg); }
          40%, 100% { transform: translateX(100%) skewX(-15deg); }
        }
        .luxury-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .luxury-scroll::-webkit-scrollbar-thumb {
          background: #d4af37;
          border-radius: 10px;
        }
      `}</style>

      {/* Control Button for Screenshot Mode */}
      {!isResultOnly && (
        <div className="fixed bottom-6 right-6 z-[100]">
          <button 
            onClick={toggleScreenshotMode}
            className="bg-[#d4af37] text-black px-6 py-3 rounded-full font-black text-xs tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 transition-transform uppercase"
          >
            Switch to Preview Mode
          </button>
        </div>
      )}

      {/* Editor Panel */}
      {!isResultOnly && (
        <div className="w-full md:w-[450px] h-screen bg-black/40 backdrop-blur-md border-r border-[#d4af37]/20 p-6 overflow-y-auto luxury-scroll shrink-0">
          <div className="mb-8">
            <h1 className="font-cinzel text-2xl text-[#d4af37] font-bold tracking-widest border-b border-[#d4af37]/30 pb-2">DESIGNER TOOL</h1>
            <p className="text-[10px] text-white/40 mt-2 font-bold tracking-widest uppercase">Manual Configuration 2026</p>
          </div>
          <EditorPanel 
            tasks={tasks} 
            updateTask={updateTask} 
            header={header} 
            updateHeader={updateHeader} 
          />
        </div>
      )}

      {/* Preview Result */}
      <div className={`flex-1 h-screen overflow-y-auto ${isResultOnly ? 'p-0' : 'p-4 md:p-10'} flex justify-center items-start bg-black luxury-scroll`}>
        <div 
          id="capture-area"
          className={`${isResultOnly ? 'w-full max-w-[800px]' : 'w-full max-w-[700px]'} bg-white rounded-none shadow-2xl relative overflow-hidden flex flex-col`}
          style={{ minHeight: '1000px' }}
        >
          {/* Header */}
          <div className="px-6 pt-6">
            <Header header={header} />
          </div>

          {/* Task Items */}
          <div className="flex-1 px-4 py-2 flex flex-col gap-2">
            {tasks.map(task => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>

          {isResultOnly && (
            <button 
              onClick={toggleScreenshotMode}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/20 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm transition-all z-[60]"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
