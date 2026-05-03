import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LogoLockup from "./LogoLockup";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const VayaanaLogo = () => (
  <Link to="/" className="block group" aria-label="VAYAANA Interiors home">
    <LogoLockup className="h-11 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
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

          {/* Center logo — desktop only */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
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
