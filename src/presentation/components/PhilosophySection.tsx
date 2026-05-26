const focusItems = [
  {
    id: "business-systems",
    number: "Focus 01",
    title: "Business Systems",
    description:
      "Designing and building web and mobile apps that power real business workflows — from inventory and sales to daily operations and records."
  },
  {
    id: "professional-support",
    number: "Focus 02",
    title: "Professional Support",
    description:
      "Maintaining, improving, and scaling existing applications so your team can stay focused on what matters, not on what's broken."
  }
];

export function PhilosophySection() {
  return (
    <section className="border-y border-outline-variant/10 bg-surface-container-lowest/60 px-6 py-32 backdrop-blur-md md:px-24">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <h4 className="mb-8 font-label text-xs uppercase tracking-[0.3em] text-primary-container">
            The Philosophy
          </h4>
          <h3 className="mb-8 font-headline text-4xl font-bold leading-snug text-on-surface">
            Building Practical Systems for Real Work.
          </h3>
        </div>

        <div className="space-y-8 md:col-span-7">
          <p className="font-body text-lg leading-loose text-on-surface-variant">
            I design and build{" "}
            <span className="font-semibold text-on-surface">
              web and mobile applications
            </span>{" "}
            that solve real operational challenges for businesses and
            professional teams — turning complex workflows into clean, reliable,
            and intuitive digital tools.
          </p>

          <div className="grid grid-cols-1 gap-8 pt-8 sm:grid-cols-2">
            {focusItems.map((item) => (
              <div
                key={item.id}
                className="group border border-outline-variant/20 border-l-2 border-l-outline-variant/60 bg-surface/50 p-8 backdrop-blur-sm transition-all duration-500 ease-out hover:translate-y-[-4px] hover:border-l-4 hover:border-l-primary-container hover:border-outline-variant/30 hover:bg-surface-container-low hover:shadow-[0_10px_40px_rgba(233,196,0,0.08)]"
              >
                <p className="mb-4 font-label text-[10px] uppercase tracking-widest text-on-surface-variant transition-colors duration-500 group-hover:text-primary-container">
                  {item.number}
                </p>
                <h5 className="mb-4 font-headline text-xl font-bold text-on-surface transition-colors duration-500 group-hover:text-primary-container">
                  {item.title}
                </h5>
                <p className="font-body text-sm leading-relaxed text-on-surface-variant opacity-75">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
