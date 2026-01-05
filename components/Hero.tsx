
import React from 'react';
import { HERO_CONTENT } from '../constants';
import { Button } from './ui/Button';
import { CheckCircle, Users, Package, ChevronRight, BarChart3, Star, FileText, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const titleParts = HERO_CONTENT.title.split('\n');
  const firstLine = titleParts[0] || ''; 
  const secondLine = titleParts[1] || ''; 
  
  const splitIndex = firstLine.indexOf(' "');
  const prefix = splitIndex !== -1 ? firstLine.substring(0, splitIndex) : firstLine;
  const highlight = splitIndex !== -1 ? firstLine.substring(splitIndex + 1) : '';

  const handleApply = () => {
    window.open('https://walla.my/a/dealmakers.apply', '_blank');
  };

  const handleOpenServiceIntro = () => {
    window.open('https://drive.google.com/file/d/1Hw7DhHmDYyYn-kvkjnsteWodYkFDbkfc/view?usp=sharing', '_blank');
  };

  const handleBrandInquiry = () => {
    window.open('https://brand.celebeauty.co.kr/', '_blank');
  };

  return (
    <section className="relative pt-36 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Refined Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-brand-50/80 via-white to-white -z-20" />
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-400/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob" />
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-400/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Badge */}
        <div 
          className="inline-flex items-center px-4 py-2 rounded-full border border-brand-200 bg-white/50 backdrop-blur-sm text-brand-700 text-sm font-semibold mb-8 shadow-sm hover:scale-105 transition-transform cursor-default animate-fade-in-up opacity-0"
          style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}
        >
          <span className="flex h-2 w-2 relative mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          {HERO_CONTENT.badge}
        </div>

        {/* Headlines */}
        <h1 
          className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 tracking-tighter mb-8 md:mb-10 break-keep leading-[1.15] md:leading-[1.2] px-0 animate-fade-in-up opacity-0"
          style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}
        >
          <span className="block mb-2 sm:mb-1">
             {prefix}
             {highlight && (
               <span className="relative inline-block px-3 py-1 sm:px-4 ml-2 sm:ml-3 bg-brand-600 text-white rounded-xl shadow-lg shadow-brand-500/30 transform sm:-rotate-2 hover:rotate-0 transition-transform duration-300 align-middle -translate-y-1 sm:translate-y-0">
                 {highlight}
               </span>
             )}
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600 pb-1 mt-2 sm:mt-3">
            {secondLine}
          </span>
        </h1>
        
        {/* Subtitle */}
        <p 
          className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl md:max-w-5xl mx-auto mb-12 md:mb-16 leading-relaxed font-medium break-keep animate-fade-in-up opacity-0 px-4 sm:px-0 mt-4"
          style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
        >
          {HERO_CONTENT.subtitle}
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-6 px-8 sm:px-0 animate-fade-in-up opacity-0"
          style={{ animationDelay: '450ms', animationFillMode: 'forwards' }}
        >
          <Button 
            size="lg" 
            onClick={handleApply}
            className="w-full sm:w-auto min-w-[200px] shadow-lg shadow-brand-500/30 whitespace-nowrap hover:ring-4 hover:ring-brand-100 transition-all"
          >
            {HERO_CONTENT.cta}
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={handleOpenServiceIntro}
            className="w-full sm:w-auto min-w-[200px] whitespace-nowrap group text-slate-500 border-gray-200 hover:text-brand-600 hover:border-brand-200 hover:bg-brand-50/50"
          >
            <FileText size={18} className="mr-2 text-slate-400 group-hover:text-brand-600 transition-colors" />
            {HERO_CONTENT.cta_secondary}
          </Button>
        </div>

        {/* Brand Inquiry Text Link */}
        <div 
            className="text-center mb-16 animate-fade-in-up opacity-0"
            style={{ animationDelay: '550ms', animationFillMode: 'forwards' }}
        >
            <button 
                onClick={handleBrandInquiry}
                className="text-slate-400 text-[13px] sm:text-sm font-medium underline underline-offset-4 decoration-slate-300 hover:text-brand-600 hover:decoration-brand-300 transition-all"
            >
                브랜드 이신가요? 브랜드 협력 문의는 여기로!
            </button>
        </div>

        {/* High-Fidelity Dashboard Mockup */}
        <div 
          className="relative max-w-5xl mx-auto mt-12 perspective-1000 animate-fade-in-up opacity-0"
          style={{ animationDelay: '650ms', animationFillMode: 'forwards' }}
        >
          <div className="glass-card rounded-[2rem] p-3 shadow-2xl shadow-brand-900/10 transform rotate-x-12 transition-transform duration-700 hover:rotate-0">
            <div className="bg-white rounded-[1.5rem] border border-gray-100 overflow-hidden shadow-inner">
              
              {/* Browser Header */}
              <div className="h-12 bg-slate-50/80 border-b border-gray-100 flex items-center justify-between px-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                </div>
                <div className="px-4 py-1 bg-white rounded-md border border-gray-200 text-[10px] font-medium text-slate-400 shadow-sm hidden sm:block">
                  celebeauty.ai/dashboard/analysis
                </div>
                <div className="w-4"></div>
              </div>
              
              {/* Dashboard Grid */}
              <div className="p-4 sm:p-8 bg-slate-50/50 grid grid-cols-1 md:grid-cols-12 gap-6 text-left">
                
                {/* Side Panel */}
                <div className="md:col-span-3 space-y-6 hidden md:block">
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 overflow-hidden border border-brand-200">
                        {/* Changed Seed to Lola for distinct long-hair female appearance */}
                        <img src="https://api.dicebear.com/9.x/lorelei/svg?seed=Aneka" alt="target" className="w-full h-full scale-110" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium">Target Audience</p>
                        <p className="text-lg font-bold text-slate-900">2030 여성</p>
                      </div>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-500 w-[85%] rounded-full"></div>
                    </div>
                    <p className="text-right text-xs text-brand-600 font-bold mt-2">85% Match</p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-3">Hot Keywords</p>
                    <div className="flex flex-wrap gap-2">
                        {['#수분광', '#비건뷰티', '#가성비갑'].map(tag => (
                            <span key={tag} className="px-2.5 py-1 bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold rounded-md">
                                {tag}
                            </span>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Main Panel */}
                <div className="md:col-span-9 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-[10px] sm:text-xs font-bold border border-green-100">
                        <CheckCircle size={12} /> AI Matching Complete
                    </span>
                  </div>

                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">Product-Channel Fit 분석 결과</h3>
                    <p className="text-xs sm:text-sm text-slate-500">채널 데이터 12,403건 분석 기반</p>
                  </div>

                  <div className="flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                     {/* Updated Cosmetic Illustration Thumbnail */}
                     <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pink-50 to-brand-50 rounded-2xl flex items-center justify-center border border-pink-100 flex-shrink-0 p-3 overflow-hidden shadow-sm relative group/thumb">
                        <div className="absolute inset-0 bg-white/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity"></div>
                        <svg viewBox="0 0 24 24" className="w-full h-full text-brand-400 drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 3h6v3H9z" fill="white" />
                          <path d="M7 6h10v12a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V6z" />
                          <path d="M12 10v6M10 13h4" stroke="currentColor" strokeWidth="1" />
                          <circle cx="16" cy="18" r="1.5" className="animate-pulse fill-brand-300 stroke-none" />
                        </svg>
                        <Sparkles size={10} className="absolute top-2 right-2 text-brand-400 animate-pulse" />
                     </div>
                     <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row justify-between items-start">
                            <div className="mb-2 sm:mb-0">
                                <h4 className="text-lg sm:text-xl font-bold text-slate-900">히알루론산 수분 앰플</h4>
                                <p className="text-xs sm:text-sm text-slate-500 mb-2">브랜드: 더랩바이블랑두</p>
                                <div className="flex gap-1">
                                    {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-yellow-400 text-yellow-400"/>)}
                                </div>
                            </div>
                            <div className="text-left sm:text-right w-full sm:w-auto mt-2 sm:mt-0 flex flex-row sm:flex-col justify-between items-center sm:items-end">
                                <p className="text-2xl sm:text-3xl font-bold text-brand-600 tracking-tight">98%</p>
                                <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase">Fit Score</p>
                            </div>
                        </div>
                     </div>
                  </div>

                  {/* Graph Area */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-2">
                            <BarChart3 size={14} /> 예상 매출 시뮬레이션
                        </p>
                        <p className="text-xs sm:text-sm font-bold text-brand-600">₩52,000,000+</p>
                    </div>
                    <div className="w-full h-24 flex items-end gap-2">
                        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                            <div key={i} className="flex-1 bg-brand-200 rounded-t-sm hover:bg-brand-400 transition-colors relative group" style={{height: `${h}%`}}>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                    Day {i+1}
                                </div>
                            </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Avatar Card */}
          <div 
             className="absolute -left-4 top-1/2 -translate-y-1/2 md:-left-12 hidden lg:block animate-fade-in-up opacity-0"
             style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
          >
             <div className="glass-card p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] animate-float">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    {/* Changed Seed to Mia for Female Appearance */}
                    <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Mia" alt="Manager" className="w-12 h-12 rounded-full border-2 border-white shadow-md bg-white" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">전담 매니저 배정</p>
                    <p className="text-sm font-bold text-slate-900">김민지 Pro</p>
                    <button className="text-[10px] text-brand-600 font-bold flex items-center mt-1">
                        지금 상담하기 <ChevronRight size={10} />
                    </button>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
