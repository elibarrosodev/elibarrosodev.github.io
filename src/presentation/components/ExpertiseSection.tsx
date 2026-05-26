import { MaterialIcon } from "./MaterialIcon";

const skillGroups = [
  {
    icon: "smartphone",
    title: "Mobile Apps",
    skills: ["Android (Java/Kotlin)", "React Native", "Expo", "Android SDK"]
  },
  {
    icon: "language",
    title: "Web Systems",
    skills: ["Next.js", "React", "Tailwind CSS", "Web Development"]
  },
  {
    icon: "terminal",
    title: "Backend & Ops",
    skills: [
      "Firebase",
      "REST APIs",
      "Database Development",
      "System Transitions",
      "Application Maintenance",
      "Git"
    ]
  }
];

const coreDescription =
  "I work across the full development lifecycle — from architecting and building new systems to stepping into existing ones and making them better. My stack spans Android, web, and mobile, with a focus on clean code, reliable performance, and solutions that hold up under real business use.";

export function ExpertiseSection() {
  return (
    <section
      className="border-y border-outline-variant/10 bg-surface-container-lowest/60 px-6 py-32 backdrop-blur-md md:px-24"
      id="expertise"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <h4 className="mb-4 font-label text-xs uppercase tracking-[0.4em] text-primary-container">
            Tech Stack
          </h4>
          <h2 className="mb-6 font-headline text-5xl font-black tracking-tighter">
            The Architectural Core
          </h2>
          <p className="mx-auto max-w-2xl font-body text-base leading-relaxed text-on-surface-variant">
            {coreDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="flex h-full flex-col border border-outline-variant/20 bg-surface/80 p-12 shadow-[0_10px_40px_rgba(233,196,0,0.02)] backdrop-blur-sm"
            >
              <MaterialIcon
                name={group.icon}
                className="mb-8 text-4xl text-primary-container"
              />
              <h3 className="mb-6 font-headline text-2xl font-bold">
                {group.title}
              </h3>
              <div className="mt-auto flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-secondary-container px-3 py-1 font-label text-[10px] uppercase tracking-widest text-on-secondary-container"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
