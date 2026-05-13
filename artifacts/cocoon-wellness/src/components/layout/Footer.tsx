import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-24 pb-12 md:pl-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl mb-4 text-background">The Cocoon.</h3>
            <p className="text-background/70 leading-relaxed mb-6 italic">
              Where the world falls away.
            </p>
            <div className="space-y-2 text-background/80">
              <p>+234 812 547 4604</p>
              <p>koredetanimowo2@gmail.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-sans font-medium uppercase tracking-wider text-sm mb-6 text-background/50">Quick Links</h4>
            <ul className="space-y-3 text-background/80">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Our Worlds</Link></li>
              <li><Link href="/stay" className="hover:text-primary transition-colors">Stay With Us</Link></li>
              <li><Link href="/book" className="hover:text-primary transition-colors">Book a Visit</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-medium uppercase tracking-wider text-sm mb-6 text-background/50">Services</h4>
            <ul className="space-y-3 text-background/80">
              <li><Link href="/services/women" className="hover:text-primary transition-colors">Women's World</Link></li>
              <li><Link href="/services/men" className="hover:text-primary transition-colors">Men's World</Link></li>
              <li><Link href="/services/children" className="hover:text-primary transition-colors">Children's World</Link></li>
              <li><Link href="/services/postpartum" className="hover:text-primary transition-colors">Postpartum Suite</Link></li>
              <li><Link href="/services/hair" className="hover:text-primary transition-colors">Hair Studio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-medium uppercase tracking-wider text-sm mb-6 text-background/50">Locations</h4>
            <ul className="space-y-3 text-background/80">
              <li><Link href="/locations" className="hover:text-primary transition-colors">Lagos, Nigeria</Link></li>
              <li><Link href="/locations" className="hover:text-primary transition-colors">London, UK</Link></li>
              <li><Link href="/locations" className="hover:text-primary transition-colors">New York, USA</Link></li>
              <li><Link href="/locations" className="hover:text-primary transition-colors">Dubai, UAE</Link></li>
              <li><Link href="/locations" className="hover:text-primary transition-colors">Paris, France</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col items-center justify-between gap-6 text-center">
          <p className="text-background/60 text-sm font-medium tracking-wide">
            Born in Nigeria. Felt worldwide.
          </p>
          <div className="space-y-2">
            <p className="text-background/40 text-xs italic font-serif">
              "Come to me, all you who are weary and burdened, and I will give you rest. — Matthew 11:28"
            </p>
            <p className="text-background/50 text-xs font-light tracking-wide">
              The Cocoon is a judgment-free space. Whatever you're carrying, you don't have to carry it alone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}