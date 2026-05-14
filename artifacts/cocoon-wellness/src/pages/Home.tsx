import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background md:pl-20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <img src="/images/hero.png" alt="The Cocoon Sanctuary" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60 mix-blend-multiply" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-foreground mb-6 drop-shadow-lg"
          >
            Step In.<br/><span className="text-primary">The World Stops Here.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl text-foreground/90 mb-12 max-w-2xl mx-auto font-light"
          >
            A complete universe of restoration — for every person, every age, every need.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 text-lg w-full sm:w-auto shadow-xl">
              <Link href="/services">Enter Our World</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent border-foreground/20 text-foreground hover:bg-foreground/10 px-10 py-7 text-lg w-full sm:w-auto backdrop-blur-sm">
              <Link href="/stay">Book Your Stay</Link>
            </Button>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/60"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-foreground/30 overflow-hidden relative">
            <motion.div 
              animate={{ y: [0, 48, 0] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }} 
              className="absolute top-0 left-0 w-full h-1/2 bg-foreground"
            />
          </div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl">
                <img src="/images/philosophy.png" alt="Our Philosophy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-8 leading-tight">Born in Nigeria.<br/><span className="text-primary italic">Felt worldwide.</span></h2>
              <p className="text-2xl text-foreground/90 mb-10 italic font-serif">"Rest is not a reward. It is a right."</p>
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed font-light">
                <p>Since we opened our doors in Lagos, we have believed that every human being — man, woman, child, elder, and yes, their beloved pets — deserves a space where the world simply stops.</p>
                <p>We are not a hotel. We are not a clinic. We are a sanctuary. Deeply rooted in the warmth of Nigerian hospitality, The Cocoon wraps you in an unhurried embrace. Here, you are safe, you are held, and you are allowed to simply be.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Six Worlds */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Our Six Worlds</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-xl font-light">A sanctuary designed with intentionality. Step into the world that calls to you.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              { title: "Women's World", image: "/images/service-women.png", link: "/services/women" },
              { title: "Men's World", image: "/images/service-men.png", link: "/services/men" },
              { title: "Children's World", image: "/images/service-kids.png", link: "/services/children" },
              { title: "Pets' World", image: "/images/service-pets.png", link: "/services/pets" },
              { title: "Hair Studio", image: "/images/hair-studio.png", link: "/services/hair" },
              { title: "Postpartum Suite", image: "/images/postpartum.png", link: "/services/postpartum" },
            ].map((world, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
              >
                <Link href={world.link} className="group relative block aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
                  <img src={world.image} alt={world.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4 drop-shadow-md">{world.title}</h3>
                    <span className="text-primary font-medium flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                      Enter <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sanctuary Spaces Teaser */}
      <section className="py-32 bg-card border-y border-border">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-10">Sanctuary Spaces</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['The Pool', 'The Reading Room', 'The Dark Room', 'The Prayer Room', 'The Simulator Room', 'Nature Walk'].map((space, i) => (
                <span key={i} className="px-6 py-3 rounded-full border border-border bg-background text-foreground/80 font-serif text-lg">{space}</span>
              ))}
            </div>
            <Button asChild variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
              <Link href="/services/sanctuary">Explore the Sanctuaries</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* The Phone-Free Hours */}
      <section className="py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] bg-repeat" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-6xl mb-10 text-primary-foreground"
          >
            The Phone-Free Hours
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8 font-serif text-2xl md:text-3xl leading-relaxed font-light text-primary-foreground/90"
          >
            <p>At certain hours, we ask something of you: <span className="text-primary italic">put it down.</span></p>
            <p>Eat. Sleep. Be cared for. Read a book. Listen to music. Knit. Play a board game. Sit in absolute silence. Walk under the trees.</p>
            <p>We hand it back when you're ready.</p>
          </motion.div>
        </div>
      </section>

      {/* Walk-In vs Stay */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card p-12 rounded-[3rem] shadow-lg border border-border">
              <h3 className="font-serif text-4xl text-foreground mb-6">Walk-In Guests</h3>
              <p className="text-foreground/70 text-lg mb-8 font-light">Walk-in guests are welcome and loved. Spend the day wrapped in care.</p>
              <ul className="space-y-4 text-foreground/80">
                <li className="flex items-center gap-3">✓ Access to day services & treatments</li>
                <li className="flex items-center gap-3">✓ Use of common lounges</li>
                <li className="flex items-center gap-3">✓ Music rooms & cafes</li>
                <li className="flex items-center gap-3">✓ A beautiful escape from the day</li>
              </ul>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-primary/10 p-12 rounded-[3rem] shadow-lg border border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10" />
              <h3 className="font-serif text-4xl text-primary mb-6">Stay Guests</h3>
              <p className="text-foreground/80 text-lg mb-8 font-light italic">"Those who stay discover a different kind of silence."</p>
              <ul className="space-y-4 text-foreground/90 font-medium">
                <li className="flex items-center gap-3">✨ Everything Walk-In guests enjoy</li>
                <li className="flex items-center gap-3">✨ Exclusive access to the Nature Walk</li>
                <li className="flex items-center gap-3">✨ Multi-day immersion programmes</li>
                <li className="flex items-center gap-3">✨ In-room private service</li>
                <li className="flex items-center gap-3">✨ Phone-free dining experiences</li>
                <li className="flex items-center gap-3">✨ Unlimited Pool, Reading & Prayer Room access</li>
              </ul>
              <Button asChild className="mt-10 w-full rounded-full bg-primary hover:bg-primary/90 text-lg h-14">
                <Link href="/stay">View Stay Packages</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-serif text-5xl mb-16 text-foreground">Stories of Stillness</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { quote: "I arrived exhausted. I left feeling like I had been put back together piece by piece. The Dark Room changed my life.", author: "Sarah, London" },
              { quote: "The only place in the city where nobody expects anything from me. It's truly a sanctuary.", author: "Ade, Lagos" },
              { quote: "Finally, a luxury space that understands accessibility isn't just a ramp, it's a culture of care.", author: "Maria, Toronto" },
              { quote: "Three days without my phone, eating beautiful food, sleeping in silence. I found myself again.", author: "James, New York" }
            ].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 bg-background rounded-3xl shadow-sm text-left border border-border">
                <p className="text-foreground/80 mb-8 italic font-light leading-relaxed">"{t.quote}"</p>
                <div className="font-serif text-primary text-lg">{t.author}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Strip */}
      <section className="py-24 overflow-hidden bg-background">
        <div className="container mx-auto px-6 lg:px-12 text-center mb-16">
          <h2 className="font-serif text-4xl text-foreground mb-4">7 Sanctuaries. One Cocoon.</h2>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-12 px-6 lg:px-12 snap-x snap-mandatory hide-scrollbar">
          {['Lagos', 'London', 'New York', 'Toronto', 'Dubai', 'Johannesburg', 'Paris'].map((city, idx) => (
            <Link href="/locations" key={idx} className="shrink-0 w-72 h-[400px] relative rounded-3xl overflow-hidden snap-center group block shadow-lg">
              <img src={`/images/loc-${city.toLowerCase().replace(' ', '')}.png`} alt={city} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={(e) => { e.currentTarget.src = '/images/sanctuary.png' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-8 left-8 text-left">
                <h3 className="font-serif text-3xl text-foreground group-hover:text-primary transition-colors">{city}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-primary py-24 text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto bg-card border border-border p-12 rounded-[3rem] mb-16 shadow-2xl">
            <h3 className="font-serif text-3xl mb-4 text-foreground">The Cocoon Promise</h3>
            <p className="text-xl text-foreground/80 font-light italic leading-relaxed">
              "We promise you will not be rushed. We promise no one will knock if you've asked for silence. We promise your name will be remembered. We promise the tea will always be warm. We promise this — every time, at every branch."
            </p>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-primary-foreground mb-10">Ready to disappear for a while?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button asChild size="lg" className="rounded-full bg-background text-foreground hover:bg-background/90 px-12 py-8 text-xl shadow-xl">
              <Link href="/checkout">Book Your Visit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-12 py-8 text-xl">
              <a href="mailto:koredetanimowo2@gmail.com">Enquire Now</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}