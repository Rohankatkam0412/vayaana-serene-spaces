import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";

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

export interface JobOpening {
  id: string;
  title: string;
  location: string;
  experience: string;
  type: string;
  joining: string;
  summary: string;
  responsibilities: { category: string; items: string[] }[];
  requiredSkills: string[];
  preferredQualifications: string[];
  whatWeOffer: string[];
}

export const jobOpenings: JobOpening[] = [
  {
    id: "project-coordinator-interior-fitout",
    title: "Project Coordinator – Interior Fit-out",
    location: "Hyderabad",
    experience: "2–3 Years",
    type: "Full-Time",
    joining: "Immediate",
    summary:
      "The Project Coordinator will support the Project Manager in planning, coordinating, and monitoring all aspects of the project from initiation to handover. The role requires excellent organizational skills, documentation expertise, vendor coordination, and the ability to ensure smooth day-to-day project execution.",
    responsibilities: [
      {
        category: "Project Coordination",
        items: [
          "Coordinate daily project activities between the client, consultants, site team, vendors, and subcontractors.",
          "Ensure project milestones are achieved within the planned schedule.",
          "Follow up on pending approvals, drawings, material deliveries, and site activities.",
          "Attend project meetings and prepare meeting minutes.",
        ],
      },
      {
        category: "Documentation",
        items: [
          "Maintain project documentation and filing systems.",
          "Manage BOQs, purchase orders, work orders, invoices, and project correspondence.",
          "Maintain drawing registers and document revision logs.",
          "Prepare Daily Progress Reports (DPR), Weekly Progress Reports (WPR), and Monthly Progress Reports (MPR).",
        ],
      },
      {
        category: "Site Coordination",
        items: [
          "Coordinate with site engineers, supervisors, and contractors.",
          "Monitor daily work progress and identify potential delays.",
          "Ensure work is executed as per approved drawings and specifications.",
          "Assist in quality inspections and snag list preparation.",
        ],
      },
      {
        category: "Vendor Coordination",
        items: [
          "Coordinate with suppliers for material procurement and delivery.",
          "Follow up on quotations, purchase orders, and delivery schedules.",
          "Maintain vendor communication and documentation.",
          "Track material availability to avoid work interruptions.",
        ],
      },
      {
        category: "BOQ & Billing Coordination",
        items: [
          "Maintain BOQ records and quantity tracking.",
          "Assist in preparing Running Account (RA) Bills.",
          "Verify executed quantities with the site team.",
          "Coordinate measurement sheets and billing documentation.",
          "Maintain payment and invoice records.",
        ],
      },
      {
        category: "Project Planning",
        items: [
          "Prepare and update project schedules using Microsoft Project (MS Project).",
          "Monitor project timelines and identify delays.",
          "Track planned versus actual progress.",
          "Support resource planning and scheduling activities.",
        ],
      },
      {
        category: "Reporting",
        items: [
          "Prepare daily, weekly, and monthly progress reports.",
          "Update project dashboards and status reports.",
          "Maintain issue logs and action trackers.",
          "Provide regular updates to the Project Manager.",
        ],
      },
    ],
    requiredSkills: [
      "Good knowledge of interior fit-out execution.",
      "Strong documentation and coordination skills.",
      "Experience in BOQ handling and quantity tracking.",
      "Knowledge of RA Billing procedures.",
      "Vendor and subcontractor coordination.",
      "Proficiency in Microsoft Excel.",
      "Working knowledge of Microsoft Project (MS Project).",
      "Strong communication and follow-up skills.",
      "Ability to multitask and work under deadlines.",
    ],
    preferredQualifications: [
      "Bachelor's Degree/Diploma in Civil Engineering, Interior Design, Architecture, or Construction Management.",
      "2–3 years of experience in commercial or interior fit-out projects.",
      "Experience in hospital, office, retail, or commercial interiors is an added advantage.",
    ],
    whatWeOffer: [
      "Opportunity to work on premium commercial interior projects.",
      "Hands-on exposure to complete project execution.",
      "Career growth in a fast-growing interior company.",
      "Collaborative and professional work environment.",
      "Performance-based growth opportunities.",
    ],
  },
];

const CareersPage = () => {
  useReveal();

  return (
    <main className="pt-24 md:pt-28 pb-24 md:pb-32 overflow-x-hidden">
      {/* Header */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 mb-16">
        <div className="reveal">
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground">Join Our Team</span>
          <h1 className="font-serif text-5xl md:text-7xl mt-3 text-foreground leading-none tracking-tight">Careers</h1>
          <p className="font-sans text-base text-muted-foreground mt-4 max-w-lg leading-relaxed">
            We're growing, and we're looking for people who care about craft and execution as much as we do. Explore our current openings below.
          </p>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        {jobOpenings.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {jobOpenings.map((job, i) => (
              <Link
                key={job.id}
                to={`/careers/${job.id}`}
                className="reveal group flex flex-col justify-between gap-8 border border-border p-8 hover:border-primary/60 transition-colors duration-300"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex flex-col gap-4">
                  <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold">{job.type}</span>
                  <h3 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                    {job.title}
                  </h3>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={13} className="flex-shrink-0" />
                      <span className="font-sans text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase size={13} className="flex-shrink-0" />
                      <span className="font-sans text-sm">{job.experience}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary font-sans text-xs tracking-[0.12em] uppercase w-fit">
                  View Job Description
                  <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="font-serif text-2xl text-muted-foreground">No open positions right now.</p>
            <p className="font-sans text-sm text-muted-foreground/70 mt-2">Check back soon, or send us your resume anyway.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default CareersPage;
