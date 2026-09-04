'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BellRing,
  CalendarClock,
  Camera,
  ChartNoAxesCombined,
  Check,
  ChevronLeft,
  ChevronRight,
  FileText,
  Home,
  LockKeyhole,
  PackageCheck,
  ReceiptText,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import Brand from './brand';

const screens = [
  { src: '/screens/home.png', label: 'Home dashboard' },
  { src: '/screens/appliances.png', label: 'Appliance library' },
  { src: '/screens/appliance-detail.png', label: 'Appliance details' },
  { src: '/screens/calendar.png', label: 'Maintenance calendar' },
  { src: '/screens/vault.png', label: 'Warranty vault' },
  { src: '/screens/insights.png', label: 'Spending insights' },
] as const;

const featureCards = [
  {
    icon: PackageCheck,
    title: 'Every appliance, remembered',
    text: 'Keep the model, serial number, room, purchase date, price, warranty, and notes together.',
    className: 'feature-card feature-card-wide appliance-feature',
    image: '/ref.png',
  },
  {
    icon: ScanLine,
    title: 'Scan a receipt',
    text: 'Capture a receipt, review the fields Homi finds, then save the appliance and document.',
    className: 'feature-card scan-feature',
  },
  {
    icon: CalendarClock,
    title: 'Never miss maintenance',
    text: 'Schedule service, track completion, and keep a useful history for every appliance.',
    className: 'feature-card calendar-feature',
  },
  {
    icon: FileText,
    title: 'A calmer warranty vault',
    text: 'Receipts, manuals, warranties, and service files stay organized and easy to find.',
    className: 'feature-card vault-feature',
    image: '/folder.png',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'See what home care costs',
    text: 'Understand maintenance spending by year and category without a spreadsheet.',
    className: 'feature-card feature-card-wide insight-feature',
  },
] as const;

const privacyPoints = [
  {
    icon: LockKeyhole,
    title: 'Local-first by default',
    text: 'Your household records and imported documents stay in the app on your device.',
  },
  {
    icon: Sparkles,
    title: 'On-device receipt intelligence',
    text: 'Supported devices process receipt text locally, with an editable review before anything is saved.',
  },
  {
    icon: ShieldCheck,
    title: 'You stay in control',
    text: 'Edit or remove records whenever you want. Homi does not sell personal information or serve ads.',
  },
] as const;

function DeviceFrame() {
  return (
    <div className="device-stage" aria-label="Homi mobile app preview">
      <div className="hero-orbit orbit-one" />
      <div className="hero-orbit orbit-two" />
      <div className="device-frame">
        <div className="device-speaker" />
        <Image
          className="device-screen"
          src="/onboarding-home.png"
          width={624}
          height={1024}
          alt="Homi onboarding screen showing a miniature home"
          priority
        />
      </div>
      <div className="floating-note note-maintenance">
        <span className="note-icon"><Wrench size={18} /></span>
        <span><strong>Maintenance</strong><small>Due in 5 days</small></span>
      </div>
      <div className="floating-note note-warranty">
        <span className="note-icon"><ShieldCheck size={18} /></span>
        <span><strong>Warranty saved</strong><small>Stored locally</small></span>
      </div>
    </div>
  );
}

