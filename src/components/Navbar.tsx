import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const VayaanaLogo = () => (
  <Link to="/" className="flex flex-col items-center gap-0.5 group">
    {/* Leaf branch SVG */}
    <svg width="28" height="16" viewBox="0 0 56 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold transition-transform duration-500 group-hover:scale-110">
      <path d="M28 24 C28 24 10 18 6 8 C14 10 22 16 28 24Z" fill="hsl(38 52% 58%)" opacity="0.9"/>
      <path d="M28 24 C28 24 46 18 50 8 C42 10 34 16 28 24Z" fill="hsl(38 52% 58%)" opacity="0.9"/>
      <path d="M28 24 C28 24 20 12 22 2 C26 8 28 16 28 24Z" fill="hsl(38 52% 58%)" opacity="0.7"/>
      <path d="M28 24 C28 24 36 12 34 2 C30 8 28 16 28 24Z" fill="hsl(38 52% 58%)" opacity="0.7"/>
      <line x1="28" y1="26" x2="28" y2="6" stroke="hsl(38 52% 58%)" strokeWidth="1.2" opacity="0.6"/>
    </svg>
    <span className="font-serif tracking-[0.25em] text-sm font-medium text-foreground leading-none">VAYAANA</span>
    <span className="font-sans tracking-[0.35em] text-[9px] text-muted-foreground uppercase leading-none font-light">INTERIORS</span>
  </Link>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm border-b border-border" : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1320px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Desktop nav left */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Center logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <VayaanaLogo />
          </div>

          {/* Desktop nav right */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(2).map((link) => (
              link.label === "Contact" ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-sans text-xs tracking-[0.15em] uppercase border border-primary/50 px-5 py-2.5 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile logo + hamburger */}
          <div className="md:hidden flex items-center justify-between w-full">
            <VayaanaLogo />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-serif text-3xl transition-colors duration-300 ${
                location.pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 font-sans text-xs tracking-[0.2em] uppercase border border-primary px-8 py-3 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Book a Consultation
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
