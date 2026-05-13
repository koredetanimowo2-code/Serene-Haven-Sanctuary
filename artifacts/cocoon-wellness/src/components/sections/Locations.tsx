import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  { country: "Nigeria", city: "Lagos", note: "Our Global Headquarters. The heart of the Cocoon.", featured: true },
  { country: "United Kingdom", city: "London", note: "An oasis of warmth amidst the bustling city." },
  { country: "USA", city: "New York", note: "African luxury in the concrete jungle." },
  { country: "Canada", city: "Toronto", note: "Deep warmth to counter the northern chill." },
  { country: "UAE", city: "Dubai", note: "Elevated sanctuary in the desert metropolis." },
  { country: "South Africa", city: "Cape Town", note: "Where two great African cultures meet." },
  { country: "France", city: "Paris", note: "Quiet Nigerian elegance in the city of light." },
];

export function Locations() {
  return (
    <section id="locations" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-6">
              A Global Sanctuary
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Seven homes across the world. Each branch adapts to its host city while remaining unmistakably rooted in Nigerian warmth and hospitality.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-card px-6 py-3 rounded-full border border-card-border">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-medium uppercase tracking-wider text-foreground">7 Countries</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, index) => (
            <motion.div
              key={loc.country}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-3xl border transition-all hover:-translate-y-2 ${
                loc.featured 
                  ? "bg-foreground text-background border-foreground shadow-2xl md:col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col justify-center" 
                  : "bg-card border-card-border hover:shadow-lg"
              }`}
            >
              <div className="flex items-start justify-between mb-8">
                <MapPin className={`w-8 h-8 ${loc.featured ? "text-secondary" : "text-primary"}`} />
                {loc.featured && (
                  <span className="text-xs uppercase tracking-widest font-medium text-secondary">HQ</span>
                )}
              </div>
              <h3 className={`text-3xl font-serif mb-2 ${loc.featured ? "text-background" : "text-foreground"}`}>
                {loc.country}
              </h3>
              <p className={`font-medium mb-4 ${loc.featured ? "text-background/80" : "text-foreground/60"}`}>
                {loc.city}
              </p>
              <p className={`text-sm leading-relaxed ${loc.featured ? "text-background/70" : "text-muted-foreground"}`}>
                {loc.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
