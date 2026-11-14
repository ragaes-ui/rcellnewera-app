"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useThemeLang } from '../../components/LanguageThemeContext';
import { useState, useEffect, useRef } from 'react';

export default function BottomNav() {
  const pathname = usePathname();
  const { t } = useThemeLang();

  const [isCompact, setIsCompact] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Selalu melebar penuh jika berada di posisi paling atas
      if (currentScrollY <= 20) {
        setIsCompact(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Toleransi 8px agar bar tidak berkedip saat efek pantulan (bounce) di HP
      if (currentScrollY > lastScrollY.current + 8) {
        // Scroll ke bawah -> mengecil jadi kapsul
        setIsCompact(true);
      } else if (currentScrollY < lastScrollY.current - 8) {
        // Scroll ke atas sedikit saja -> langsung melebar kembali
        setIsCompact(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: t('home'), icon: '🏠' },
    { href: '/about', label: t('about'), icon: 'ℹ️' },
    { href: '/services', label: t('services'), icon: '⚙️' },
    { href: '/tickets', label: t('tickets'), icon: '🎟️' },
    { href: '/contact', label: t('contact'), icon: '📞' },
  ];

  return (
    <div className="md:hidden fixed bottom-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div
        className={`pointer-events-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 shadow-2xl transition-all duration-300 ease-out ${
          isCompact
            ? 'rounded-full px-4 py-1.5 w-[82%] max-w-[300px]'
            : 'rounded-3xl px-3 py-2.5 w-full'
        }`}
      >
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center transition-all duration-300 ${
                  isCompact ? 'py-1 px-2.5' : 'py-1.5 px-3'
                } rounded-full ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                    : 'text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white'
                }`}
              >
                <span
                  className={`transition-all duration-300 ${
                    isCompact
                      ? isActive
                        ? 'text-lg mb-0'
                        : 'text-base mb-0 opacity-75'
                      : 'text-lg mb-0.5'
                  }`}
                >
                  {item.icon}
                </span>

                <span
                  className={`font-medium tracking-tight overflow-hidden transition-all duration-300 ${
                    isCompact
                      ? isActive
                        ? 'h-3.5 opacity-100 text-[10px] mt-0.5'
                        : 'h-0 opacity-0 text-[0px]'
                      : 'h-3.5 opacity-100 text-[10px]'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}