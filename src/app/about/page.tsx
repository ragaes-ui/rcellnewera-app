"use client";

import { useThemeLang } from '../../components/LanguageThemeContext';

export default function AboutPage() {
  const { t } = useThemeLang();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <section className="bg-blue-50 dark:bg-slate-900 pt-40 pb-20 px-4 sm:px-6 lg:px-8 text-center transition-colors duration-300">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 transition-colors" data-aos="fade-up">
          {t('aboutTitle')} <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">RCELL NEW ERA</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors" data-aos="fade-up" data-aos-delay="100">
          {t('aboutDesc')}
        </p>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">{t('aboutSecTitle')}</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed transition-colors">
              {t('aboutP1')}
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
              {t('aboutP2')}
            </p>
          </div>
          <div className="space-y-6" data-aos="fade-left">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 transition-colors">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">{t('vision')}</h3>
              <p className="text-slate-600 dark:text-slate-400">{t('visionDesc')}</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 transition-colors">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">{t('mission')}</h3>
              <p className="text-slate-600 dark:text-slate-400">{t('missionDesc')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}