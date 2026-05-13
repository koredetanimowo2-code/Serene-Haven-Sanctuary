import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";

const services = {
  women: [
    { name: "Signature Full Body Massage", price: "from $45 / £35 / ₦25,000", desc: "Deep tissue relief, hot towels, aromatherapy oils" },
    { name: "Luxury Manicure", price: "from $18 / £14 / ₦9,000", desc: "Nail shaping, cuticle care, gel or classic polish, hand massage" },
    { name: "Luxury Pedicure", price: "from $20 / £16 / ₦10,000", desc: "Foot soak, scrub, nail care, callus removal, polish" },
    { name: "Glow Facial", price: "from $35 / £28 / ₦18,000", desc: "Deep cleanse, exfoliation, mask, moisturize, lymphatic massage" },
    { name: "Full Body Waxing", price: "from $30 / £24 / ₦15,000", desc: "Gentle, professional, using skin-kind wax formulas" },
    { name: "Hot Stone Therapy", price: "from $55 / £44 / ₦28,000", desc: "Volcanic stones, pressure point work, full back treatment" },
    { name: "Aromatherapy Ritual", price: "from $40 / £32 / ₦20,000", desc: "Custom-blended essential oils, 60-minute full body experience" },
  ],
  men: [
    { name: "Deep Tissue Sports Massage", price: "from $45 / £35 / ₦25,000", desc: "For tired muscles, tension release, recovery" },
    { name: "Classic Body Massage", price: "from $38 / £30 / ₦20,000", desc: "Swedish technique, full relaxation" },
    { name: "Executive Facial", price: "from $32 / £25 / ₦16,000", desc: "Deep cleanse, hydration, anti-aging care" },
    { name: "Gentleman's Manicure & Pedicure", price: "from $25 / £20 / ₦13,000", desc: "Clean, precise, buffed to perfection" },
    { name: "Beard Grooming & Hot Towel Shave", price: "from $20 / £16 / ₦10,000", desc: "Traditional straight razor, hot towel, beard oil" },
    { name: "Back & Shoulder Treatment", price: "from $35 / £28 / ₦18,000", desc: "Targeted tension relief, heated pads, oil massage" },
    { name: "Detox Aromatherapy Wrap", price: "from $50 / £40 / ₦26,000", desc: "Body wrap, steam, full detox experience" },
  ],
  children: [
    { name: "Mini Spa Day", price: "from $15 / £12 / ₦8,000", desc: "Gentle cleanse, mini facial, relaxation time" },
    { name: "Tiny Toes Pedicure", price: "from $12 / £9 / ₦6,000", desc: "Foot soak, gentle massage, child-safe polish" },
    { name: "Little Hands Manicure", price: "from $10 / £8 / ₦5,000", desc: "Nail shaping, cuticle care, fun kid-safe colors" },
    { name: "Gentle Back Massage", price: "from $18 / £14 / ₦9,000", desc: "Light pressure, age-appropriate, calming" },
    { name: "Sensory Play & Relaxation", price: "from $10 / £8 / ₦5,000", desc: "Guided relaxation, calming textures and sounds" },
    { name: "Storytime Spa", price: "from $12 / £9 / ₦6,000", desc: "Story read aloud while child receives gentle hand/foot massage" },
    { name: "Calm & Colour Art Therapy", price: "from $10 / £8 / ₦5,000", desc: "Therapeutic art session with a trained facilitator" },
  ],
  pets: [
    { name: "Luxury Spa Bath", price: "from $25 / £20 / ₦13,000", desc: "Premium shampoo, condition, blow-dry, spritz" },
    { name: "Coat Conditioning Treatment", price: "from $30 / £24 / ₦15,000", desc: "Deep condition, detangle, shine treatment" },
    { name: "Nail Trim & Paw Care", price: "from $15 / £12 / ₦8,000", desc: "Trim, file, paw massage, moisturize" },
    { name: "Full Grooming Session", price: "from $40 / £32 / ₦20,000", desc: "Bath + cut + style + nails + ear clean" },
    { name: "Pet Aromatherapy", price: "from $20 / £16 / ₦10,000", desc: "Pet-safe essential oils, calm environment, relaxation" },
    { name: "Blueberry Facial", price: "from $18 / £14 / ₦9,000", desc: "Antioxidant facial scrub, coat brightening" },
    { name: "Calming Massage", price: "from $22 / £18 / ₦11,000", desc: "Gentle therapeutic touch for anxious or tired pets" },
  ],
  hair: [
    { name: "Natural Hair Treatment", price: "from $35 / £28 / ₦18,000", desc: "Deep condition, steam, scalp massage, definition" },
    { name: "Protective Styling (Braids)", price: "from $50 / £40 / ₦25,000", desc: "Knotless, box braids, cornrows, feed-ins" },
    { name: "Loc Maintenance", price: "from $45 / £36 / ₦23,000", desc: "Retwist, interlock, loc moisturizing, scalp care" },
    { name: "Hot Oil Treatment", price: "from $25 / £20 / ₦13,000", desc: "Scalp nourishment, growth stimulation, strength" },
    { name: "Scalp Therapy", price: "from $30 / £24 / ₦15,000", desc: "Targeted treatment for dry scalp, dandruff, buildup" },
    { name: "Relaxer & Texturizer Service", price: "from $40 / £32 / ₦20,000", desc: "Expert application, conditioning, style" },
    { name: "Big Chop & Transition Consultation", price: "from $20 / £16 / ₦10,000", desc: "Compassionate guidance, styling advice" },
  ],
};

