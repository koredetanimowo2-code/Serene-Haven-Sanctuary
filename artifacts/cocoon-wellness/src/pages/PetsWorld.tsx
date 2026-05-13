import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

const services = [
  { name: "Luxury Spa Bath", price: "from ₦13,000 / $25 / £20", desc: "Premium pet-safe shampoo, conditioning, warm blow-dry, and a finishing spritz.", img: "/images/service-pets-1.png" },
  { name: "Coat Conditioning Treatment", price: "from ₦15,000 / $30 / £24", desc: "Deep condition, pain-free detangling, and a brilliant shine treatment.", img: "/images/service-pets-2.png" },
  { name: "Nail Trim & Paw Care", price: "from ₦8,000 / $15 / £12", desc: "Gentle trim, file, relaxing paw massage, and pad moisturization.", img: "/images/service-pets-3.png" },
  { name: "Full Grooming Session", price: "from ₦20,000 / $40 / £32", desc: "Bath, breed-specific cut and style, nails, and gentle ear clean.", img: "/images/service-pets-4.png" },
  { name: "Pet Aromatherapy", price: "from ₦10,000 / $20 / £16", desc: "Pet-safe essential oils diffused in a calm environment for deep relaxation.", img: "/images/service-pets-5.png" },
  { name: "Blueberry Facial", price: "from ₦9,000 / $18 / £14", desc: "Tear-free antioxidant facial scrub that brightens the coat and removes stains.", img: "/images/service-pets-6.png" },
  { name: "Calming Massage", price: "from ₦11,000 / $22 / £18", desc: "Gentle therapeutic touch designed specifically for anxious or older pets.", img: "/images/service-pets-7.png" }
];

export default function PetsWorld() {
  return (
    <div className="min-h-screen bg-background md:pl-20">
      <Navbar />
      
      <section className="relative h-[80vh] flex items-end pb-24">
        <img src="/images/service-pets.png" alt="Pets' World" className="absolute inset-0 w-full h-full object-cover" onError={e=>e.currentTarget.src='/images/hero.png'} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-6xl md:text-8xl text-foreground mb-6"
          >
            They Carry Our Calm.<br/><span className="text-primary">They Deserve Their Own.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-foreground/90 font-serif italic max-w-3xl"
          >
            Because they feel everything too. A sanctuary for your most loyal companions.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-6"
              >
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg relative">
                  <img src={service.img} alt={service.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" onError={e=>e.currentTarget.src='/images/service-pets.png'} />
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <h3 className="font-serif text-3xl text-foreground">{service.name}</h3>
                    <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium tracking-wide whitespace-nowrap">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-foreground/70 text-lg font-light leading-relaxed">{service.desc}</p>
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