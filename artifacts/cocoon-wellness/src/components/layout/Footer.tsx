import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl mb-6">The Cocoon.</h3>
            <p className="text-background/70 leading-relaxed mb-6">
              Where the world falls away.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-4 text-background/80">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Our Worlds</Link></li>
              <li><Link href="/stay">Stay With Us</Link></li>
              <li><Link href="/book">Book a Visit</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-secondary">Services</h4>
            <ul className="space-y-4 text-background/80">
              <li><Link href="/services">Women's World</Link></li>
              <li><Link href="/services">Men's World</Link></li>
              <li><Link href="/services">Children's World</Link></li>
              <li><Link href="/services">Pets' World</Link></li>
              <li><Link href="/services">Hair Studio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-secondary">Locations</h4>
            <ul className="space-y-4 text-background/80">
              <li><Link href="/locations">Lagos, Nigeria</Link></li>
              <li><Link href="/locations">London, UK</Link></li>
              <li><Link href="/locations">New York, USA</Link></li>
              <li><Link href="/locations">Toronto, Canada</Link></li>
              <li><Link href="/locations">Dubai, UAE</Link></li>
              <li><Link href="/locations">Johannesburg, SA</Link></li>
              <li><Link href="/locations">Paris, France</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Born in Nigeria. Felt worldwide.
          </p>
          <div className="flex gap-6 text-background/50 text-sm">
            <span className="hover:text-secondary transition-colors cursor-pointer">Instagram</span>
            <span className="hover:text-secondary transition-colors cursor-pointer">Twitter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}