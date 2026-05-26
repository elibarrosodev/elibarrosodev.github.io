const timeline = [
  {
    year: "PRESENT",
    label: "Freelance & Client Work",
    title: "Software Developer",
    description:
      "Building and delivering custom web and mobile solutions for real clients — from ground-up system builds to ongoing maintenance, feature improvements, and long-term application support.",
    isCurrent: true
  },
  {
    year: "2025",
    label: "Independent Project Development",
    title: "Full Stack Developer",
    description:
      "Sharpening expertise through hands-on project development — building full-featured web and mobile applications with a focus on clean architecture, usability, and production-ready code."
  },
  {
    year: "2024",
    label: "Corporate Technical Development",
    title: "App Developer",
    description:
      "Maintained and evolved business-critical systems, led vendor system transitions, and collaborated with cross-functional teams to implement features and keep operations stable and efficient."
  },
  {
    year: "2022-2024",
    label: "Technical Foundation",
    title: "Android Development Experience",
    description:
      "Laid the groundwork through professional Android development — building and sustaining mobile applications, shipping reliable releases, and growing expertise in structured, team-based development workflows."
  }
];

export function TimelineSection() {
  return (
    <section className="overflow-hidden px-6 py-32 md:px-24" id="studio">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <h4 className="mb-8 font-label text-xs uppercase tracking-[0.4em] text-primary-container">
            The Journey
          </h4>
          <h2 className="mb-12 font-headline text-6xl font-black tracking-tighter">
            Professional Timeline
          </h2>
        </div>
        <div className="space-y-12 md:col-span-8">
          {timeline.map((item, index) => (
            <div key={item.title} className="group flex gap-12">
              <div className="w-24 flex-none">
                <p
                  className={`mt-8 origin-left translate-x-4 rotate-90 font-label text-sm font-bold tracking-widest ${item.isCurrent ? "text-primary-container" : "text-on-surface-variant/40"}`}
                >
                  {item.year}
                </p>
              </div>
              <div
                className={`flex-grow pb-12 ${index < timeline.length - 1 ? "border-b border-outline-variant/20" : ""}`}
              >
                <h5 className="mb-2 font-label text-[10px] uppercase tracking-widest text-outline">
                  {item.label}
                </h5>
                <h3 className="mb-4 font-headline text-3xl font-bold transition-colors group-hover:text-primary-container">
                  {item.title}
                </h3>
                <p className="font-body leading-relaxed text-on-surface-variant">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
