"use client";

import { useState, useEffect } from 'react';
import { useThemeLang } from '../../components/LanguageThemeContext';

interface EventItem {
  _id?: string;
  id?: string;
  eventName: string;
  category?: string;
  location: string;
  date: string;
  price: number;
  description: string;
  image: string;
}

export default function TicketsPage() {
  const { t } = useThemeLang();
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEventsFromProxy() {
      try {
        // Memanggil API internal Next.js (Aman dari Inspect Element)
        const res = await fetch('/api/events');
        const result = await res.json();

        if (result.success && result.data) {
          setEvents(result.data);
        }
      } catch (error) {
        console.error("Gagal memuat daftar event:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchEventsFromProxy();
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            {t('ticketPageTitle')}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t('ticketPageDesc')}
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col justify-center items-center py-28 gap-4">
            <div className="animate-spin rounded-full h-14 w-14 border-4 border-blue-600 border-t-transparent shadow-lg"></div>
            <p className="text-slate-500 dark:text-slate-400 font-medium animate-pulse">Menyiapkan tiket event terbaik untukmu...</p>
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-20 text-slate-500 dark:text-slate-400">
            {t('noEvents')}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((ev, index) => {
              const eventId = ev._id || ev.id;
              const formattedDate = new Date(ev.date).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              });

              return (
                <div 
                  key={eventId || index}
                  className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div>
                    <div className="relative h-56 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                      <img 
                        src={ev.image} 
                        alt={ev.eventName} 
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        {ev.category || "Music Festival"}
                      </span>
                    </div>
                    
                    <div className="p-6">
                      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                        <span>📅</span> {formattedDate !== "Invalid Date" ? formattedDate : ev.date}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-1">
                        {ev.eventName}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-4">
                        <span>📍</span> {ev.location}
                      </p>
                      <div className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400 mb-4">
                        Mulai Rp {ev.price ? ev.price.toLocaleString('id-ID') : '0'}
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">
                        {ev.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <a 
                      href={`https://rcellfest.my.id/detail?id=${eventId}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-all"
                    >
                      🎟️ {t('buyBtn')}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}