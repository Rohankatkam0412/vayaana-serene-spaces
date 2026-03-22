import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

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

const services = [
  {
    number: "01",
    title: "Residential Interiors",
    description: "Complete interior design for your home — from concept to completion. We design every room as part of a coherent whole.",
    bullets: [
      "Full home design across all rooms",
      "Material, furniture & fixture selection",
      "Space planning and layout optimization",
    ],
    image: project5,
  },
  {
    number: "02",
    title: "Modular Kitchens & Wardrobes",
    description: "Functional beauty built to last. Our modular solutions balance precision engineering with warm, natural aesthetics.",
    bullets: [
      "Custom modular cabinet design",
      "Premium material and finish selection",
      "Full installation and quality finishing",
    ],
    image: project2,
  },
  {
    number: "03",
    title: "Turnkey Execution",
    description: "A complete, stress-free handover. We manage every vendor, timeline, and detail so you can walk into a finished home.",
    bullets: [
      "Single-point project management",
      "Vendor coordination and site supervision",
      "Guaranteed handover with quality walkthrough",
    ],
    image: project3,
  },
  {
    number: "04",
    title: "Custom Living Spaces",
    description: "For the spaces that don't fit a template — reading nooks, home offices, meditation rooms, or curated corners.",
    bullets: [
      "Tailored design for unique spaces",
      "Custom joinery and furniture",
      "Styling and accessory curation",
    ],
    image: project6,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    description: "We begin by listening. A detailed conversation about how you live, what you value, and what you envision.",
  },
  {
    step: "02",
    title: "Design",
    description: "We translate your brief into a full design concept — layouts, materials, mood, and 3D visualizations.",
  },
  {
    step: "03",
    title: "Detail",
    description: "Every element is specified precisely — from hardware finishes to fabric weaves. Nothing is left to chance.",
  },
  {
    step: "04",
    title: "Execute",
    description: "Our trusted network of craftspeople brings the design to life, supervised by our team throughout.",
  },
  {
    step: "05",
    title: "Handover",
    description: "We walk you through your new home, ensuring every detail is exactly as designed — or better.",
  },
];

const ServicesPage = () => {
  useReveal();

  return (
    <main className="pt-24 md:pt-28 pb-24 md:pb-32 overflow-x-hidden">
      {/* Header */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 mb-20">
        <div className="reveal">
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground">What We Offer</span>
          <h1 className="font-serif text-5xl md:text-7xl mt-3 text-foreground leading-none tracking-tight">Services</h1>
          <p className="font-sans text-base text-muted-foreground mt-4 max-w-lg leading-relaxed">
            We offer a focused range of services — all built around the same philosophy: design that serves the people who live in it.
          </p>
        </div>
      </div>

      {/* Services list */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="flex flex-col divide-y divide-border">
          {services.map((service, i) => (
            <div
              key={service.number}
              className={`reveal grid md:grid-cols-2 gap-10 md:gap-16 py-16 md:py-20 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image — alternating sides */}
              <div className={`${i % 2 === 1 ? "md:order-2" : ""} overflow-hidden aspect-[4/3] bg-secondary`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content */}
              <div className={`${i % 2 === 1 ? "md:order-1" : ""} flex flex-col justify-center gap-5`}>
                <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold">{service.number}</span>
                <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">{service.title}</h2>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">{service.description}</p>
                <ul className="flex flex-col gap-3 mt-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 font-sans text-sm text-foreground/80">
                      <span className="text-gold mt-0.5 flex-shrink-0">—</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 text-primary font-sans text-xs tracking-[0.12em] uppercase mt-4 group w-fit"
                >
                  Enquire about this service
                  <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process timeline */}
      <section className="mt-16 bg-secondary py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1320px] mx-auto">
          <div className="reveal mb-16 text-center">
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground">How We Work</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-foreground">Our Process</h2>
            <p className="font-sans text-base text-muted-foreground mt-4 max-w-md mx-auto leading-relaxed">
              A clear, transparent process from the first conversation to the final handover.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-border" />
            <div className="grid md:grid-cols-5 gap-8 md:gap-6">
              {processSteps.map((step, i) => (
                <div
                  key={step.step}
                  className="reveal flex flex-col items-start md:items-center md:text-center gap-4"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="relative flex items-center justify-center w-14 h-14 border border-border bg-background flex-shrink-0">
                    <span className="font-serif text-lg text-primary">{step.step}</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-serif text-xl text-foreground">{step.title}</h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-10 text-center max-w-[1320px] mx-auto reveal">
        <div className="flex flex-col items-center gap-6">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight max-w-lg">
            Ready to start your project?
          </h2>
          <p className="font-sans text-base text-muted-foreground max-w-md">
            Share a few details and we'll be in touch within 24 hours to schedule a consultation.
          </p>
          <Link
            to="/contact"
            className="mt-4 font-sans text-[11px] tracking-[0.25em] uppercase bg-primary text-primary-foreground px-10 py-4 hover:bg-foreground transition-colors duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
