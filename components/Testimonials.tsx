
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 mb-6 md:mb-8 shadow-sm">
                <Sparkles size={14} className="text-brand-600" fill="currentColor"/>
                <span className="text-xs font-bold text-brand-700 tracking-wide uppercase">With Us</span>
            </div>
          
          <h2 className="text-[32px] sm:text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6 md:mb-8 break-keep leading-[1.2] md:leading-[1.15]">
            <span className="block mb-1 md:mb-0.5">
              이미 수만 명의 팔로워가 <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">선택한 AI</span>,
            </span>
            <span className="block text-slate-800">
              직접 <span className="relative inline-block">
                무료로 경험하세요.
                <div className="absolute bottom-1 md:bottom-0 left-0 w-full h-2 md:h-3 bg-brand-100/70 -z-10 rounded-full transform -rotate-1"></div>
              </span>
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => {
             // Logic to make the last card (or specifically the 3rd one) dark
             const isDarkCard = idx === 2; 

             return (
                <div 
                    key={idx} 
                    className={`
                        rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2
                        ${isDarkCard 
                            ? 'bg-[#1e1b4b] text-white shadow-2xl shadow-brand-900/30' 
                            : 'bg-white text-slate-900 border border-slate-100 shadow-xl shadow-slate-200/40 hover:border-brand-100'
                        }
                    `}
                >
                    <div className="mb-10">
                         {/* Brand Logo Simulation */}
                         <div className="flex items-center gap-2 mb-8 opacity-80">
                             <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isDarkCard ? 'bg-white/10' : 'bg-brand-100'}`}>
                                <Sparkles size={12} className={isDarkCard ? 'text-white' : 'text-brand-600'} fill="currentColor"/>
                             </div>
                             <span className={`text-sm font-bold tracking-wide ${isDarkCard ? 'text-white' : 'text-slate-900'}`}>
                                Celebeauty
                             </span>
                         </div>

                        <p className={`text-lg md:text-2xl font-medium leading-relaxed tracking-tight break-keep ${isDarkCard ? 'text-slate-100' : 'text-slate-800'}`}>
                            "{item.quote}"
                        </p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto">
                        <div>
                            <p className={`font-bold text-base mb-1 ${isDarkCard ? 'text-white' : 'text-slate-900'}`}>
                                {item.author}
                            </p>
                            <p className={`text-sm font-medium ${isDarkCard ? 'text-slate-400' : 'text-slate-500'}`}>
                                {item.role}
                            </p>
                        </div>
                        <img 
                            src={item.img} 
                            alt={item.author} 
                            className={`w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 ${isDarkCard ? 'border-white/10' : 'border-white shadow-md'}`} 
                        />
                    </div>
                </div>
             );
          })}
        </div>
      </div>
    </section>
  );
};
