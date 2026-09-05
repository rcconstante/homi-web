'use client';

import { useEffect, useRef, useState } from 'react';
import {
  BellRing,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  FileText,
  Home,
  ScanLine,
  Search,
  Shield,
  Smartphone,
  Wrench,
} from 'lucide-react';

const SLIDE_COUNT = 5;
const screenshots = [
  { src: '/screens/home.png', alt: 'Homi home dashboard' },
  { src: '/screens/appliances.png', alt: 'Homi appliance library' },
  { src: '/screens/appliance-detail.png', alt: 'Homi appliance details' },
  { src: '/screens/calendar.png', alt: 'Homi maintenance calendar' },
  { src: '/screens/vault.png', alt: 'Homi warranty vault' },
  { src: '/screens/insights.png', alt: 'Homi spending insights' },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold });
    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function StoreIcon({ platform }: { platform: 'apple' | 'google' }) {
  if (platform === 'apple') {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" fill="currentColor" aria-hidden="true">
        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.82 9.3 4.8C10.6 4.78 11.83 5.64 12.62 5.64C13.41 5.64 14.92 4.59 16.48 4.76C17.14 4.79 18.93 5.03 20.1 6.7C19.98 6.78 17.75 8.08 17.77 10.82C17.8 14.1 20.58 15.17 20.61 15.18C20.58 15.27 20.1 16.88 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.583 1.496c.572.331.572.87 0 1.2l-2.583 1.497-2.606-2.597 2.606-2.596zM5.864 3.465L16.8 9.798l-2.302 2.302-8.634-8.635z" />
    </svg>
  );
}

function StoreButtons() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
      <a href="mailto:hello@rcconstante.dev?subject=Homi%20iOS%20availability" className="inline-flex w-full items-center justify-center gap-4 rounded-2xl bg-gray-900 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-gray-800 sm:w-auto">
        <StoreIcon platform="apple" />
        <span className="text-left"><span className="block text-xs leading-none opacity-70">COMING SOON TO THE</span><span className="block text-base font-bold leading-tight">App Store</span></span>
      </a>
      <a href="mailto:hello@rcconstante.dev?subject=Homi%20Android%20availability" className="inline-flex w-full items-center justify-center gap-4 rounded-2xl bg-[#075A39] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#06472e] sm:w-auto">
        <StoreIcon platform="google" />
        <span className="text-left"><span className="block text-xs leading-none opacity-70">COMING SOON TO</span><span className="block text-base font-bold leading-tight">Google Play</span></span>
      </a>
    </div>
  );
}

