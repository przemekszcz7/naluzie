import { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  Facebook,
  Waves,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  X,
  Menu,
  LifeBuoy
} from 'lucide-react';

// Use optimized direct CDN thumbnails for grid views and static assets
const LOGO_URL = 'https://i.postimg.cc/yxVf9Dmy/437701272-364244406597014-7535880085990213910-n.jpg';
const HERO_BG = 'https://i.postimg.cc/9fdtpWFg/527758207-701097419578376-548236224907099526-n.jpg';

// Lightweight thumbnail helper for Postimg URLs
const getThumbUrl = (rawUrl: string) => rawUrl.replace('/i.postimg.cc/', '/t.postimg.cc/');

const GALLERY_PHOTOS = [
  { id: 'nVgjCyn9', rawUrl: 'https://i.postimg.cc/nVgjCyn9/1.jpg', alt: 'Spływ kajakowy Doliną Liwca' },
  { id: '44q7mDXy', rawUrl: 'https://i.postimg.cc/44q7mDXy/2.jpg', alt: 'Deski SUP na rzece Liwiec' },
  { id: '1R2nfkyq', rawUrl: 'https://i.postimg.cc/1R2nfkyq/3.jpg', alt: 'Dolina Liwca - dzika przyroda' },
  { id: 'kMz6B07t', rawUrl: 'https://i.postimg.cc/kMz6B07t/4.jpg', alt: 'Kajaki na Luzie - ekipa na spływie' },
  { id: 'dQpkLbJC', rawUrl: 'https://i.postimg.cc/dQpkLbJC/5.jpg', alt: 'Spływy kajakowe u Kuby' },
  { id: 'qBShzPpy', rawUrl: 'https://i.postimg.cc/qBShzPpy/6.jpg', alt: 'Wypożyczalnia sprzętu kajakowego i SUP' },
  { id: 'KvTKL0YR', rawUrl: 'https://i.postimg.cc/KvTKL0YR/7.jpg', alt: 'Kajaki na meandrującym Liwcu' },
  { id: 'CMXBz3wb', rawUrl: 'https://i.postimg.cc/CMXBz3wb/8.jpg', alt: 'Relaks na desce SUP' },
  { id: 'L6PqfxsY', rawUrl: 'https://i.postimg.cc/L6PqfxsY/9.jpg', alt: 'Przystań kajakowa u Kuby' },
  { id: 'YqF4gdSj', rawUrl: 'https://i.postimg.cc/YqF4gdSj/10.jpg', alt: 'Letni spływ kajakowy z przyjaciółmi' },
  { id: 'yYRJ9LNx', rawUrl: 'https://i.postimg.cc/yYRJ9LNx/11.jpg', alt: 'Kajaki 2-osobowe w Dolinie Liwca' },
  { id: '7YzC7KL2', rawUrl: 'https://i.postimg.cc/7YzC7KL2/12.jpg', alt: 'Wypoczynek po spływie u Kuby' },
  { id: 'WbZDr54J', rawUrl: 'https://i.postimg.cc/WbZDr54J/13.jpg', alt: 'Zawsze z nami - Kajaki na Luzie' }
];

const REVIEWS = [
  {
    id: 1,
    name: 'Marta & Tomek',
    tag: 'Spływ kajakowy + deski SUP',
    text: 'Polecam z całego serca! Kuba to świetny gość, zorganizował nam rewelacyjny spływ i wypożyczenie desek SUP. Sprzęt pierwsza klasa, a atmosfera niezapomniana!'
  },
  {
    id: 2,
    name: 'Michał z ekipą',
    tag: 'Spływ Doliną Liwca',
    text: 'Super zorganizowane spływy, piękna trasa rzeką Liwiec, dzika przyroda i pełen relaks. Na pewno wrócimy!'
  },
  {
    id: 3,
    name: 'Katarzyna W.',
    tag: 'Wyprawa weekendowa',
    text: 'Fajna ekipa i klimat! Wszystko na luzie, punktualnie i profesjonalnie. Najlepsze kajaki nad Liwcem!'
  }
];

interface GalleryThumbnailProps {
  rawUrl: string;
  alt: string;
  priority?: boolean;
  onClick: () => void;
}

