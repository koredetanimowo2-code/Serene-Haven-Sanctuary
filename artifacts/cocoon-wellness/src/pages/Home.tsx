import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, Star, Shield, Moon, Clock, Bed, Droplets, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src="/images/hero.png" alt="The Cocoon Sanctuary" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-background mb-6"
          >
            Step In. The World Stops Here.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl text-background/90 mb-10 max-w-2xl mx-auto font-light"
          >
            A complete universe of restoration — for every person, every age, every need.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg w-full sm:w-auto">
              <Link href="/services">Enter Our World</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent border-background text-background hover:bg-background/10 px-8 py-6 text-lg w-full sm:w-auto">
              <Link href="/stay">Book Your Stay</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img src="/images/philosophy.png" alt="Our Philosophy" className="rounded-3xl w-full h-[600px] object-cover shadow-lg" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Born in Nigeria. Felt worldwide.</h2>
              <p className="text-xl text-foreground/80 mb-8 italic font-serif">"Rest is not a reward. It is a right."</p>
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                <p>The Cocoon was built on a simple truth. We recognized that true rest is rare, and finding a space that honors your need for absolute silence, care, and safety is even rarer.</p>
                <p>From Lagos to London, from Accra to Abu Dhabi, every Cocoon branch wraps you in the same unhurried warmth. We speak to the Nigerian soul at our heart — hospitable, deeply caring, and utterly devoted to your well-being.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Six Worlds Teaser */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Our Six Worlds</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg">A sanctuary designed with intentionality. Which world do you need today?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Women's World", image: "/images/service-women.png", link: "/services" },
              { title: "Men's World", image: "/images/service-men.png", link: "/services" },
              { title: "Children's World", image: "/images/service-kids.png", link: "/services" },
              { title: "Pets' World", image: "/images/service-pets.png", link: "/services" },
              { title: "Hair Studio", image: "/images/hair-studio.png", link: "/services" },
              { title: "Sanctuary Spaces", image: "/images/sanctuary.png", link: "/services" },
            ].map((world, idx) => (
              <Link href={world.link} key={idx} className="group relative block h-[400px] rounded-3xl overflow-hidden">
                <img src={world.image} alt={world.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/20 transition-colors" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="font-serif text-3xl text-background mb-2">{world.title}</h3>
                  <span className="text-background/80 flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    Explore <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-32 bg-secondary/10">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-center text-foreground mb-16">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Fully Soundproofed Rooms", desc: "Absolute silence when you need it most." },
              { icon: Bed, title: "VIP & Exclusive Suites", desc: "Private wings for total immersion." },
              { icon: Moon, title: "Deaf & Blind-Friendly", desc: "Designed for all sensory needs." },
              { icon: Star, title: "Autism-Friendly Spaces", desc: "Predictable, low-stimulation environments." },
            ].map((feature, idx) => (
              <div key={idx} className="bg-background p-8 rounded-3xl text-center shadow-sm">
                <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                  <feature.icon size={32} />
                </div>
                <h4 className="font-serif text-xl mb-3 text-foreground">{feature.title}</h4>
                <p className="text-foreground/70 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Teaser */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="bg-foreground rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-stretch">
            <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
              <h2 className="font-serif text-4xl md:text-5xl text-background mb-6">Don't Just Visit. Stay.</h2>
              <p className="text-background/80 text-lg mb-10">Experience the depth of rest with our 3, 5, and 7-day immersion packages. Wake up inside the Cocoon.</p>
              <div>
                <Button asChild size="lg" className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="/stay">View Packages</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 h-[400px] md:h-auto relative">
              <img src="/images/stay-standard.png" alt="Stay with us" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl mb-16 text-foreground">Felt Worldwide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-background rounded-3xl shadow-sm italic">
              <p className="text-foreground/80 mb-6">"I arrived exhausted. I left feeling like I had been put back together piece by piece. The silence in the Dark Room changed my life."</p>
              <div className="font-serif text-primary">— Sarah, London</div>
            </div>
            <div className="p-8 bg-background rounded-3xl shadow-sm italic">
              <p className="text-foreground/80 mb-6">"The only place in the city where nobody expects anything from me. It's truly a sanctuary."</p>
              <div className="font-serif text-primary">— Ade, Lagos</div>
            </div>
            <div className="p-8 bg-background rounded-3xl shadow-sm italic">
              <p className="text-foreground/80 mb-6">"Finally, a luxury spa that understands accessibility isn't just a ramp, it's a culture of care."</p>
              <div className="font-serif text-primary">— Maria, Toronto</div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Teaser */}
      <section className="py-32 overflow-hidden">
        <div className="container mx-auto px-6 text-center mb-12">
          <h2 className="font-serif text-4xl text-foreground mb-4">7 Sanctuaries. One Cocoon.</h2>
          <Link href="/locations" className="text-primary hover:underline font-medium">Explore all locations</Link>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-8 px-6 snap-x snap-mandatory hide-scrollbar">
          {['Lagos', 'London', 'New York', 'Toronto', 'Dubai', 'Johannesburg', 'Paris'].map((city, idx) => (
            <div key={idx} className="shrink-0 w-64 sm:w-80 h-96 relative rounded-3xl overflow-hidden snap-center group">
              <img src={`/images/loc-${city.toLowerCase().replace(' ', '')}.png`} alt={city} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.src = '/images/sanctuary.png' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-left">
                <h3 className="font-serif text-2xl text-background">{city}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}