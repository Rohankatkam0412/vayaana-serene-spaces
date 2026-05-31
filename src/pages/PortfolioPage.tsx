import { useState } from "react";
import { Link } from "react-router-dom";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.jpg";
import project8 from "@/assets/project-8.jpg";
import heroImg from "@/assets/hero-living-room.jpg";

const CATEGORIES = ["All", "Residential", "Kitchen", "Bedroom", "Custom Space"];

const projects = [
  {
    id: "navy-cream-living",
    title: "Navy & Cream Living",
    location: "Kondapur, Hyderabad",
    type: "Residential",
    year: "2024",
    image: project1,
    story: "A contemporary living room anchored by deep navy leather seating and warm track lighting against cream walls — bold yet refined.",
    images: [project1, project4, project2, project3],
    scope: "Full living room interior",
    style: "Contemporary",
    highlights: ["Navy leather seating", "Track lighting system", "Oval marble coffee table"],
  },
  {
    id: "sage-kitchen",
    title: "The Sage Kitchen",
    location: "Kondapur, Hyderabad",
    type: "Kitchen",
    year: "2024",
    image: project2,
    story: "A bold sage green kitchen with a marble dining space — designed for families who cook seriously and entertain effortlessly.",
    images: [project2, project3, project1, project4],
    scope: "Full kitchen & dining design",
    style: "Contemporary",
    highlights: ["Sage lacquer cabinets", "Marble countertop & backsplash", "Wood false ceiling"],
  },
  {
    id: "dining-gallery",
    title: "The Dining Gallery",
    location: "Kondapur, Hyderabad",
    type: "Residential",
    year: "2024",
    image: project3,
    story: "A dining space that doubles as a gallery — marble table, curated display cabinet, and the sage kitchen as a living backdrop.",
    images: [project3, project2, project1, project5],
    scope: "Dining & living area",
    style: "Contemporary",
    highlights: ["Marble dining table", "Lit display cabinet", "Mixed chair palette"],
  },
  {
    id: "curved-living",
    title: "The Curved Living",
    location: "Hyderabad",
    type: "Residential",
    year: "2024",
    image: project4,
    story: "A minimalist living room centered on a curved modular sofa — soft greys, clean lines, and cove lighting that wraps the room.",
    images: [project4, project1, project5, project6],
    scope: "Living room interior",
    style: "Warm Minimalist",
    highlights: ["Curved modular sofa", "LED cove lighting", "Arched window niche"],
  },
  {
    id: "wood-stone-bedroom",
    title: "Wood & Stone Bedroom",
    location: "Kondapur, Hyderabad",
    type: "Bedroom",
    year: "2023",
    image: project5,
    story: "A master bedroom that layers wood slatted panels, stone-finish wardrobes, and floral wallpaper into a warm, textured retreat.",
    images: [project5, project6, project4, project1],
    scope: "Master bedroom interior",
    style: "Warm Luxury",
    highlights: ["Wood slat wall panels", "Stone-finish wardrobe doors", "Floral feature wall"],
  },
  {
    id: "dark-glass-wardrobe",
    title: "Dark Glass Wardrobe",
    location: "Hyderabad",
    type: "Custom Space",
    year: "2023",
    image: project6,
    story: "A bedroom wardrobe in smoked glass and dark frames — dramatic, functional, and beautifully lit from above with LED cove lighting.",
    images: [project6, project5, project4, project3],
    scope: "Bedroom wardrobe design",
    style: "Contemporary",
    highlights: ["Smoked glass panels", "LED cove lighting", "Under-unit drawer storage"],
  },
  {
    id: "walnut-wardrobe-bedroom",
    title: "The Walnut Wardrobe",
    location: "Hyderabad",
    type: "Custom Space",
    year: "2024",
    image: project7,
    story: "A full-height walnut wardrobe that commands the room — clean grain, black handles, and warm recessed lighting that makes it feel like furniture, not storage.",
    images: [project7, project5, project6, project8, heroImg],
    scope: "Bedroom wardrobe design",
    style: "Warm Contemporary",
    highlights: ["Full-height walnut finish", "Recessed ceiling lighting", "ZZ plant styling"],
  },
  {
    id: "tv-unit-living",
    title: "The TV Wall",
    location: "Hyderabad",
    type: "Residential",
    year: "2024",
    image: heroImg,
    story: "A living room centrepiece — marble TV panel with warm LED backlighting, walnut unit, and a fluted grey backdrop that anchors the entire space.",
    images: [heroImg, project1, project4, project7],
    scope: "Living room TV wall & unit",
    style: "Warm Luxury",
    highlights: ["Marble TV panel with LED backlight", "Walnut wood unit with open shelving", "Fluted grey feature wall"],
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
