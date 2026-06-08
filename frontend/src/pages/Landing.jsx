import React, { useState, useMemo } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Leaf,
  Sparkles,
  Truck,
  PartyPopper,
  HandHelping,
  ArrowRight,
  Check,
} from "lucide-react";
import { translations, CONTACT } from "../lib/translations";

const IMAGES = {
  garden:
    "https://images.pexels.com/photos/5163420/pexels-photo-5163420.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  moving:
    "https://images.pexels.com/photos/7464232/pexels-photo-7464232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  cleaning:
    "https://images.pexels.com/photos/36730112/pexels-photo-36730112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

const SectionEyebrow = ({ children }) => (
  <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-blue-700">
    {children}
  </span>
);

const Bullet = ({ children }) => (
  <li className="flex items-start gap-3 text-slate-700">
    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
      <Check className="h-3 w-3" strokeWidth={3} />
    </span>
    <span className="text-base leading-relaxed">{children}</span>
  </li>
);

const ServiceCard = ({
  icon: Icon,
  title,
  items,
  image,
  span,
  testId,
}) => (
  <article
    data-testid={testId}
    className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 ${span}`}
  >
    {image && (
      <div className="mb-6 -mx-8 -mt-8 md:-mx-10 md:-mt-10 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-56 md:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    )}
    <div className="flex items-center gap-3 mb-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-900">
        {title}
      </h3>
    </div>
    <ul className="space-y-2.5 mt-4">
      {items.map((it) => (
        <Bullet key={it}>{it}</Bullet>
      ))}
    </ul>
  </article>
);

export default function Landing() {
  const [lang, setLang] = useState("de");
  const t = useMemo(() => translations[lang], [lang]);

  const toggleLang = () => setLang((l) => (l === "de" ? "en" : "de"));

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      {/* Header */}
      <header
        data-testid="site-header"
        className="sticky top-0 z-50 backdrop-blur-xl bg-slate-50/80 border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <a
            href="#top"
            data-testid="brand-logo"
            className="flex items-center gap-2"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-900 text-white">
              <HandHelping className="h-5 w-5" />
            </span>
            <span className="font-display text-base sm:text-lg font-semibold tracking-tight">
              M. Jouban
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a
              href="#services"
              data-testid="nav-services"
              className="hover:text-slate-900 transition-colors"
            >
              {t.nav.services}
            </a>
            <a
              href="#about"
              data-testid="nav-about"
              className="hover:text-slate-900 transition-colors"
            >
              {t.nav.about}
            </a>
            <a
              href="#contact"
              data-testid="nav-contact"
              className="hover:text-slate-900 transition-colors"
            >
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleLang}
              data-testid="language-toggle"
              aria-label="Toggle language"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 transition-colors"
            >
              <Globe className="h-3.5 w-3.5" />
              <span data-testid="language-current">
                {lang === "de" ? "DE" : "EN"}
              </span>
              <span className="text-slate-400">/</span>
              <span className="text-slate-400">
                {lang === "de" ? "EN" : "DE"}
              </span>
            </button>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              data-testid="header-call-button"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {t.nav.callNow}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        data-testid="hero-section"
        className="relative hero-grain"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 fade-up">
              <SectionEyebrow>{t.hero.eyebrow}</SectionEyebrow>
              <h1
                data-testid="hero-title"
                className="font-display mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-slate-900"
              >
                {t.hero.title}
              </h1>
              <p
                data-testid="hero-subtitle"
                className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600"
              >
                {t.hero.subtitle}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${CONTACT.phoneTel}`}
                  data-testid="hero-call-button"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-6 py-3.5 text-sm sm:text-base font-medium text-white shadow-sm hover:bg-blue-800 hover:scale-[1.02] transition-all duration-300"
                >
                  <Phone className="h-4 w-4" />
                  {t.hero.ctaPrimary}
                </a>
                <a
                  href="#services"
                  data-testid="hero-services-button"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm sm:text-base font-medium text-slate-800 hover:border-blue-300 hover:text-blue-800 transition-all duration-300"
                >
                  {t.hero.ctaSecondary}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  {t.hero.trustBadge}
                </span>
                <a
                  href={`mailto:${CONTACT.email}`}
                  data-testid="hero-email-link"
                  className="inline-flex items-center gap-1.5 hover:text-blue-800 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {CONTACT.email}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-blue-100/40 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
                  <img
                    src={IMAGES.garden}
                    alt="Gartenarbeit"
                    className="w-full h-[480px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden sm:block">
                  <div className="rounded-2xl bg-white border border-slate-200 shadow-lg px-5 py-4 max-w-xs">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-900 text-white">
                        <Phone className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-slate-500">
                          {t.contact.phoneLabel}
                        </p>
                        <p className="font-display text-base font-semibold text-slate-900">
                          {CONTACT.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        data-testid="services-section"
        className="py-24 sm:py-32 border-t border-slate-200 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionEyebrow>{t.services.eyebrow}</SectionEyebrow>
            <h2 className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
              {t.services.title}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
            <ServiceCard
              testId="service-garden"
              icon={Leaf}
              title={t.services.garden.title}
              items={t.services.garden.items}
              image={IMAGES.garden}
              span="lg:col-span-3"
            />
            <ServiceCard
              testId="service-household"
              icon={Sparkles}
              title={t.services.household.title}
              items={t.services.household.items}
              image={IMAGES.cleaning}
              span="lg:col-span-3"
            />
            <ServiceCard
              testId="service-moving"
              icon={Truck}
              title={t.services.moving.title}
              items={t.services.moving.items}
              image={null}
              span="lg:col-span-2"
            />
            <ServiceCard
              testId="service-events"
              icon={PartyPopper}
              title={t.services.events.title}
              items={t.services.events.items}
              image={null}
              span="lg:col-span-2"
            />
            <ServiceCard
              testId="service-daily"
              icon={HandHelping}
              title={t.services.daily.title}
              items={t.services.daily.items}
              image={null}
              span="lg:col-span-2"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        data-testid="about-section"
        className="py-24 sm:py-32 border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-md">
              <img
                src={IMAGES.moving}
                alt="Transporthilfe"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <SectionEyebrow>{t.about.eyebrow}</SectionEyebrow>
            <h2 className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
              {t.about.title}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {t.about.body}
            </p>
            <ul className="mt-8 space-y-3 max-w-xl">
              {t.about.points.map((p) => (
                <Bullet key={p}>{p}</Bullet>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        data-testid="contact-section"
        className="py-24 sm:py-32"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 text-white p-10 sm:p-14 lg:p-20 overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative max-w-3xl">
              <SectionEyebrow>
                <span className="text-blue-300">{t.contact.eyebrow}</span>
              </SectionEyebrow>
              <h2 className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                {t.contact.title}
              </h2>
              <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
                {t.contact.subtitle}
              </p>
            </div>

            <div className="relative mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href={`tel:${CONTACT.phoneTel}`}
                data-testid="contact-phone-link"
                className="group flex items-start gap-4 rounded-2xl border border-slate-700 bg-slate-800/60 p-6 hover:border-blue-400 hover:bg-slate-800 transition-all duration-300"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-900 text-white">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400">
                    {t.contact.phoneLabel}
                  </p>
                  <p className="font-display text-lg sm:text-xl font-semibold mt-1">
                    {CONTACT.phone}
                  </p>
                  <p className="mt-2 text-sm text-blue-300 group-hover:underline">
                    {t.nav.callNow} →
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                data-testid="contact-email-link"
                className="group flex items-start gap-4 rounded-2xl border border-slate-700 bg-slate-800/60 p-6 hover:border-blue-400 hover:bg-slate-800 transition-all duration-300"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-900 text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400">
                    {t.contact.emailLabel}
                  </p>
                  <p className="font-display text-lg font-semibold mt-1 break-all">
                    {CONTACT.email}
                  </p>
                  <p className="mt-2 text-sm text-blue-300 group-hover:underline">
                    {lang === "de" ? "E-Mail senden" : "Send email"} →
                  </p>
                </div>
              </a>

              <div
                data-testid="contact-address-block"
                className="flex items-start gap-4 rounded-2xl border border-slate-700 bg-slate-800/60 p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-900 text-white">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400">
                    {t.contact.addressLabel}
                  </p>
                  <p className="font-display text-lg font-semibold mt-1">
                    {CONTACT.address}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    {CONTACT.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        data-testid="site-footer"
        className="border-t border-slate-200 py-10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} {CONTACT.name}. {t.footer.rights}
          </p>
          <p className="font-display tracking-tight">{t.footer.tagline}</p>
        </div>
      </footer>
    </div>
  );
}
