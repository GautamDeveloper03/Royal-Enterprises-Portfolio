import {
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { business } from "../data/business";

export default function CTA() {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-700 px-5 py-14 text-white shadow-2xl sm:px-10 lg:px-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              Start Your Project
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Planning a New Ceiling or Interior Project?
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100/80 sm:text-base lg:text-lg">
              Contact Royal Enterprises today and discuss your
              requirements with us.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a
              href={`tel:${business.phone}`}
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-blue-50"
            >
              <Phone size={17} />
              Call {business.phone}
            </a>

            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20"
            >
              <MessageCircle size={17} />
              WhatsApp Us
            </a>

            <a
              href="#contact"
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-400"
            >
              Request a Quote
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}