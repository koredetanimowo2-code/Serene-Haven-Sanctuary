import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { AddToCartButton } from "@/components/AddToCartButton";
import { BackNav } from "@/components/layout/BackNav";

const services = [
  { id: "hair-natural", name: "Natural & Coily", price: "from ₦18,000 / $35 / £28", priceNaira: 18000, priceUSD: 35, priceGBP: 28, desc: "Deep treatments, moisture, definition for 4C, 4B, and kinky hair.", img: "/images/hair-coils.png" },
  { id: "hair-locs", name: "Locs & Sisterlocs", price: "from ₦23,000 / $45 / £36", priceNaira: 23000, priceUSD: 45, priceGBP: 36, desc: "Retwist, interlock, repair, and maintenance with gentle care.", img: "/images/hair-locs.png" },
  { id: "hair-curly", name: "Curly & Wavy", price: "from ₦18,000 / $35 / £28", priceNaira: 18000, priceUSD: 35, priceGBP: 28, desc: "Curl definition, hydration, and frizz control for 2A–3C textures.", img: "/images/hair-red.png" },
  { id: "hair-alopecia", name: "Alopecia Care", price: "from ₦25,000 / $50 / £40", priceNaira: 25000, priceUSD: 50, priceGBP: 40, desc: "Gentle scalp therapy, specialist treatments, a safe space with no judgment.", img: "/images/hair-alopecia.png" },
  { id: "hair-color", name: "Colour-Treated", price: "from ₦20,000 / $40 / £32", priceNaira: 20000, priceUSD: 40, priceGBP: 32, desc: "Toning, repair, and colour-safe treatments for blonde, red, or ginger hair.", img: "/images/hair-blonde.png" },
  { id: "hair-fine", name: "Fine & Straight", price: "from ₦15,000 / $30 / £24", priceNaira: 15000, priceUSD: 30, priceGBP: 24, desc: "Volume, strength, and scalp health for delicate textures.", img: "/images/hair-studio.png" },
  { id: "hair-chem", name: "Chemically Processed", price: "from ₦20,000 / $40 / £32", priceNaira: 20000, priceUSD: 40, priceGBP: 32, desc: "Repair, transition, and restoration for relaxed or treated hair.", img: "/images/hair-studio.png" },
  { id: "hair-kids", name: "Children's Hair", price: "from ₦10,000 / $20 / £16", priceNaira: 10000, priceUSD: 20, priceGBP: 16, desc: "Patient, gentle, child-safe styling and care.", img: "/images/hair-studio.png" }
];

export default function HairStudio() {
  return (
    <div className="min-h-screen bg-background md:pl-20 pt-0 pb-20 md:pb-0">
      <Navbar />
      <BackNav />
      
      <section className="relative h-[80vh] flex items-end pb-24">
        <img src="/images/hair-studio.png" alt="Hair Studio" className="absolute inset-0 w-full h-full object-cover" onError={e=>e.currentTarget.src='/images/hero.png'} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-6xl md:text-8xl text-foreground mb-6"
          >
            Every Crown.<br/><span className="text-primary">Deserves Devotion.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-foreground/90 font-serif italic max-w-3xl"
          >
            Whether your hair is 4C coils, loose waves, flame-red curls, or a scalp that has known loss — you belong here. We are hair experts for every texture, every type, every story.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12 text-center mb-16">
          <h2 className="font-serif text-4xl text-foreground">We Specialise In</h2>
        </div>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-6"
              >
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg relative">
                  <img src={service.img} alt={service.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" onError={e=>e.currentTarget.src='/images/hair-studio.png'} />
                </div>
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <h3 className="font-serif text-3xl text-foreground">{service.name}</h3>
                      <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium tracking-wide whitespace-nowrap">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-foreground/70 text-lg font-light leading-relaxed mb-6">{service.desc}</p>
                  </div>
                  <AddToCartButton item={{ ...service, world: "Hair Studio" }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}