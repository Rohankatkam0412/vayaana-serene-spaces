import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import founderImg from "@/assets/founder-portrait.jpg";
import aboutDetailImg from "@/assets/about-detail.jpg";
import heroImg from "@/assets/hero-living-room.jpg";

const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const values = [
  {
    title: "Proportion",
    description: "Every element earns its size. We are obsessive about scale — a centimetre off and a room feels wrong without knowing why.",
  },
  {
    title: "Flow",
    description: "Spaces should guide movement naturally. We choreograph how you move through a home, not just how each room looks.",
  },
  {
    title: "Light",
    description: "Natural light is the most powerful material in any room. We design around how it enters, moves, and shifts through the day.",
  },
  {
    title: "Functionality",
    description: "Beautiful is not enough. Every design decision must also make life easier, quieter, and more pleasant to live.",
  },
];

const AboutPage = () => {
  useReveal();

  return (
    <main className="pt-24 md:pt-28 pb-24 md:pb-32 overflow-x-hidden">
      {/* Header */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 mb-16">
        <div className="reveal">
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground">The Studio</span>
          <h1 className="font-serif text-5xl md:text-7xl mt-3 text-foreground leading-none tracking-tight">About Vayaana</h1>
        </div>
      </div>

      {/* Full-width atmospheric image */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 mb-20 reveal">
        <div className="aspect-[21/9] overflow-hidden bg-secondary">
          <img src={heroImg} alt="VAYAANA Interiors — a typical space we create" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Story */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 mb-24">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          <div className="reveal-left">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
              Why Vayaana?
            </h2>
          </div>
          <div className="reveal-right flex flex-col gap-5">
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              Vayaana (Sanskrit: वायाना) means "to weave" — and that's exactly what we do. We weave together proportion, light, material, and meaning to create spaces that feel wholly considered.
            </p>
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              Founded in Hyderabad, we work with families who want their home to feel like a true reflection of who they are — not a catalogue recreation. We specialize in residential spaces because we believe where you live shapes how you live.
            </p>
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              Our work is quiet by choice. We believe the most sophisticated design is the kind you barely notice — until the day you're somewhere else and you realize how much your home meant to you.
            </p>
          </div>
        </div>
      </div>

      {/* Philosophy values */}
      <section className="bg-secondary py-20 md:py-28 px-6 md:px-10 mb-24">
        <div className="max-w-[1320px] mx-auto">
          <div className="reveal mb-14">
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground">Our Design Philosophy</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-foreground">Four principles. One approach.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="reveal flex flex-col gap-4"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-8 h-px bg-gold/60" />
                <h3 className="font-serif text-2xl text-foreground">{v.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder section */}
      <section className="max-w-[1320px] mx-auto px-6 md:px-10 mb-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="reveal-left overflow-hidden aspect-[4/5] bg-secondary">
            <img
              src={founderImg}
              alt="Rohan Katkam — Founder, VAYAANA Interiors"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="reveal-right flex flex-col gap-5">
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground">The Founder</span>
            <h2 className="font-serif text-4xl text-foreground">Rohan Katkam</h2>
            <div className="w-8 h-px bg-gold/60" />
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              Rohan trained in architecture and interior design before spending several years working across Bangalore and Hyderabad on high-end residential projects. He founded Vayaana with a simple conviction: that most homes are over-decorated and under-designed.
            </p>
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              His approach starts with restraint — removing what doesn't need to be there before adding what does. He believes the best compliment a home can receive is not "how beautiful" but "how comfortable."
            </p>
            <p className="font-serif text-lg italic text-foreground/60 mt-2">
              "Design that asks for attention has already failed."
            </p>
            <Link
              to="/contact"
              className="flex items-center gap-2 text-primary font-sans text-xs tracking-[0.12em] uppercase mt-4 group w-fit"
            >
              Work with Rohan
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Detail image */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 reveal">
        <div className="grid md:grid-cols-2 gap-6 items-end">
          <div className="aspect-[4/3] overflow-hidden bg-secondary">
            <img src={aboutDetailImg} alt="VAYAANA design detail" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-4 py-8">
            <p className="font-serif text-2xl md:text-3xl italic text-foreground/70 leading-relaxed">
              "We focus on proportion, flow, light, and functionality — so every detail serves a purpose."
            </p>
            <p className="font-sans text-sm text-muted-foreground">That's the VAYAANA approach.</p>
            <Link
              to="/portfolio"
              className="flex items-center gap-2 text-primary font-sans text-xs tracking-[0.12em] uppercase mt-4 group w-fit"
            >
              See Our Work
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
