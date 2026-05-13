import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HairStudio() {
  return (
    <section id="hair-studio" className="relative py-32 bg-foreground text-background overflow-hidden">
      {/* Decorative large text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-5 pointer-events-none select-none flex">
        <h2 className="text-[20vw] font-serif whitespace-nowrap leading-none text-background">
          HERITAGE HERITAGE HERITAGE
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/hair-studio.png" 
                alt="Beautiful natural Black hair" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-white/20 rounded-3xl m-4 pointer-events-none" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-secondary font-medium tracking-widest uppercase text-sm mb-6 block">
              The Signature Studio
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 text-background">
              A Celebration of <br/>
              <span className="text-primary-foreground italic font-light">African Crown</span>
            </h2>
            
            <p className="text-lg text-background/80 leading-relaxed mb-8">
              Black hair is art, history, and identity. Our dedicated Hair Studio elevates natural hair care to a luxurious, restorative ritual. We don't just style; we nourish, celebrate, and preserve the integrity of your crown.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10 border-t border-background/20 pt-8">
              {[
                "Intricate Braiding", 
                "Loc Maintenance", 
                "Natural Hair Treatments", 
                "Protective Styling", 
                "Hot Oil Rituals", 
                "Deep Scalp Care"
              ].map((service, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-secondary" />
                  <span className="text-background/90">{service}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg" variant="outline" className="rounded-full px-8 bg-transparent text-background border-background hover:bg-background hover:text-foreground">
              <a href="#book">Book a Hair Consultation</a>
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
