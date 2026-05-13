import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

const services = [
  { name: "Mini Spa Day", price: "from ₦8,000 / $15 / £12", desc: "Gentle cleanse, mini child-safe facial, and pure relaxation time.", img: "/images/service-kids-1.png" },
  { name: "Tiny Toes Pedicure", price: "from ₦6,000 / $12 / £9", desc: "Warm foot soak, very gentle massage, and child-safe colourful polish.", img: "/images/service-kids-2.png" },
  { name: "Little Hands Manicure", price: "from ₦5,000 / $10 / £8", desc: "Nail shaping, gentle care, and fun non-toxic colors.", img: "/images/service-kids-3.png" },
  { name: "Gentle Back Massage", price: "from ₦9,000 / $18 / £14", desc: "Very light pressure, age-appropriate technique to calm busy nervous systems.", img: "/images/service-kids-4.png" },
  { name: "Sensory Play & Relaxation", price: "from ₦5,000 / $10 / £8", desc: "Guided relaxation with calming textures, soft sounds, and beautiful visuals.", img: "/images/service-kids-5.png" },
  { name: "Storytime Spa", price: "from ₦6,000 / $12 / £9", desc: "A beautiful story read aloud while the child receives a gentle hand or foot massage.", img: "/images/service-kids-6.png" },
  { name: "Calm & Colour Art Therapy", price: "from ₦5,000 / $10 / £8", desc: "Therapeutic art session in a quiet room with a trained gentle facilitator.", img: "/images/service-kids-7.png" }
];

export default function ChildrensWorld() {
  return (
    <div className="min-h-screen bg-background md:pl-20">
      <Navbar />
      
      <section className="relative h-[80vh] flex items-end pb-24">
        <img src="/images/service-kids.png" alt="Children's World" className="absolute inset-0 w-full h-full object-cover" onError={e=>e.currentTarget.src='/images/hero.png'} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-6xl md:text-8xl text-foreground mb-6"
          >
            Where Little Ones.<br/><span className="text-primary">Bloom.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-foreground/90 font-serif italic max-w-3xl"
          >
            A safe, gentle universe. Soft tones, rounded shapes, and complete care.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 p-12 md:p-16 bg-accent rounded-[3rem] border border-border shadow-lg"
          >
            <h2 className="font-serif text-4xl mb-6 text-accent-foreground">Autism-Friendly Rooms</h2>
            <div className="space-y-4 text-accent-foreground/90 text-lg font-light leading-relaxed max-w-4xl">
              <p>We understand that the world can be overwhelming. Our Autism-Friendly rooms are quiet, predictable, and strictly low-stimulation environments.</p>
              <p>Our staff are specially trained. There are no sudden sounds. Lighting is incredibly soft. Weighted blankets and sensory toys are available. The space is completely private, and we invite parents in warmly to ensure maximum comfort.</p>
            </div>
          </motion.div>

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
                  <img src={service.img} alt={service.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" onError={e=>e.currentTarget.src='/images/service-kids.png'} />
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