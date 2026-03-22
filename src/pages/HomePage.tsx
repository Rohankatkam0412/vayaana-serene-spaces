import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-living-room.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { useEffect, useRef } from "react";

// Simple inline reveal hook for this page
const useRevealSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const featuredProjects = [
  {
    id: "serene-living",
    title: "The Serene Living",
    location: "Hyderabad",
    type: "Residential Interiors",
    image: project1,
  },
  {
    id: "ivory-kitchen",
    title: "Ivory & Walnut Kitchen",
    location: "Hyderabad",
    type: "Modular Kitchen",
    image: project2,
  },
  {
    id: "walnut-wardrobe",
    title: "The Walnut Wardrobe",
    location: "Hyderabad",
    type: "Custom Wardrobe",
    image: project3,
  },
];

const testimonials = [
  {
    quote: "VAYAANA didn't just design our home — they understood how we live. Every corner feels intentional.",
    name: "Priya & Vikram Sharma",
    detail: "3BHK Residential, Jubilee Hills",
  },
  {
    quote: "The kitchen is the heart of our home now. The attention to detail and quality of execution was exceptional.",
    name: "Ananya Reddy",
    detail: "Modular Kitchen, Banjara Hills",
  },
  {
    quote: "Calm, natural, timeless — exactly what they promised. We're still discovering new things to love.",
    name: "Rohan Mehta",
    detail: "Turnkey Apartment, Gachibowli",
  },
];

const HomePage = () => {
  useRevealSection();

  return (
    <main className="overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Serene living room by VAYAANA Interiors"
          className="absolute inset-0 w-full h-full object-cover animate-hero-reveal"
        />
        {/* Subtle overlay: solid panel behind text, not a scrim over the whole image */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg mx-auto">
          <div className="bg-background/85 backdrop-blur-[2px] px-10 py-10 flex flex-col items-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {/* Leaf mark */}
            <svg width="36" height="20" viewBox="0 0 56 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28 24 C28 24 10 18 6 8 C14 10 22 16 28 24Z" fill="hsl(38 52% 58%)" opacity="0.9"/>
              <path d="M28 24 C28 24 46 18 50 8 C42 10 34 16 28 24Z" fill="hsl(38 52% 58%)" opacity="0.9"/>
              <path d="M28 24 C28 24 20 12 22 2 C26 8 28 16 28 24Z" fill="hsl(38 52% 58%)" opacity="0.7"/>
              <path d="M28 24 C28 24 36 12 34 2 C30 8 28 16 28 24Z" fill="hsl(38 52% 58%)" opacity="0.7"/>
              <line x1="28" y1="26" x2="28" y2="6" stroke="hsl(38 52% 58%)" strokeWidth="1.2" opacity="0.6"/>
            </svg>
            <h1 className="font-serif text-4xl md:text-5xl tracking-[0.18em] text-foreground leading-none">VAYAANA</h1>
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-muted-foreground">INTERIORS</p>
            <div className="w-8 h-px bg-gold/60 my-1" />
            <p className="font-serif text-lg italic text-foreground/70 tracking-wide">Calm. Natural. Timeless.</p>
            <Link
              to="/portfolio"
              className="mt-3 font-sans text-[11px] tracking-[0.2em] uppercase border border-foreground/40 px-7 py-3 text-foreground hover:bg-foreground hover:text-background transition-all duration-400"
            >
              View Portfolio
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <div className="w-px h-10 bg-foreground/20 animate-pulse" />
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section className="py-24 md:py-32 px-6 md:px-10 max-w-[1320px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground">Our Philosophy</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight text-foreground">
              Good design is not about filling a space.
            </h2>
          </div>
          <div className="reveal-right flex flex-col gap-5">
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              It's about understanding how it will be lived in. We focus on proportion, flow, light, and functionality — so every detail serves a purpose.
            </p>
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              At VAYAANA, we don't design for the camera. We design for the quiet mornings, the family dinners, and the moments in between. Spaces that feel as good as they look.
            </p>
            <Link
              to="/about"
              className="flex items-center gap-2 text-primary font-sans text-sm tracking-[0.1em] uppercase mt-2 group w-fit"
            >
              Our Story
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="px-6 md:px-10 pb-24 md:pb-32">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-end justify-between mb-12 reveal">
            <div>
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground">Selected Work</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-2 text-foreground">Featured Projects</h2>
            </div>
            <Link
              to="/portfolio"
              className="hidden md:flex items-center gap-2 text-primary font-sans text-xs tracking-[0.12em] uppercase group"
            >
              View All
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project, i) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                className="group reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="overflow-hidden aspect-[4/5]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex flex-col gap-1">
                  <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{project.type} — {project.location}</p>
                  <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:hidden text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-primary font-sans text-xs tracking-[0.12em] uppercase group"
            >
              View All Projects
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICES STRIP ===== */}
      <section className="bg-secondary py-20 px-6 md:px-10">
        <div className="max-w-[1320px] mx-auto reveal">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div>
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground">What We Do</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 text-foreground leading-tight max-w-sm">
                Every space, thoughtfully crafted.
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {["Residential Interiors", "Modular Kitchens", "Wardrobes", "Turnkey Execution"].map((s, i) => (
                <div key={s} className="flex flex-col gap-1">
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">0{i + 1}</span>
                  <span className="font-serif text-base text-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase border border-primary/50 px-7 py-3 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Explore Services
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-24 md:py-36 px-6 md:px-10 text-center">
        <div className="max-w-2xl mx-auto reveal flex flex-col items-center gap-6">
          <div className="w-px h-12 bg-border" />
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground">Ready to Begin?</span>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground leading-tight">
            Let's design your dream home.
          </h2>
          <p className="font-sans text-base text-muted-foreground max-w-md">
            Share your vision with us. We'll take it from there — with clarity, care, and craftsmanship.
          </p>
          <Link
            to="/contact"
            className="mt-4 font-sans text-[11px] tracking-[0.25em] uppercase bg-primary text-primary-foreground px-10 py-4 hover:bg-foreground transition-colors duration-300"
          >
            Book a Design Consultation
          </Link>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-secondary py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1320px] mx-auto">
          <div className="reveal mb-12">
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground">Client Stories</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-2 text-foreground">What our clients say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="reveal bg-background p-8 flex flex-col gap-5 shadow-sm"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-serif text-3xl text-gold/60">"</span>
                <p className="font-serif text-lg italic text-foreground/80 leading-relaxed">{t.quote}</p>
                <div className="mt-auto pt-4 border-t border-border">
                  <p className="font-sans text-sm font-medium text-foreground">{t.name}</p>
                  <p className="font-sans text-xs text-muted-foreground mt-0.5">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INSTAGRAM STRIP ===== */}
      <section className="py-20 px-6 md:px-10 max-w-[1320px] mx-auto">
        <div className="reveal flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground">Follow Along</span>
            <h2 className="font-serif text-3xl mt-1 text-foreground">@vayaana_interiors</h2>
          </div>
          <a
            href="https://instagram.com/vayaana_interiors"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs tracking-[0.15em] uppercase text-primary flex items-center gap-2 hover:gap-3 transition-all duration-300"
          >
            View on Instagram <ArrowRight size={13} />
          </a>
        </div>
        {/* Instagram grid placeholder — shows real-feeling tiles */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 reveal">
          {[project1, project2, project3].concat([project1, project2, project3]).map((img, i) => (
            <a
              key={i}
              href="https://instagram.com/vayaana_interiors"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden group block"
            >
              <img
                src={img}
                alt={`VAYAANA Interiors Instagram post ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
