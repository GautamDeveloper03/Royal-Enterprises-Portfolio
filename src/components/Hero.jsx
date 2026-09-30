import {
  ArrowRight,
  Phone,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { business } from "../data/business";
export default function Hero() {
  return (
    <section
      id="home"
      className="hero-grid relative overflow-hidden bg-slate-950 pt-24 text-white sm:pt-28 lg:pt-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-700/20 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-indigo-700/20 blur-3xl" />

      <div className="container-custom relative">
        <div className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:py-24 xl:gap-20">
          {/* Text */}
          <div className="reveal max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Ceiling & Interior Specialists
            </div>

            <h1 className="text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              ROYAL
              <span className="block bg-gradient-to-r from-blue-400 via-indigo-300 to-white bg-clip-text text-transparent">
                ENTERPRISES
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base font-medium leading-7 text-slate-300 sm:text-lg lg:text-xl">
              {business.description}
            </p>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
              {business.tagline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-950/40 transition hover:bg-blue-500"
              >
                Get a Free Quote
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href={`tel:${business.phone}`}
                className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <Phone size={17} />
                Call Now
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-400">
              <a
                href={`tel:${business.phone}`}
                className="font-semibold text-white transition hover:text-blue-400"
              >
                {business.phone}
              </a>

              <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />

              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-blue-300"
              >
                <MessageCircle size={16} />
                WhatsApp Enquiry
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                "Professional Workmanship",
                "Quality Materials",
                "Customer Focus",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-medium text-slate-300"
                >
                  <CheckCircle2
                    size={16}
                    className="shrink-0 text-blue-400"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative reveal lg:justify-self-end">
            <div className="absolute -inset-3 rounded-[2rem] bg-blue-600/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/50">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              <img
                src="../src/assets/design.png"
                alt="Royal Enterprises false ceiling and interior work"
                className="image-zoom aspect-[4/3] w-full object-cover sm:aspect-[16/11] lg:aspect-[4/3]"
              />

              <div className="absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Royal Enterprises
                </p>

                <p className="mt-2 max-w-sm text-lg font-bold text-white sm:text-xl">
                  Premium ceiling solutions for modern spaces.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-18 z-30 rounded-xl border border-white/10 bg-slate-900/95 px-4 py-3 shadow-xl backdrop-blur sm:px-5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                Located in
              </p>
              <p className="mt-1 text-sm font-bold text-white">
                Gerugambakkam, Chennai
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}