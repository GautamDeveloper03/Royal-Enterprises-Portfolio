import {
  Award,
  BadgeCheck,
  Clock3,
  IndianRupee,
  ShieldCheck,
} from "lucide-react";
import { business } from "../data/business";
const highlights = [
  {
    icon: BadgeCheck,
    title: "Quality Workmanship",
  },
  {
    icon: Award,
    title: "Modern Designs",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Service",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
  },
  {
    icon: Clock3,
    title: "Timely Execution",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-slate-100">
              <img
                src="../src/assets/d10.png"
                alt="Modern interior ceiling design"
                loading="lazy"
                className="image-zoom aspect-[4/3] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 right-4 max-w-[220px] rounded-2xl border border-slate-200 bg-white p-5 shadow-xl sm:right-8">
              <p className="text-3xl font-black text-blue-600">
                10+
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-700">
                Years of experience
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-4">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              About Us
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              About Royal Enterprises
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600 lg:text-lg">
              Royal Enterprises provides false ceiling, grid ceiling,
              interior works and ceiling/interior materials in Chennai.
              We focus on delivering practical, attractive and
              professionally executed solutions for residential,
              commercial and office spaces.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              From initial consultation to installation and final
              inspection, our approach is centered around understanding
              customer requirements and delivering quality workmanship.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 p-3.5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                      <Icon size={18} />
                    </div>

                    <span className="text-sm font-semibold text-slate-700">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 md:grid-cols-4">
          {business.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`p-6 text-center sm:p-8 ${
                index !== business.stats.length - 1
                  ? "border-b border-slate-200 md:border-b-0 md:border-r"
                  : ""
              } ${
                index === 0 || index === 2
                  ? "max-md:border-b"
                  : ""
              }`}
            >
              <p className="text-3xl font-black text-slate-950 sm:text-4xl">
                {stat.value}
              </p>

              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}