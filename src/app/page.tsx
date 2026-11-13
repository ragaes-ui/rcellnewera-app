"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useThemeLang } from '../components/LanguageThemeContext';

export default function Home() {
  const { t, theme } = useThemeLang();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className={`relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden transition-colors ${
        theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
{/* Logo langsung tampil bersih tanpa kotak background */}
          <div className="flex justify-center mb-6" data-aos="fade-down">
            <Image 
              src="/logorne-new.png" 
              alt="Logo RCELL NEW ERA" 
              width={250} 
              height={250} 
              className="w-32 md:w-44 h-auto drop-shadow-md rounded-2xl" 
            />
          </div>
<h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
  {t('heroTitlePart1')} <br className="hidden sm:block" /> 
  <span className="text-blue-600">RCELL NEW ERA</span>
</h1>
          <p className="mt-4 text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10" data-aos="fade-up" data-aos-delay="100">
            {t('heroDesc')}
          </p>
          <div className="flex justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <Link href="/services" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 shadow-lg transition">
              {t('exploreBtn')}
            </Link>
            <Link href="/about" className={`border px-8 py-3 rounded-full text-lg font-semibold transition ${
              theme === 'dark' ? 'border-slate-700 hover:bg-slate-800 text-white' : 'border-gray-200 hover:bg-gray-50 text-blue-600'
            }`}>
              {t('learnMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Highlight Section */}
      <section className={`py-20 transition-colors ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold" data-aos="fade-up">{t('businessPillars')}</h2>
            <p className="mt-4 text-slate-500 dark:text-slate-400" data-aos="fade-up" data-aos-delay="100">{t('pillarDesc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className={`p-8 border rounded-2xl shadow-sm transition ${
              theme === 'dark' ? 'border-slate-800 bg-slate-900' : 'border-gray-100 bg-white'
            }`} data-aos="fade-up" data-aos-delay="100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-xl font-bold">
                💻
              </div>
              <h3 className="text-xl font-bold mb-3">IT Solutions & Bridging</h3>
              <p className="text-slate-500 dark:text-slate-400">Integrasi sistem, manajemen database, dan pengembangan web apps khusus untuk kebutuhan instansi atau rumah sakit.</p>
            </div>

            {/* Card 2 (Event & Ticketing) */}
            <a 
              href="https://rcellfest.my.id" 
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-8 border rounded-2xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 ${
                theme === 'dark' ? 'border-slate-800 bg-slate-900 hover:border-blue-500' : 'border-gray-100 bg-white hover:border-blue-200'
              }`}
              data-aos="fade-up" 
              data-aos-delay="200"
              suppressHydrationWarning
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-xl font-bold">
                🎫
              </div>
              <h3 className="text-xl font-bold mb-3">Event & Ticketing</h3>
              <p className="text-slate-500 dark:text-slate-400">Pengelolaan festival musik berskala besar dengan sistem ticketing modern yang aman dan transparan.</p>
            </a>

            {/* Card 3 */}
            <div className={`p-8 border rounded-2xl shadow-sm transition ${
              theme === 'dark' ? 'border-slate-800 bg-slate-900' : 'border-gray-100 bg-white'
            }`} data-aos="fade-up" data-aos-delay="300">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-xl font-bold">
                🚀
              </div>
              <h3 className="text-xl font-bold mb-3">Digital Infrastructure</h3>
              <p className="text-slate-500 dark:text-slate-400">Dukungan teknis hardware dan software untuk memastikan operasional bisnis berjalan tanpa hambatan.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}