import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10 md:pl-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl mb-3 text-background">The Cocoon.</h3>
            <p className="text-background/45 text-sm italic mb-8 leading-relaxed">Where the world falls away.</p>
            <div className="space-y-2 text-background/65 text-sm">
              <p>+234 812 547 4604</p>
              <a href="mailto:koredetanimowo2@gmail.com" className="block hover:text-primary transition-colors">koredetanimowo2@gmail.com</a>
            </div>
          </div>

          <div>
            <h4 className="font-sans font-medium uppercase tracking-[0.2em] text-[0.6rem] mb-6 text-background/35">Navigate</h4>
            <ul className="space-y-3 text-background/65 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Our Worlds</Link></li>
              <li><Link href="/stay" className="hover:text-primary transition-colors">Stay With Us</Link></li>
              <li><Link href="/locations" className="hover:text-primary transition-colors">Locations</Link></li>
              <li><Link href="/book" className="hover:text-primary transition-colors">Reserve an Experience</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-medium uppercase tracking-[0.2em] text-[0.6rem] mb-6 text-background/35">Services</h4>
            <ul className="space-y-3 text-background/65 text-sm">
              <li><Link href="/services/women" className="hover:text-primary transition-colors">Women's World</Link></li>
              <li><Link href="/services/men" className="hover:text-primary transition-colors">Men's World</Link></li>
              <li><Link href="/services/children" className="hover:text-primary transition-colors">Children's World</Link></li>
              <li><Link href="/services/postpartum" className="hover:text-primary transition-colors">Postpartum Suite</Link></li>
              <li><Link href="/services/hair" className="hover:text-primary transition-colors">Hair Studio</Link></li>
              <li><Link href="/services/sanctuary" className="hover:text-primary transition-colors">Sanctuary Spaces</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-medium uppercase tracking-[0.2em] text-[0.6rem] mb-6 text-background/35">Locations</h4>
            <ul className="space-y-3 text-background/65 text-sm">
              <li><Link href="/locations" className="hover:text-primary transition-colors">Lagos, Nigeria</Link></li>
              <li><Link href="/locations" className="hover:text-primary transition-colors">London, United Kingdom</Link></li>
              <li><Link href="/locations" className="hover:text-primary transition-colors">New York, USA</Link></li>
              <li><Link href="/locations" className="hover:text-primary transition-colors">Toronto, Canada</Link></li>
              <li><Link href="/locations" className="hover:text-primary transition-colors">Dubai, UAE</Link></li>
              <li><Link href="/locations" className="hover:text-primary transition-colors">Johannesburg, South Africa</Link></li>
              <li><Link href="/locations" className="hover:text-primary transition-colors">Paris, France</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/35 text-xs font-sans tracking-widest uppercase">
            Born in Nigeria. Felt worldwide.
          </p>
          <p className="text-background/25 text-xs italic font-serif text-center md:text-right">
            "Come to me, all you who are weary and burdened, and I will give you rest." — Matthew 11:28
          </p>
        </div>
      </div>
    </footer>
  );
}
