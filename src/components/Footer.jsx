import {
  Phone,
  MessageCircle,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { business } from "../data/business";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Projects", "#projects"],
  ["Materials", "#materials"],
  ["Contact", "#contact"],
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="container-custom py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr]">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg bg-blue-950">
                <img
                  src="/src/assets/royal-banner.jpeg"
                  alt="Royal Enterprises logo"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <p className="font-black tracking-[0.15em]">
                  ROYAL
                </p>

                <p className="text-[10px] font-semibold tracking-[0.2em] text-blue-400">
                  ENTERPRISES
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              False Ceiling | Grid Ceiling | Interior Works |
              Materials Sales
            </p>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
              Professional ceiling and interior solutions for
              residential, office and commercial spaces in Chennai.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              <a
                href={`tel:${business.phone}`}
                className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-white"
              >
                <Phone size={17} className="text-blue-400" />
                {business.phone}
              </a>

              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-white"
              >
                <MessageCircle
                  size={17}
                  className="text-blue-400"
                />
                WhatsApp
              </a>

              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-sm leading-6 text-slate-400 transition hover:text-white"
              >
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-blue-400"
                />

                <span>
                  Gerugambakkam, Chennai
                  <br />
                  Tamil Nadu - 600122
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Royal Enterprises. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-1 text-slate-400 transition hover:text-white"
          >
            Back to top
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}