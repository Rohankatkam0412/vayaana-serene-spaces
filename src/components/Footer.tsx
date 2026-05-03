import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <span className="font-serif tracking-[0.28em] text-base text-primary-foreground/90">VAYAANA</span>
              <span className="font-sans tracking-[0.4em] text-[10px] text-primary-foreground/50 uppercase">INTERIORS</span>
            </div>
            <p className="font-sans text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              We design spaces for how they will be lived in — not just how they look. Calm, natural, timeless.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://instagram.com/vayaana_interiors"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/50 hover:text-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-5">
            <h4 className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary-foreground/40">Navigate</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Portfolio", href: "/portfolio" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-sans text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <h4 className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary-foreground/40">Get in Touch</h4>
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/918050688548"
                className="flex items-center gap-3 text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
              >
                <Phone size={14} className="flex-shrink-0" />
                <span className="font-sans text-sm">+91 8050688548</span>
              </a>
              <a
                href="mailto:hello@vayaana.in"
                className="flex items-center gap-3 text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
              >
                <Mail size={14} className="flex-shrink-0" />
                <span className="font-sans text-sm">hello@vayaana.in</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/60">
                <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                <span className="font-sans text-sm">Hyderabad, Telangana</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Vayaana Interiors. All rights reserved.
          </p>
          <p className="font-sans text-xs text-primary-foreground/20 italic font-serif">
            Designed for Dream Living.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
