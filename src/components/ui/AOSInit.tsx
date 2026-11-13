"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
  useEffect(() => {
    // Memberikan jeda 100 milidetik agar Next.js selesai melakukan hydration terlebih dahulu
    const initAOS = setTimeout(() => {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
      });
    }, 100);

    // Membersihkan timeout jika komponen dilepas
    return () => clearTimeout(initAOS);
  }, []);

  return null;
}