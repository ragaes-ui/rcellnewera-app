"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useThemeLang } from '../../components/LanguageThemeContext';

export default function BottomNav() {
  const pathname = usePathname();
  const { t } = useThemeLang();

  const navItems = [
    { href: '/', label: t('home'), icon: '🏠' },
    { href: '/about', label: t('about'), icon: 'ℹ️' },
    { href: '/services', label: t('services'), icon: '⚙️' },
    { href: '/tickets', label: t('tickets'), icon: '🎟️' },
    { href: '/contact', label: t('contact'), icon: '📞' },
  ];

  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
      {/* Container Efek Liquid Glass */}
      <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 shadow-2xl rounded-3xl px-3 py-2.5 transition-all duration-300">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105'
                    : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white'
                }`}
              >
                <span className="text-lg mb-0.5">{item.icon}</span>
                <span className="text-[10px] font-medium tracking-tight">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}