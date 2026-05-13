import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Parallax-like slow zoom */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.png')" }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        {/* Soft overlay to ensure text readability - warm gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/30" />
      </div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl"
        >
          <span className="inline-block mb-6 text-sm md:text-base font-medium uppercase tracking-[0.3em] text-primary bg-background/80 px-4 py-2 rounded-full backdrop-blur-sm">
            A Global Nigerian Sanctuary
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white drop-shadow-lg leading-[1.1] mb-8">
            Exhale. <br className="hidden md:block" />
            <span className="text-background">The world has paused.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed mb-12 drop-shadow-md">
            Step out of the noise and into the warmth. We offer total stress relief and restoration for you, your family, and your pets. Rooted in the quiet luxury of African hospitality.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground border-none">
              <a href="#book">Reserve Your Sanctuary</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg bg-background/20 backdrop-blur-md text-white border-white/40 hover:bg-background/40 hover:text-white">
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest text-white/80">Scroll</span>
        <motion.div
          className="w-[1px] h-12 bg-white/40 overflow-hidden relative"
        >
          <motion.div
            className="w-full h-1/2 bg-white absolute top-0"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
