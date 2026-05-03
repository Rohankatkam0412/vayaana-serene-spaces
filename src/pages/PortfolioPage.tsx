import { useState } from "react";
import { Link } from "react-router-dom";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const CATEGORIES = ["All", "Residential", "Kitchen", "Wardrobe", "Turnkey", "Custom Space"];

const projects = [
  {
    id: "serene-living",
    title: "The Serene Living",
    location: "Jubilee Hills, Hyderabad",
    type: "Residential",
    year: "2024",
    image: project1,
    story: "A warm, nature-inspired 3BHK that balances comfort with quiet sophistication.",
    images: [project1, project4, project5, project6],
    scope: "Full apartment interior",
    style: "Warm Minimalist",
    highlights: ["Custom modular shelving", "Natural jute and linen palette", "Layered ambient lighting"],
  },
  {
    id: "ivory-kitchen",
    title: "Ivory & Walnut Kitchen",
    location: "Banjara Hills, Hyderabad",
    type: "Kitchen",
    year: "2024",
    image: project2,
    story: "A kitchen designed for serious cooking and effortless beauty — the two don't have to fight.",
    images: [project2, project1, project3, project5],
    scope: "Full kitchen design & execution",
    style: "Refined Contemporary",
    highlights: ["Marble worktop with walnut island", "Brass hardware details", "Custom pendant lighting"],
  },
  {
    id: "walnut-wardrobe",
    title: "The Walnut Wardrobe",
    location: "Gachibowli, Hyderabad",
    type: "Wardrobe",
    year: "2024",
    image: project3,
    story: "A walk-in wardrobe that functions as a private sanctuary — calm, organized, and beautifully lit.",
    images: [project3, project6, project4, project2],
    scope: "Master bedroom wardrobe",
    style: "Warm Luxury",
    highlights: ["Walnut veneer panels", "LED strip lighting", "Integrated full-length mirror"],
  },
  {
    id: "sage-bedroom",
    title: "Sage & Linen Bedroom",
    location: "Hyderabad",
    type: "Residential",
    year: "2023",
    image: project4,
    story: "A bedroom that earns its silence — soft greens, natural textures, and light that shifts through the day.",
    images: [project4, project1, project5, project6],
    scope: "Master bedroom interior",
    style: "Natural Calm",
    highlights: ["Sage feature wall", "Natural rattan light fixture", "Linen bedding palette"],
  },
  {
    id: "turnkey-heights",
    title: "Heights Turnkey Home",
    location: "Kondapur, Hyderabad",
    type: "Turnkey",
    year: "2023",
    image: project5,
    story: "A complete turnkey delivery for a family of four — from bare walls to a lived-in home in 14 weeks.",
    images: [project5, project1, project2, project4],
    scope: "Full 3BHK turnkey",
    style: "Warm Traditional-Modern",
    highlights: ["Complete furniture procurement", "Handmade textile accents", "Full execution management"],
  },
  {
    id: "study-nook",
    title: "The Study Nook",
    location: "Hyderabad",
    type: "Custom Space",
    year: "2023",
    image: project6,
    story: "A small room transformed into a thoughtful study — quiet, functional, and perfectly proportioned.",
    images: [project6, project3, project4, project1],
    scope: "Home study design",
    style: "Minimalist",
    highlights: ["Custom built-in shelving", "Warm wood desk alcove", "Diffused natural light"],
  },
];

export { projects };

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.type === activeCategory);

  return (
    <main className="pt-24 md:pt-28 pb-24 md:pb-32 overflow-x-hidden">
      {/* Header */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="mb-16">
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground">Our Work</span>
          <h1 className="font-serif text-5xl md:text-7xl mt-3 text-foreground leading-none tracking-tight">Portfolio</h1>
          <p className="font-sans text-base text-muted-foreground mt-4 max-w-md leading-relaxed">
            A curated selection of spaces we've had the privilege of shaping — each one a story of how a family lives.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-sans text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filtered.map((project) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="group"
            >
              <div className="overflow-hidden aspect-[4/5] bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                />
              </div>
              <div className="mt-4 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{project.type}</span>
                  <span className="font-sans text-[10px] text-muted-foreground/60">{project.year}</span>
                </div>
                <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="font-sans text-xs text-muted-foreground">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="font-serif text-2xl text-muted-foreground">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default PortfolioPage;
