
import React, { useState, useRef, useEffect } from 'react';
import { HOW_IT_WORKS } from '../constants';
import { Button } from './ui/Button';
import { Check, Eye, Users, MoreHorizontal, ArrowUpRight, CheckCircle, Package, Truck, Wallet, ChevronRight } from 'lucide-react';

const Step1Visual = () => (
  <div className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 w-full max-w-[380px] mx-auto transform transition-all hover:scale-105 duration-500">
    <h4 className="text-xl font-bold text-slate-800 mb-6">실시간 채널 분석</h4>
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-200 transition-colors">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm">
            <Eye size={22} />
          </div>
          <div>
             <p className="text-sm font-bold text-slate-400">활성 오디언스</p>
             <p className="text-lg font-bold text-slate-900">높은 적합도</p>
          </div>
        </div>
        <span className="font-extrabold text-2xl text-slate-900">85<span className="text-sm text-slate-400">%</span></span>
      </div>
      
      <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-200 transition-colors">
         <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shadow-sm">
            <Users size={22} />
          </div>
          <div>
             <p className="text-sm font-bold text-slate-400">잠재 구매자</p>
             <p className="text-lg font-bold text-slate-900">대기 중</p>
          </div>
        </div>
        <span className="font-extrabold text-2xl text-slate-900">12K</span>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="p-5 rounded-2xl border border-slate-100 bg-white shadow-sm">
        <div className="text-3xl font-extrabold text-slate-900 mb-1 tracking-tight">24%</div>
        <div className="text-xs text-emerald-600 font-bold mb-2 flex items-center gap-1">
             상승 중 <ArrowUpRight size={10} />
        </div>
        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">콘텐츠 반응률</div>
      </div>
      <div className="p-5 rounded-2xl border border-slate-100 bg-white shadow-sm">
        <div className="text-3xl font-extrabold text-slate-900 mb-1 tracking-tight">0:45</div>
        <div className="text-xs text-rose-500 font-bold mb-2">평균 시청</div>
        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">팬덤 유지율</div>
      </div>
    </div>
  </div>
);

