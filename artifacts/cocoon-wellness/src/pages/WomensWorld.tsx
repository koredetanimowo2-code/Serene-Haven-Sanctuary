import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { AddToCartButton } from "@/components/AddToCartButton";

const services = [
  { id: "women-massage", name: "Signature Full Body Massage", price: "from ₦25,000 / $45 / £35", priceNaira: 25000, priceUSD: 45, priceGBP: 35, desc: "Deep tissue relief, hot towels, custom aromatherapy oils.", img: "/images/service-women.png" },
  { id: "women-mani", name: "Luxury Manicure", price: "from ₦9,000 / $18 / £14", priceNaira: 9000, priceUSD: 18, priceGBP: 14, desc: "Nail shaping, cuticle care, gel or classic polish, warm hand massage.", img: "/images/service-women.png" },
  { id: "women-pedi", name: "Luxury Pedicure", price: "from ₦10,000 / $20 / £16", priceNaira: 10000, priceUSD: 20, priceGBP: 16, desc: "Soothing foot soak with rose petals, scrub, nail care, polish.", img: "/images/service-women.png" },
  { id: "women-facial", name: "Glow Facial", price: "from ₦18,000 / $35 / £28", priceNaira: 18000, priceUSD: 35, priceGBP: 28, desc: "Deep cleanse, steam, exfoliation, mask, moisturize, lymphatic massage.", img: "/images/service-women.png" },
  { id: "women-waxing", name: "Full Body Waxing", price: "from ₦15,000 / $30 / £24", priceNaira: 15000, priceUSD: 30, priceGBP: 24, desc: "Gentle, professional, using premium skin-kind wax formulas in complete privacy.", img: "/images/service-women.png" },
  { id: "women-stone", name: "Hot Stone Therapy", price: "from ₦28,000 / $55 / £44", priceNaira: 28000, priceUSD: 55, priceGBP: 44, desc: "Heated volcanic stones, pressure point work, full back release.", img: "/images/service-women.png" },
  { id: "women-aroma", name: "Aromatherapy Ritual", price: "from ₦20,000 / $40 / £32", priceNaira: 20000, priceUSD: 40, priceGBP: 32, desc: "Custom-blended essential oils, 60-minute full body sensory experience.", img: "/images/service-women.png" }
];

export default function WomensWorld() {
  return (
    <div className="min-h-screen bg-background md:pl-20">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[80vh] flex items-end pb-24">
        <img src="/images/service-women.png" alt="Women's World" className="absolute inset-0 w-full h-full object-cover" onError={e=>e.currentTarget.src='/images/hero.png'} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-6xl md:text-8xl text-foreground mb-6"
          >
            Your World.<br/><span className="text-primary">Your Rules.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-foreground/90 font-serif italic max-w-3xl"
          >
            She arrives carrying everything. She leaves carrying only herself.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
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
                  <img src={service.img} alt={service.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" onError={e=>e.currentTarget.src='/images/service-women.png'} />
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
                  <AddToCartButton item={{ ...service, world: "Women's World" }} />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 p-12 md:p-16 bg-card rounded-[3rem] border border-border text-center shadow-xl"
          >
            <h2 className="font-serif text-4xl mb-6 text-foreground">Recently had a baby?</h2>
            <p className="text-xl text-foreground/80 font-light mb-10 max-w-2xl mx-auto">We have a dedicated space just for you. No expectations, pure healing, absolute safety.</p>
            <Link href="/services/postpartum" className="inline-flex items-center gap-3 text-primary text-xl font-serif hover:gap-5 transition-all">
              Enter the Postpartum Suite <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}