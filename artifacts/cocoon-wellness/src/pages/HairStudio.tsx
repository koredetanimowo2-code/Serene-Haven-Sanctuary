import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

const services = [
  { name: "Natural Hair Treatment", price: "from ₦18,000 / $35 / £28", desc: "Deep conditioning, warm steam therapy, slow scalp massage, and perfect definition.", img: "/images/hair-studio-1.png" },
  { name: "Protective Styling (Braids)", price: "from ₦25,000 / $50 / £40", desc: "Painless knotless, beautiful box braids, cornrows, and feed-ins done with extreme care.", img: "/images/hair-studio-2.png" },
  { name: "Loc Maintenance", price: "from ₦23,000 / $45 / £36", desc: "Gentle retwist, interlock, deep loc moisturizing, and intensive scalp care.", img: "/images/hair-studio-3.png" },
  { name: "Hot Oil Treatment", price: "from ₦13,000 / $25 / £20", desc: "Warm rich oils for scalp nourishment, growth stimulation, and hair shaft strength.", img: "/images/hair-studio-4.png" },
  { name: "Scalp Therapy", price: "from ₦15,000 / $30 / £24", desc: "Targeted clinical treatment for dry scalp, dandruff, and product buildup relief.", img: "/images/hair-studio-5.png" },
  { name: "Relaxer & Texturizer", price: "from ₦20,000 / $40 / £32", desc: "Expert, careful application prioritizing scalp health, followed by deep conditioning and style.", img: "/images/hair-studio-6.png" },
  { name: "Big Chop & Transition Consultation", price: "from ₦10,000 / $20 / £16", desc: "Compassionate, patient guidance, emotional support, and brilliant styling advice for the journey.", img: "/images/hair-studio-7.png" }
];

export default function HairStudio() {
  return (
    <div className="min-h-screen bg-background md:pl-20">
      <Navbar />
      
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
            Your Crown.<br/><span className="text-primary">Our Devotion.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-foreground/90 font-serif italic max-w-3xl"
          >
            A profound celebration of Black hair in all its glorious forms.
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
                  <img src={service.img} alt={service.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" onError={e=>e.currentTarget.src='/images/hair-studio.png'} />
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