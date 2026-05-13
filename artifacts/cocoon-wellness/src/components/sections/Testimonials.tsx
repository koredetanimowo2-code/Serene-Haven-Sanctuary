import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I walked into the London branch completely burnt out. The warmth of the greeting alone lowered my shoulders. Best massage I've ever had.",
    name: "Sarah Jenkins",
    location: "London, UK",
  },
  {
    quote: "The Hair Studio in Lagos is unmatched. Finally, a luxury space that truly understands and celebrates natural 4C hair. An absolute gem.",
    name: "Chioma Adebayo",
    location: "Lagos, Nigeria",
  },
  {
    quote: "Took my golden retriever to the pet spa in Toronto while I had a facial. We both left feeling like royalty. Unbelievable attention to detail.",
    name: "Marcus Thorne",
    location: "Toronto, Canada",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Words from our Guests</h2>
          <p className="text-muted-foreground text-lg">
            Real stories of restoration from our sanctuaries around the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-card p-10 rounded-3xl border border-card-border relative"
            >
              <Quote className="text-primary/20 w-12 h-12 mb-6 absolute top-6 right-8" />
              <p className="text-foreground/90 leading-relaxed mb-8 text-lg font-light relative z-10">
                "{t.quote}"
              </p>
              <div>
                <p className="font-serif text-lg font-medium text-foreground">{t.name}</p>
                <p className="text-sm text-primary uppercase tracking-wider">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
