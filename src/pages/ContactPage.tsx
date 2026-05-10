import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";

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

const PROJECT_TYPES = [
  "Residential Interiors",
  "Modular Kitchen",
  "Wardrobes",
  "Turnkey Execution",
  "Custom Living Space",
  "Other",
];

const BUDGET_RANGES = [
  "₹5L – ₹15L",
  "₹15L – ₹30L",
  "₹30L – ₹60L",
  "₹60L+",
  "Not sure yet",
];

const FORM_ENDPOINT = "https://formsubmit.co/ajax/rohan.vayaana@gmail.com";

interface FormSubmitResponse {
  success?: string;
  message?: string;
}

const faqs = [
  {
    question: "How long does a typical residential project take?",
    answer: "A full residential interior (2-3BHK) typically takes 12–20 weeks from design sign-off to handover, depending on scope and material availability. We share a detailed timeline at the start of every project.",
  },
  {
    question: "How does VAYAANA charge for its services?",
    answer: "We charge a design fee based on the scope of work, plus a project management fee for execution. We're transparent about all costs upfront — no surprises.",
  },
  {
    question: "Do you work outside Hyderabad?",
    answer: "Our primary market is Hyderabad, but we do take select projects in other cities on a case-by-case basis. Contact us to discuss.",
  },
  {
    question: "What's the minimum budget you work with?",
    answer: "We generally work with residential projects starting at ₹8–10L for specific rooms (kitchen, wardrobe) or ₹25L+ for full home interiors. Our focus is on quality and craft, not volume.",
  },
];

const ContactPage = () => {
  useReveal();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const payload = new FormData();
    payload.append("name", formState.name);
    payload.append("email", formState.email);
    payload.append("phone", formState.phone);
    payload.append("city", formState.city);
    payload.append("projectType", formState.projectType);
    payload.append("budget", formState.budget);
    payload.append("message", formState.message);
    payload.append("_subject", `New VAYAANA inquiry from ${formState.name}`);
    payload.append("_template", "table");
    payload.append("_replyto", formState.email);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json",
        },
      });

      const result = (await response.json()) as FormSubmitResponse;

      if (!response.ok || result.success === "false") {
        throw new Error("Form submission failed");
      }

      setSubmitted(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        city: "",
        projectType: "",
        budget: "",
        message: "",
      });
    } catch {
      setSubmitError("Something went wrong. Please email us directly at rohan.vayaana@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-24 md:pt-28 pb-24 md:pb-32 overflow-x-hidden">
      {/* Header */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 mb-16">
        <div className="reveal">
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground">Get in Touch</span>
          <h1 className="font-serif text-5xl md:text-7xl mt-3 text-foreground leading-none tracking-tight">Contact</h1>
          <p className="font-sans text-base text-muted-foreground mt-4 max-w-md leading-relaxed">
            Tell us about your project. We read every inquiry personally and respond within 24 hours.
          </p>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Contact info */}
          <div className="reveal-left flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <h2 className="font-serif text-2xl text-foreground">Reach Us Directly</h2>
              <div className="flex flex-col gap-4">
                <a
                  href="https://wa.me/918050688548"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 flex items-center justify-center border border-border group-hover:border-primary transition-colors duration-300 flex-shrink-0">
                    <MessageCircle size={14} />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">WhatsApp</p>
                    <p className="font-sans text-sm">+91 8050688548</p>
                  </div>
                </a>
                <a
                  href="tel:+918050688548"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 flex items-center justify-center border border-border group-hover:border-primary transition-colors duration-300 flex-shrink-0">
                    <Phone size={14} />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Phone</p>
                    <p className="font-sans text-sm">+91 8050688548</p>
                  </div>
                </a>
                <a
                  href="mailto:rohan.vayaana@gmail.com"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 flex items-center justify-center border border-border group-hover:border-primary transition-colors duration-300 flex-shrink-0">
                    <Mail size={14} />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Email</p>
                    <p className="font-sans text-sm">rohan.vayaana@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-foreground">
                  <div className="w-8 h-8 flex items-center justify-center border border-border flex-shrink-0">
                    <MapPin size={14} />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Location</p>
                    <p className="font-sans text-sm">Hyderabad, Telangana</p>
                  </div>
                </div>
                <a
                  href="https://instagram.com/vayaana_interiors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 flex items-center justify-center border border-border group-hover:border-primary transition-colors duration-300 flex-shrink-0">
                    <Instagram size={14} />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Instagram</p>
                    <p className="font-sans text-sm">@vayaana_interiors</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2 reveal-right">
            {submitted ? (
              <div className="flex flex-col items-start gap-5 py-12">
                <div className="w-8 h-px bg-gold/60" />
                <h2 className="font-serif text-4xl text-foreground">Thank you.</h2>
                <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-sm">
                  We've received your inquiry and will be in touch within 24 hours. We look forward to hearing more about your project.
                </p>
                <p className="font-serif text-lg italic text-foreground/50">— The VAYAANA Team</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="bg-transparent border-b border-border pb-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="bg-transparent border-b border-border pb-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="bg-transparent border-b border-border pb-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors duration-300"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formState.city}
                      onChange={handleChange}
                      className="bg-transparent border-b border-border pb-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors duration-300"
                      placeholder="Hyderabad"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Project Type</label>
                    <select
                      name="projectType"
                      value={formState.projectType}
                      onChange={handleChange}
                      className="bg-transparent border-b border-border pb-3 font-sans text-sm text-foreground focus:outline-none focus:border-primary transition-colors duration-300 cursor-pointer"
                    >
                      <option value="" disabled>Select type</option>
                      {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Budget Range</label>
                    <select
                      name="budget"
                      value={formState.budget}
                      onChange={handleChange}
                      className="bg-transparent border-b border-border pb-3 font-sans text-sm text-foreground focus:outline-none focus:border-primary transition-colors duration-300 cursor-pointer"
                    >
                      <option value="" disabled>Select range</option>
                      {BUDGET_RANGES.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Tell us about your project</label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="bg-transparent border-b border-border pb-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                    placeholder="A few lines about the space, your vision, and how you use it..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="self-start mt-4 font-sans text-[11px] tracking-[0.25em] uppercase bg-primary text-primary-foreground px-10 py-4 hover:bg-foreground transition-colors duration-300 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </button>
                {submitError && (
                  <p className="font-sans text-sm text-destructive">{submitError}</p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-24 md:mt-32">
          <div className="reveal mb-10">
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground">FAQ</span>
            <h2 className="font-serif text-4xl mt-2 text-foreground">Common Questions</h2>
          </div>
          <div className="max-w-2xl flex flex-col divide-y divide-border">
            {faqs.map((faq, i) => (
              <div key={i} className="reveal py-6">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-start justify-between gap-6 text-left group"
                >
                  <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                    {faq.question}
                  </h3>
                  <span className="font-serif text-2xl text-muted-foreground flex-shrink-0 transition-transform duration-300" style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}>
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{ maxHeight: openFaq === i ? "200px" : "0px" }}
                >
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed pt-4">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
