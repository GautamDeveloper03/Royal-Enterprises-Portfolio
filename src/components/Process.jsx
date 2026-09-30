const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Understand the customer's requirements, preferences and project expectations.",
  },
  {
    number: "02",
    title: "Site Visit",
    description:
      "Inspect the location, dimensions and existing conditions before planning the work.",
  },
  {
    number: "03",
    title: "Design & Estimate",
    description:
      "Recommend suitable designs and provide an estimate based on the project scope.",
  },
  {
    number: "04",
    title: "Installation",
    description:
      "Execute the approved ceiling or interior work with professional attention to detail.",
  },
  {
    number: "05",
    title: "Final Inspection",
    description:
      "Review the completed work and ensure the project meets customer expectations.",
  },
];

export default function Process() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Our Process
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            How We Work
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            A straightforward process from your first enquiry to the final
            inspection.
          </p>
        </div>

        <div className="relative mt-14">
          {/* Center vertical line */}
          <div className="absolute left-6 top-5 hidden h-[calc(100%-40px)] w-px bg-blue-100 md:left-1/2 md:block" />

          <div className="space-y-6 md:space-y-0">
            {steps.map((step, index) => ( 
              <div
                key={step.number}
                className={`relative flex flex-col gap-5 md:flex-row md:items-center md:gap-10 ${
                  index > 0 ? "md:mt-10" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0
                      ? "md:order-1 md:text-right"
                      : "md:order-3 md:text-left"
                  }`}
                >
                  <div
                    className={`rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 ${
                      index % 2 === 0
                        ? "md:ml-auto"
                        : "md:mr-auto"
                    } max-w-xl`}
                  >
                    <h3 className="text-lg font-bold text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Number */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-xs font-black text-white shadow-lg md:order-2">
                  {step.number}
                </div>

                {/* Empty Spacer */}
                <div
                  className={`hidden flex-1 md:block ${
                    index % 2 === 0
                      ? "md:order-3"
                      : "md:order-1"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}