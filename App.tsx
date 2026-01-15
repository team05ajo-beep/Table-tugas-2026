
import React, { useState } from 'react';
import { TaskItem, SiteHeader } from './types';
import TaskCard from './components/TaskCard';
import EditorPanel from './components/EditorPanel';
import Header from './components/Header';

const INITIAL_TASKS: TaskItem[] = [
  {
    id: '1',
    title: 'CHARLOTTE TILBURY HOLIDAY GIFT',
    type: 'KIT',
    profitLabel: 'PROFIT 20%',
    description: '1 Package • 1 Product Total. Complete the full cycle, enjoy exclusive rewards, and receive your instant withdrawal.',
    price: 'Rp 1.270.000',
    benefit: 'Rp 254.000',
    reward: 'Rp 50.000',
    income: 'Rp 1.574.000',
    tag: 'ESSENCE',
    imageUrl: 'https://i.pinimg.com/736x/7b/20/b3/7b20b35cf2b4894316eede9d84773476.jpg',
    isRightAligned: false,
    tagColor: '#C5A059',
    productLetter: 'A'
  },
  {
    id: '2',
    title: 'MINI LIPSTICK CHARMS',
    type: 'SET',
    profitLabel: 'PROFIT 25%',
    description: '1 Package • 1 Product Total. Complete the full cycle, enjoy exclusive rewards, and receive your instant withdrawal.',
    price: 'Rp 1.588.000',
    benefit: 'Rp 397.000',
    reward: 'Rp 75.000',
    income: 'Rp 2.060.000',
    tag: 'PRESTIGE',
    imageUrl: 'https://i.pinimg.com/1200x/21/83/3b/21833be6f37283ccc2eaca8ba5671779.jpg',
    isRightAligned: true,
    tagColor: '#B8860B',
    productLetter: 'B'
  },
  {
    id: '3',
    title: 'ICONIC MINI LIP TRIO',
    type: 'KIT',
    profitLabel: 'PROFIT 40%',
    description: '1 Package • 1 Product Total. Complete the full cycle, enjoy exclusive rewards, and receive your instant withdrawal.',
    price: 'Rp 3.888.000',
    benefit: 'Rp 1.166.400',
    reward: 'Rp 150.000',
    income: 'Rp 5.204.400',
    tag: 'MAJESTIC',
    imageUrl: 'https://i.pinimg.com/1200x/90/40/e4/9040e4e56748214871b05ff7323a9b1b.jpg',
    isRightAligned: false,
    tagColor: '#DAA520',
    productLetter: 'C'
  },
  {
    id: '4',
    title: "CHARLOTTE'S BEAUTY CHEST",
    type: 'TREASURE PRODUCT',
    profitLabel: 'PROFIT 50%',
    description: '3 Package • 3 Product Total. Complete the full cycle, enjoy exclusive rewards, and receive your instant withdrawal.',
    price: 'Rp 5.699.000',
    benefit: 'Rp 2.849.500',
    reward: 'Rp 500.000',
    income: 'Rp 9.048.500',
    tag: 'SUPREME',
    imageUrl: 'https://i.pinimg.com/1200x/0b/08/f3/0b08f3ae56a59d186114dd3711e85d31.jpg',
    isRightAligned: true,
    tagColor: '#B8860B',
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
  const [isCapturing, setIsCapturing] = useState(false);

  const updateTask = (id: string, field: keyof TaskItem, value: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, [field]: value } : t));
  };

  const updateHeader = (field: keyof SiteHeader, value: string) => {
    setHeader(prev => ({ ...prev, [field]: value }));
  };

  const toggleScreenshotMode = () => {
    setIsResultOnly(!isResultOnly);
    window.scrollTo(0, 0);
  };

  const handleCapture = async () => {
    const element = document.getElementById('screenshot-target');
    if (!element) return;

    setIsCapturing(true);
    // Give time for any lazy-loaded elements to settle
    await new Promise(r => setTimeout(r, 500));

    try {
      // @ts-ignore
      const canvas = await window.html2canvas(element, {
        scale: 3, // High resolution
        useCORS: true, // For images from other domains
        backgroundColor: '#f3f4f6',
        logging: false,
      });

      const link = document.createElement('a');
      link.download = `luxury-task-dashboard-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
    } catch (err) {
      console.error('Failed to capture image:', err);
      alert('Failed to save image. Please check if all images are loaded.');
    } finally {
      setIsCapturing(false);
    }
  };

  return (
    <div className={`min-h-screen ${isResultOnly ? 'bg-black' : 'bg-[#120505]'} transition-colors duration-700 flex flex-col md:flex-row overflow-x-hidden relative`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        ${isResultOnly ? `
          ::-webkit-scrollbar { display: none; } 
          body { 
            -ms-overflow-style: none; 
            scrollbar-width: none; 
            overflow: auto; 
            background: black; 
          }
        ` : ''}
        
        .glossy-grey {
          background: radial-gradient(circle at 50% 20%, #ffffff 0%, #f9fafb 45%, #f3f4f6 100%);
          background-image: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%), radial-gradient(circle at 50% 20%, #ffffff 0%, #f9fafb 45%, #f3f4f6 100%);
        }

        .gold-frame-motif {
          border: 1.5px solid #d4af37;
          box-shadow: 
            inset 0 0 0 3px #111827, 
            inset 0 0 0 5.5px #d4af37, 
            0 40px 100px rgba(0,0,0,0.8);
        }

        #screenshot-target {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }

        .close-btn-luxury {
          position: fixed;
          top: 20px;
          left: 20px;
          z-index: 100;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.5);
          color: #d4af37;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(8px);
        }

        .close-btn-luxury:hover {
          background: #d4af37;
          color: black;
          transform: rotate(90deg);
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
        }
      `}</style>

      {isResultOnly && (
        <button 
          onClick={toggleScreenshotMode}
          className="close-btn-luxury group"
          title="Back to Editor"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}

      {!isResultOnly && (
        <div className="w-full md:w-[420px] bg-[#0c0505] border-r border-[#d4af37]/30 h-screen overflow-y-auto p-6 z-50 fixed md:relative shadow-2xl flex flex-col text-white">
           <div className="mb-6 text-center">
              <h2 className="text-2xl font-cinzel text-[#d4af37] font-bold tracking-widest uppercase">EDITOR</h2>
              <p className="text-[10px] opacity-40 uppercase tracking-[0.4em] mt-1 font-black italic">ULTRA PRECISION HD</p>
           </div>
           
           <div className="flex-1">
             <EditorPanel tasks={tasks} updateTask={updateTask} header={header} updateHeader={updateHeader} />
           </div>

           <div className="mt-6 pt-4 border-t border-[#d4af37]/20 pb-4 space-y-3">
              <button 
                onClick={handleCapture} 
                disabled={isCapturing}
                className={`w-full py-4 bg-white/10 text-[#d4af37] border border-[#d4af37]/40 font-bold font-cinzel rounded-xl shadow-lg hover:bg-[#d4af37]/10 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2 ${isCapturing ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isCapturing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-[#d4af37] border-t-transparent rounded-full animate-spin"></div>
                    PROCESSING...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    SAVE AS PHOTO (PNG)
                  </>
                )}
              </button>
              
              <button onClick={toggleScreenshotMode} className="w-full py-4 bg-gradient-to-r from-[#d4af37] via-[#fcf6ba] to-[#d4af37] text-black font-black font-cinzel rounded-xl shadow-lg hover:brightness-110 transition-all uppercase tracking-widest text-xs">PREVIEW HD MODE</button>
           </div>
        </div>
      )}

      <div className={`flex-1 flex flex-col items-center ${isResultOnly ? 'p-10 bg-black min-h-screen' : 'py-10 bg-black/80 overflow-auto'}`}>
        <div 
          id="screenshot-target"
          style={{
            width: '643px',
            height: '873px',
            minWidth: '643px',
            maxWidth: '643px',
            minHeight: '873px',
            maxHeight: '873px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            transform: (!isResultOnly) ? 'scale(0.8)' : 'none',
            transformOrigin: 'top center',
            boxSizing: 'border-box',
            backgroundColor: '#f3f4f6'
          }}
          className="gold-frame-motif glossy-grey"
        >
          {/* Logo Section */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 z-50">
              <img 
                src="https://wallpapers.com/images/high/gold-gucci-logo-png-05252024-q1rtfjh5wuasuzaz.png" 
                alt="Gucci" 
                className="w-16 h-16 object-contain drop-shadow-[0_2px_25px_rgba(255,249,196,0.9)]"
              />
          </div>

          <div className="flex flex-col h-full px-5 pt-2 pb-0 relative z-10 box-border overflow-hidden">
            <Header header={header} />
            
            <div className="flex-1 flex flex-col justify-between mt-4 pb-4 box-border overflow-hidden">
              {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
            
            <div className="h-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