function ScreenGallery() {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const move = useCallback((direction: number) => {
    const next = Math.max(0, Math.min(screens.length - 1, active + direction));
    setActive(next);
    railRef.current?.children[next]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }, [active]);

  return (
    <div className="screen-gallery">
      <div className="gallery-rail" ref={railRef}>
        {screens.map((screen, index) => (
          <button
            className={`gallery-device${active === index ? ' active' : ''}`}
            key={screen.src}
            onClick={() => setActive(index)}
            type="button"
            aria-label={`Show ${screen.label}`}
          >
            <Image src={screen.src} width={312} height={555} alt={screen.label} />
          </button>
        ))}
      </div>
      <div className="gallery-controls">
        <button type="button" onClick={() => move(-1)} disabled={active === 0} aria-label="Previous app screen">
          <ChevronLeft size={20} />
        </button>
        <div className="gallery-dots" aria-label={`Screen ${active + 1} of ${screens.length}`}>
          {screens.map((screen, index) => (
            <button
              type="button"
              key={screen.src}
              className={active === index ? 'active' : ''}
              onClick={() => {
                setActive(index);
                railRef.current?.children[index]?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
              }}
              aria-label={`Show ${screen.label}`}
            />
          ))}
        </div>
        <button type="button" onClick={() => move(1)} disabled={active === screens.length - 1} aria-label="Next app screen">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [panel, setPanel] = useState(0);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const onScroll = () => {
      if (window.innerWidth < 1024) return;
      setPanel(Math.round(root.scrollLeft / root.clientWidth));
    };

    root.addEventListener('scroll', onScroll, { passive: true });
    return () => root.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    let destination = root.scrollLeft;
    let frame = 0;
    const animate = () => {
      const distance = destination - root.scrollLeft;
      if (Math.abs(distance) < 1) {
        root.scrollLeft = destination;
        frame = 0;
        return;
      }
      root.scrollLeft += distance * 0.12;
      frame = requestAnimationFrame(animate);
    };
    const onWheel = (event: WheelEvent) => {
      if (window.innerWidth < 1024 || Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
      event.preventDefault();
      destination = Math.max(0, Math.min(root.scrollWidth - root.clientWidth, destination + event.deltaY * 1.7));
      if (!frame) frame = requestAnimationFrame(animate);
    };

    root.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      root.removeEventListener('wheel', onWheel);
      cancelAnimationFrame(frame);
    };
  }, []);

  const goToPanel = useCallback((index: number) => {
    const root = pageRef.current;
    if (!root) return;
    const target = root.children[index] as HTMLElement | undefined;
    target?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (window.innerWidth < 1024) return;
      if (event.key === 'ArrowRight') goToPanel(Math.min(4, panel + 1));
      if (event.key === 'ArrowLeft') goToPanel(Math.max(0, panel - 1));
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [goToPanel, panel]);

  return (
    <main className="marketing-shell">
      <header className="site-header">
        <Brand />
        <nav aria-label="Primary navigation">
          <button type="button" onClick={() => goToPanel(2)}>Features</button>
          <Link href="/privacy/">Privacy</Link>
          <Link href="/support/">Support</Link>
          <button className="nav-cta" type="button" onClick={() => goToPanel(4)}>
            Get Homi <ArrowRight size={16} />
          </button>
        </nav>
      </header>

      <div className="panel-track" ref={pageRef}>
        <section className="panel hero-panel" id="home">
          <div className="hero-copy reveal">
            <div className="eyebrow"><Home size={16} /> One place for the life of your home</div>
            <h1>Your home remembers <em>everything.</em></h1>
            <p>
              Track appliances, manage warranties, scan receipts, and stay ahead of maintenance without losing the details that matter.
            </p>
            <div className="hero-actions">
              <button className="button button-primary" type="button" onClick={() => goToPanel(4)}>
                Join early access <ArrowRight size={18} />
              </button>
              <button className="button button-secondary" type="button" onClick={() => goToPanel(1)}>
                See the app
              </button>
            </div>
            <div className="hero-proof">
              <span><Check size={15} /> Local-first</span>
              <span><Check size={15} /> No ads</span>
              <span><Check size={15} /> iOS and Android</span>
            </div>
          </div>
          <DeviceFrame />
        </section>

        <section className="panel screens-panel" id="screens">
          <div className="section-heading centered">
            <span className="section-kicker">A complete home record</span>
            <h2>Everything has a place.</h2>
            <p>Move from today&apos;s priorities to the exact receipt, warranty, or service record in a few taps.</p>
          </div>
          <ScreenGallery />
        </section>

        <section className="panel features-panel" id="features">
          <div className="features-wrap">
            <div className="section-heading">
              <span className="section-kicker">Built for real home ownership</span>
              <h2>Less searching. More knowing.</h2>
              <p>Homi turns scattered household details into a useful, living record.</p>
            </div>
            <div className="feature-grid">
              {featureCards.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article className={feature.className} key={feature.title}>
                    <span className="feature-icon"><Icon size={21} /></span>
                    <div>
                      <h3>{feature.title}</h3>
                      <p>{feature.text}</p>
                    </div>
                    {feature.image ? (
                      <Image className="feature-image" src={feature.image} width={240} height={240} alt="" />
                    ) : null}
                    {feature.title === 'Scan a receipt' ? (
                      <div className="scan-corners" aria-hidden="true"><Camera size={38} /><span>Ready to scan</span></div>
                    ) : null}
                    {feature.title === 'Never miss maintenance' ? (
                      <div className="mini-schedule" aria-hidden="true">
                        <span><BellRing size={16} /> Air conditioner filter</span><strong>May 25</strong>
                      </div>
                    ) : null}
                    {feature.title === 'See what home care costs' ? (
                      <div className="mini-chart" aria-hidden="true">
                        <span style={{ height: '32%' }} /><span style={{ height: '54%' }} /><span style={{ height: '42%' }} />
                        <span style={{ height: '78%' }} /><span style={{ height: '60%' }} /><span style={{ height: '92%' }} />
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="panel privacy-panel" id="privacy">
          <div className="privacy-art">
            <div className="privacy-glow" />
            <Image src="/home-house.png" width={700} height={657} alt="A miniature green-roofed home" />
            <div className="privacy-badge"><ShieldCheck size={24} /><span><strong>Private by design</strong><small>Your home stays yours</small></span></div>
          </div>
          <div className="privacy-copy">
            <span className="section-kicker light">Designed around trust</span>
            <h2>Home data belongs at home.</h2>
            <p className="privacy-intro">Homi is designed to be useful without turning your household into a profile.</p>
            <div className="privacy-list">
              {privacyPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <article key={point.title}>
                    <span><Icon size={20} /></span>
                    <div><h3>{point.title}</h3><p>{point.text}</p></div>
                  </article>
                );
              })}
            </div>
            <Link className="text-link light" href="/privacy/">Read the privacy policy <ArrowRight size={17} /></Link>
          </div>
        </section>

        <section className="panel waitlist-panel" id="waitlist">
          <div className="waitlist-card">
            <div className="waitlist-copy">
              <Image src="/app-icon.png" width={70} height={70} alt="Homi app icon" />
              <span className="section-kicker">Make home care feel lighter</span>
              <h2>Your home has a lot to remember. Let Homi help.</h2>
              <p>Join the early access list for launch updates on iOS and Android.</p>
            </div>
            <form
              className="waitlist-form"
              name="homi-waitlist"
              method="POST"
              action="/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="homi-waitlist" />
              <p className="hidden-field">
                <label>Do not fill this out: <input name="bot-field" /></label>
              </p>
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
              <label htmlFor="platform">Your phone</label>
              <select id="platform" name="platform" defaultValue="">
                <option value="" disabled>Select a platform</option>
                <option value="ios">iPhone</option>
                <option value="android">Android</option>
                <option value="both">Both</option>
              </select>
              <button className="button button-primary" type="submit">Join early access <ArrowRight size={18} /></button>
              <small>No spam. Only meaningful Homi updates.</small>
            </form>
          </div>
          <footer className="site-footer">
            <Brand compact />
            <div className="footer-links">
              <Link href="/privacy/">Privacy</Link>
              <Link href="/terms/">Terms</Link>
              <Link href="/support/">Support</Link>
              <Link href="/licenses/">Licenses</Link>
            </div>
            <p>(c) 2026 Homi. All rights reserved.</p>
          </footer>
        </section>
      </div>

      <div className="panel-pagination" aria-label="Page sections">
        {['Home', 'App screens', 'Features', 'Privacy', 'Early access'].map((label, index) => (
          <button
            className={panel === index ? 'active' : ''}
            key={label}
            onClick={() => goToPanel(index)}
            type="button"
            aria-label={`Go to ${label}`}
            aria-current={panel === index ? 'true' : undefined}
          />
        ))}
      </div>
    </main>
  );
}
