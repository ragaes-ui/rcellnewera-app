"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useThemeLang } from '../LanguageThemeContext';
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const { lang, setLang, theme, toggleTheme, t } = useThemeLang();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 md:top-5 inset-x-0 z-50 md:px-4 flex justify-center pointer-events-none">
      <nav
        className={`pointer-events-auto w-full md:max-w-5xl md:rounded-full backdrop-blur-md border-b md:border transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-slate-900/85 border-slate-800 md:border-slate-700/80 text-white md:shadow-2xl md:shadow-black/40'
            : 'bg-white/85 border-gray-100 md:border-slate-200/80 text-gray-900 md:shadow-xl md:shadow-slate-900/10'
        }`}
      >
        <div className="px-4 sm:px-6 md:px-7">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logorne-new.png"
                  alt="Logo RCELL NEW ERA"
                  width={120}
                  height={120}
                  className="w-24 md:w-24 h-auto rounded-lg"
                />
              </Link>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex md:space-x-5 lg:space-x-7 items-center text-sm" suppressHydrationWarning>
              <Link href="/" className="font-medium hover:text-blue-600 transition">
                {t('home')}
              </Link>
              <Link href="/about" className="font-medium hover:text-blue-600 transition">
                {t('about')}
              </Link>
              <Link href="/services" className="font-medium hover:text-blue-600 transition">
                {t('services')}
              </Link>
              <Link href="/contact" className="font-medium hover:text-blue-600 transition">
                {t('contact')}
              </Link>

              {/* Menu Internal ke Halaman Tiket API */}
              <Link
                href="/tickets"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-all shadow-md transform hover:-translate-y-0.5"
              >
                🎟️ {t('tickets')}
              </Link>
            </div>

            {/* Kontrol Kanan (Tema & Bahasa) */}
            <div className="flex items-center gap-2.5">
              {/* Tombol Switch Tema (Gelap/Terang) */}
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-full border transition text-base ${
                  theme === 'dark'
                    ? 'border-slate-700 bg-slate-800 hover:bg-slate-700 text-yellow-400'
                    : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                }`}
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>

              {/* Dropdown Pemilih Bahasa */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-full border text-sm font-semibold transition ${
                    theme === 'dark'
                      ? 'border-slate-700 bg-slate-800 text-white hover:bg-slate-700'
                      : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50 shadow-sm'
                  }`}
                >
                  {lang === 'id' ? (
                    <img src="https://flagcdn.com/w20/id.png" alt="ID" className="w-5 h-auto rounded-sm" />
                  ) : (
                    <img src="https://flagcdn.com/w20/gb.png" alt="EN" className="w-5 h-auto rounded-sm" />
                  )}

                  <span>{lang === 'id' ? 'ID' : 'EN'}</span>

                  <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Menu Dropdown */}
                {isOpen && (
                  <div
                    className={`absolute right-0 mt-3 w-48 rounded-2xl shadow-xl border overflow-hidden z-50 ${
                      theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-100 text-slate-900'
                    }`}
                  >
                    <button
                      onClick={() => {
                        setLang('id');
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-medium transition ${
                        lang === 'id'
                          ? theme === 'dark'
                            ? 'bg-slate-800 text-blue-400'
                            : 'bg-blue-50/50 text-blue-600'
                          : theme === 'dark'
                          ? 'hover:bg-slate-800'
                          : 'hover:bg-slate-50'
                      }`}
                    >
                      <img src="https://flagcdn.com/w20/id.png" alt="ID" className="w-6 h-auto rounded-sm shadow-sm" />
                      <span>Indonesia</span>
                    </button>
                    <button
                      onClick={() => {
                        setLang('en');
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-medium transition ${
                        lang === 'en'
                          ? theme === 'dark'
                            ? 'bg-slate-800 text-blue-400'
                            : 'bg-blue-50/50 text-blue-600'
                          : theme === 'dark'
                          ? 'hover:bg-slate-800'
                          : 'hover:bg-slate-50'
                      }`}
                    >
                      <img src="https://flagcdn.com/w20/gb.png" alt="EN" className="w-6 h-auto rounded-sm shadow-sm" />
                      <span>English</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}