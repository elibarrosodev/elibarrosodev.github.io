export function HeroSection() {
  return (
    <section className="relative flex min-h-[760px] flex-col justify-start overflow-hidden px-6 pt-40 md:px-24 md:pt-48">
      <div className="max-w-5xl">
        <p className="mb-8 font-label text-xs uppercase tracking-[0.4em] text-primary-container">
          Freelance Software Developer
        </p>

        <h2 className="mb-12 max-w-4xl font-headline text-4xl font-bold leading-tight text-outline md:text-6xl">
          Mobile &amp; Web Apps for Business Systems
        </h2>

        <p className="mb-12 max-w-xl font-body text-xl leading-relaxed text-on-surface-variant opacity-80">
          I build, improve, and maintain web and mobile applications for
          business operations, internal tools, and digital workflows.
        </p>

        <div className="flex flex-wrap items-center gap-8">
          <a
            className="group relative overflow-hidden rounded-md bg-gradient-to-br from-primary-fixed to-primary-container px-10 py-5 font-label text-sm font-bold uppercase tracking-widest text-on-primary transition-all duration-300"
            href="#work"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-500 group-hover:translate-y-0" />
          </a>

          <a
            className="border-b border-outline-variant pb-2 font-label text-sm uppercase tracking-widest text-on-surface hover:border-primary-container hover:text-primary-container"
            href="#contact"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-16 right-0 select-none opacity-10">
        <h3 className="font-headline text-[16vw] font-black leading-none tracking-tighter">
          SYSTEMS
        </h3>
      </div>
    </section>
  );
}
