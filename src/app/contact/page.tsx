"use client";

import { useThemeLang } from '../../components/LanguageThemeContext';

export default function ContactPage() {
  const { t } = useThemeLang();

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 transition-colors" data-aos="fade-up">{t('contactTitle')}</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors" data-aos="fade-up" data-aos-delay="100">
            {t('contactDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-slate-50 dark:bg-slate-900/50 p-8 md:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm transition-colors" data-aos="fade-up" data-aos-delay="200">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">{t('contactInfo')}</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 transition-colors">
              {t('contactInfoDesc')}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xl transition-colors">📍</div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white transition-colors">{t('hq')}</h4>
                  <p className="text-slate-600 dark:text-slate-400 transition-colors">{t('hqDesc')}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xl transition-colors">✉️</div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white transition-colors">{t('email')}</h4>
                  <p className="text-slate-600 dark:text-slate-400 transition-colors">hello@rcellnewera.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xl transition-colors">📞</div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white transition-colors">{t('phone')}</h4>
                  <p className="text-slate-600 dark:text-slate-400 transition-colors">+62 812-XXXX-XXXX</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 transition-colors">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">{t('formName')}</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" placeholder={t('formNamePlc')} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">{t('formEmail')}</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" placeholder="email@perusahaan.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">{t('formMsg')}</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" placeholder={t('formMsgPlc')}></textarea>
              </div>
              <button type="button" className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-blue-700 transition shadow-md">
                {t('formBtn')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}