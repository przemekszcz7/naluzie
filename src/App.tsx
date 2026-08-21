import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CONTACT_INFO } from './data/bacowkaData';

export default function App() {
  useEffect(() => {
    // Wymuszenie natychmiastowej wstępnej rezerwacji połączenia i pobrania najważniejszych zasobów
    const linkPreconnect = document.createElement('link');
    linkPreconnect.rel = 'preconnect';
    linkPreconnect.href = 'https://i.postimg.cc';
    document.head.appendChild(linkPreconnect);
  }, []);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#F8F3ED] text-[#28261B] font-['Barlow'] selection:bg-[#E4DCC8] selection:text-[#28261B] relative">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Floating WhatsApp Action on mobile/tablet */}
      <aside aria-label="Szybki kontakt" className="fixed bottom-6 right-6 z-30 sm:hidden">
        <a
          href={CONTACT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          aria-label="Napisz do nas na WhatsApp"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#28261B] text-[#FAF3EB] border-2 border-[#FAF3EB] shadow-xl active:scale-95 transition-transform"
        >
          <span className="text-2xl">💬</span>
          <span className="sr-only">Napisz na WhatsApp</span>
        </a>
      </aside>
    </div>
  );
}
