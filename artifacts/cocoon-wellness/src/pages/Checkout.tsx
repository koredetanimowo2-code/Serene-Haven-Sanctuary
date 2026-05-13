import { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart";

export default function Checkout() {
  const { items, removeFromCart } = useCart();
  const [currency, setCurrency] = useState<"NGN" | "USD" | "GBP">("NGN");

  const total = useMemo(() => {
    return items.reduce((sum, item) => {
      if (currency === "NGN") return sum + item.priceNaira;
      if (currency === "USD") return sum + item.priceUSD;
      if (currency === "GBP") return sum + item.priceGBP;
      return sum;
    }, 0);
  }, [items, currency]);

  const currencySymbol = currency === "NGN" ? "₦" : currency === "USD" ? "$" : "£";

  const prefilledMessage = useMemo(() => {
    if (items.length === 0) return "Hello, The Cocoon. I've been looking at your sanctuary and I would love to visit.";
    const serviceNames = items.map(i => i.name).join(", ");
    return `Hello, The Cocoon. I've been looking at your sanctuary and I would love to visit. I'm interested in the following: ${serviceNames}. I'd love to book these for [preferred date] at your [location] branch. Please let me know what's available and how to confirm. Looking forward to meeting your team.`;
  }, [items]);

  return (
    <div className="min-h-screen bg-background flex flex-col md:pl-20">
      <Navbar />
      <div className="container mx-auto px-6 lg:px-12 py-32 flex-1">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-4">My Visit</h1>
          <p className="text-xl text-foreground/70 font-light italic">Your curated journey of restoration.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Cart Items */}
          <div className="w-full lg:w-1/2">
            <div className="bg-card rounded-[2rem] border border-border p-8 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-serif text-3xl text-foreground">Selected Services</h2>
                <div className="flex gap-2">
                  {(["NGN", "USD", "GBP"] as const).map(c => (
                    <button
                      key={c}
                      onClick={() => setCurrency(c)}
                      className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
                        currency === c ? "bg-primary text-primary-foreground" : "bg-background text-foreground/70 hover:bg-background/80"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {items.length === 0 ? (
                <div className="text-center py-12 text-foreground/60 font-light">
                  Your visit is currently empty. Explore our worlds to add services.
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between items-center border-b border-border/50 pb-6 last:border-0 last:pb-0">
                      <div>
                        <h4 className="font-serif text-xl text-foreground">{item.name}</h4>
                        <p className="text-sm text-foreground/60">{item.world}</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <span className="font-medium text-primary">
                          {currencySymbol}
                          {currency === "NGN" ? item.priceNaira.toLocaleString() : currency === "USD" ? item.priceUSD : item.priceGBP}
                        </span>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-foreground/40 hover:text-destructive transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-6 border-t border-border flex justify-between items-center">
                    <span className="font-serif text-2xl">Estimated Total</span>
                    <span className="font-serif text-3xl text-primary">
                      {currencySymbol}{total.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-foreground/50 text-right italic">
                    * Prices shown are starting prices. Final quote confirmed on booking.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Checkout Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-card rounded-[2rem] border border-border p-8">
              <h2 className="font-serif text-3xl text-foreground mb-8">Confirm Details</h2>
              <form className="space-y-6" action="mailto:koredetanimowo2@gmail.com" method="post" encType="text/plain">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-foreground/80 font-medium">Full Name</Label>
                  <Input id="name" name="name" required className="h-14 rounded-xl bg-background border-border focus:border-primary" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-foreground/80 font-medium">Email</Label>
                    <Input id="email" name="email" type="email" required className="h-14 rounded-xl bg-background border-border focus:border-primary" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-foreground/80 font-medium">WhatsApp Number</Label>
                    <Input id="phone" name="phone" type="tel" required className="h-14 rounded-xl bg-background border-border focus:border-primary" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label className="text-foreground/80 font-medium">Location</Label>
                    <Select name="location" defaultValue="lagos">
                      <SelectTrigger className="h-14 rounded-xl bg-background border-border focus:border-primary">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lagos">Lagos HQ</SelectItem>
                        <SelectItem value="london">London</SelectItem>
                        <SelectItem value="newyork">New York</SelectItem>
                        <SelectItem value="toronto">Toronto</SelectItem>
                        <SelectItem value="dubai">Dubai</SelectItem>
                        <SelectItem value="johannesburg">Johannesburg</SelectItem>
                        <SelectItem value="paris">Paris</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="date" className="text-foreground/80 font-medium">Preferred Date</Label>
                    <Input id="date" name="date" type="date" required className="h-14 rounded-xl bg-background border-border focus:border-primary" />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-foreground/80 font-medium">Stay Type</Label>
                  <Select name="stay_type" defaultValue="day">
                    <SelectTrigger className="h-14 rounded-xl bg-background border-border focus:border-primary">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="day">Day Visit</SelectItem>
                      <SelectItem value="3day">3-Day Stay</SelectItem>
                      <SelectItem value="5day">5-Day Stay</SelectItem>
                      <SelectItem value="7day">7-Day Stay</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <input type="hidden" name="services" value={items.map(i => i.name).join(", ")} />

                <Button type="submit" size="lg" className="w-full h-16 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg shadow-lg mt-4" disabled={items.length === 0}>
                  Request Booking
                </Button>
                
                <div className="text-center mt-6">
                  <a 
                    href={`https://wa.me/2348125474604?text=${encodeURIComponent(prefilledMessage)}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary underline underline-offset-4 decoration-primary/30 transition-colors"
                  >
                    Or reach us directly on WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}