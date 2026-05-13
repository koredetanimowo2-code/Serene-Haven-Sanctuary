import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const locations = [
  {
    city: "Lagos",
    country: "Nigeria",
    desc: "The birthplace. Carries the full spirit of Nigerian warmth and hospitality. The original Cocoon.",
    hours: "Mon - Sun: 8:00 AM - 10:00 PM",
    image: "/images/loc-lagos.png",
    flag: "🇳🇬"
  },
  {
    city: "London",
    country: "UK",
    desc: "A quiet revolution in the heart of the city. A break from the London pace.",
    hours: "Mon - Sun: 7:00 AM - 9:00 PM",
    image: "/images/loc-london.png",
    flag: "🇬🇧"
  },
  {
    city: "New York",
    country: "USA",
    desc: "For a city that never sleeps, The Cocoon offers exactly what it needs: stillness.",
    hours: "Mon - Sun: 6:00 AM - 11:00 PM",
    image: "/images/loc-ny.png",
    flag: "🇺🇸"
  },
  {
    city: "Toronto",
    country: "Canada",
    desc: "Warm, multicultural, inclusive. The Cocoon adapts to Toronto's diversity.",
    hours: "Mon - Sun: 8:00 AM - 9:00 PM",
    image: "/images/loc-toronto.png",
    flag: "🇨🇦"
  },
  {
    city: "Dubai",
    country: "UAE",
    desc: "Luxury as a language. The Dubai branch speaks it fluently.",
    hours: "Mon - Sun: 9:00 AM - 12:00 AM",
    image: "/images/loc-dubai.png",
    flag: "🇦🇪"
  },
  {
    city: "Johannesburg",
    country: "South Africa",
    desc: "Rooted in African pride. The Joburg Cocoon celebrates Black excellence and wellness.",
    hours: "Mon - Sun: 8:00 AM - 8:00 PM",
    image: "/images/loc-joburg.png",
    flag: "🇿🇦"
  },
  {
    city: "Paris",
    country: "France",
    desc: "Elegance meets depth. La sérénité du Cocoon.",
    hours: "Mon - Sun: 9:00 AM - 8:00 PM",
    image: "/images/loc-paris.png",
    flag: "🇫🇷"
  }
];

export default function Locations() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Our Sanctuaries</h1>
            <p className="text-lg text-foreground/80">7 sanctuaries. One Cocoon. Wherever you are in the world, the same unhurried warmth awaits you.</p>
          </motion.div>

          <div className="space-y-16">
            {locations.map((loc, index) => (
              <motion.div 
                key={loc.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-3xl overflow-hidden shadow-md flex flex-col md:flex-row min-h-[400px]"
              >
                <div className="md:w-1/2 relative">
                  <img src={loc.image} alt={`${loc.city} Branch`} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent" />
                </div>
                <div className="md:w-1/2 bg-card p-12 flex flex-col justify-center">
                  <div className="text-sm font-bold tracking-widest uppercase text-secondary mb-2 flex items-center gap-2">
                    <span className="text-xl" aria-hidden="true" role="img">{loc.flag}</span>
                    {loc.country}
                  </div>
                  <h2 className="font-serif text-4xl mb-4 text-foreground">{loc.city}</h2>
                  <p className="text-foreground/80 mb-6 text-lg">{loc.desc}</p>
                  <div className="mb-8">
                    <h4 className="font-medium text-sm text-foreground/60 mb-1 uppercase tracking-wider">Opening Hours</h4>
                    <p className="text-foreground">{loc.hours}</p>
                  </div>
                  <div>
                    <Button asChild className="rounded-full bg-primary" size="lg" data-testid={`book-${loc.city.toLowerCase()}`}>
                      <Link href="/book">Book at this branch</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}