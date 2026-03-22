import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import { projects } from "./PortfolioPage";

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
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  useReveal();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center pt-20 px-6 text-center">
        <h1 className="font-serif text-4xl text-foreground mb-4">Project not found</h1>
        <Link to="/portfolio" className="font-sans text-sm text-primary underline">
          Back to Portfolio
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-20 md:pt-24 pb-24 overflow-x-hidden">
      {/* Back nav */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 pt-6 mb-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-300 group"
        >
          <ArrowLeft size={13} className="transition-transform duration-300 group-hover:-translate-x-1" />
          Portfolio
        </button>
      </div>

      {/* Hero image */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="animate-fade-in aspect-[16/8] overflow-hidden bg-secondary">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 mt-12 md:mt-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Main story */}
          <div className="md:col-span-2 reveal-left flex flex-col gap-5">
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground">{project.type}</span>
            <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-tight">{project.title}</h1>
            <p className="font-sans text-muted-foreground text-sm">{project.location}</p>
            <div className="w-8 h-px bg-gold/60 my-2" />
            <p className="font-serif text-xl italic text-foreground/70 leading-relaxed">{project.story}</p>
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              This project reflects the VAYAANA approach — starting with careful listening, understanding how the family lives, and then translating that into a space that feels inevitable. Every material choice, every proportion, every junction was deliberated.
            </p>
          </div>

          {/* Project details */}
          <div className="reveal-right">
            <div className="bg-secondary p-8 flex flex-col gap-6">
              <h3 className="font-serif text-xl text-foreground">Project Details</h3>
              <div className="flex flex-col gap-5">
                <div>
                  <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-1">Scope</p>
                  <p className="font-sans text-sm text-foreground">{project.scope}</p>
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-1">Style</p>
                  <p className="font-sans text-sm text-foreground">{project.style}</p>
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-1">Year</p>
                  <p className="font-sans text-sm text-foreground">{project.year}</p>
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">Highlights</p>
                  <ul className="flex flex-col gap-1.5">
                    {project.highlights.map((h) => (
                      <li key={h} className="font-sans text-sm text-foreground flex items-start gap-2">
                        <span className="text-gold mt-1">—</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Link
                to="/contact"
                className="mt-2 font-sans text-[10px] tracking-[0.2em] uppercase border border-primary/60 px-5 py-3 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center"
              >
                Discuss a Similar Project
              </Link>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-16 md:mt-20 reveal">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {project.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="reveal overflow-hidden aspect-square bg-secondary group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <img
                  src={img}
                  alt={`${project.title} — view ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <img
            src={project.images[lightboxIndex]}
            alt={`${project.title} — full view`}
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {/* Nav arrows */}
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors font-serif text-3xl"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => prev !== null ? (prev - 1 + project.images.length) % project.images.length : 0); }}
          >
            ‹
          </button>
          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors font-serif text-3xl"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => prev !== null ? (prev + 1) % project.images.length : 0); }}
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
};

export default ProjectDetailPage;
