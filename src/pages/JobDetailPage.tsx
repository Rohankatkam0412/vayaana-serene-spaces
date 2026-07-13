import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Briefcase, Clock, CalendarDays, Mail, Phone } from "lucide-react";
import { jobOpenings } from "./CareersPage";

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

const JobDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  useReveal();

  const job = jobOpenings.find((j) => j.id === id);

  if (!job) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center pt-20 px-6 text-center">
        <h1 className="font-serif text-4xl text-foreground mb-4">Job not found</h1>
        <Link to="/careers" className="font-sans text-sm text-primary underline">
          Back to Careers
        </Link>
      </main>
    );
  }

  const applySubject = encodeURIComponent(`Application for ${job.title}`);

  return (
    <main className="pt-20 md:pt-24 pb-24 overflow-x-hidden">
      {/* Back nav */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 pt-6 mb-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-300 group"
        >
          <ArrowLeft size={13} className="transition-transform duration-300 group-hover:-translate-x-1" />
          Careers
        </button>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Main content */}
          <div className="md:col-span-2 reveal-left flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold">{job.type}</span>
              <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-tight">{job.title}</h1>
              <div className="w-8 h-px bg-gold/60" />
              <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-2xl">
                At Vayaana Interiors, we design and deliver premium residential and commercial interior spaces with a strong focus on quality, functionality, and execution excellence.
              </p>
              <p className="font-serif text-xl italic text-foreground/70 leading-relaxed max-w-2xl">{job.summary}</p>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="font-serif text-3xl text-foreground">Key Responsibilities</h2>
              {job.responsibilities.map((group) => (
                <div key={group.category} className="flex flex-col gap-3">
                  <h3 className="font-serif text-lg text-foreground">{group.category}</h3>
                  <ul className="flex flex-col gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="font-sans text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                        <span className="text-gold mt-1 flex-shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-serif text-3xl text-foreground">Required Skills</h2>
              <ul className="flex flex-col gap-2">
                {job.requiredSkills.map((skill) => (
                  <li key={skill} className="font-sans text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                    <span className="text-gold mt-1 flex-shrink-0">—</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-serif text-3xl text-foreground">Preferred Qualifications</h2>
              <ul className="flex flex-col gap-2">
                {job.preferredQualifications.map((q) => (
                  <li key={q} className="font-sans text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                    <span className="text-gold mt-1 flex-shrink-0">—</span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-serif text-3xl text-foreground">What We Offer</h2>
              <ul className="flex flex-col gap-2">
                {job.whatWeOffer.map((offer) => (
                  <li key={offer} className="font-sans text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                    <span className="text-gold mt-1 flex-shrink-0">—</span>
                    {offer}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <h2 className="font-serif text-3xl text-foreground">How to Apply</h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                If you're passionate about project execution and interior fit-outs, I'd love to hear from you. Share your interest and resume to{" "}
                <a
                  href={`mailto:rohan.vayaana@gmail.com?subject=${applySubject}`}
                  className="text-primary underline underline-offset-4 hover:text-foreground transition-colors duration-300"
                >
                  rohan.vayaana@gmail.com
                </a>
                .
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="reveal-right">
            <div className="bg-secondary p-8 flex flex-col gap-6 sticky top-28">
              <h3 className="font-serif text-xl text-foreground">Role Details</h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3 text-foreground">
                  <MapPin size={14} className="flex-shrink-0 text-muted-foreground" />
                  <p className="font-sans text-sm">{job.location}</p>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <Briefcase size={14} className="flex-shrink-0 text-muted-foreground" />
                  <p className="font-sans text-sm">{job.experience} Experience</p>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <Clock size={14} className="flex-shrink-0 text-muted-foreground" />
                  <p className="font-sans text-sm">{job.type}</p>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <CalendarDays size={14} className="flex-shrink-0 text-muted-foreground" />
                  <p className="font-sans text-sm">Joining: {job.joining}</p>
                </div>
              </div>

              <div className="w-full h-px bg-border" />

              <div className="flex flex-col gap-4">
                <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground">How to Apply</p>
                <a
                  href={`mailto:rohan.vayaana@gmail.com?subject=${applySubject}`}
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300"
                >
                  <Mail size={14} className="flex-shrink-0" />
                  <span className="font-sans text-sm">rohan.vayaana@gmail.com</span>
                </a>
                <a
                  href="tel:+918050688548"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300"
                >
                  <Phone size={14} className="flex-shrink-0" />
                  <span className="font-sans text-sm">+91 80506 88548</span>
                </a>
              </div>

              <a
                href={`mailto:rohan.vayaana@gmail.com?subject=${applySubject}`}
                className="mt-2 font-sans text-[11px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-5 py-4 text-center hover:bg-foreground transition-colors duration-300"
              >
                Apply for This Role
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JobDetailPage;
