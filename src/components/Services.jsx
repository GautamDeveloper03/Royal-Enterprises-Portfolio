import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-slate-50"
    >
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            What We Do
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Our Services
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Complete ceiling and interior solutions for homes,
            offices and commercial spaces.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} by Royal Enterprises`}
                    loading="lazy"
                    className="image-zoom aspect-[16/10] w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-slate-950/70 text-blue-300 backdrop-blur">
                    <Icon size={20} />
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-slate-950">
                      {service.title}
                    </h3>

                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
                    />
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}