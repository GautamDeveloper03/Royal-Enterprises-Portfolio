import { materials } from "../data/materials";

export default function Materials() {
  return (
    <section
      id="materials"
      className="section-padding bg-slate-50"
    >
      <div className="container-custom">
        <div className="grid items-end gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Materials
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Quality Materials for Every Project
            </h2>
          </div>

          <p className="text-sm leading-7 text-slate-600 sm:text-base md:pb-1">
            We provide ceiling and interior materials suitable for
            different project requirements. Material options can be
            discussed based on design, application and budget.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((material) => {
            const Icon = material.icon;

            return (
              <div
                key={material.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-950">
                  {material.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {material.description}
                </p>

                <div className="mt-5 h-px w-full bg-slate-100" />

                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-blue-600">
                  Available on enquiry
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}