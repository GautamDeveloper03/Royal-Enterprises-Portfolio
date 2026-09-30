import {
  Award,
  BadgeIndianRupee,
  Clock4,
  Headphones,
  Palette,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "We focus on quality workmanship and carefully selected materials for every project.",
  },
  {
    icon: ShieldCheck,
    title: "Experienced Professionals",
    description:
      "Practical experience helps us execute ceiling and interior work with attention to detail.",
  },
  {
    icon: Palette,
    title: "Customized Designs",
    description:
      "Solutions can be adapted to your space, requirements, lighting and design preferences.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Transparent Pricing",
    description:
      "We aim to provide clear estimates based on the project requirements and scope.",
  },
  {
    icon: Clock4,
    title: "On-Time Work",
    description:
      "Proper planning and coordination help keep the installation process organized.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "We remain available to understand requirements and assist throughout the project.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-slate-950 text-white">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Why Us
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Why Choose
              <span className="block text-blue-400">
                Royal Enterprises?
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
              We combine practical execution, modern design ideas and
              customer-focused service to create ceiling and interior
              solutions suited to each space.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-500"
            >
              Discuss Your Project
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-blue-500/40 hover:bg-blue-500/[0.06] sm:p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">
                    {reason.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}