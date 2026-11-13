"use client";

import { useThemeLang } from '../../components/LanguageThemeContext';

export default function ServicePage() {
  const { t } = useThemeLang();

  return (
    <div className="pt-32 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 transition-colors" data-aos="fade-up">{t('srvTitle')}</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors" data-aos="fade-up" data-aos-delay="100">
            {t('srvDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-lg dark:hover:border-slate-700 transition-all" data-aos="fade-up" data-aos-delay="100">
            <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center text-3xl mb-6">🏥</div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">{t('srv1Title')}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 transition-colors">{t('srv1Desc')}</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-lg dark:hover:border-slate-700 transition-all" data-aos="fade-up" data-aos-delay="200">
            <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center text-3xl mb-6">🎟️</div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">{t('srv2Title')}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 transition-colors">{t('srv2Desc')}</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-lg dark:hover:border-slate-700 transition-all" data-aos="fade-up" data-aos-delay="300">
            <div className="w-14 h-14 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-xl flex items-center justify-center text-3xl mb-6">💻</div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">{t('srv3Title')}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 transition-colors">{t('srv3Desc')}</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-lg dark:hover:border-slate-700 transition-all" data-aos="fade-up" data-aos-delay="400">
            <div className="w-14 h-14 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-xl flex items-center justify-center text-3xl mb-6">⚙️</div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">{t('srv4Title')}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 transition-colors">{t('srv4Desc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}