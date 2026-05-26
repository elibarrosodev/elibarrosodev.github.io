import { siteContent } from '@/config/siteContent';

const navItems = [
  { label: 'Work', href: '#work', active: true },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Studio', href: '#studio' },
];

export function Navigation() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/10 bg-[#080808]/70 shadow-[0_10px_40px_rgba(233,196,0,0.05)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-6 py-5 md:px-12 md:py-6">
        <div className="font-headline text-lg font-black tracking-widest text-primary-container md:text-xl">{siteContent.brand}</div>
        <div className="hidden gap-12 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              className={`font-headline text-xs font-bold uppercase tracking-tighter transition-all duration-500 ease-out ${
                item.active
                  ? 'border-b-2 border-primary-container pb-1 text-primary-fixed'
                  : 'text-on-surface opacity-60 hover:text-primary-container hover:opacity-100'
              }`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <a
            className="whitespace-nowrap rounded-md bg-primary-container px-7 py-3 font-label text-[10px] font-bold uppercase tracking-widest text-on-primary-container transition-colors hover:bg-primary-fixed"
            href="#contact"
          >
            Send Message
          </a>
        </div>
      </div>
    </nav>
  );
}
