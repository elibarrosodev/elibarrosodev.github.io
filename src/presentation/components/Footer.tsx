import { siteContent } from '@/config/siteContent';

export function Footer() {
  return (
    <footer className="w-full border-t border-[#4D4732]/15 bg-[#0E0E0E]/80 px-6 py-16 backdrop-blur-md md:px-12">
      <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row">
        <p className="font-label text-[10px] uppercase tracking-[0.2em] text-[#E5E2E1]/40">© 2026 ELI BARROSO. BUILT WITH CARE.</p>
        <div className="flex gap-8">
          <a className="font-label text-[10px] uppercase tracking-[0.2em] text-[#E5E2E1]/40 transition-all duration-700 hover:text-[#FFE16D] hover:tracking-[0.3em]" href={siteContent.linkedInUrl}>LinkedIn</a>
          <a className="font-label text-[10px] uppercase tracking-[0.2em] text-[#E5E2E1]/40 transition-all duration-700 hover:text-[#FFE16D] hover:tracking-[0.3em]" href={siteContent.githubUrl}>GitHub</a>
          <a className="font-label text-[10px] uppercase tracking-[0.2em] text-[#E5E2E1]/40 transition-all duration-700 hover:text-[#FFE16D] hover:tracking-[0.3em]" href="#work">Projects</a>
        </div>
      </div>
    </footer>
  );
}
