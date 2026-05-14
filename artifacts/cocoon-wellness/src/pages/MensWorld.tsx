import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { AddToCartButton } from "@/components/AddToCartButton";

const services = [
  { id: "mens-massage", name: "Deep Tissue Sports Massage", price: "from ₦25,000 / $45 / £35", priceNaira: 25000, priceUSD: 45, priceGBP: 35, desc: "For tired muscles, deep tension release, and accelerated recovery.", img: "/images/service-men-1.png" },
  { id: "mens-classic", name: "Classic Body Massage", price: "from ₦20,000 / $38 / £30", priceNaira: 20000, priceUSD: 38, priceGBP: 30, desc: "A slow, methodical Swedish technique for absolute mental and physical relaxation.", img: "/images/service-men-2.png" },
  { id: "mens-facial", name: "Executive Facial", price: "from ₦16,000 / $32 / £25", priceNaira: 16000, priceUSD: 32, priceGBP: 25, desc: "Deep cleanse, hot towel prep, hydration, and targeted anti-aging care.", img: "/images/service-men-3.png" },
  { id: "mens-mani-pedi", name: "Gentleman's Manicure & Pedicure", price: "from ₦13,000 / $25 / £20", priceNaira: 13000, priceUSD: 25, priceGBP: 20, desc: "Clean, precise, buffed to perfection. Dead skin removal and deep moisturization.", img: "/images/service-men-4.png" },
  { id: "mens-shave", name: "Beard Grooming & Hot Towel Shave", price: "from ₦10,000 / $20 / £16", priceNaira: 10000, priceUSD: 20, priceGBP: 16, desc: "Traditional straight razor, steaming hot towel, premium beard oils.", img: "/images/service-men-5.png" },
  { id: "mens-back", name: "Back & Shoulder Treatment", price: "from ₦18,000 / $35 / £28", priceNaira: 18000, priceUSD: 35, priceGBP: 28, desc: "Targeted tension relief for desk workers and lifters. Heated pads and deep oil massage.", img: "/images/service-men-6.png" },
  { id: "mens-wrap", name: "Detox Aromatherapy Wrap", price: "from ₦26,000 / $50 / £40", priceNaira: 26000, priceUSD: 50, priceGBP: 40, desc: "Full body wrap to draw out impurities, steam, and a complete detox experience.", img: "/images/service-men-7.png" },
  { id: "mens-therapy", name: "One-on-One Therapy Session", price: "from ₦22,000 / $42 / £34", priceNaira: 22000, priceUSD: 42, priceGBP: 34, desc: "A private session with a licensed therapist. Come with everything. Leave lighter.", img: "/images/men-therapy.png" },
  { id: "mens-group", name: "Group Sharing Circle", price: "from ₦10,000 / $20 / £16", priceNaira: 10000, priceUSD: 20, priceGBP: 16, desc: "A small, confidential group for men to speak freely. Facilitated gently.", img: "/images/service-men.png" }
];

export default function MensWorld() {
  return (
    <div className="min-h-screen bg-background md:pl-20">
      <Navbar />
      
      <section className="relative h-[80vh] flex items-end pb-24">
        <img src="/images/service-men.png" alt="Men's World" className="absolute inset-0 w-full h-full object-cover" onError={e=>e.currentTarget.src='/images/hero.png'} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-6xl md:text-8xl text-foreground mb-6"
          >
            A Man's Rest.<br/><span className="text-primary">Is Sacred.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-foreground/90 font-serif italic max-w-3xl"
          >
            No noise. No rush. Just deep restoration.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl text-center mx-auto">
            <h2 className="font-serif text-4xl text-foreground mb-6">A Space to Be Heard</h2>
            <p className="text-xl text-foreground/80 font-light leading-relaxed">
              Before you are a man, you are a human. And humans carry weight. At The Cocoon, we believe that unburdening is not a weakness — it is one of the bravest things a person can do. Our licensed therapist is here. No agenda. No performance. Just space to put it down.
            </p>
          </motion.div>
        </div>
      </section>

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
                  <img src={service.img} alt={service.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" onError={e=>e.currentTarget.src='/images/service-men.png'} />
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
                  <AddToCartButton item={{ ...service, world: "Men's World" }} />
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