const ServiceList = ({ items }: { items: any[] }) => (
  <div className="space-y-6">
    {items.map((item, idx) => (
      <div key={idx} className="border-b border-border pb-4 last:border-0">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
          <h4 className="font-serif text-xl text-foreground">{item.name}</h4>
          <span className="inline-block bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
            {item.price}
          </span>
        </div>
        <p className="text-foreground/70 text-sm">{item.desc}</p>
      </div>
    ))}
  </div>
);

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Our Worlds</h1>
            <p className="text-lg text-foreground/80">Six richly illustrated worlds — each one opens into its own complete universe.</p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-16 relative">
            <div className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-32 space-y-4">
                {['Women\'s World', 'Men\'s World', 'Children\'s World', 'Pets\' World', 'Hair Studio', 'Sanctuary Spaces'].map((world, idx) => (
                  <a key={idx} href={`#world-${idx}`} className="block text-foreground/60 hover:text-primary transition-colors font-medium text-lg">
                    {world}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex-1 space-y-32">
              <section id="world-0" className="scroll-mt-32">
                <img src="/images/service-women.png" alt="Women's World" className="w-full h-80 object-cover rounded-2xl mb-8" />
                <h2 className="font-serif text-4xl mb-4 text-primary">Women's World</h2>
                <p className="text-xl text-foreground/80 mb-8 italic">"Your World. Your Rules." — She arrives carrying everything. She leaves carrying only herself.</p>
                <ServiceList items={services.women} />
                
                <div className="mt-12 bg-primary/10 p-8 rounded-2xl">
                  <h3 className="font-serif text-2xl text-primary mb-4">Postpartum Mothers</h3>
                  <p className="text-foreground/80 mb-6 italic">"You just did something extraordinary. Let us take care of you now."</p>
                  <p className="text-foreground/70 mb-0">Dedicated sacred space. Services include: Postpartum Massage, Pelvic Floor Support, Lactation Room, Emotional Support Session.</p>
                </div>
              </section>

              <section id="world-1" className="scroll-mt-32">
                <img src="/images/service-men.png" alt="Men's World" className="w-full h-80 object-cover rounded-2xl mb-8" />
                <h2 className="font-serif text-4xl mb-4 text-primary">Men's World</h2>
                <p className="text-xl text-foreground/80 mb-8 italic">"A Man's Rest is Sacred." — No noise. No rush. Just restoration.</p>
                <ServiceList items={services.men} />
              </section>

              <section id="world-2" className="scroll-mt-32">
                <img src="/images/service-kids.png" alt="Children's World" className="w-full h-80 object-cover rounded-2xl mb-8" />
                <h2 className="font-serif text-4xl mb-4 text-primary">Children's World</h2>
                <p className="text-xl text-foreground/80 mb-8 italic">"Where Little Ones Bloom" — A safe, gentle universe designed just for children. Calming colors, playful textures, no harsh sounds.</p>
                <ServiceList items={services.children} />
                
                <div className="mt-12 bg-accent p-8 rounded-2xl">
                  <h3 className="font-serif text-2xl mb-4">Autism-Friendly Rooms</h3>
                  <p className="text-foreground/70 mb-0">Quiet, low-stimulation, predictable environments. Trained staff. No sudden sounds. Soft lighting. Weighted blankets available. Completely private.</p>
                </div>
              </section>

              <section id="world-3" className="scroll-mt-32">
                <img src="/images/service-pets.png" alt="Pets' World" className="w-full h-80 object-cover rounded-2xl mb-8" />
                <h2 className="font-serif text-4xl mb-4 text-primary">Pets' World</h2>
                <p className="text-xl text-foreground/80 mb-8 italic">"They Carry Our Calm — They Deserve Their Own" — Because they feel everything too.</p>
                <ServiceList items={services.pets} />
              </section>

              <section id="world-4" className="scroll-mt-32">
                <img src="/images/hair-studio.png" alt="Hair Studio" className="w-full h-80 object-cover rounded-2xl mb-8" />
                <h2 className="font-serif text-4xl mb-4 text-primary">Hair Studio</h2>
                <p className="text-xl text-foreground/80 mb-8 italic">"Your Crown. Our Devotion." — A celebration of Black hair in all its forms.</p>
                <ServiceList items={services.hair} />
              </section>

              <section id="world-5" className="scroll-mt-32">
                <img src="/images/sanctuary.png" alt="Sanctuary Spaces" className="w-full h-80 object-cover rounded-2xl mb-8" />
                <h2 className="font-serif text-4xl mb-4 text-primary">Sanctuary Spaces</h2>
                <p className="text-xl text-foreground/80 mb-8 italic">"Every Room Was Built for a Reason"</p>
                <div className="space-y-6 text-foreground/80">
                  <p><strong className="text-foreground font-serif text-lg">The Pool</strong> — Heated indoor pool, hydrotherapy jets, ambient lighting, soft music, no phones, no clocks</p>
                  <p><strong className="text-foreground font-serif text-lg">The Reading Room</strong> — Slow music, warm lighting, curated shelves, a pot of herbal tea. Time slows here.</p>
                  <p><strong className="text-foreground font-serif text-lg">The Dark Room</strong> — For those who find light overstimulating. Completely private. Blackout. No fluorescent light. Silent except for what you choose.</p>
                  <p><strong className="text-foreground font-serif text-lg">The Therapy Room</strong> — Licensed therapists on staff. One-on-one sessions in complete confidence. No judgment.</p>
                  <p><strong className="text-foreground font-serif text-lg">The Sleep Rooms</strong> — Quiet, soundproofed, climate-controlled. Blackout curtains. Premium mattress. Book for a few hours or overnight.</p>
                  <p><strong className="text-foreground font-serif text-lg">Autism-Friendly Rooms</strong> — Designed with input from autism specialists. Predictable layouts, weighted blankets.</p>
                  <p><strong className="text-foreground font-serif text-lg">Postpartum Suite</strong> — For new mothers. A private, tender space designed for healing and recovery.</p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}