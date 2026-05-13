import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Stay() {
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
            <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Don't Just Visit. Stay.</h1>
            <p className="text-lg text-foreground/80 italic mb-4">Why rush restoration?</p>
            <p className="text-foreground/70">Our multi-day stays let you go deeper. Wake up inside the Cocoon. Step into your treatments. Sleep in silence. Leave transformed.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {/* Standard Stay */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-sm"
            >
              <img src="/images/stay-standard.png" alt="Standard Stay" className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="font-serif text-2xl text-primary mb-4">Standard Stay</h3>
                <ul className="space-y-4 mb-8 text-sm">
                  <li className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-medium">3 Days</span>
                    <span className="text-right"><span className="block text-primary">from $250 / £200 / ₦130,000</span><span className="text-xs text-foreground/60">Room, daily treatment (1/day), pool, breakfast</span></span>
                  </li>
                  <li className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-medium">5 Days</span>
                    <span className="text-right"><span className="block text-primary">from $380 / £300 / ₦195,000</span><span className="text-xs text-foreground/60">Same + extra treatments, therapist session</span></span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="font-medium">7 Days</span>
                    <span className="text-right"><span className="block text-primary">from $500 / £400 / ₦260,000</span><span className="text-xs text-foreground/60">Full immersion — full access</span></span>
                  </li>
                </ul>
                <Button asChild className="w-full rounded-full bg-primary" data-testid="book-standard">
                  <Link href="/book">Book Standard Stay</Link>
                </Button>
              </div>
            </motion.div>

            {/* VIP Suite */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-2xl overflow-hidden shadow-sm border border-secondary/20 relative"
            >
              <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full z-10">Popular</div>
              <img src="/images/stay-vip.png" alt="VIP Suite" className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="font-serif text-2xl text-primary mb-4">VIP Suite</h3>
                <ul className="space-y-4 mb-8 text-sm">
                  <li className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-medium">3 Days</span>
                    <span className="text-right"><span className="block text-primary">from $480 / £380 / ₦250,000</span><span className="text-xs text-foreground/60">Private suite, dedicated attendant</span></span>
                  </li>
                  <li className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-medium">5 Days</span>
                    <span className="text-right"><span className="block text-primary">from $720 / £580 / ₦375,000</span><span className="text-xs text-foreground/60">Private pool access slots, exclusive menu</span></span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="font-medium">7 Days</span>
                    <span className="text-right"><span className="block text-primary">from $950 / £760 / ₦495,000</span><span className="text-xs text-foreground/60">Total immersion, private therapist, concierge</span></span>
                  </li>
                </ul>
                <Button asChild className="w-full rounded-full bg-primary" data-testid="book-vip">
                  <Link href="/book">Book VIP Suite</Link>
                </Button>
              </div>
            </motion.div>

            {/* Exclusive Suite */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card rounded-2xl overflow-hidden shadow-sm"
            >
              <img src="/images/stay-vip.png" alt="Exclusive Suite" className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="font-serif text-2xl text-primary mb-4">Exclusive Suite</h3>
                <p className="text-xs text-foreground/60 mb-4 italic">For complete privacy — no shared spaces</p>
                <ul className="space-y-4 mb-8 text-sm">
                  <li className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-medium">3 Days</span>
                    <span className="text-right"><span className="block text-primary">from $800 / £640 / ₦415,000</span><span className="text-xs text-foreground/60">Entirely private wing, meals in suite</span></span>
                  </li>
                  <li className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-medium">5 Days</span>
                    <span className="text-right"><span className="block text-primary">from $1,200 / £960 / ₦625,000</span><span className="text-xs text-foreground/60">Full private experience, private pool</span></span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="font-medium">7 Days</span>
                    <span className="text-right"><span className="block text-primary">from $1,600 / £1,280 / ₦830,000</span><span className="text-xs text-foreground/60">The fullest expression — completely yours</span></span>
                  </li>
                </ul>
                <Button asChild className="w-full rounded-full bg-primary" data-testid="book-exclusive">
                  <Link href="/book">Book Exclusive Suite</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl mb-6 text-foreground">Room Features</h2>
              <p className="text-foreground/70 mb-8">Every room in The Cocoon is designed to insulate you from the noise of the world. Expect nothing less than perfect quiet and deep rest.</p>
              <div className="grid grid-cols-2 gap-4">
                {["Fully Soundproofed", "Blackout Curtains", "Climate Control", "Premium Linen", "Private Bathroom", "In-Room Refreshments"].map(feature => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary/5 p-10 rounded-3xl">
              <h2 className="font-serif text-3xl mb-6 text-primary">Accessibility</h2>
              <p className="text-foreground/80 italic mb-6">"We built The Cocoon for every body. Your access needs are not an afterthought — they are part of the design."</p>
              <ul className="space-y-3 text-foreground/70">
                <li>• Wheelchair accessible throughout all buildings</li>
                <li>• Braille menus and signage</li>
                <li>• Sign language staff on request</li>
                <li>• Visual alarm systems for deaf guests</li>
                <li>• Sensory-friendly rooms available</li>
                <li>• Trained staff for all accessibility needs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}