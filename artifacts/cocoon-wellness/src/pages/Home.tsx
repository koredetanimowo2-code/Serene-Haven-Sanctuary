import { useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }
  })
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } }
};

const cardReveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } }
};

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.6], ["0%", "-8%"]);

  return (
    <div className="min-h-screen bg-background md:pl-20">
      <Navbar />

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-[-10%] inset-x-0">
          <img
            src="/images/hero.png"
            alt="The Cocoon Sanctuary"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/45 to-background/85" />

        <motion.div
          style={{ opacity: heroTextOpacity, y: heroTextY }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="label-caps text-primary mb-8"
          >
            Lagos · London · New York · Toronto · Dubai · Johannesburg · Paris
          </motion.p>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="font-serif text-[clamp(3rem,9vw,7.5rem)] text-foreground mb-5 leading-[1.02] tracking-[-0.02em]"
          >
            Step In.<br />
            <em className="text-primary not-italic">The World Stops Here.</em>
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-lg md:text-xl text-foreground/65 mb-12 max-w-lg mx-auto font-light tracking-wide"
          >
            A sanctuary for every person, every age, every need.
          </motion.p>
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-10 h-14 text-sm tracking-wide w-full sm:w-auto shadow-2xl shadow-primary/30">
              <Link href="/book">Reserve Your Experience</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full text-foreground/70 hover:text-foreground hover:bg-foreground/8 px-10 h-14 text-sm tracking-wide w-full sm:w-auto border border-foreground/20">
              <Link href="/services">Explore Our Worlds</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-10 bg-foreground/25 overflow-hidden relative">
            <motion.div
              animate={{ y: [0, 40, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-foreground/60"
            />
          </div>
        </motion.div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-card border-b border-border py-8 md:py-10">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            {[
              { value: "7", label: "Global Sanctuaries" },
              { value: "12+", label: "Service Categories" },
              { value: "3", label: "Stay Tiers" },
              { value: "1", label: "Uncompromising Standard" }
            ].map((stat, i) => (
              <motion.div key={i} variants={cardReveal}>
                <div className="font-serif text-[2.5rem] text-primary leading-none mb-1">{stat.value}</div>
                <div className="label-caps text-foreground/40">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="py-28 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl">
                <img src="/images/philosophy.png" alt="Our Philosophy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:w-1/2"
            >
              <p className="label-caps text-primary mb-6">Our Philosophy</p>
              <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-8 leading-tight">
                Born in Nigeria.<br />
                <em className="text-primary">Felt worldwide.</em>
              </h2>
              <blockquote className="font-serif text-lg text-foreground/55 mb-8 italic border-l-2 border-primary/35 pl-5 leading-relaxed">
                "Rest is not a reward. It is a right."
              </blockquote>
              <p className="text-foreground/60 text-lg leading-relaxed font-light mb-5">
                Since opening our doors in Lagos, we have believed that every person deserves a space where the world simply stops. We are not a hotel. We are a sanctuary.
              </p>
              <p className="text-foreground/60 text-lg leading-relaxed font-light">
                Rooted in the warmth of Nigerian hospitality, The Cocoon wraps every guest in an unhurried embrace. Here, you are held. Here, you are enough.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WORLDS GRID ── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <p className="label-caps text-primary mb-4">Our Offerings</p>
            <h2 className="font-serif text-5xl md:text-6xl text-foreground">Seven Distinct Worlds</h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
          >
            {[
              { title: "Women's World", sub: "Treatments, ritual, and total care", image: "/images/service-women.png", link: "/services/women" },
              { title: "Men's World", sub: "Restoration without apology", image: "/images/service-men.png", link: "/services/men" },
              { title: "Children's World", sub: "Gentle, safe, and joyful", image: "/images/service-kids.png", link: "/services/children" },
              { title: "Pets' World", sub: "For your most loyal companion", image: "/images/service-pets.png", link: "/services/pets" },
              { title: "Hair Studio", sub: "Every crown, every texture", image: "/images/hair-studio.png", link: "/services/hair" },
              { title: "Postpartum Suite", sub: "Pure healing, no expectations", image: "/images/postpartum.png", link: "/services/postpartum" },
            ].map((world, idx) => (
              <motion.div key={idx} variants={cardReveal}>
                <Link href={world.link} className="group relative block aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={world.image}
                    alt={world.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/8 transition-colors duration-700" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="label-caps text-primary/70 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-400 -translate-y-1 group-hover:translate-y-0">Explore</p>
                    <h3 className="font-serif text-2xl md:text-[1.65rem] text-foreground mb-1 leading-snug">{world.title}</h3>
                    <p className="text-foreground/45 text-sm font-light">{world.sub}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex justify-center"
          >
            <Link
              href="/services/sanctuary"
              className="inline-flex items-center gap-3 text-foreground/40 hover:text-primary transition-colors duration-300"
            >
              <span className="w-10 h-[1px] bg-current" />
              <span className="label-caps">Sanctuary Spaces — Pool · Dark Room · Prayer Room · Nature Walk & more</span>
              <span className="w-10 h-[1px] bg-current" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SANCTUARY FULL-BLEED ── */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img src="/images/sanctuary-pool.png" alt="Sanctuary Spaces" className="absolute inset-0 w-full h-full object-cover" onError={(e) => { e.currentTarget.src = '/images/hero.png'; }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/55 to-background/30" />
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 px-6 lg:px-12 container mx-auto max-w-none"
        >
          <div className="max-w-xl">
            <p className="label-caps text-primary mb-5">Sanctuary Spaces</p>
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6 leading-tight">
              Every Room Built<br />for a Reason.
            </h2>
            <p className="text-foreground/60 text-lg font-light mb-8">
              Because rest looks different to everyone.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['The Pool', 'Dark Room', 'Prayer Room', 'Reading Room', 'Sleep Rooms', 'Nature Walk', 'Autism-Friendly'].map((space) => (
                <span key={space} className="px-4 py-1.5 rounded-full border border-foreground/20 text-foreground/60 text-xs font-sans">{space}</span>
              ))}
            </div>
            <Button asChild variant="outline" className="rounded-full border-foreground/30 text-foreground hover:bg-foreground/10 h-12 px-8 text-sm">
              <Link href="/services/sanctuary">Explore Sanctuary Spaces</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* ── PHONE-FREE ── */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="label-caps text-primary mb-5">A Small Request</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">The Phone-Free Hours</h2>
            <p className="font-serif italic text-foreground/65 text-xl leading-relaxed">
              At certain hours, we ask one thing: put it down. Eat. Walk. Sleep. Sit in silence. We hand it back when you're ready.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── ACCESS TIERS ── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <p className="label-caps text-primary mb-4">How It Works</p>
            <h2 className="font-serif text-5xl text-foreground">Choose Your Experience</h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-card p-10 rounded-2xl border border-border"
            >
              <h3 className="font-serif text-3xl text-foreground mb-2">Day Visit</h3>
              <p className="text-foreground/50 text-sm font-light mb-8 leading-relaxed">Walk in. No reservation required. Spend a beautiful day in our care.</p>
              <ul className="space-y-3">
                {[
                  "Full access to all treatments & services",
                  "Common lounges, quiet spaces & cafes",
                  "Hair Studio, Sip & Paint, and more",
                  "All indoor sanctuary spaces"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/65 text-sm">
                    <div className="w-1 h-1 rounded-full bg-primary shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="bg-primary/8 p-10 rounded-2xl border border-primary/25 relative overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
              <h3 className="font-serif text-3xl text-primary mb-2">Multi-Day Stay</h3>
              <p className="text-foreground/60 text-sm italic font-light mb-8 leading-relaxed">"Those who stay discover a different kind of silence."</p>
              <ul className="space-y-3 mb-10">
                {[
                  "Everything in Day Visit",
                  "Private nature walk & exclusive pool blocks",
                  "In-room nightly ritual service",
                  "Phone-free dining experiences",
                  "Daily therapist or treatment sessions",
                  "3, 5, or 7-day immersion packages"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/75 text-sm">
                    <div className="w-1 h-1 rounded-full bg-primary shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="rounded-full bg-primary hover:bg-primary/90 h-12 px-8 text-sm shadow-lg shadow-primary/20">
                <Link href="/stay">View Stay Packages</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="label-caps text-primary mb-4">Voices</p>
            <h2 className="font-serif text-5xl text-foreground">What Our Guests Say</h2>
          </motion.div>
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              { quote: "I arrived exhausted. Three days later, I left feeling put back together — piece by piece. The Dark Room changed something in me.", author: "Sarah M.", location: "London" },
              { quote: "The only place I've ever been where nobody expected anything from me. Not once. That alone was worth everything.", author: "Adebayo K.", location: "Lagos" },
              { quote: "Three days without my phone, eating beautiful food, sleeping in real silence. I found myself again. Genuinely.", author: "James O.", location: "New York" }
            ].map((t, i) => (
              <motion.div key={i} variants={cardReveal} className="flex flex-col">
                <div className="font-serif text-7xl text-primary/25 leading-[0.8] mb-4 select-none">"</div>
                <p className="font-serif italic text-foreground/75 text-lg leading-relaxed flex-1 mb-7">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-primary/50 shrink-0" />
                  <div>
                    <p className="text-foreground text-sm font-medium">{t.author}</p>
                    <p className="label-caps text-foreground/35 mt-0.5">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between"
          >
            <div>
              <p className="label-caps text-primary mb-3">Where We Are</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground">7 Sanctuaries.<br /><em className="text-primary">One Standard.</em></h2>
            </div>
            <Link href="/locations" className="label-caps text-foreground/40 hover:text-primary transition-colors hidden md:block">
              View All Locations
            </Link>
          </motion.div>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 px-6 lg:px-12 snap-x snap-mandatory scrollbar-none">
          {[
            { city: 'Lagos', country: 'Nigeria' },
            { city: 'London', country: 'United Kingdom' },
            { city: 'New York', country: 'USA' },
            { city: 'Toronto', country: 'Canada' },
            { city: 'Dubai', country: 'UAE' },
            { city: 'Johannesburg', country: 'South Africa' },
            { city: 'Paris', country: 'France' }
          ].map(({ city, country }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="shrink-0 snap-center"
            >
              <Link href="/locations" className="relative block w-60 h-[340px] rounded-2xl overflow-hidden group shadow-lg">
                <img
                  src={`/images/loc-${city.toLowerCase().replace(' ', '')}.png`}
                  alt={city}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  onError={(e) => { e.currentTarget.src = '/images/hero.png'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors duration-300">{city}</h3>
                  <p className="label-caps text-foreground/40 mt-1">{country}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PROMISE + CTA ── */}
      <section className="py-28 bg-card border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="label-caps text-primary mb-8">The Cocoon Promise</p>
            <blockquote className="font-serif text-2xl md:text-3xl text-foreground/65 italic leading-relaxed mb-16">
              "You will not be rushed. No one will knock if you've asked for silence. Your name will be remembered. The tea will always be warm."
            </blockquote>
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-10 text-balance">
              Ready to step inside?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-12 text-sm tracking-wide shadow-xl shadow-primary/25">
                <Link href="/book">Reserve Your Experience</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-border text-foreground hover:bg-background h-14 px-12 text-sm tracking-wide">
                <a href="mailto:koredetanimowo2@gmail.com">Send an Enquiry</a>
              </Button>
            </div>
            <p className="mt-8 text-foreground/30 text-xs font-sans tracking-wide">
              +234 812 547 4604 &nbsp;·&nbsp; koredetanimowo2@gmail.com
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
