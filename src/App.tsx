import { useState } from 'react';
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

const LOGO_URL = 'https://i.postimg.cc/yxVf9Dmy/437701272-364244406597014-7535880085990213910-n.jpg';
const HERO_BG = 'https://i.postimg.cc/9fdtpWFg/527758207-701097419578376-548236224907099526-n.jpg';

// Exact 13 photos as specified, captions removed
const GALLERY_PHOTOS = [
  // First 7 visible
  { id: 'nVgjCyn9', url: 'https://i.postimg.cc/nVgjCyn9/1.jpg', alt: 'Spływ kajakowy Doliną Liwca' },
  { id: '44q7mDXy', url: 'https://i.postimg.cc/44q7mDXy/2.jpg', alt: 'Deski SUP na rzece Liwiec' },
  { id: '1R2nfkyq', url: 'https://i.postimg.cc/1R2nfkyq/3.jpg', alt: 'Dolina Liwca - dzika przyroda' },
  { id: 'kMz6B07t', url: 'https://i.postimg.cc/kMz6B07t/4.jpg', alt: 'Kajaki na Luzie - ekipa na spływie' },
  { id: 'dQpkLbJC', url: 'https://i.postimg.cc/dQpkLbJC/5.jpg', alt: 'Spływy kajakowe u Kuby' },
  { id: 'qBShzPpy', url: 'https://i.postimg.cc/qBShzPpy/6.jpg', alt: 'Wypożyczalnia sprzętu kajakowego i SUP' },
  { id: 'KvTKL0YR', url: 'https://i.postimg.cc/KvTKL0YR/7.jpg', alt: 'Kajaki na meandrującym Liwcu' },
  // Hidden 6
  { id: 'CMXBz3wb', url: 'https://i.postimg.cc/CMXBz3wb/8.jpg', alt: 'Relaks na desce SUP' },
  { id: 'L6PqfxsY', url: 'https://i.postimg.cc/L6PqfxsY/9.jpg', alt: 'Przystań kajakowa u Kuby' },
  { id: 'YqF4gdSj', url: 'https://i.postimg.cc/YqF4gdSj/10.jpg', alt: 'Letni spływ kajakowy z przyjaciółmi' },
  { id: 'yYRJ9LNx', url: 'https://i.postimg.cc/yYRJ9LNx/11.jpg', alt: 'Kajaki 2-osobowe w Dolinie Liwca' },
  { id: '7YzC7KL2', url: 'https://i.postimg.cc/7YzC7KL2/12.jpg', alt: 'Wypoczynek po spływie u Kuby' },
  { id: 'WbZDr54J', url: 'https://i.postimg.cc/WbZDr54J/13.jpg', alt: 'Zawsze z nami - Kajaki na Luzie' }
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

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [galleryExpanded, setGalleryExpanded] = useState(false);
  const [activePhoto, setActivePhoto] = useState<typeof GALLERY_PHOTOS[0] | null>(null);

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
          {/* Brand Wordmark */}
          <a
            id="brand-logo-link"
            href="#top"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-hidden"
          >
            <img
              src={LOGO_URL}
              alt="Kajaki na Luzie"
              width={48}
              height={48}
              loading="eager"
              decoding="async"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#202C76] shadow-xs shrink-0"
              referrerPolicy="no-referrer"
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

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8 font-semibold text-sm text-[#181E30]">
            <a
              id="nav-link-about"
              href="#o-nas"
              className="hover:text-[#202C76] transition-colors py-1"
            >
              O Nas
            </a>
            <a
              id="nav-link-gallery"
              href="#galeria"
              className="hover:text-[#202C76] transition-colors py-1"
            >
              Galeria
            </a>
            <a
              id="nav-link-reviews"
              href="#opinie"
              className="hover:text-[#202C76] transition-colors py-1"
            >
              Opinie
            </a>
            <a
              id="nav-link-contact"
              href="#kontakt"
              className="hover:text-[#202C76] transition-colors py-1"
            >
              Kontakt
            </a>

            {/* Navy Pill CTA Anchor */}
            <a
              id="nav-cta-rezerwuj"
              href="tel:880458419"
              className="inline-flex items-center gap-2 bg-[#202C76] hover:bg-[#161E52] text-[#FDFFFC] text-sm font-bold px-5 py-2.5 rounded-full shadow-xs transition-colors active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#E4E7F5]" />
              <span>Rezerwuj</span>
            </a>
          </nav>

          {/* Mobile Hamburger Toggle */}
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

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FDFFFC] border-b border-[#E0E2ED] px-4 py-4 shadow-md">
            <nav className="flex flex-col gap-2 font-semibold text-[#181E30]">
              <a
                id="mobile-link-about"
                href="#o-nas"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-[#E4E7F5] hover:text-[#202C76] transition-colors"
              >
                O Nas
              </a>
              <a
                id="mobile-link-gallery"
                href="#galeria"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-[#E4E7F5] hover:text-[#202C76] transition-colors"
              >
                Galeria
              </a>
              <a
                id="mobile-link-reviews"
                href="#opinie"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-[#E4E7F5] hover:text-[#202C76] transition-colors"
              >
                Opinie
              </a>
              <a
                id="mobile-link-contact"
                href="#kontakt"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-[#E4E7F5] hover:text-[#202C76] transition-colors"
              >
                Kontakt
              </a>
              <div className="pt-2 border-t border-[#E0E2ED] mt-1">
                <a
                  id="mobile-drawer-call-btn"
                  href="tel:880458419"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#202C76] hover:bg-[#161E52] text-[#FDFFFC] font-bold py-3 rounded-xl shadow-xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>Zadzwoń: 880 458 419</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex items-center justify-center bg-cover bg-center text-center px-4 sm:px-6 py-16 sm:py-20 w-full overflow-hidden"
        style={{
          backgroundImage: `url('${HERO_BG}')`
        }}
      >
        {/* Navy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#161E52]/90 via-[#202C76]/85 to-[#161E52]/95" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center w-full">
          {/* Chips */}
          <div className="flex flex-wrap justify-center items-center gap-2 mb-4 sm:mb-6">
            <span className="inline-flex items-center gap-1 bg-[#FDFFFC]/15 text-[#FDFFFC] border border-[#FDFFFC]/25 text-xs sm:text-sm font-bold px-3.5 py-1 rounded-full shadow-xs">
              <span>🛶</span> Kajaki
            </span>
            <span className="inline-flex items-center gap-1 bg-[#FDFFFC]/15 text-[#FDFFFC] border border-[#FDFFFC]/25 text-xs sm:text-sm font-bold px-3.5 py-1 rounded-full shadow-xs">
              <span>🏄</span> SUP
            </span>
            <span className="inline-flex items-center gap-1 bg-[#FDFFFC]/15 text-[#FDFFFC] border border-[#FDFFFC]/25 text-xs sm:text-sm font-bold px-3.5 py-1 rounded-full shadow-xs">
              <span>🌿</span> Dolina Liwca
            </span>
          </div>

          {/* H1 Heading with Tagline */}
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FDFFFC] tracking-tight mb-1 sm:mb-2">
            Kajaki na Luzie
          </h1>
          
          <div className="font-caveat text-2xl sm:text-4xl md:text-5xl text-[#E4E7F5] font-bold mb-4 sm:mb-6">
            Zawsze z nami!
          </div>

          {/* Body */}
          <p className="text-base sm:text-xl md:text-2xl text-[#FDFFFC]/95 max-w-2xl font-medium leading-relaxed mb-6 sm:mb-8 px-2">
            Przepłyń rzekę Liwiec! Wypocznij w dzikiej otaczającej nas przyrodzie!
          </p>

          {/* Hero CTA Button */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <a
              id="hero-cta-call"
              href="tel:880458419"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FDFFFC] text-[#202C76] hover:bg-[#E4E7F5] text-base sm:text-xl font-extrabold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-lg transition-transform active:scale-95"
            >
              <Phone className="w-5 h-5 text-[#202C76]" />
              <span>ZADZWOŃ: 880 458 419</span>
            </a>

            <a
              id="hero-secondary-anchor"
              href="#o-nas"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-transparent text-[#FDFFFC] hover:bg-[#FDFFFC]/15 border border-[#FDFFFC]/40 text-sm sm:text-base font-bold px-5 sm:px-6 py-3 sm:py-4 rounded-full transition-colors"
            >
              <span>Poznaj naszą ofertę</span>
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>

          {/* Trust points */}
          <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-8 text-[#E4E7F5] text-xs sm:text-sm">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Niezawodny sprzęt</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Dobra atmosfera z Kubą</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-1.5 sm:gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Transport i organizacja</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ornamental Divider */}
      <div className="py-4 sm:py-6 flex items-center justify-center gap-3 sm:gap-4 text-[#8A8C98] px-4 w-full overflow-hidden">
        <div className="h-[1px] w-12 sm:w-28 bg-[#E0E2ED] shrink-0"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4E7F5] text-[#202C76] text-xs sm:text-sm font-bold shadow-xs shrink-0">
          <span>🛶</span>
          <span className="font-caveat text-base sm:text-lg">Dolina Liwca na Luzie</span>
          <span>🛶</span>
        </div>
        <div className="h-[1px] w-12 sm:w-28 bg-[#E0E2ED] shrink-0"></div>
      </div>

      {/* O Nas (About Us) Section */}
      <section id="o-nas" className="py-12 sm:py-18 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left / Main Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
            <div>
              <span className="text-[#202C76] font-extrabold text-xs sm:text-sm uppercase tracking-wider bg-[#E4E7F5] px-2.5 py-1 rounded-md">
                Spływy Doliną Liwca
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#202C76] mt-2.5 leading-tight">
                Prawdziwy relaks na wodzie u Kuby
              </h2>
              <p className="font-caveat text-xl sm:text-3xl text-[#8A8C98] font-bold mt-1">
                Świetny sprzęt, zero stresu i zawsze dobra atmosfera!
              </p>
            </div>

            <div className="space-y-3.5 text-sm sm:text-base md:text-lg text-[#181E30]/90 leading-relaxed">
              <p>
                Witaj w <strong>Kajaki na Luzie</strong>! Organizujemy niezapomniane spływy kajakowe oraz wypożyczamy nowoczesne deski SUP po jednej z najpiękniejszych, najbardziej malowniczych i dzikich rzek Mazowsza i Podlasia — <strong>rzece Liwiec</strong>.
              </p>
              <p>
                Za całą wyprawą stoi <strong>Kuba</strong> — pasjonat rzeki, który dba o to, by każda chwila spędzona na wodzie była czystą przyjemnością. U nas nie ma sztywnych reguł ani pośpiechu. Zapewniamy profesjonalne, bezpieczne kajaki polietylenowe, stabilne deski SUP, kamizelki asekuracyjne oraz pełną logistykę — od wodowania po odbiór.
              </p>
              <p className="text-xs sm:text-sm text-[#8A8C98]">
                Niezależnie od tego, czy płyniesz pierwszy raz z rodziną, czy planujesz wypad ze znajomymi — pomożemy dobrać idealny odcinek rzeki Liwiec dopasowany do Waszych sił i upodobań!
              </p>
            </div>

            {/* Feature Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
              <div className="p-4 rounded-xl border border-[#E0E2ED] bg-[#FDFFFC] shadow-xs">
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E4E7F5] text-[#202C76] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#202C76]">Świetny Sprzęt</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#8A8C98]">
                  Wygodne, bezpieczne kajaki oraz markowe deski SUP wraz z kompletem wioseł i kamizelek.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#E0E2ED] bg-[#FDFFFC] shadow-xs">
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E4E7F5] text-[#202C76] flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#202C76]">Klimat i Humor</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#8A8C98]">
                  Kuba zadba o świetny nastrój, doradzi najlepsze miejsca na postój i piaszczyste plaże.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#E0E2ED] bg-[#FDFFFC] shadow-xs">
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E4E7F5] text-[#202C76] flex items-center justify-center shrink-0">
                    <Waves className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#202C76]">Dolina Liwca</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#8A8C98]">
                  Dzika przyroda, czysta i płytka woda, łagodne zakola i pełen spokój z dala od miejskiego zgiełku.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#E0E2ED] bg-[#FDFFFC] shadow-xs">
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E4E7F5] text-[#202C76] flex items-center justify-center shrink-0">
                    <LifeBuoy className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#202C76]">Pełna Logistyka</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#8A8C98]">
                  Wygodny transport sprzętu oraz kierowców na start i po zakończeniu spływu.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Navy Contact & Info Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#202C76] text-[#FDFFFC] rounded-2xl p-5 sm:p-7 shadow-lg border border-[#161E52] flex flex-col gap-5 relative overflow-hidden">
              {/* Decorative Watermark (contained) */}
              <div className="absolute -right-4 -bottom-4 text-[#FDFFFC]/5 pointer-events-none select-none font-display font-black text-8xl">
                🛶
              </div>

              <div className="relative z-10">
                <div className="inline-block bg-[#E4E7F5] text-[#202C76] font-bold text-xs px-2.5 py-0.5 rounded-full mb-2">
                  Szybka rezerwacja spływu
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#FDFFFC]">
                  Zadzwoń do Kuby!
                </h3>
                <p className="text-[#E4E7F5] text-xs sm:text-sm mt-1">
                  Skontaktuj się bezpośrednio, aby zarezerwować kajaki lub deski SUP na wybrany dzień i godzinę.
                </p>
              </div>

              {/* Direct Contacts */}
              <div className="space-y-3 relative z-10">
                {/* Phone */}
                <a
                  id="about-card-phone"
                  href="tel:880458419"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#161E52] hover:bg-[#161E52]/80 border border-[#FDFFFC]/15 transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FDFFFC] text-[#202C76] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-[#E4E7F5] font-medium">Telefon bezpośredni</span>
                    <span className="text-lg sm:text-xl font-bold tracking-wide text-[#FDFFFC]">
                      880 458 419
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  id="about-card-email"
                  href="mailto:kajakinaluzieliwiec@wp.pl"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#161E52] hover:bg-[#161E52]/80 border border-[#FDFFFC]/15 transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FDFFFC] text-[#202C76] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] text-[#E4E7F5] font-medium">Napisz e-mail</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#FDFFFC] truncate">
                      kajakinaluzieliwiec@wp.pl
                    </span>
                  </div>
                </a>

                {/* Facebook */}
                <a
                  id="about-card-facebook"
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#161E52] hover:bg-[#161E52]/80 border border-[#FDFFFC]/15 transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FDFFFC] text-[#202C76] flex items-center justify-center shrink-0">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-[#E4E7F5] font-medium">Odwiedź nas na Facebooku</span>
                    <span className="text-sm sm:text-base font-bold text-[#FDFFFC] flex items-center gap-1">
                      Kajaki na Luzie <ExternalLink className="w-3.5 h-3.5 text-[#E4E7F5]" />
                    </span>
                  </div>
                </a>
              </div>

              {/* Tagline footer in card */}
              <div className="pt-2 border-t border-[#FDFFFC]/15 flex items-center justify-between text-xs text-[#E4E7F5] relative z-10">
                <span>Dolina Liwca</span>
                <span className="font-caveat text-lg text-[#FDFFFC] font-bold">Zawsze z nami!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ornamental Divider */}
      <div className="py-3 flex items-center justify-center gap-3 sm:gap-4 text-[#8A8C98] px-4 w-full overflow-hidden">
        <div className="h-[1px] w-12 sm:w-28 bg-[#E0E2ED] shrink-0"></div>
        <span className="text-[11px] sm:text-xs uppercase tracking-widest font-bold text-[#8A8C98] shrink-0">Zdjęcia ze spływów</span>
        <div className="h-[1px] w-12 sm:w-28 bg-[#E0E2ED] shrink-0"></div>
      </div>

      {/* Galeria Section (Pure Images without Captions / Faster Loading) */}
      <section id="galeria" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-[#202C76] font-extrabold text-xs sm:text-sm uppercase tracking-wider bg-[#E4E7F5] px-2.5 py-1 rounded-md">
            Nasze Zdjęcia
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#202C76] mt-2.5">
            Galeria Spływów Doliną Liwca
          </h2>
          <p className="text-sm sm:text-base text-[#8A8C98] mt-1.5 font-medium">
            Zobacz, jak wygląda odpoczynek na wodzie z Kajaki na Luzie. Wszystkie 13 ujęć prosto z rzeki!
          </p>
        </div>

        {/* Gallery Grid (No Captions, Fast Async Image Loading, Fixed Aspect Ratio) */}
        <div className="gallery-grid">
          {visiblePhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="gallery-card group relative overflow-hidden rounded-xl sm:rounded-2xl border border-[#E0E2ED] bg-[#E4E7F5] shadow-2xs hover:shadow-md transition-shadow cursor-pointer aspect-[4/3]"
              onClick={() => setActivePhoto(photo)}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                loading={index < 4 ? 'eager' : 'lazy'}
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>

        {/* Expand / Collapse Controls */}
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

      {/* Lightbox Modal (Clean View without Captions) */}
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
                src={activePhoto.url}
                alt={activePhoto.alt}
                decoding="async"
                className="max-h-[80vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}

      {/* Ornamental Divider */}
      <div className="py-3 flex items-center justify-center gap-3 sm:gap-4 text-[#8A8C98] px-4 w-full overflow-hidden">
        <div className="h-[1px] w-12 sm:w-28 bg-[#E0E2ED] shrink-0"></div>
        <span className="text-[11px] sm:text-xs uppercase tracking-widest font-bold text-[#8A8C98] shrink-0">Co mówią nasi goście</span>
        <div className="h-[1px] w-12 sm:w-28 bg-[#E0E2ED] shrink-0"></div>
      </div>

      {/* Opinie (Reviews) Section — Star Ratings Removed as Requested */}
      <section id="opinie" className="py-12 sm:py-18 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-[#202C76] font-extrabold text-xs sm:text-sm uppercase tracking-wider bg-[#E4E7F5] px-2.5 py-1 rounded-md">
            Opinie Uczestników
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#202C76] mt-2.5">
            Opinie o spływach z Kubą
          </h2>
          <p className="text-sm sm:text-base text-[#8A8C98] mt-1.5 font-medium">
            Zobacz autentyczne relacje osób, które przepłynęły Liwiec razem z nami!
          </p>
        </div>

        {/* 3 Exactly Given Reviews (Without Star Ratings) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#FDFFFC] rounded-xl sm:rounded-2xl p-5 sm:p-7 border border-[#E0E2ED] shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Review Text */}
                <p className="text-[#181E30] text-sm sm:text-base md:text-lg font-medium leading-relaxed italic mb-5">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="pt-3.5 border-t border-[#E0E2ED] flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-base text-[#202C76]">
                    {review.name}
                  </div>
                  <div className="text-xs text-[#8A8C98] font-medium">
                    {review.tag}
                  </div>
                </div>
                <span className="text-base sm:text-lg">🛶</span>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Facebook Reviews */}
        <div className="mt-8 sm:mt-10 text-center">
          <a
            id="reviews-fb-link"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E4E7F5] hover:bg-[#202C76] text-[#202C76] hover:text-[#FDFFFC] font-bold text-xs sm:text-sm md:text-base px-5 sm:px-7 py-3 rounded-full transition-colors group"
          >
            <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-[#202C76] group-hover:text-[#FDFFFC] transition-colors" />
            <span>Zobacz więcej opinii i aktualności na Facebooku</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="py-12 sm:py-18 bg-[#E4E7F5]/50 border-t border-[#E0E2ED] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-[#202C76] font-extrabold text-xs sm:text-sm uppercase tracking-wider bg-[#FDFFFC] px-2.5 py-1 rounded-md border border-[#E0E2ED]">
              Kontakt & Rezerwacje
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#202C76] mt-2.5">
              Zarezerwuj swój spływ
            </h2>
            <p className="text-sm sm:text-base text-[#8A8C98] mt-1.5 font-medium">
              Zadzwoń lub napisz — odpowiadamy szybko i ustalamy wszystkie szczegóły!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {/* Phone Card */}
            <div className="bg-[#FDFFFC] p-5 sm:p-7 rounded-xl sm:rounded-2xl border border-[#E0E2ED] shadow-2xs flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#E4E7F5] text-[#202C76] flex items-center justify-center mb-3">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#202C76] mb-0.5">Telefon</h3>
              <p className="text-xs text-[#8A8C98] mb-3">Najszybsza forma kontaktu i rezerwacji</p>
              <a
                id="contact-section-tel"
                href="tel:880458419"
                className="font-display font-extrabold text-xl sm:text-2xl text-[#202C76] hover:text-[#161E52] tracking-wide"
              >
                880 458 419
              </a>
              <span className="text-xs text-emerald-600 font-semibold mt-1.5">Dostępny codziennie</span>
            </div>

            {/* Email Card */}
            <div className="bg-[#FDFFFC] p-5 sm:p-7 rounded-xl sm:rounded-2xl border border-[#E0E2ED] shadow-2xs flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#E4E7F5] text-[#202C76] flex items-center justify-center mb-3">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#202C76] mb-0.5">E-mail</h3>
              <p className="text-xs text-[#8A8C98] mb-3">Zapytania grupowe i rezerwacje firmowe</p>
              <a
                id="contact-section-email"
                href="mailto:kajakinaluzieliwiec@wp.pl"
                className="text-xs sm:text-sm font-bold text-[#202C76] hover:text-[#161E52] break-all"
              >
                kajakinaluzieliwiec@wp.pl
              </a>
              <span className="text-xs text-[#8A8C98] font-semibold mt-1.5">Szybka odpowiedź</span>
            </div>

            {/* Facebook Card */}
            <div className="bg-[#FDFFFC] p-5 sm:p-7 rounded-xl sm:rounded-2xl border border-[#E0E2ED] shadow-2xs flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#E4E7F5] text-[#202C76] flex items-center justify-center mb-3">
                <Facebook className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#202C76] mb-0.5">Facebook</h3>
              <p className="text-xs text-[#8A8C98] mb-3">Wiadomości prywatne i aktualności</p>
              <a
                id="contact-section-fb"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm sm:text-base font-bold text-[#202C76] hover:text-[#161E52]"
              >
                <span>Kajaki na Luzie</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-xs text-[#8A8C98] font-semibold mt-1.5">Polub nasz profil</span>
            </div>
          </div>

          {/* Quick Call Action Banner */}
          <div className="mt-8 sm:mt-10 max-w-3xl mx-auto bg-[#202C76] text-[#FDFFFC] rounded-xl sm:rounded-2xl p-5 sm:p-7 text-center shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-center sm:text-left">
              <h4 className="font-display font-bold text-xl sm:text-2xl text-[#FDFFFC]">
                Planujesz spływ w najbliższy weekend?
              </h4>
              <p className="text-xs sm:text-sm text-[#E4E7F5] mt-1">
                Zadzwoń już teraz i upewnij się, że kajaki lub deski SUP czekają na Ciebie!
              </p>
            </div>
            <a
              id="banner-call-btn"
              href="tel:880458419"
              className="inline-flex items-center gap-2 bg-[#FDFFFC] text-[#202C76] hover:bg-[#E4E7F5] font-extrabold text-sm sm:text-base px-5 sm:px-6 py-3 rounded-full shadow-xs shrink-0 transition-transform active:scale-95"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>880 458 419</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#161E52] text-[#FDFFFC] pt-12 pb-8 border-t border-[#202C76] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-[#FDFFFC]/15">
            {/* Wordmark & Bio */}
            <div className="md:col-span-2 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={LOGO_URL}
                  alt="Kajaki na Luzie"
                  width={44}
                  height={44}
                  loading="lazy"
                  decoding="async"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-[#FDFFFC]/30 shadow-xs"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="font-display font-extrabold text-xl sm:text-2xl text-[#FDFFFC] block leading-tight">
                    Kajaki na Luzie
                  </span>
                  <span className="font-caveat text-lg sm:text-xl text-[#E4E7F5] font-bold">
                    Zawsze z nami!
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#E4E7F5]/80 max-w-md leading-relaxed">
                Spływy kajakowe i wypożyczalnia desek SUP w malowniczej Dolinie rzeki Liwiec. Prowadzona przez Kubę przystań gwarantuje świetny sprzęt, pełne bezpieczeństwo i luźną, przyjazną atmosferę.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-base sm:text-lg text-[#FDFFFC] mb-3">
                Nawigacja
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#E4E7F5]">
                <li>
                  <a href="#o-nas" className="hover:text-[#FDFFFC] transition-colors">
                    O Nas
                  </a>
                </li>
                <li>
                  <a href="#galeria" className="hover:text-[#FDFFFC] transition-colors">
                    Galeria (13 zdjęć)
                  </a>
                </li>
                <li>
                  <a href="#opinie" className="hover:text-[#FDFFFC] transition-colors">
                    Opinie uczestników
                  </a>
                </li>
                <li>
                  <a href="#kontakt" className="hover:text-[#FDFFFC] transition-colors">
                    Kontakt i rezerwacja
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact in Footer */}
            <div>
              <h4 className="font-display font-bold text-base sm:text-lg text-[#FDFFFC] mb-3">
                Kontakt
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#E4E7F5]">
                <li>
                  <a
                    href="tel:880458419"
                    className="flex items-center gap-2 hover:text-[#FDFFFC] transition-colors font-bold text-sm sm:text-base"
                  >
                    <Phone className="w-4 h-4 text-[#E4E7F5]" />
                    <span>880 458 419</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:kajakinaluzieliwiec@wp.pl"
                    className="flex items-center gap-2 hover:text-[#FDFFFC] transition-colors text-xs sm:text-sm break-all"
                  >
                    <Mail className="w-4 h-4 text-[#E4E7F5] shrink-0" />
                    <span>kajakinaluzieliwiec@wp.pl</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#FDFFFC] transition-colors"
                  >
                    <Facebook className="w-4 h-4 text-[#E4E7F5]" />
                    <span>Facebook: Kajaki na Luzie</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8A8C98]">
            <p>
              &copy; {new Date().getFullYear()} Kajaki na Luzie — Spływy Doliną Liwca. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex items-center gap-2 text-[#E4E7F5]">
              <span>Kajaki & Deski SUP • Dolina Liwca</span>
              <span>•</span>
              <span className="font-caveat text-base text-[#FDFFFC]">Zawsze z nami!</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
