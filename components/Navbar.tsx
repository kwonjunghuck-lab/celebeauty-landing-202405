
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleApply = () => {
    window.open('https://walla.my/a/celebeauty.apply', '_blank');
  };

  const hasLinks = NAV_LINKS.length > 0;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="text-3xl text-brand-600 font-logo tracking-normal hover:opacity-80 transition-opacity">Celebeauty</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {NAV_LINKS.map((link: any) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-[15px] font-medium text-slate-600 hover:text-brand-600 px-4 py-2 rounded-full hover:bg-slate-100/50 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button 
              variant="primary" 
              size="sm" 
              onClick={handleApply}
              className="shadow-brand-500/25 hover:shadow-brand-500/40"
            >
              무료 채널 진단받기
            </Button>
          </div>

          {/* Mobile Toggle - Only show if links exist */}
          {hasLinks && (
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600 hover:text-slate-900">
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          )}
          
          {/* Mobile Apply Button when no links */}
          {!hasLinks && (
            <div className="md:hidden">
               <Button 
                variant="primary" 
                size="sm" 
                onClick={handleApply}
                className="text-[11px] px-3.5 font-bold tracking-tight h-9"
              >
                무료 채널 진단받기
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && hasLinks && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-100 p-6 shadow-xl flex flex-col space-y-4 animate-fade-in-up">
          {NAV_LINKS.map((link: any) => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-800 block p-3 hover:bg-slate-50 rounded-xl"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
             <Button onClick={handleApply} className="w-full h-12 text-lg">무료 채널 진단받기</Button>
          </div>
        </div>
      )}
    </nav>
  );
};
