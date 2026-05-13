import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { BackNav } from "@/components/layout/BackNav";

const locations = [
  {
    city: "Lagos",
    country: "Nigeria",
    desc: "The birthplace. Carries the full spirit of Nigerian warmth and hospitality. Warm wood, African textiles, undeniable soul.",
    hours: "Mon - Sun: 8:00 AM - 10:00 PM",
    image: "/images/loc-lagos.png",
  },
  {
    city: "London",
    country: "UK",
    desc: "A quiet revolution in the heart of the city. Dark walls, warm amber lighting. A deep break from the London pace.",
    hours: "Mon - Sun: 7:00 AM - 9:00 PM",
    image: "/images/loc-london.png",
  },
  {
    city: "New York",
    country: "USA",
    desc: "For a city that never sleeps, The Cocoon offers exactly what it needs: stillness. Moody, earthy, and intimate.",
    hours: "Mon - Sun: 6:00 AM - 11:00 PM",
    image: "/images/loc-newyork.png",
  },
  {
    city: "Toronto",
    country: "Canada",
    desc: "Warm, multicultural, inclusive. Heavy timber and lush plants adapt to Toronto's beautiful diversity.",
    hours: "Mon - Sun: 8:00 AM - 9:00 PM",
    image: "/images/loc-toronto.png",
  },
  {
    city: "Dubai",
    country: "UAE",
    desc: "Opulent yet deeply warm. Gold accents and dark wood with Middle Eastern influence. Luxury as a language of care.",
    hours: "Mon - Sun: 9:00 AM - 12:00 AM",
    image: "/images/loc-dubai.png",
  },
  {
    city: "Johannesburg",
    country: "South Africa",
    desc: "Vibrant but inherently warm. African art, earth tones, and a celebration of Black excellence and wellness.",
    hours: "Mon - Sun: 8:00 AM - 8:00 PM",
    image: "/images/loc-johannesburg.png",
  },
  {
    city: "Paris",
    country: "France",
    desc: "Dim, sophisticated, quiet. Deep vintage warmth meets absolute serenity in the French capital.",
    hours: "Mon - Sun: 9:00 AM - 8:00 PM",
    image: "/images/loc-paris.png",
  }
];

export default function Locations() {
  return (
    <div className="min-h-screen bg-background md:pl-20 pt-0 pb-20 md:pb-0">
      <Navbar />
      <BackNav />
      <div className="pt-16 md:pt-32 pb-32">
        <div className="container mx-auto px-6 lg:px-12 text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-serif text-6xl md:text-7xl text-foreground mb-8">7 Sanctuaries.<br/><span className="text-primary">One Cocoon.</span></h1>
            <p className="text-xl text-foreground/80 font-light leading-relaxed">
              From our first home in Lagos to the heart of Paris. Wherever you are in the world, the exact same unhurried warmth awaits you.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col">
          {locations.map((loc, idx) => (
            <motion.div 
              key={loc.city}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full min-h-[70vh] relative flex items-center border-b border-background last:border-0"
            >
              <img src={loc.image} alt={`${loc.city} Branch`} className="absolute inset-0 w-full h-full object-cover" onError={(e) => e.currentTarget.src='/images/hero.png'} />
              <div className="absolute inset-0 bg-background/80 lg:bg-gradient-to-r lg:from-background lg:via-background/80 lg:to-transparent" />
              
              <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col justify-center py-24">
                <div className="max-w-2xl">
                  <div className="text-sm font-medium tracking-widest uppercase text-primary mb-4 flex items-center gap-3">
                    <div className="w-10 h-[1px] bg-primary"></div>
                    {loc.country}
                  </div>
                  <h2 className="font-serif text-6xl md:text-7xl mb-6 text-foreground">{loc.city}</h2>
                  <p className="text-2xl text-foreground/90 font-light mb-10 italic font-serif">"{loc.desc}"</p>
                  
                  <div className="bg-card/50 backdrop-blur-md border border-border p-6 rounded-2xl mb-10 inline-block">
                    <h4 className="font-sans font-medium text-xs text-foreground/60 mb-2 uppercase tracking-wider">Opening Hours</h4>
                    <p className="text-foreground text-lg">{loc.hours}</p>
                  </div>
                  
                  <div>
                    <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-lg shadow-xl">
                      <a href={`mailto:koredetanimowo2@gmail.com?subject=Enquiry - ${loc.city} Branch&body=Hello, I would like to enquire about the ${loc.city} Branch.%0A%0AName:%0APreferred Services:%0APreferred Dates:`}>
                        Contact {loc.city} Branch
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}