import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Home, Globe, Bed, MapPin, CalendarHeart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [worldsOpen, setWorldsOpen] = useState(false);
  const [stayOpen, setStayOpen] = useState(false);
  const [location] = useLocation();

  const worldsLinks = [
    { name: "Women's World", href: "/services/women" },
    { name: "Men's World", href: "/services/men" },
    { name: "Children's World", href: "/services/children" },
    { name: "Pets' World", href: "/services/pets" },
    { name: "Hair Studio", href: "/services/hair" },
    { name: "Postpartum Suite", href: "/services/postpartum" },
    { name: "Sanctuary Spaces", href: "/services/sanctuary" }
  ];

  const stayLinks = [
    { name: "Standard Stay", href: "/stay" },
    { name: "VIP Suite", href: "/stay" },
    { name: "Exclusive Suite", href: "/stay" },
    { name: "Nature Walk", href: "/services/sanctuary" }
  ];

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-background/95 backdrop-blur z-50 flex items-center justify-between px-6 border-b border-border">
        <Link href="/" className="font-serif text-xl font-bold text-foreground">The Cocoon.</Link>
        <button onClick={() => setMobileMenuOpen(true)} className="text-foreground p-2">
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-background z-[100] md:hidden flex flex-col"
          >
            <div className="h-16 flex items-center justify-between px-6 border-b border-border shrink-0">
              <span className="font-serif text-xl font-bold text-foreground">The Cocoon.</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-foreground p-2">
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block font-serif text-2xl text-foreground">Home</Link>
              
              <div className="space-y-3">
                <button onClick={() => setWorldsOpen(!worldsOpen)} className="flex items-center justify-between w-full font-serif text-2xl text-foreground">
                  Our Worlds <ChevronDown size={20} className={`transform transition-transform ${worldsOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {worldsOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="flex flex-col gap-3 pl-4 border-l border-border overflow-hidden">
                      {worldsLinks.map(link => (
                        <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-foreground/80 text-lg">{link.name}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-3">
                <button onClick={() => setStayOpen(!stayOpen)} className="flex items-center justify-between w-full font-serif text-2xl text-foreground">
                  Stay With Us <ChevronDown size={20} className={`transform transition-transform ${stayOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {stayOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="flex flex-col gap-3 pl-4 border-l border-border overflow-hidden">
                      {stayLinks.map(link => (
                        <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-foreground/80 text-lg">{link.name}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/locations" onClick={() => setMobileMenuOpen(false)} className="block font-serif text-2xl text-foreground">Locations</Link>
            </div>
            <div className="p-6 shrink-0">
              <Button asChild className="w-full bg-primary text-primary-foreground h-14 text-lg rounded-full">
                <Link href="/book" onClick={() => setMobileMenuOpen(false)}>Book a Visit</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <motion.nav
        className="hidden md:flex fixed top-0 left-0 h-screen bg-card border-r border-border z-50 flex-col justify-between py-8 overflow-hidden shadow-2xl"
        initial={{ width: "80px" }}
        whileHover={{ width: "320px" }}
        onHoverStart={() => setIsOpen(true)}
        onHoverEnd={() => { setIsOpen(false); setWorldsOpen(false); setStayOpen(false); }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex flex-col w-[320px]">
          <div className="px-6 h-12 flex items-center mb-8">
            <Link href="/" className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-primary shrink-0 flex items-center justify-center text-primary-foreground font-serif text-lg">C</div>
              <span className={`font-serif text-2xl font-bold text-foreground whitespace-nowrap transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>The Cocoon.</span>
            </Link>
          </div>

          <div className="flex flex-col gap-2 px-4">
            <Link href="/" className={`flex items-center gap-4 px-3 py-3 rounded-xl transition-colors hover:bg-background ${location === "/" ? "bg-background" : ""}`}>
              <Home size={20} className="shrink-0 text-primary" />
              <span className={`text-foreground font-medium whitespace-nowrap transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>Home</span>
            </Link>

            <div className="flex flex-col">
              <button 
                onClick={() => setIsOpen(true) && setWorldsOpen(!worldsOpen)} 
                className={`flex items-center justify-between px-3 py-3 rounded-xl transition-colors hover:bg-background ${location.startsWith("/services") ? "bg-background" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <Globe size={20} className="shrink-0 text-primary" />
                  <span className={`text-foreground font-medium whitespace-nowrap transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>Our Worlds</span>
                </div>
                {isOpen && <ChevronDown size={16} className={`text-foreground/50 transition-transform ${worldsOpen ? "rotate-180" : ""}`} />}
              </button>
              <AnimatePresence>
                {isOpen && worldsOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="flex flex-col gap-1 pl-12 pr-4 py-2 overflow-hidden">
                    {worldsLinks.map(link => (
                      <Link key={link.href} href={link.href} className="text-foreground/70 hover:text-primary text-sm py-1 whitespace-nowrap">{link.name}</Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex flex-col">
              <button 
                onClick={() => setIsOpen(true) && setStayOpen(!stayOpen)} 
                className={`flex items-center justify-between px-3 py-3 rounded-xl transition-colors hover:bg-background ${location === "/stay" ? "bg-background" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <Bed size={20} className="shrink-0 text-primary" />
                  <span className={`text-foreground font-medium whitespace-nowrap transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>Stay With Us</span>
                </div>
                {isOpen && <ChevronDown size={16} className={`text-foreground/50 transition-transform ${stayOpen ? "rotate-180" : ""}`} />}
              </button>
              <AnimatePresence>
                {isOpen && stayOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="flex flex-col gap-1 pl-12 pr-4 py-2 overflow-hidden">
                    {stayLinks.map(link => (
                      <Link key={link.name} href={link.href} className="text-foreground/70 hover:text-primary text-sm py-1 whitespace-nowrap">{link.name}</Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/locations" className={`flex items-center gap-4 px-3 py-3 rounded-xl transition-colors hover:bg-background ${location === "/locations" ? "bg-background" : ""}`}>
              <MapPin size={20} className="shrink-0 text-primary" />
              <span className={`text-foreground font-medium whitespace-nowrap transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>Locations</span>
            </Link>
          </div>
        </div>

        <div className="px-4 w-[320px]">
          <Button asChild className={`w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl transition-all duration-300 overflow-hidden ${isOpen ? "h-14 px-4" : "h-12 w-12 px-0 mx-auto rounded-full flex items-center justify-center"}`}>
            <Link href="/book" className="flex items-center justify-center gap-3">
              <CalendarHeart size={isOpen ? 20 : 20} className="shrink-0" />
              {isOpen && <span className="whitespace-nowrap font-medium">Book a Visit</span>}
            </Link>
          </Button>
        </div>
      </motion.nav>
    </>
  );
}