function HorizontalScreenshots() {
  const { ref, visible } = useInView(0.15);
  const [start, setStart] = useState(0);
  const showCount = 4;
  const maxStart = screenshots.length - showCount;

  return (
    <div ref={ref} className="relative">
      <div className="hide-scrollbar snap-x snap-mandatory overflow-x-auto pb-4">
        <div className="flex min-w-max gap-1 px-1">
          {screenshots.map((image, index) => {
            const inWindow = index >= start && index < start + showCount;
            return (
              <div
                key={image.src}
                className={`shrink-0 snap-center transition-all duration-700 ease-out ${visible && inWindow ? 'translate-y-0 scale-100 opacity-100' : inWindow ? 'translate-y-8 scale-95 opacity-0' : 'hidden scale-95 opacity-0'}`}
                style={{ transitionDelay: `${(index - start) * 80}ms` }}
              >
                <img src={image.src} alt={image.alt} className="w-[220px] rounded-[1.75rem] shadow-xl shadow-black/5 sm:w-[260px] lg:w-[300px]" loading="lazy" />
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={() => setStart((value) => Math.max(value - 1, 0))} disabled={start === 0} className="absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-700 shadow-lg transition-all hover:scale-105 hover:bg-white disabled:scale-75 disabled:opacity-0" aria-label="Previous screenshots">
        <ChevronLeft size={24} />
      </button>
      <button onClick={() => setStart((value) => Math.min(value + 1, maxStart))} disabled={start >= maxStart} className="absolute right-0 top-1/2 z-10 flex h-12 w-12 translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-700 shadow-lg transition-all hover:scale-105 hover:bg-white disabled:scale-75 disabled:opacity-0" aria-label="Next screenshots">
        <ChevronRight size={24} />
      </button>
      <div className="mt-6 flex items-center justify-center gap-2">
        {screenshots.map((image, index) => (
          <button key={image.src} onClick={() => setStart(Math.min(index, maxStart))} className={`h-2 rounded-full transition-colors ${index >= start && index < start + showCount ? 'w-4 bg-[#075A39]' : 'w-2 bg-gray-300'}`} aria-label={`Show screenshot ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

function Slide({ children, id }: { children: React.ReactNode; id?: string }) {
  return <div id={id} className="w-full lg:flex lg:h-screen lg:min-w-[100vw] lg:items-center lg:justify-center lg:overflow-y-auto">{children}</div>;
}

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = (index: number) => {
    containerRef.current?.scrollTo({ left: index * window.innerWidth, behavior: 'smooth' });
  };

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    const onScroll = () => {
      if (window.innerWidth < 1024) return;
      setActiveSlide(Math.max(0, Math.min(Math.round(element.scrollLeft / window.innerWidth), SLIDE_COUNT - 1)));
    };
    element.addEventListener('scroll', onScroll, { passive: true });
    return () => element.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    let target = element.scrollLeft;
    let current = element.scrollLeft;
    let frame = 0;
    const animate = () => {
      current += (target - current) * 0.1;
      if (Math.abs(target - current) > 0.5) {
        element.scrollLeft = current;
        frame = requestAnimationFrame(animate);
      } else {
        element.scrollLeft = target;
        frame = 0;
      }
    };
    const onWheel = (event: WheelEvent) => {
      if (window.innerWidth < 1024) return;
      event.preventDefault();
      target = Math.max(0, Math.min(target + (event.deltaY + event.deltaX) * 2, element.scrollWidth - element.clientWidth));
      if (!frame) frame = requestAnimationFrame(animate);
    };
    element.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      element.removeEventListener('wheel', onWheel);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (window.innerWidth < 1024) return;
      if (event.key === 'ArrowRight') scrollToSlide(Math.min(activeSlide + 1, SLIDE_COUNT - 1));
      if (event.key === 'ArrowLeft') scrollToSlide(Math.max(activeSlide - 1, 0));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeSlide]);

  const featureCards = [
    { icon: Smartphone, title: 'Every appliance, remembered', text: 'Keep model, room, brand, purchase, warranty, and notes together.', wide: true },
    { icon: ScanLine, title: 'Scan receipts', text: 'Capture a receipt, review the details, and save the appliance.' },
    { icon: FileText, title: 'Warranty Vault', text: 'Keep receipts, images, and PDFs linked to the right appliance.' },
    { icon: Search, title: 'Instant search', text: 'Find appliances, rooms, brands, and documents in seconds.', accent: true },
    { icon: CalendarDays, title: 'Maintenance calendar', text: 'Schedule service and keep upcoming work visible.' },
    { icon: Shield, title: 'Private and local-first', text: 'Household records stay in app storage on your device.', wide: true },
  ];

  return (
    <main className="relative min-h-screen bg-white text-gray-900 lg:h-screen lg:min-h-0">
      <div ref={containerRef} className="hide-scrollbar w-full lg:flex lg:h-screen lg:flex-nowrap lg:overflow-x-auto">
        <Slide id="home">
          <section className="relative w-full overflow-hidden bg-white">
            <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-20 sm:px-8 lg:pb-20">
              <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-14">
                <div className="relative order-2 w-72 shrink-0 sm:w-80 lg:order-1 lg:w-[26rem]">
                  <img src="/screens/home.png" alt="Homi app home dashboard" className="w-full rounded-[2.25rem] border border-gray-100 drop-shadow-2xl" />
                </div>
                <div className="order-1 w-full max-w-xl px-2 text-center sm:px-0 lg:order-2 lg:text-left">
                  <div className="mb-7 flex items-center justify-center gap-3 lg:justify-start">
                    <img src="/app-icon.png" alt="" className="h-12 w-12 rounded-2xl" />
                    <span className="text-3xl font-extrabold tracking-tight">Homi</span>
                  </div>
                  <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#075A39]/10 px-5 py-2 text-sm font-medium text-[#075A39]"><Home size={18} /> Your personal home record</div>
                  <h1 className="mb-8 text-5xl font-extrabold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-[5.25rem]">Your Home.<br /><span className="text-[#075A39]">Remembered.</span><br />Always.</h1>
                  <p className="mx-auto mb-10 max-w-lg text-xl leading-relaxed text-gray-500 sm:text-2xl lg:mx-0">Track appliances, protect warranties, schedule maintenance, and keep every home document close.</p>
                  <StoreButtons />
                </div>
              </div>
            </div>
          </section>
        </Slide>

        <Slide>
          <section className="w-full bg-white py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-8">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Built for how you care for home.</h2>
                <p className="mx-auto max-w-lg text-lg text-gray-500 sm:text-xl">One calm place for appliances, maintenance, warranties, and spending.</p>
              </div>
              <HorizontalScreenshots />
            </div>
          </section>
        </Slide>

        <Slide>
          <section className="mx-auto max-w-6xl px-4 py-24 sm:px-8 lg:py-0">
            <div className="mb-12">
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Home care, simplified.</h2>
              <p className="max-w-lg text-lg text-gray-500">Everything needed to organize, maintain, and understand your home.</p>
            </div>
            <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featureCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article key={card.title} className={`${card.wide ? 'sm:col-span-2' : ''} ${card.accent ? 'bg-[#075A39] text-white' : 'border border-gray-100 bg-white'} flex flex-col justify-between rounded-3xl p-8 transition-shadow hover:shadow-lg`}>
                    <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${card.accent ? 'bg-white/20' : 'bg-[#075A39]/10'}`}><Icon size={20} className={card.accent ? 'text-white' : 'text-[#075A39]'} /></div>
                    <div><h3 className="mb-1 text-lg font-bold">{card.title}</h3><p className={`text-sm leading-relaxed ${card.accent ? 'text-white/80' : 'text-gray-500'}`}>{card.text}</p></div>
                  </article>
                );
              })}
            </div>
          </section>
        </Slide>

        <Slide>
          <section className="w-full bg-white py-24 lg:py-0">
            <div className="mx-auto max-w-6xl px-4 sm:px-8">
              <h2 className="mb-12 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-left">Designed for everyday home care</h2>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <article className="flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-10 transition-shadow hover:shadow-lg">
                  <div><Shield size={32} className="mb-6 text-[#075A39]/40" /><p className="mb-8 text-xl leading-relaxed text-gray-900">Homi is local-first. Appliance records, receipts, documents, and maintenance history remain under your control on your device.</p></div>
                  <div><p className="text-sm font-semibold text-gray-900">Privacy by design</p><p className="text-xs text-gray-400">No household account required</p></div>
                </article>
                <div className="flex flex-col gap-4">
                  <article className="flex flex-1 flex-col justify-between rounded-3xl border border-gray-100 bg-white p-7 transition-shadow hover:shadow-lg">
                    <div className="mb-4 flex items-start justify-between"><p className="text-sm font-semibold text-gray-900">Never miss important maintenance</p><BellRing size={20} className="text-[#075A39]" /></div>
                    <p className="text-sm leading-relaxed text-gray-500">Keep service dates and warranty expirations visible with optional local reminders.</p>
                  </article>
                  <article className="flex flex-1 flex-col justify-between rounded-3xl border border-gray-100 bg-white p-7 transition-shadow hover:shadow-lg">
                    <div className="mb-4 flex items-start justify-between"><p className="text-sm font-semibold text-gray-900">Understand the cost of home care</p><Wrench size={20} className="text-[#075A39]" /></div>
                    <p className="text-sm leading-relaxed text-gray-500">Completed maintenance records turn into useful yearly spending insights by category.</p>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </Slide>

        <Slide>
          <footer className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-16 px-4 py-24 sm:px-8 lg:flex-row lg:items-center lg:py-0">
            <div className="flex-1">
              <img src="/app-icon.png" alt="Homi" className="mb-6 h-14 w-14 rounded-2xl" />
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Your home.<br />Organized. <span className="text-[#075A39]">Always.</span></h2>
              <p className="mb-8 text-lg text-gray-500">A calmer way to remember what your home needs.</p>
              <StoreButtons />
            </div>
            <nav className="flex flex-col gap-3 text-sm text-gray-400 lg:text-right" aria-label="Footer">
              <a href="/privacy/" className="transition-colors hover:text-gray-900">Privacy</a>
              <a href="/terms/" className="transition-colors hover:text-gray-900">Terms</a>
              <a href="/licenses/" className="transition-colors hover:text-gray-900">Licenses</a>
              <a href="/support/" className="transition-colors hover:text-gray-900">Support</a>
              <a href="https://rcconstante.dev" target="_blank" rel="noreferrer" className="mt-2 transition-colors hover:text-gray-900">Developer website</a>
              <span className="mt-4">© 2026 Homi</span>
            </nav>
          </footer>
        </Slide>
      </div>
    </main>
  );
}
