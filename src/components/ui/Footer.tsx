"use client";

import { useThemeLang } from '../LanguageThemeContext';

export default function Footer() {
  const { t } = useThemeLang();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Kolom 1: Info Perusahaan & Alamat */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-lg">RCELL NEW ERA</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t('footerDesc')}
            </p>
            <p className="text-slate-400 text-sm flex items-start gap-2 pt-2">
              <span className="text-base">📍</span> 
              <span>GH Green View No 05, Jakarta Barat, Indonesia</span>
            </p>
          </div>

          {/* Kolom 2: Perusahaan */}
          <div>
            <h5 className="text-white font-semibold mb-4">{t('company')}</h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/about" className="hover:text-white transition">{t('about')}</a></li>
              <li><a href="/contact" className="hover:text-white transition">{t('contact')}</a></li>
            </ul>
          </div>

          {/* Kolom 3: Layanan */}
          <div>
            <h5 className="text-white font-semibold mb-4">{t('servicesTitle')}</h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><span>IT System Integration</span></li>
              <li><span>Festival & Event Management</span></li>
              <li><span>Custom Web Apps</span></li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-slate-900 pt-6 text-center text-xs text-slate-500">
          © 2026 RCELL NEW ERA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}