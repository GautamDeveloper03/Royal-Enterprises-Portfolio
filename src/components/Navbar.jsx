import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import { business } from "../data/business";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Materials", href: "#materials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="container-custom">
          <div className="flex h-18 items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={closeMenu}
              className="flex min-w-0 items-center gap-3"
              aria-label="Royal Enterprises home"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-blue-400/30 bg-blue-950">
                <img
                  src="/src/assets/royal-banner.jpeg"
                  alt="Royal Enterprises logo"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-black tracking-[0.18em] text-white sm:text-base">
                  ROYAL
                </p>

                <p className="truncate text-[10px] font-medium tracking-[0.2em] text-blue-400 sm:text-xs">
                  ENTERPRISES
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-5 lg:flex xl:gap-7">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}

              <a
                href={`tel:${business.phone}`}
                className="group flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-500"
              >
                Get a Quote
                <ArrowUpRight
                  size={16}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            {/* Mobile Button */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-white transition hover:bg-white/10 lg:hidden"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="border-t border-white/10 py-4 lg:hidden">
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className="rounded-lg px-4 py-3.5 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href={`tel:${business.phone}`}
                  onClick={closeMenu}
                  className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-bold text-white"
                >
                  <Phone size={17} />
                  Get a Quote
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}