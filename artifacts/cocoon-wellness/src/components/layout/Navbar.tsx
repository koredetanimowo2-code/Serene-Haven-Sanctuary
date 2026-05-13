import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Hair Studio", href: "#hair-studio" },
    { name: "Locations", href: "#locations" },
    { name: "Philosophy", href: "#philosophy" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="relative z-10 flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
            The Cocoon.
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-md hover:shadow-lg">
            <a href="#book">Book a Visit</a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-10 p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 bg-background z-0 md:hidden flex flex-col justify-center items-center gap-8"
        initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          clipPath: mobileMenuOpen ? "circle(150% at top right)" : "circle(0% at top right)",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ pointerEvents: mobileMenuOpen ? "auto" : "none" }}
      >
        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-serif text-3xl text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <Button asChild size="lg" className="mt-4 rounded-full w-48 bg-primary">
          <a href="#book" onClick={() => setMobileMenuOpen(false)}>Book a Visit</a>
        </Button>
      </motion.div>
    </motion.header>
  );
}
