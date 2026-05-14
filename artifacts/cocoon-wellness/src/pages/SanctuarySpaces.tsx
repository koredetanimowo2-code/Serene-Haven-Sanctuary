import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";

const spaces = [
  { 
    id: "pool",
    name: "The Pool", 
    desc: "A heated indoor pool surrounded by lush tropical plants. Hydrotherapy jets ease tension. Ambient lighting sets the mood. There are no phones allowed, and absolutely no clocks. Time is measured only by how long you choose to float.", 
    img: "/images/sanctuary-pool.png" 
  },
  { 
    id: "reading",
    name: "The Reading Room", 
    desc: "Time slows here. Slow, rhythmic music plays in the background while warm, low-slung lamps cast shadows across curated shelves. Sink into a heavy chair with a fresh pot of herbal tea. You don't even have to read — staring into space is celebrated here.", 
    img: "/images/sanctuary-reading.png" 
  },
  { 
    id: "dark",
    name: "The Dark Room", 
    desc: "For those who find the world's light entirely overstimulating. This room is blackout dark, silent except for the soundscape you select, and devoid of any fluorescent buzz. Perfect for migraines, sensory sensitivity, and deep, profound recovery. Completely private.", 
    img: "/images/sanctuary-dark.png" 
  },
  { 
    id: "prayer",
    name: "The Prayer Room", 
    desc: "Here you can cry, pray, sing, or write to God. You are here to recharge. There is no performance required — just tissues, candles, a chair, and perfect peace. If you want a hug, trained listeners are available. Otherwise, you are left entirely alone with the divine.", 
    img: "/images/sanctuary-prayer.png",
    verses: [
      "Be still, and know that I am God. — Psalm 46:10",
      "Come to me, all you who are weary and burdened, and I will give you rest. — Matthew 11:28",
      "He restores my soul. — Psalm 23:3"
    ]
  },
  { 
    id: "simulator",
    name: "The Simulator Room", 
    desc: "A room designed purely for auditory relaxation and mental escape. Choose your atmosphere: a heavy Waterfall, a gentle Rainfall, crashing Ocean Waves, or morning Forest Birdsong. The air is misty, the visuals are immersive, the escape is total.", 
    img: "/images/sanctuary-simulator.png" 
  },
  { 
    id: "sleep",
    name: "The Sleep Rooms", 
    desc: "A true nap sanctuary. Soundproofed walls, thick blackout curtains, and precise climate control. The mattress is premium, the linens are heavy and warm. Book it for two hours or overnight — the world will not wake you.", 
    img: "/images/sanctuary-sleep.png" 
  },
  { 
    id: "nature",
    name: "Nature Walk", 
    desc: "The back of The Cocoon opens directly into pure nature. A winding, private path through ancient trees, unbroken birdsong, and dappled light. There are no destinations. Just the walk. Thirty minutes of pure, uninterrupted presence.", 
    img: "/images/sanctuary-nature.png",
    exclusive: true
  },
  { 
    id: "autism",
    name: "Autism-Friendly Room", 
    desc: "A softly lit room with rounded corners, weighted blankets in earth tones folded on a low seat, soft foam textures on the walls, a single warm lamp, very calm and predictable — designed for comfort and safety.", 
    img: "/images/sanctuary-autism.png" 
  },
  { 
    id: "dining",
    name: "The Quiet Dining Room", 
    desc: "Twice a day, breakfast and dinner are served in the Quiet Dining Room. No phones. No performance. Just warm food, real conversation if you want it, or the gentle sound of someone else's calm. Meals are Nigerian-inspired with global touches — because food, too, is a form of care.", 
    img: "/images/sanctuary-dining.png" 
  }
];

export default function SanctuarySpaces() {
  return (
    <div className="min-h-screen bg-background md:pl-20">
      <Navbar />
      
      <section className="relative h-[80vh] flex items-end pb-24">
        <img src="/images/sanctuary.png" alt="Sanctuary Spaces" className="absolute inset-0 w-full h-full object-cover" onError={e=>e.currentTarget.src='/images/hero.png'} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-6xl md:text-8xl text-foreground mb-6"
          >
            Every Room.<br/><span className="text-primary">Built for a Reason.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-foreground/90 font-serif italic max-w-3xl"
          >
            Because rest looks different to everyone.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12 text-center mb-16">
          <h2 className="font-serif text-4xl text-foreground">Scent Menu</h2>
          <p className="text-xl text-foreground/80 font-light max-w-3xl mx-auto mt-4 mb-10">
            Guests choose an ambient scent for their space on arrival.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {["Lagos Earth", "Forest at Dawn", "River Stone", "Garden After Rain", "Harmattan"].map(scent => (
              <div key={scent} className="p-4 bg-card rounded-xl border border-border shadow-sm text-foreground/90 font-medium">
                {scent}
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 space-y-32">
          {spaces.map((space, idx) => (
            <motion.div 
              key={space.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
                  <img src={space.img} alt={space.name} className="absolute inset-0 w-full h-full object-cover" onError={e=>e.currentTarget.src='/images/sanctuary.png'} />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="font-serif text-5xl text-foreground mb-6">{space.name}</h2>
                <p className="text-xl text-foreground/80 font-light leading-relaxed mb-8">{space.desc}</p>
                
                {space.verses && (
                  <div className="bg-card border border-border p-8 rounded-2xl mb-8">
                    <div className="space-y-6">
                      {space.verses.map((verse, i) => (
                        <p key={i} className="font-serif italic text-foreground/70 text-lg border-l-2 border-primary/30 pl-4">{verse}</p>
                      ))}
                    </div>
                  </div>
                )}

                {space.exclusive && (
                  <div className="inline-block bg-primary/10 border border-primary/20 px-6 py-4 rounded-xl text-primary font-medium">
                    <span className="block text-sm uppercase tracking-widest opacity-70 mb-1">Stay Guests Only</span>
                    This experience is available exclusively to guests on 3, 5, or 7-day packages. Day visitors have access to all our indoor sanctuaries.
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}