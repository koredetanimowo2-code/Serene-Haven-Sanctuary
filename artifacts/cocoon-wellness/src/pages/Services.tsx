import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { BackNav } from "@/components/layout/BackNav";

export default function Services() {
  const worlds = [
    { id: "women", title: "Women's World", desc: "She arrives carrying everything. She leaves carrying only herself.", img: "/images/service-women.png", link: "/services/women" },
    { id: "men", title: "Men's World", desc: "No noise. No rush. Just restoration.", img: "/images/service-men.png", link: "/services/men" },
    { id: "children", title: "Children's World", desc: "A safe, gentle universe. Calm, color, and absolute care.", img: "/images/service-kids.png", link: "/services/children" },
    { id: "pets", title: "Pets' World", desc: "They carry our calm — they deserve their own.", img: "/images/service-pets.png", link: "/services/pets" },
    { id: "hair", title: "Hair Studio", desc: "Your Crown. Our Devotion. Celebrating natural hair.", img: "/images/hair-studio.png", link: "/services/hair" },
    { id: "postpartum", title: "Postpartum Suite", desc: "You just did something extraordinary. Now let us take care of you.", img: "/images/postpartum.png", link: "/services/postpartum" },
    { id: "sanctuary", title: "Sanctuary Spaces", desc: "Pools, dark rooms, prayer spaces. Rooms built for deep rest.", img: "/images/sanctuary.png", link: "/services/sanctuary" },
  ];

  return (
    <div className="min-h-screen bg-background md:pl-20 pt-0 pb-20 md:pb-0">
      <Navbar />
      <BackNav />
      <div className="pt-16 md:pt-32 pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-24"
          >
            <h1 className="font-serif text-6xl md:text-7xl text-foreground mb-8">Our Worlds</h1>
            <p className="text-xl text-foreground/80 font-light leading-relaxed">
              The Cocoon is not just one space. It is a collection of distinct, deeply intentional universes. Find the world that speaks to your current season of need.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-16 relative">
            {/* Sticky side nav */}
            <div className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-32 space-y-6 bg-card p-8 rounded-3xl border border-border">
                <h3 className="font-serif text-2xl text-foreground mb-6">Directory</h3>
                {worlds.map((world) => (
                  <a key={world.id} href={`#${world.id}`} className="block text-foreground/60 hover:text-primary transition-colors font-medium text-lg">
                    {world.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Content list */}
            <div className="flex-1 space-y-24">
              {worlds.map((world, idx) => (
                <motion.section 
                  key={world.id}
                  id={world.id} 
                  className="scroll-mt-32"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <Link href={world.link} className="group block">
                    <div className="relative rounded-[2.5rem] overflow-hidden aspect-[21/9] md:aspect-[21/9] mb-8 shadow-xl">
                      <img src={world.img} alt={world.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground group-hover:text-primary transition-colors">{world.title}</h2>
                    <p className="text-2xl text-foreground/70 mb-8 italic font-serif">"{world.desc}"</p>
                    <span className="inline-flex items-center gap-2 text-primary font-medium text-lg group-hover:translate-x-4 transition-transform duration-300">
                      Enter this World <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                </motion.section>
              ))}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}