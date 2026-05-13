import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";

export default function Stay() {
  return (
    <div className="min-h-screen bg-background md:pl-20">
      <Navbar />
      <div className="pt-32 pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-24"
          >
            <h1 className="font-serif text-6xl md:text-7xl text-foreground mb-8">Don't Just Visit. Stay.</h1>
            <p className="text-2xl text-foreground/80 italic font-serif mb-8">Why rush restoration?</p>
            <p className="text-lg text-foreground/70 font-light leading-relaxed mb-6">
              Our multi-day stays let you go deeper. Wake up inside the Cocoon. Step directly into your treatments. Sleep in absolute silence. Leave completely transformed.
            </p>
            <div className="bg-card p-6 rounded-2xl border border-border inline-block text-left">
              <h4 className="font-serif text-xl mb-2 text-primary">For Solo Travellers</h4>
              <p className="text-foreground/70 font-light">You don't need a companion to choose rest. Solo guests are some of our most beloved — they come fully open, and they leave fully themselves.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border p-12 md:p-16 rounded-[3rem] mb-24 text-center max-w-5xl mx-auto shadow-lg"
          >
            <h2 className="font-serif text-4xl text-primary mb-6">Phone-Free Meals</h2>
            <p className="text-xl text-foreground/80 font-light leading-relaxed">
              Twice a day, we sit together without screens. Breakfast and dinner are served in the quiet dining room — no phones, just food, warmth, and real conversation. Or, if you prefer, eat alone in your room with nothing but the sound of birds.
            </p>
          </motion.div>

          <div className="space-y-24 mb-32">
            {/* Standard Stay */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row gap-12 items-center"
            >
              <div className="lg:w-1/2 w-full">
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative">
                  <img src="/images/stay-standard.png" alt="Standard Stay" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <h3 className="font-serif text-5xl text-foreground mb-4">Standard Stay</h3>
                <p className="text-foreground/70 text-lg mb-8 font-light">A beautifully lit, homey bedroom. Warm rugs, books, plants, earth tones. Not a hotel room — a sanctuary.</p>
                
                <div className="space-y-6 mb-10">
                  <div className="p-6 bg-card rounded-2xl border border-border">
                    <div className="flex justify-between items-center mb-2"><h4 className="font-serif text-2xl">3 Days</h4><span className="text-primary font-medium">from ₦130,000 / $250 / £200</span></div>
                    <p className="text-foreground/60 text-sm">Room + 1 daily treatment + pool + reading room + breakfast</p>
                  </div>
                  <div className="p-6 bg-card rounded-2xl border border-border">
                    <div className="flex justify-between items-center mb-2"><h4 className="font-serif text-2xl">5 Days</h4><span className="text-primary font-medium">from ₦195,000 / $380 / £300</span></div>
                    <p className="text-foreground/60 text-sm">+ Extra treatments + therapist session + nature walk</p>
                  </div>
                  <div className="p-6 bg-card rounded-2xl border border-border bg-primary/5 border-primary/20">
                    <div className="flex justify-between items-center mb-2"><h4 className="font-serif text-2xl">7 Days</h4><span className="text-primary font-medium">from ₦260,000 / $500 / £400</span></div>
                    <p className="text-foreground/60 text-sm">Full immersion — daily treatments + hair studio + therapist + nature walk + full access</p>
                  </div>
                </div>
                <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-primary h-14 px-10 text-lg">
                  <Link href="/book">Book Standard Stay</Link>
                </Button>
              </div>
            </motion.div>

            {/* VIP Suite */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row-reverse gap-12 items-center"
            >
              <div className="lg:w-1/2 w-full">
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative">
                  <img src="/images/stay-vip.png" alt="VIP Suite" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay" />
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <h3 className="font-serif text-5xl text-foreground mb-4">VIP Suite</h3>
                <p className="text-foreground/70 text-lg mb-8 font-light">A more luxurious but deeply homey suite. Rich textures, warm light, expansive space to breathe.</p>
                
                <div className="space-y-6 mb-10">
                  <div className="p-6 bg-card rounded-2xl border border-border">
                    <div className="flex justify-between items-center mb-2"><h4 className="font-serif text-2xl">3 Days</h4><span className="text-primary font-medium">from ₦250,000 / $480 / £380</span></div>
                    <p className="text-foreground/60 text-sm">Private suite + attendant + premium treatments + champagne welcome</p>
                  </div>
                  <div className="p-6 bg-card rounded-2xl border border-border">
                    <div className="flex justify-between items-center mb-2"><h4 className="font-serif text-2xl">5 Days</h4><span className="text-primary font-medium">from ₦375,000 / $720 / £580</span></div>
                    <p className="text-foreground/60 text-sm">+ Private pool slots + exclusive menu</p>
                  </div>
                  <div className="p-6 bg-card rounded-2xl border border-border bg-primary/5 border-primary/20">
                    <div className="flex justify-between items-center mb-2"><h4 className="font-serif text-2xl">7 Days</h4><span className="text-primary font-medium">from ₦495,000 / $950 / £760</span></div>
                    <p className="text-foreground/60 text-sm">Total immersion + private therapist + Hair Studio + concierge</p>
                  </div>
                </div>
                <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-primary h-14 px-10 text-lg">
                  <Link href="/book">Book VIP Suite</Link>
                </Button>
              </div>
            </motion.div>

            {/* Exclusive Suite */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row gap-12 items-center"
            >
              <div className="lg:w-1/2 w-full">
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative">
                  <img src="/images/stay-exclusive.png" alt="Exclusive Suite" className="absolute inset-0 w-full h-full object-cover" onError={(e) => e.currentTarget.src='/images/stay-vip.png'} />
                  <div className="absolute inset-0 bg-background/10 mix-blend-overlay" />
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <h3 className="font-serif text-5xl text-foreground mb-4">Exclusive Suite</h3>
                <p className="text-foreground/70 text-lg mb-8 font-light">The most private, intimate suite. Deeply warm, entirely self-contained. A true private sanctuary.</p>
                
                <div className="space-y-6 mb-10">
                  <div className="p-6 bg-card rounded-2xl border border-border">
                    <div className="flex justify-between items-center mb-2"><h4 className="font-serif text-2xl">3 Days</h4><span className="text-primary font-medium">from ₦415,000 / $800 / £640</span></div>
                    <p className="text-foreground/60 text-sm">Private wing + private entrance + dedicated team + in-suite meals</p>
                  </div>
                  <div className="p-6 bg-card rounded-2xl border border-border">
                    <div className="flex justify-between items-center mb-2"><h4 className="font-serif text-2xl">5 Days</h4><span className="text-primary font-medium">from ₦625,000 / $1,200 / £960</span></div>
                    <p className="text-foreground/60 text-sm">+ Private pool daily</p>
                  </div>
                  <div className="p-6 bg-card rounded-2xl border border-border bg-primary/5 border-primary/20">
                    <div className="flex justify-between items-center mb-2"><h4 className="font-serif text-2xl">7 Days</h4><span className="text-primary font-medium">from ₦830,000 / $1,600 / £1,280</span></div>
                    <p className="text-foreground/60 text-sm">Completely yours. Total privacy. Perfect silence.</p>
                  </div>
                </div>
                <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-primary h-14 px-10 text-lg">
                  <Link href="/book">Book Exclusive Suite</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start border-t border-border pt-24">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-serif text-4xl mb-8 text-foreground">Room Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {["Fully Soundproofed", "Blackout Curtains", "Climate Control", "Premium Linen", "Private Bathroom", "In-Room Refreshments", "No-Knock Hours"].map(feature => (
                  <div key={feature} className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-foreground/90 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-card p-8 rounded-3xl border border-border">
                <h3 className="font-serif text-2xl mb-4 text-primary">Night-time Rituals</h3>
                <p className="text-foreground/80 font-light leading-relaxed">
                  Warm herbal tea delivered to your room at 9pm. A handwritten note from the team each morning. Turndown service with a small card bearing an encouraging word. Optional bedtime sound selection: rainfall, river, or absolute silence.
                </p>
              </div>
              <div className="mt-8 bg-card p-8 rounded-3xl border border-border">
                <h3 className="font-serif text-2xl mb-4 text-primary">Scent Menu</h3>
                <p className="text-foreground/80 font-light leading-relaxed mb-4">
                  Guests choose an ambient scent for their room on arrival.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Lagos Earth", "Forest at Dawn", "River Stone", "Garden After Rain", "Harmattan"].map(scent => (
                    <span key={scent} className="px-3 py-1 bg-background rounded-full text-sm border border-border">{scent}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-secondary p-12 rounded-[2.5rem] text-secondary-foreground shadow-xl">
              <h2 className="font-serif text-4xl mb-6">Accessibility</h2>
              <p className="text-secondary-foreground/90 italic mb-8 font-light text-xl">"We built The Cocoon for every body. Your access needs are not an afterthought — they are part of the design."</p>
              <ul className="space-y-4 text-secondary-foreground/80">
                <li className="flex gap-3"><Check className="text-primary" /> Wheelchair accessible throughout all buildings</li>
                <li className="flex gap-3"><Check className="text-primary" /> Braille menus and signage</li>
                <li className="flex gap-3"><Check className="text-primary" /> Sign language staff on request</li>
                <li className="flex gap-3"><Check className="text-primary" /> Visual alarm systems for deaf guests</li>
                <li className="flex gap-3"><Check className="text-primary" /> Sensory-friendly rooms available</li>
                <li className="flex gap-3"><Check className="text-primary" /> Trained staff for all accessibility needs</li>
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}