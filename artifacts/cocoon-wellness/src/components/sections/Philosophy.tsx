import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-stretch gap-0">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-5/12 bg-primary text-primary-foreground p-12 md:p-20 flex flex-col justify-center rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none z-10 shadow-xl"
          >
            <span className="uppercase tracking-widest text-sm mb-8 opacity-80">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Rest is not a luxury. <br/>
              It is a necessity.
            </h2>
            <p className="text-lg opacity-90 leading-relaxed mb-6">
              Born in Nigeria, grown globally. The Cocoon was created from a profound understanding of African hospitality — the instinct to welcome, to nourish, and to restore. 
            </p>
            <p className="text-lg opacity-90 leading-relaxed">
              In a world that demands constant motion, we offer a rare commodity: stillness. Like the earth holding a seed, our spaces are designed to hold you until you are ready to emerge anew.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-7/12 relative min-h-[400px] lg:min-h-full rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none overflow-hidden -mt-6 lg:mt-0 lg:-ml-6"
          >
            <img 
              src="/images/philosophy.png" 
              alt="Warm terracotta textures" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