const Step2Visual = () => (
  <div className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 w-full max-w-[400px] mx-auto transform transition-all hover:scale-105 duration-500">
    <div className="flex items-center justify-between mb-8">
        <h4 className="text-xl font-bold text-slate-800">판매 예측 데이터</h4>
        <MoreHorizontal className="text-slate-300" />
    </div>
    
    <div className="relative h-56 w-full mb-4">
      <div className="absolute inset-0 flex items-end justify-between px-2">
         {[30, 45, 35, 60, 50, 75, 65].map((h, i) => (
             <div key={i} className="w-[1px] h-full bg-slate-50 relative">
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-slate-100 w-[1px] h-full"></div>
             </div>
         ))}
      </div>
      
      <svg viewBox="0 0 300 150" className="w-full h-full overflow-visible absolute top-0 left-0">
         <defs>
            <linearGradient id="gradientLine" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="2" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.1" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
         </defs>
         <path d="M0,120 C40,110 80,130 120,80 S200,40 240,50 S280,20 300,30" fill="url(#gradientLine)" stroke="none" />
         <path d="M0,120 C40,110 80,130 120,80 S200,40 240,50 S280,20 300,30" fill="none" stroke="#8b5cf6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
         <circle cx="240" cy="50" r="6" fill="white" stroke="#8b5cf6" strokeWidth="3" className="animate-pulse" />
         <g transform="translate(190, 0)">
           <rect width="100" height="36" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1" filter="url(#shadow)" />
           <text x="50" y="22" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">9월 28일 <tspan fill="#7c3aed" fontWeight="900">최적 매칭</tspan></text>
         </g>
      </svg>
    </div>

    <div className="flex justify-between text-xs font-semibold text-slate-400 px-2">
      <span>9/15</span>
      <span>9/20</span>
      <span>9/25</span>
      <span>9/30</span>
    </div>
    
    <div className="mt-6 p-4 bg-brand-50 rounded-xl flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
            <ArrowUpRight size={16} />
        </div>
        <div>
            <p className="text-xs text-brand-700 font-bold">AI 매출 예측</p>
            <p className="text-sm font-medium text-brand-900">매출 1.5배 상승 예상</p>
        </div>
    </div>
  </div>
);

const Step3Visual = () => (
  <div className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 w-full max-w-[380px] mx-auto transform transition-all hover:scale-105 duration-500">
    <div className="flex justify-between items-start mb-10">
       <div>
         <p className="text-sm font-bold text-slate-400 mb-1">프로젝트 진행 상태</p>
         <h4 className="text-xl font-bold text-slate-800">모든 업무 완료</h4>
       </div>
       <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
          <MoreHorizontal size={18} />
       </div>
    </div>
    
    <div className="text-6xl font-extrabold text-slate-900 mb-4 tracking-tighter">
        100<span className="text-2xl ml-1 text-slate-400">%</span>
    </div>
    <div className="flex items-center text-emerald-500 text-sm font-bold mb-8 bg-emerald-50 px-3 py-1 rounded-full w-fit">
       <CheckCircle size={14} className="mr-1.5"/> 캠페인이 성공적으로 종료되었습니다
    </div>

    <div className="space-y-5">
      <div className="flex items-center justify-between group cursor-default">
          <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform"><Package size={16}/></div>
              <span className="font-semibold text-slate-600">배송 관리</span>
          </div>
          <span className="font-bold text-slate-900 bg-slate-50 px-2 py-0.5 rounded text-xs">완료</span>
      </div>
      <div className="flex items-center justify-between group cursor-default">
          <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform"><Truck size={16}/></div>
              <span className="font-semibold text-slate-600">물류 추적</span>
          </div>
          <span className="font-bold text-slate-900 bg-slate-50 px-2 py-0.5 rounded text-xs">완료</span>
      </div>
      <div className="flex items-center justify-between group cursor-default">
          <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-50 text-brand-500 flex items-center justify-center group-hover:scale-110 transition-transform"><Wallet size={16}/></div>
              <span className="font-semibold text-slate-600">정산 처리</span>
          </div>
           <span className="font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded text-xs">진행중</span>
      </div>
    </div>
    
    <div className="mt-8 pt-6 border-t border-slate-100">
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-brand-500 to-purple-500 w-[92%] rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
        </div>
        <div className="flex justify-between mt-2 text-xs font-bold text-slate-400">
            <span>진행률</span>
            <span className="text-slate-900">92/100</span>
        </div>
    </div>
  </div>
);

const StepDescription: React.FC<{ index: number }> = ({ index }) => {
  if (index === 0) {
    return (
      <>
        셀럽뷰티 AI가 콘텐츠와 팬덤 데이터를 정밀 분석하여
        <br className="block" />
        우리 채널에서 "터지는" 제품의 명확한
        <br className="block md:hidden" />
        <span className="md:ml-1.5">성공 기준을 도출합니다.</span>
      </>
    );
  }
  if (index === 1) {
    return (
      <>
        수만 개의 제품 중 내 채널 DNA와 일치하는 제품만 선별하여
        <br className="hidden md:block" />
        "팬덤이 좋아할 제품"을 우선순위로 상시 소싱해 드립니다.
      </>
    );
  }
  if (index === 2) {
    return (
      <>
        복잡한 업체 조율, 정산, CS, 배송 이슈는
        <br className="block md:hidden" />
        전담 매니저가 100% 처리합니다.
        <br className="block" />
        오직 팬들과의 소통과 콘텐츠 제작에만 몰입하세요.
      </>
    );
  }
  return null;
};

export const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleApply = () => {
    window.open('https://walla.my/a/dealmakers.apply', '_blank');
  };

  // Auto-scroll logic for mobile tabs - Refined for perfect centering
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeBtn = container.querySelector(`button[data-idx="${activeTab}"]`) as HTMLElement;
      
      if (activeBtn) {
        const containerWidth = container.clientWidth;
        const btnWidth = activeBtn.offsetWidth;
        const btnLeft = activeBtn.offsetLeft;
        
        // 정교한 중앙 정렬 계산: 버튼의 왼쪽 위치 - (컨테이너 너비 / 2) + (버튼 너비 / 2)
        const targetScrollLeft = btnLeft - (containerWidth / 2) + (btnWidth / 2);
        
        container.scrollTo({
          left: targetScrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeTab]);

  return (
    <section id="process" className="py-20 md:py-32 bg-white overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-50 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 -translate-y-1/2 -z-10 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-50 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 -z-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-8">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight break-keep">
            How it works
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium break-keep leading-relaxed">
            복잡한 분석과 소싱은 AI와 전문가에게.<br className="hidden md:block"/>
            셀럽님은 팬들과의 소통에만 집중하세요.
          </p>
        </div>

        <div className="w-full">
            {/* Optimized Mobile Navigation - Design restored and shadow clipping fixed */}
            <div className="relative mb-8 md:mb-20 z-20">
              {/* py-12 balances design aesthetics and shadow safety */}
              <div 
                ref={scrollContainerRef}
                className="flex items-center gap-4 overflow-x-auto py-12 px-8 md:justify-center scrollbar-hide snap-x no-scrollbar"
                style={{ scrollPadding: '0 2rem' }}
              >
                {HOW_IT_WORKS.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <button
                      data-idx={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`
                        flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-[1.5rem] text-[15px] font-bold transition-all duration-500 snap-center outline-none
                        ${activeTab === idx 
                          ? 'bg-brand-600 text-white shadow-[0_15px_40px_-10px_rgba(124,58,237,0.5)] scale-110 z-30' 
                          : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-700 opacity-80'}
                      `}
                    >
                      <div className={`
                        w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-black
                        ${activeTab === idx ? 'bg-white/25 text-white' : 'bg-slate-200 text-slate-400'}
                      `}>
                        {idx + 1}
                      </div>
                      <span className="whitespace-nowrap tracking-tight">{item.title}</span>
                    </button>
                    {idx < HOW_IT_WORKS.length - 1 && (
                      <div className="flex-shrink-0 flex items-center hidden md:flex">
                        <ChevronRight className="text-slate-200" size={18} />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              
              {/* Subtle Progress Indicator (Desktop) */}
              <div className="hidden md:block absolute -bottom-4 left-1/2 -translate-x-1/2 w-full max-w-md h-0.5 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brand-500 transition-all duration-500 ease-out"
                  style={{ 
                    width: '33.33%', 
                    transform: `translateX(${activeTab * 100}%)` 
                  }}
                ></div>
              </div>
            </div>

            <div className="relative min-h-[600px] md:min-h-[500px] z-10">
              {HOW_IT_WORKS.map((item, idx) => (
                <div 
                  key={idx}
                  className={`
                    grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center transition-all duration-700 ease-out top-0 left-0 w-full
                    ${activeTab === idx ? 'opacity-100 translate-x-0 relative z-10' : 'opacity-0 translate-x-8 absolute pointer-events-none z-0'}
                  `}
                >
                  <div className={`order-1 lg:order-none transition-all duration-700 delay-100 ${activeTab === idx ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <div className="inline-block px-4 py-1.5 bg-brand-50 text-brand-600 rounded-full text-[10px] sm:text-xs font-bold mb-4 md:mb-6 uppercase tracking-widest shadow-sm border border-brand-100">
                      {item.step}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 tracking-tight leading-[1.2] break-keep">
                      {item.subtitle}
                    </h3>
                    <div className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 md:mb-10 font-medium break-keep whitespace-pre-wrap">
                      <StepDescription index={idx} />
                    </div>
                    
                    <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                      {item.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center text-slate-700 font-bold bg-slate-50/50 p-3 rounded-xl border border-transparent hover:border-slate-100 hover:bg-white hover:shadow-sm transition-all duration-300 text-sm md:text-base">
                          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-brand-100 flex items-center justify-center mr-3 flex-shrink-0 text-brand-600">
                            <Check size={14} strokeWidth={3} className="md:w-4 md:h-4" />
                          </div>
                          <span className="break-keep">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="hidden md:block">
                        <Button onClick={handleApply} variant="primary" size="lg" className="shadow-xl shadow-brand-500/20 hover:shadow-brand-500/30">
                        무료 채널 분석 받기
                        </Button>
                    </div>
                    <div className="md:hidden flex justify-center">
                        <Button onClick={handleApply} variant="primary" size="md" className="w-full shadow-xl shadow-brand-500/20">
                        무료 채널 분석 받기
                        </Button>
                    </div>
                  </div>

                  <div className={`
                     order-2 lg:order-none
                     relative flex justify-center items-center lg:h-[500px] perspective-1000
                     transition-all duration-1000 delay-200
                     ${activeTab === idx ? 'opacity-100 scale-100 rotate-y-0' : 'opacity-0 scale-95 rotate-y-12'}
                  `}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-100/50 to-purple-100/50 rounded-[3rem] transform -rotate-3 scale-95 opacity-70 -z-10 blur-xl"></div>
                    <div className="relative z-10 w-full mb-8 lg:mb-0">
                        {idx === 0 && <Step1Visual />}
                        {idx === 1 && <Step2Visual />}
                        {idx === 2 && <Step3Visual />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
