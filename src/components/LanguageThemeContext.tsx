"use client";

import { createContext, useContext, useState, useEffect } from 'react';

type Language = 'id' | 'en';
type Theme = 'light' | 'dark';

interface ContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: (key: string) => string;
}

const translations = {
  id: {
    home: "Beranda",
    about: "Tentang Kami",
    services: "Layanan",
    contact: "Kontak",
    // Home
    heroTitle: "Solusi IT & Event Profesional dari",
    heroDesc: "Dari pengembangan sistem informasi rumah sakit (SIMRS) hingga manajemen tiket festival musik. Kami bantu wujudkan infrastruktur digital yang solid dan anti-ribet.",
    exploreBtn: "Eksplorasi Layanan",
    learnMore: "Pelajari Lebih Lanjut",
    businessPillars: "Pilar Bisnis Kami",
    pillarDesc: "Dukungan penuh untuk kebutuhan operasional IT dan industri hiburan Anda.",
    // About
    aboutTitle: "Di Balik",
    aboutDesc: "Lebih dari sekadar perusahaan teknologi. Kami adalah arsitek ekosistem digital yang menghubungkan inovasi sistem informasi dengan euforia industri kreatif.",
    aboutSecTitle: "Membangun Jembatan antara IT dan Hiburan",
    aboutP1: "Berawal dari kebutuhan akan sistem operasional yang solid untuk instansi kesehatan dan bisnis, RCELL NEW ERA terus berkembang. Kami membangun solusi yang tidak hanya handal di atas kertas, tapi juga teruji di lapangan.",
    aboutP2: "Kini, kami membawa kedisiplinan infrastruktur IT tersebut ke dalam industri hiburan melalui manajemen acara berskala besar, memastikan setiap festival musik dan event komunitas berjalan sempurna dengan dukungan teknologi masa kini.",
    vision: "Visi Kami",
    visionDesc: "Menjadi pelopor transformasi digital terintegrasi yang menghadirkan solusi tanpa batas untuk efisiensi bisnis dan pengalaman hiburan terbaik.",
    mission: "Misi Kami",
    missionDesc: "Menciptakan produk web apps yang tepat guna, menjaga keandalan hardware, dan menyelenggarakan acara berkualitas tinggi dengan transparansi ticketing modern.",
    // Service
    srvTitle: "Layanan Eksekutif",
    srvDesc: "Dari ruang server rumah sakit hingga panggung festival utama, kami menyediakan dukungan menyeluruh untuk setiap kebutuhan spesifik Anda.",
    srv1Title: "Sistem Informasi & SIMRS",
    srv1Desc: "Pengembangan sistem informasi rumah sakit (SIMRS), API bridging, dan pembuatan sistem antrean Kiosk yang efisien. Kami memastikan manajemen basis data berjalan aman dan sesuai standar instansi.",
    srv2Title: "Festival & Event Ticketing",
    srv2Desc: "Pengelolaan festival musik secara hulu ke hilir. Di bawah bendera RCELLFEST dan Teman Konser, kami menghadirkan platform ticketing yang aman, cepat, dan bebas kendala untuk ribuan pengunjung.",
    srv3Title: "Full-Stack Web Development",
    srv3Desc: "Pembuatan aplikasi berbasis web dan custom web tools menggunakan teknologi terkini seperti React, Next.js, dan Node.js, dengan deployment yang handal untuk menjamin performa terbaik.",
    srv4Title: "IT Support & Hardware",
    srv4Desc: "Pemeliharaan infrastruktur jaringan, perbaikan perangkat keras, dan troubleshooting sistem secara berkala untuk meminimalisasi downtime pada operasional perusahaan Anda.",
    // Contact
    contactTitle: "Mari Berkolaborasi",
    contactDesc: "Punya ide besar untuk sistem baru atau rencana festival musik selanjutnya? Tim kami siap mewujudkannya.",
    contactInfo: "Informasi Kontak",
    contactInfoDesc: "Hubungi kami melalui detail di bawah ini atau isi formulir untuk mendapatkan penawaran layanan teknologi dan manajemen acara.",
    hq: "Kantor Utama",
    hqDesc: "Cibinong, Kabupaten Bogor, Jawa Barat",
    email: "Email",
    phone: "Telepon / WhatsApp",
    formName: "Nama Lengkap",
    formNamePlc: "Masukkan nama Anda",
    formEmail: "Email Perusahaan",
    formMsg: "Pesan & Kebutuhan",
    formMsgPlc: "Ceritakan detail proyek atau acara Anda...",
    formBtn: "Kirim Pesan",
    tickets: "Beli Tiket",
ticketPageTitle: "Festival & Event Aktif",
ticketPageDesc: "Pilih event musik impianmu dan dapatkan tiket resminya secara langsung di sini.",
buyBtn: "Amankan Tiket",
noEvents: "Belum ada event aktif saat ini. Silakan cek kembali nanti!",
//navbar bawah
footerDesc: "Membangun masa depan digital melalui inovasi pengembangan sistem dan pengalaman acara yang tak terlupakan.",
company: "Perusahaan",
servicesTitle: "Layanan"

  },
  en: {
    home: "Home",
    about: "About Us",
    services: "Services",
    contact: "Contact",
    // Home
    heroTitle: "Professional IT & Event Solutions by",
    heroDesc: "From hospital management systems (SIMRS) to large-scale music festival ticketing. We build reliable and hassle-free digital infrastructures for your business.",
    exploreBtn: "Explore Services",
    learnMore: "Learn More",
    businessPillars: "Our Business Pillars",
    pillarDesc: "Comprehensive support for your IT operations and entertainment needs.",
    // About
    aboutTitle: "Behind",
    aboutDesc: "More than just a technology company. We are architects of a digital ecosystem connecting information system innovation with the euphoria of the creative industry.",
    aboutSecTitle: "Building a Bridge Between IT and Entertainment",
    aboutP1: "Starting from the need for solid operational systems for healthcare institutions and businesses, RCELL NEW ERA continues to grow. We build solutions that are not only reliable on paper but also proven in the field.",
    aboutP2: "Today, we bring that IT infrastructure discipline into the entertainment industry through large-scale event management, ensuring every music festival and community event runs perfectly with modern technology support.",
    vision: "Our Vision",
    visionDesc: "To be a pioneer in integrated digital transformation that provides limitless solutions for business efficiency and the best entertainment experiences.",
    mission: "Our Mission",
    missionDesc: "Creating effective web apps, maintaining hardware reliability, and organizing high-quality events with modern, transparent ticketing systems.",
    // Service
    srvTitle: "Executive Services",
    srvDesc: "From hospital server rooms to main festival stages, we provide comprehensive support for your specific needs.",
    srv1Title: "Information Systems & SIMRS",
    srv1Desc: "Hospital Information System (SIMRS) development, API bridging, and efficient Kiosk queue systems. We ensure database management runs securely and meets institutional standards.",
    srv2Title: "Festival & Event Ticketing",
    srv2Desc: "End-to-end music festival management. Under the banners of RCELLFEST and Teman Konser, we deliver secure, fast, and seamless ticketing platforms for thousands of attendees.",
    srv3Title: "Full-Stack Web Development",
    srv3Desc: "Building web-based applications and custom web tools using the latest technologies like React, Next.js, and Node.js, with reliable deployment to guarantee top performance.",
    srv4Title: "IT Support & Hardware",
    srv4Desc: "Network infrastructure maintenance, hardware repair, and regular system troubleshooting to minimize downtime for your company's operations.",
    // Contact
    contactTitle: "Let's Collaborate",
    contactDesc: "Have a big idea for a new system or plans for your next music festival? Our team is ready to make it happen.",
    contactInfo: "Contact Information",
    contactInfoDesc: "Reach out to us via the details below or fill out the form to get a quote for our technology and event management services.",
    hq: "Headquarters",
    hqDesc: "Cibinong, Bogor Regency, West Java",
    email: "Email",
    phone: "Phone / WhatsApp",
    formName: "Full Name",
    formNamePlc: "Enter your name",
    formEmail: "Company Email",
    formMsg: "Message & Requirements",
    formMsgPlc: "Tell us the details of your project or event...",
    formBtn: "Send Message",
    tickets: "Buy Tickets",
ticketPageTitle: "Active Festivals & Events",
ticketPageDesc: "Choose your dream music event and get your official tickets directly here.",
buyBtn: "Get Tickets",
noEvents: "No active events at the moment. Please check back later!",
//navbar bawah
footerDesc: "Building a digital future through innovative system development and unforgettable event experiences.",
company: "Company",
servicesTitle: "Services"
  }
};

const ThemeLangContext = createContext<ContextType | undefined>(undefined);

export function ThemeLangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('id');
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Cek preferensi tema tersimpan
    const savedTheme = localStorage.getItem('theme') as Theme || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const t = (key: string) => {
    return (translations[lang] as any)[key] || key;
  };

  return (
    <ThemeLangContext.Provider value={{ lang, setLang, theme, toggleTheme, t }}>
      <div className={theme === 'dark' ? 'dark bg-slate-950 text-white min-h-screen' : 'bg-white text-slate-900 min-h-screen'}>
        {children}
      </div>
    </ThemeLangContext.Provider>
  );
}

export function useThemeLang() {
  const context = useContext(ThemeLangContext);
  if (!context) throw new Error('useThemeLang must be used within ThemeLangProvider');
  return context;
}