function GalleryThumbnail({
  rawUrl,
  alt,
  priority = false,
  onClick
}: GalleryThumbnailProps) {
  const [loaded, setLoaded] = useState(false);
  const thumbUrl = getThumbUrl(rawUrl);

  return (
    <div
      className="gallery-card group relative overflow-hidden rounded-xl sm:rounded-2xl border border-[#E0E2ED] bg-[#E4E7F5]/70 shadow-2xs hover:shadow-md transition-shadow cursor-pointer aspect-[4/3]"
      onClick={onClick}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#E4E7F5] via-[#FDFFFC]/40 to-[#E4E7F5] animate-pulse" />
      )}

      <img
        src={thumbUrl}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [galleryExpanded, setGalleryExpanded] = useState(false);
  const [activePhoto, setActivePhoto] = useState<typeof GALLERY_PHOTOS[0] | null>(null);

  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.type = 'image/jpeg';
    link.href = getThumbUrl(LOGO_URL);
  }, []);

  const visiblePhotos = galleryExpanded ? GALLERY_PHOTOS : GALLERY_PHOTOS.slice(0, 7);

  return (
    <div id="top" className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#FDFFFC] text-[#181E30] flex flex-col font-sans selection:bg-[#E4E7F5] selection:text-[#202C76]">
      {/* Top Banner Bar */}
      <div className="bg-[#161E52] text-[#FDFFFC] text-xs sm:text-sm py-2 px-3 sm:px-4 border-b border-[#202C76] w-full">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 font-medium text-xs sm:text-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
            <span className="truncate">Sezon w pełni! Rezerwuj tel:</span>
            <a
              id="top-bar-tel-link"
              href="tel:880458419"
              className="font-bold text-[#FDFFFC] underline hover:text-[#E4E7F5] transition-colors ml-0.5 whitespace-nowrap"
            >
              880 458 419
            </a>
          </div>
          <div className="hidden md:flex items-center gap-3 text-xs text-[#E4E7F5]">
            <span>🌿 Dzika Dolina Liwca</span>
            <span>•</span>
            <span>🛶 Kajaki & Deski SUP</span>
            <span>•</span>
            <span className="font-caveat text-base text-[#FDFFFC]">Zawsze z nami!</span>
          </div>
        </div>
      </div>

      {/* Sticky Navigation */}
      <header className="sticky top-0 z-40 bg-[#FDFFFC]/95 backdrop-blur-sm border-b border-[#E0E2ED] shadow-xs w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          <a
            id="brand-logo-link"
            href="#top"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-hidden"
          >
            <img
              src={getThumbUrl(LOGO_URL)}
              alt="Kajaki na Luzie"
              width={48}
              height={48}
              loading="eager"
              decoding="async"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#202C76] shadow-xs shrink-0"
            />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-2xl text-[#202C76] tracking-tight leading-none">
                Kajaki na Luzie
              </span>
              <span className="text-[11px] sm:text-xs text-[#8A8C98] font-semibold tracking-wide">
                Spływy Doliną Liwca
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 lg:gap-8 font-semibold text-sm text-[#181E30]">
            <a id="nav-link-about" href="#o-nas" className="hover:text-[#202C76] transition-colors py-1">O Nas</a>
            <a id="nav-link-gallery" href="#galeria" className="hover:text-[#202C76] transition-colors py-1">Galeria</a>
            <a id="nav-link-reviews" href="#opinie" className="hover:text-[#202C76] transition-colors py-1">Opinie</a>
            <a id="nav-link-contact" href="#kontakt" className="hover:text-[#202C76] transition-colors py-1">Kontakt</a>
            <a
              id="nav-cta-rezerwuj"
              href="tel:880458419"
              className="inline-flex items-center gap-2 bg-[#202C76] hover:bg-[#161E52] text-[#FDFFFC] text-sm font-bold px-5 py-2.5 rounded-full shadow-xs transition-colors active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#E4E7F5]" />
              <span>Rezerwuj</span>
            </a>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <a
              id="mobile-nav-call-btn"
              href="tel:880458419"
              className="inline-flex items-center gap-1.5 bg-[#202C76] text-[#FDFFFC] text-xs font-bold px-3 py-1.5 rounded-full"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Zadzwoń</span>
            </a>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#202C76] hover:bg-[#E4E7F5] transition-colors focus:outline-hidden"
              aria-label="Menu nawigacji"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FDFFFC] border-b border-[#E0E2ED] px-4 py-4 shadow-md">
            <nav className="flex flex-col gap-2 font-semibold text-[#181E30]">
              <a id="mobile-link-about" href="#o-nas" onClick={() => setMobileMenuOpen(false)} className="py-2.5 px-3 rounded-lg hover:bg-[#E4E7F5] hover:text-[#202C76] transition-colors">O Nas</a>
              <a id="mobile-link-gallery" href="#galeria" onClick={() => setMobileMenuOpen(false)} className="py-2.5 px-3 rounded-lg hover:bg-[#E4E7F5] hover:text-[#202C76] transition-colors">Galeria</a>
              <a id="mobile-link-reviews" href="#opinie" onClick={() => setMobileMenuOpen(false)} className="py-2.5 px-3 rounded-lg hover:bg-[#E4E7F5] hover:text-[#202C76] transition-colors">Opinie</a>
              <a id="mobile-link-contact" href="#kontakt" onClick={() => setMobileMenuOpen(false)} className="py-2.5 px-3 rounded-lg hover:bg-[#E4E7F5] hover:text-[#202C76] transition-colors">Kontakt</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex items-center justify-center bg-cover bg-center text-center px-4 sm:px-6 py-16 sm:py-20 w-full overflow-hidden"
        style={{ backgroundImage: `url('${HERO_BG}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#161E52]/90 via-[#202C76]/85 to-[#161E52]/95" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center w-full">
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FDFFFC] tracking-tight mb-1 sm:mb-2">
            Kajaki na Luzie
          </h1>
          <div className="font-caveat text-2xl sm:text-4xl md:text-5xl text-[#E4E7F5] font-bold mb-4 sm:mb-6">
            Zawsze z nami!
          </div>
          <p className="text-base sm:text-xl md:text-2xl text-[#FDFFFC]/95 max-w-2xl font-medium leading-relaxed mb-6 sm:mb-8 px-2">
            Przepłyń rzekę Liwiec! Wypocznij w dzikiej otaczającej nas przyrodzie!
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <a
              id="hero-cta-call"
              href="tel:880458419"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FDFFFC] text-[#202C76] hover:bg-[#E4E7F5] text-base sm:text-xl font-extrabold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-lg transition-transform active:scale-95"
            >
              <Phone className="w-5 h-5 text-[#202C76]" />
              <span>ZADZWOŃ: 880 458 419</span>
            </a>
          </div>
        </div>
      </section>

      {/* Galeria Section */}
      <section id="galeria" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="gallery-grid">
          {visiblePhotos.map((photo, index) => (
            <GalleryThumbnail
              key={photo.id}
              rawUrl={photo.rawUrl}
              alt={photo.alt}
              priority={index < 4}
              onClick={() => setActivePhoto(photo)}
            />
          ))}
        </div>

        <div className="mt-8 sm:mt-10 text-center flex items-center justify-center">
          <button
            id="gallery-toggle-btn"
            onClick={() => setGalleryExpanded(!galleryExpanded)}
            className="inline-flex items-center gap-2 bg-[#202C76] hover:bg-[#161E52] text-[#FDFFFC] text-sm sm:text-base font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-xs transition-colors active:scale-95 cursor-pointer"
          >
            {galleryExpanded ? (
              <>
                <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Zwiń galerię (pokaż 7 zdjęć)</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Pokaż więcej zdjęć (wszystkie 13 zdjęć)</span>
              </>
            )}
          </button>
        </div>
      </section>

      {/* Lightbox Modal (Full Quality Image loaded on-demand) */}
      {activePhoto && (
        <div
          id="photo-lightbox-modal"
          className="fixed inset-0 z-50 bg-[#161E52]/90 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#181E30] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-[#FDFFFC]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="lightbox-close-btn"
              onClick={() => setActivePhoto(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-[#161E52]/90 text-[#FDFFFC] hover:bg-[#202C76] flex items-center justify-center shadow-sm transition-colors cursor-pointer"
              aria-label="Zamknij"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center justify-center max-h-[80vh] min-h-[260px] overflow-hidden bg-[#181E30]">
              <img
                src={activePhoto.rawUrl}
                alt={activePhoto.alt}
                decoding="async"
                className="max-h-[80vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
