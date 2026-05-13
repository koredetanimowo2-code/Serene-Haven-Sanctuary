import { motion } from "framer-motion";

const services = [
  {
    category: "Women",
    description: "Deep restoration and beauty rituals.",
    image: "/images/service-women.png",
    items: ["Manicure & Pedicure", "Full Body Massage", "Facials", "Waxing", "Nail Art"],
  },
  {
    category: "Men",
    description: "Refined grooming and stress relief.",
    image: "/images/service-men.png",
    items: ["Massage Therapy", "Grooming", "Manicure & Pedicure", "Facial Treatments"],
  },
  {
    category: "Children",
    description: "Gentle care for the little ones.",
    image: "/images/service-kids.png",
    items: ["Gentle Spa Treatments", "Mini-Manicure", "Relaxation Experiences"],
  },
  {
    category: "Pets",
    description: "Luxury pampering for companions.",
    image: "/images/service-pets.png",
    items: ["Pet Grooming", "Spa Baths", "Nail Trimming", "Coat Treatments"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-foreground mb-6"
          >
            Care For Every Soul
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            The Cocoon is a refuge designed for the entire family. Every treatment is a deliberate act of care, tailored to restore harmony to your specific rhythm.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-card border border-card-border shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={service.image} 
                  alt={`${service.category} spa service`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-3xl font-serif text-white drop-shadow-md">{service.category}</h3>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-sm font-medium text-primary mb-6">{service.description}</p>
                <ul className="space-y-3 flex-grow">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start text-foreground/80 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
