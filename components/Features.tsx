
import React from 'react';
import { FEATURES } from '../constants';
import { 
  TrendingUp, Sparkles, Instagram, Youtube, Rocket, ExternalLink, 
  ShoppingBag, Heart, Activity, Smartphone, BarChart3, ShieldCheck, 
  Zap, Target, Package, Settings, MessageCircle, CreditCard, MousePointer2,
  Users, UserCheck
} from 'lucide-react';

// Visual 1: 링크 한번에 간편 등록 (Responsive Orbit Engine)
const IntegrationVisual = () => (
  <div className="relative w-full h-64 sm:h-80 mt-4 sm:mt-6 overflow-hidden flex items-center justify-center bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-slate-50">
    {/* Concentric Orbit Paths - Responsive Sizes */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-48 h-48 sm:w-72 sm:h-72 border border-slate-100/60 rounded-full"></div>
        <div className="absolute w-32 h-32 sm:w-48 sm:h-48 border border-brand-100/30 rounded-full"></div>
    </div>

    {/* Central Core Branding Node */}
    <div className="relative z-20 w-16 h-16 sm:w-20 sm:h-20 bg-brand-500 rounded-[1.5rem] sm:rounded-[1.8rem] shadow-[0_15px_40px_rgba(139,92,246,0.4)] flex items-center justify-center text-white ring-[6px] sm:ring-[10px] ring-white">
        <div className="relative">
            <Sparkles size={24} fill="currentColor" className="animate-pulse sm:w-8 sm:h-8" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"></div>
        </div>
    </div>

    {/* Social Input Icons - Adjusted for Mobile Stacking */}
    <div className="absolute left-[8%] sm:left-[22%] top-[15%] sm:top-auto flex sm:flex-col gap-4 sm:gap-8 z-30">
        <div className="w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-slate-50 flex items-center justify-center text-rose-500 animate-float">
            <Instagram size={20} className="sm:w-6 sm:h-6" />
        </div>
        <div className="w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center text-rose-600 animate-float delay-700 sm:translate-x-[-15px]">
            <Youtube size={20} className="sm:w-6 sm:h-6" />
        </div>
    </div>

    {/* Result Tags - Adjusted for Mobile Visibility */}
    <div className="absolute right-[5%] sm:right-[15%] bottom-[15%] sm:bottom-auto flex flex-col gap-3 sm:gap-4 z-30 items-end">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 p-2 sm:p-3 pr-4 sm:pr-5 flex items-center gap-2 sm:gap-3 transform hover:translate-x-[-5px] transition-transform duration-500">
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-emerald-50 text-emerald-500 rounded-lg flex items-center justify-center shrink-0">
                <TrendingUp size={12} className="sm:w-3.5 sm:h-3.5" />
            </div>
            <span className="text-[9px] sm:text-[11px] font-black text-slate-800 tracking-tight whitespace-nowrap">수익 활성화</span>
        </div>
        <div className="bg-slate-900 text-white rounded-xl sm:rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.2)] p-2 sm:p-3 pr-4 sm:pr-5 flex items-center gap-2 sm:gap-3 transform translate-x-1 sm:translate-x-2 hover:translate-x-0 transition-transform duration-500">
            <ExternalLink size={12} className="text-brand-400 shrink-0 sm:w-3.5 sm:h-3.5" />
            <span className="text-[9px] sm:text-[11px] font-black tracking-tight whitespace-nowrap">스토어 생성</span>
        </div>
    </div>

    {/* Bottom CTA Capsule */}
    <div className="absolute bottom-4 sm:bottom-6 bg-brand-50/90 backdrop-blur text-brand-700 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[9px] sm:text-[11px] font-black border border-brand-100 shadow-sm flex items-center gap-2">
        <Rocket size={10} fill="currentColor" className="text-brand-600 sm:w-3 sm:h-3" />
        준비 완료, 지금 시작하세요
    </div>
  </div>
);

// Visual 2: 다양한 지표 확인 (Real Data from Kim Hyunjung Report)
const ReportingVisual = () => (
  <div className="relative w-full h-72 sm:h-80 mt-4 sm:mt-6 flex flex-col items-center justify-center bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden group p-4 sm:p-0">
    
    {/* Layer 1: REALTIME ANALYTICS (Background Card) */}
    <div className="relative sm:absolute left-0 sm:left-10 top-0 sm:top-1/2 sm:-translate-y-1/2 w-full sm:w-[65%] h-auto sm:h-[80%] bg-slate-50/80 rounded-[2rem] border border-slate-100 p-5 sm:p-7 flex flex-col shadow-inner mb-4 sm:mb-0">
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <Activity size={14} className="text-emerald-500" />
            <span className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest">REALTIME KPI</span>
        </div>
        
        <div className="space-y-3 sm:space-y-4 mb-6">
            <div className="bg-white rounded-xl sm:rounded-2xl p-3 border border-slate-100 shadow-sm flex items-center justify-between group/item hover:border-brand-200 transition-colors">
                <div className="flex items-center gap-3">
                    <UserCheck size={14} className="text-brand-400" />
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-500">유효 타겟</span>
                </div>
                <span className="text-xs sm:text-sm font-black text-slate-900 tracking-tight">1,017명</span>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl p-3 border border-slate-100 shadow-sm flex items-center justify-between group/item hover:border-brand-200 transition-colors">
                <div className="flex items-center gap-3">
                    <TrendingUp size={14} className="text-emerald-500" />
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-500">유효 도달률</span>
                </div>
                <span className="text-xs sm:text-sm font-black text-slate-900 tracking-tight">10.2%</span>
            </div>
        </div>

        <div className="mt-auto hidden sm:block">
            <p className="text-[9px] font-black text-slate-300 mb-2 uppercase tracking-widest">TARGETING FOCUS</p>
            <div className="flex flex-wrap gap-2">
                <span className="bg-brand-50 text-brand-500 text-[9px] font-black px-2.5 py-1 rounded-md border border-brand-100">#3040워킹맘</span>
                <span className="bg-rose-50 text-rose-500 text-[9px] font-black px-2.5 py-1 rounded-md border border-rose-100">#고전환솔루션</span>
            </div>
        </div>
    </div>

    {/* Layer 2: Main Highlight Card (LIKE RATE) */}
    <div className="relative sm:absolute bg-white rounded-[2rem] border border-slate-100 shadow-[0_30px_70px_rgba(139,92,246,0.12)] p-6 sm:p-7 w-full sm:w-[54%] z-20 sm:translate-x-20 sm:translate-y-4 hover:translate-y-2 transition-all duration-700">
        <div className="flex justify-between items-start mb-5 sm:mb-7">
            <div>
                <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-widest">LIKE RATE</p>
                <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tighter">23.3%</span>
                    <span className="bg-brand-500 text-white text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-lg shadow-lg shadow-brand-500/30">+73.7%</span>
                </div>
            </div>
        </div>

        {/* Dynamic Engagement Chart */}
        <div className="h-16 sm:h-20 w-full flex items-end gap-1.5 sm:gap-2 mb-5 sm:mb-7">
            {[20, 35, 25, 50, 40, 70, 45, 95, 65].map((h, i) => (
                <div 
                    key={i} 
                    className={`flex-1 rounded-t-sm transition-all duration-1000 ${i === 7 ? 'bg-brand-600' : 'bg-brand-100'}`} 
                    style={{height: `${h}%`, transitionDelay: `${i * 40}ms`}}
                ></div>
            ))}
        </div>

        {/* Card Footer: Positivity Index */}
        <div className="flex items-center gap-3 pt-5 border-t border-slate-50">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-300 border border-brand-100 overflow-hidden">
                <img src="https://api.dicebear.com/7.x/lorelei/svg?seed=happy" className="w-full h-full scale-125" />
            </div>
            <div>
                <p className="text-[8px] sm:text-[10px] font-bold text-slate-400 leading-none mb-1">긍정 지수</p>
                <p className="text-xs sm:text-sm font-black text-slate-900">매우 높음 (92.4%)</p>
            </div>
        </div>
    </div>

    {/* Floating Action Badge */}
    <div className="absolute top-4 sm:top-6 right-6 sm:right-10 bg-slate-950 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[9px] sm:text-[10px] font-black shadow-2xl z-30 flex items-center gap-2 group-hover:scale-105 transition-transform">
        분석 결과 확인 
        <Sparkles size={12} className="text-brand-400" fill="currentColor" />
    </div>
  </div>
);

const BrandPoolVisual = () => (
  <div className="relative w-full h-44 mt-4 overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-inner">
     <div className="flex justify-between items-center mb-5">
        <div>
            <div className="flex items-center gap-2 mb-1">
                <span className="bg-brand-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full">PREMIUM</span>
                <span className="text-xs font-black text-slate-900 tracking-tight">브랜드 POOL</span>
            </div>
            <p className="text-[10px] text-slate-400 font-bold">매 달 업데이트 되는 라인업</p>
        </div>
        <div className="flex -space-x-2">
            {[1,2,3].map(i => (
                <div key={i} className="w-7 h-7 sm:w-8 h-8 rounded-full border-2 border-white bg-brand-50 flex items-center justify-center overflow-hidden shadow-sm">
                    <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=brand${i}`} className="w-full h-full object-cover" />
                </div>
            ))}
        </div>
     </div>
     
     <div className="grid grid-cols-2 gap-2">
        <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 flex items-center gap-2">
            <ShieldCheck size={12} className="text-emerald-500" />
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-700">HOT 뷰티 500+</span>
        </div>
        <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 flex items-center gap-2">
            <ShieldCheck size={12} className="text-emerald-500" />
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-700">NEW 푸드 300+</span>
        </div>
        <div className="col-span-2 bg-brand-50/50 rounded-xl p-2 border border-brand-100 flex items-center justify-center">
            <span className="text-[9px] sm:text-[10px] font-black text-brand-600">압도적 선택지를 경험하세요</span>
        </div>
     </div>
  </div>
);

const SourcingVisual = () => (
  <div className="relative w-full h-44 mt-4 bg-slate-50 rounded-[1.5rem] border border-slate-100 overflow-hidden flex flex-col p-4 shadow-inner group">
    <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
            <Target size={14} className="text-brand-600" />
            <span className="text-[10px] font-black text-slate-500 tracking-wider uppercase">Optimization</span>
        </div>
        <div className="bg-brand-600 px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-black text-white">AI 선별 완료</div>
    </div>

    <div className="bg-white rounded-xl sm:rounded-2xl border border-brand-100 shadow-lg p-3 sm:p-4 mb-3 flex items-center gap-3 sm:gap-4 transition-all">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-brand-600 to-purple-500 flex items-center justify-center text-white shadow-xl shadow-brand-500/20 overflow-hidden p-2.5">
            {/* Custom Cosmetic/Mascara Illustration SVG */}
            <svg viewBox="0 0 24 24" className="w-full h-full text-white drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="8" y="2" width="8" height="20" rx="2" fill="white" fillOpacity="0.2" />
              <path d="M12 2v6" />
              <path d="M9 8h6" />
              <circle cx="12" cy="15" r="3" fill="white" fillOpacity="0.3" />
              <path d="M12 13v4" />
              <path d="M11 15h2" />
            </svg>
        </div>
        <div className="flex-1">
            <p className="text-[9px] sm:text-[10px] font-black text-slate-400 mb-0.5">이번 주 정밀 추천</p>
            <p className="text-xs sm:text-sm font-black text-slate-900 leading-tight">글로우 마스카라 세트</p>
        </div>
    </div>

    <div className="flex items-center gap-2 self-start">
        <div className="bg-emerald-100 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-full text-[8px] sm:text-[9px] font-black">
            제품 소싱 업데이트 중 🚀
        </div>
    </div>
  </div>
);

const OpsZeroVisual = () => (
  <div className="relative w-full h-44 mt-4 bg-slate-950 rounded-[1.5rem] border border-slate-800 shadow-2xl overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:15px_15px] opacity-20"></div>
    <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-center text-brand-400 shadow-[0_0_40px_rgba(139,92,246,0.3)] overflow-hidden p-2">
        {/* Replaced person avatar with a stylized gear icon (Settings) to represent automation */}
        <Settings size={32} strokeWidth={1.5} className="animate-[spin_8s_linear_infinite]" />
    </div>
    <div className="absolute top-3 left-3 bg-slate-900/90 border border-slate-800 px-2 sm:px-3 py-1 rounded-lg sm:rounded-xl shadow-lg flex items-center gap-1.5">
        <Package size={10} className="text-brand-400 sm:w-3 sm:h-3" />
        <span className="text-[8px] sm:text-[9px] font-black text-white">자동 배송</span>
    </div>
    <div className="absolute bottom-3 right-3 bg-slate-900/90 border border-slate-800 px-2 sm:px-3 py-1 rounded-lg sm:rounded-xl shadow-lg flex items-center gap-1.5">
        <MessageCircle size={10} className="text-emerald-400 sm:w-3 sm:h-3" />
        <span className="text-[8px] sm:text-[9px] font-black text-white">실시간 CS</span>
    </div>
    <div className="absolute top-3 right-3 bg-brand-600/20 border border-brand-500/30 px-2 sm:px-3 py-1 rounded-lg sm:rounded-xl shadow-lg flex items-center gap-1.5">
        <CreditCard size={10} className="text-brand-300 sm:w-3 sm:h-3" />
        <span className="text-[8px] sm:text-[9px] font-black text-white">자동 정산</span>
    </div>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-slate-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-600 rounded-full text-xs font-bold mb-4 sm:mb-6 border border-brand-100 shadow-sm">
            <Sparkles size={14} fill="currentColor"/> 
            <span>핵심 가치</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 sm:mb-6 tracking-tight break-keep leading-[1.25] sm:leading-[1.2]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">우리는 '이렇게'</span><br />
            채널의 성장을 만듭니다.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed break-keep max-w-2xl mx-auto">
            단순한 매칭을 넘어, 정량적 수치와 정성적 팬덤 분석까지.<br className="hidden md:block"/>
            채널의 가치를 데이터로 완벽하게 증명합니다.
          </p>
        </div>

        {/* Bento Grid Layout - Mobile optimized padding */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-6">
          
          {/* Feature 1 - Link Registration */}
          <div className="md:col-span-3 group bg-white rounded-[2.5rem] sm:rounded-[3.5rem] p-6 sm:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-brand-100 transition-all duration-500 flex flex-col">
            <div className="mb-2 sm:mb-4">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-brand-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-brand-600 mb-4 sm:mb-8">
                    <Smartphone size={24} className="sm:w-7 sm:h-7" />
                </div>
                <h4 className="text-xl sm:text-3xl font-black text-slate-900 mb-2 sm:mb-4">{FEATURES[0].title}</h4>
                <p className="text-slate-500 font-bold break-keep text-sm sm:text-[16px] leading-relaxed max-w-sm whitespace-pre-line">
                    {FEATURES[0].desc}
                </p>
            </div>
            <IntegrationVisual />
          </div>

          {/* Feature 2 - Analytics (Data-Driven Update) */}
          <div className="md:col-span-3 group bg-white rounded-[2.5rem] sm:rounded-[3.5rem] p-6 sm:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-brand-100 transition-all duration-500 flex flex-col">
            <div className="mb-2 sm:mb-4">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-brand-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-brand-600 mb-4 sm:mb-8">
                    <BarChart3 size={24} className="sm:w-7 sm:h-7" />
                </div>
                <h4 className="text-xl sm:text-3xl font-black text-slate-900 mb-2 sm:mb-4">{FEATURES[1].title}</h4>
                <p className="text-slate-500 font-bold break-keep text-sm sm:text-[16px] leading-relaxed max-w-sm whitespace-pre-line">
                    {FEATURES[1].desc}
                </p>
            </div>
            <ReportingVisual />
          </div>

          {/* Secondary Features (Bottom Row) */}
          <div className="md:col-span-2 group bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-brand-100 transition-all duration-500 flex flex-col">
            <h4 className="text-lg sm:text-xl font-black text-slate-900 mb-1 sm:mb-2">{FEATURES[2].title}</h4>
            <p className="text-slate-500 font-bold text-[12px] sm:text-[13px] leading-relaxed break-keep whitespace-pre-line">{FEATURES[2].desc}</p>
            <BrandPoolVisual />
          </div>

          <div className="md:col-span-2 group bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-brand-100 transition-all duration-500 flex flex-col">
            <h4 className="text-lg sm:text-xl font-black text-slate-900 mb-1 sm:mb-2">{FEATURES[3].title}</h4>
            <p className="text-slate-500 font-bold text-[12px] sm:text-[13px] leading-relaxed break-keep whitespace-pre-line">{FEATURES[3].desc}</p>
            <SourcingVisual />
          </div>

          <div className="md:col-span-2 group bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-brand-100 transition-all duration-500 flex flex-col">
            <h4 className="text-lg sm:text-xl font-black text-slate-900 mb-1 sm:mb-2">{FEATURES[4].title}</h4>
            <p className="text-slate-500 font-bold text-[12px] sm:text-[13px] leading-relaxed break-keep whitespace-pre-line">{FEATURES[4].desc}</p>
            <OpsZeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
