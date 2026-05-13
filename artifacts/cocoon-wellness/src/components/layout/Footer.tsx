import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl mb-6">The Cocoon.</h3>
            <p className="text-background/70 leading-relaxed mb-6">
              A premium global wellness sanctuary rooted in Nigerian hospitality. Rest is not a luxury, it is a necessity.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-secondary">Sanctuaries</h4>
            <ul className="space-y-4 text-background/80">
              <li>Lagos, Nigeria (HQ)</li>
              <li>London, UK</li>
              <li>New York, USA</li>
              <li>Toronto, Canada</li>
              <li>Dubai, UAE</li>
              <li>Cape Town, South Africa</li>
              <li>Paris, France</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-secondary">Services</h4>
            <ul className="space-y-4 text-background/80">
              <li>Women's Spa</li>
              <li>Men's Grooming</li>
              <li>The Hair Studio</li>
              <li>Children's Retreat</li>
              <li>Pet Pampering</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-secondary">Newsletter</h4>
            <p className="text-background/70 mb-4">
              Receive notes on wellness, rest, and updates on our global branches.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-background/10 border border-background/20 rounded-l-full px-4 py-3 w-full focus:outline-none focus:border-secondary text-background placeholder:text-background/40"
              />
              <button className="bg-secondary text-foreground px-6 py-3 rounded-r-full font-medium hover:bg-secondary/90 transition-colors">
                Join
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} The Cocoon Wellness. All rights reserved.
          </p>
          <div className="flex gap-6 text-background/50 text-sm">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-secondary transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
