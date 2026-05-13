import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { AddToCartButton } from "@/components/AddToCartButton";
import { BackNav } from "@/components/layout/BackNav";

const services = [
  { id: "postpartum-massage", name: "Postpartum Massage", price: "from ₦30,000 / $58 / £46", priceNaira: 30000, priceUSD: 58, priceGBP: 46, desc: "Gentle, specialist technique. Safe for new mothers. Addresses sore back from nursing, tight shoulders, and swollen feet.", img: "/images/postpartum-massage.png" },
  { id: "postpartum-pelvic", name: "Pelvic Floor Support Session", price: "from ₦25,000 / $48 / £38", priceNaira: 25000, priceUSD: 48, priceGBP: 38, desc: "Guided exercises and tender awareness with a trained, compassionate women's health professional.", img: "/images/postpartum.png" },
  { id: "postpartum-therapy", name: "Emotional Support Session", price: "from ₦20,000 / $38 / £30", priceNaira: 20000, priceUSD: 38, priceGBP: 30, desc: "One-on-one with a licensed therapist. No agenda. Just space to feel the enormity of what you've done.", img: "/images/postpartum-therapy.png" },
  { id: "postpartum-lactation", name: "Lactation Room Access", price: "from ₦5,000 / $10 / £8", priceNaira: 5000, priceUSD: 10, priceGBP: 8, desc: "A profoundly private, comfortable room for nursing or pumping. Warm restorative drinks are always provided.", img: "/images/postpartum-lactation.png" },
  { id: "postpartum-rest", name: "Mother's Rest Package", price: "from ₦45,000 / $85 / £68", priceNaira: 45000, priceUSD: 85, priceGBP: 68, desc: "3 hours: Arrival tea, postpartum massage, emotional support session, lactation room use, and uninterrupted rest in a private suite.", img: "/images/postpartum-rest.png" },
  { id: "postpartum-nap", name: "Newborn Comfort Nap Session", price: "from ₦15,000 / $28 / £22", priceNaira: 15000, priceUSD: 28, priceGBP: 22, desc: "A trained infant soother holds your baby while you sleep in the next room. Safely. Peacefully.", img: "/images/postpartum-newborn.png" },
  { id: "postpartum-bath", name: "Milk Bath Ritual", price: "from ₦22,000 / $42 / £34", priceNaira: 22000, priceUSD: 42, priceGBP: 34, desc: "A warm, healing soak with oat milk, rose petals, and lavender. Ancient. Restorative.", img: "/images/postpartum-bath.png" },
  { id: "postpartum-grief", name: "Angel Baby Grief Counselling", price: "from ₦20,000 / $38 / £30", priceNaira: 20000, priceUSD: 38, priceGBP: 30, desc: "For the mothers who carry a child in their hearts, not in their arms. Our grief counsellor specialises in pregnancy and infant loss. This is a safe, unhurried space to grieve, to speak the name of your baby, to fall apart and be held. You do not have to perform recovery here.", img: "/images/postpartum-grief.png" },
  { id: "postpartum-family", name: "Family Adjustment Therapy", price: "from ₦25,000 / $48 / £38", priceNaira: 25000, priceUSD: 48, priceGBP: 38, desc: "A new baby changes everything — relationships, identity, sleep, space. Our family therapist helps partners, siblings, and extended family understand and navigate the seismic shift a new life brings. Because the whole family needs support, not just the mother.", img: "/images/postpartum.png" }
];

export default function PostpartumWorld() {
  return (
    <div className="min-h-screen bg-background md:pl-20 pt-0 pb-20 md:pb-0">
      <Navbar />
      <BackNav />
      
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        <img src="/images/postpartum.png" alt="Postpartum Suite" className="absolute inset-0 w-full h-full object-cover" onError={e=>e.currentTarget.src='/images/hero.png'} />
        <div className="absolute inset-0 bg-background/50 mix-blend-multiply" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-4xl pt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-serif text-6xl md:text-8xl text-foreground mb-8 drop-shadow-lg"
          >
            You Just Did Something Extraordinary.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-3xl text-primary font-serif italic"
          >
            Now let us take care of you.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-2xl text-foreground/80 font-light leading-relaxed mb-8">
              The world has been asking things of you since before your baby arrived. The Cocoon's Postpartum Suite asks absolutely nothing.
            </p>
            <p className="text-xl text-foreground/70 font-light leading-relaxed">
              We are here to hold space for your body, your mind, and your tender, enormous heart. Whether you came two weeks after birth or two years after — you are still a postpartum mother, and you still deserve this.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12 text-center mb-16">
          <h2 className="font-serif text-4xl text-foreground">For Mothers with Angel Babies</h2>
          <p className="text-xl text-foreground/70 font-light leading-relaxed max-w-3xl mx-auto mt-6">
            Some of us came home without our babies. The Cocoon holds space for you too. Your grief is not inconvenient. Your love is not invisible. Our grief counsellor has trained specifically for pregnancy loss, stillbirth, and early infant loss. Come when you are ready — or come before you feel ready. Either way, there is a seat here for you.
          </p>
        </div>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-6"
              >
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg relative">
                  <img src={service.img} alt={service.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" onError={e=>e.currentTarget.src='/images/postpartum.png'} />
                </div>
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <h3 className="font-serif text-3xl text-foreground">{service.name}</h3>
                      <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium tracking-wide whitespace-nowrap">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-foreground/70 text-lg font-light leading-relaxed mb-6">{service.desc}</p>
                  </div>
                  <AddToCartButton item={{ ...service, world: "Postpartum Suite" }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-serif text-4xl text-foreground mb-6">You Are Not Alone</h2>
              <div className="space-y-4 text-foreground/80 font-light text-lg">
                <p>Partners, doulas, and support persons are deeply welcome. The Postpartum Suite is a profoundly judgment-free zone.</p>
                <p>There is no right way to feel, no right way to feed, and no right way to heal. We give absolutely no advice unless you explicitly ask for it. We only offer care.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-serif text-4xl text-foreground mb-6">What We Provide</h2>
              <div className="space-y-4 text-foreground/80 font-light text-lg">
                <p>We provide ultra-soft robes, warm herbal teas, peri bottles, maternity pads, and a quiet, temperature-controlled environment.</p>
                <p>Simply bring yourself, and if you choose, your baby. Leave the rest to us.</p>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-24 text-center">
            <a href="mailto:koredetanimowo2@gmail.com?subject=Postpartum Suite Enquiry&body=Hello, I would like to enquire about the Postpartum Suite at The Cocoon.%0A%0AMy Name:%0APreferred Date:%0AAny details you'd like us to know:" className="inline-block bg-primary text-primary-foreground font-medium text-xl px-12 py-6 rounded-full shadow-xl hover:bg-primary/90 transition-colors">
              Enquire About the Postpartum Suite
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}