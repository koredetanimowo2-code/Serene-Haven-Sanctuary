import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Book() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col lg:flex-row pt-24">
        {/* Left Side - Image */}
        <div className="lg:w-5/12 relative hidden lg:block">
          <img src="/images/book-bg.png" alt="Calming Sanctuary" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-7/12 py-16 px-6 lg:px-20 overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h1 className="font-serif text-4xl text-foreground mb-4">Book a Visit</h1>
            <p className="text-foreground/70 mb-10">Step in. The world stops here. Let us know how we can prepare for your arrival.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()} data-testid="booking-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" className="rounded-xl border-border bg-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" className="rounded-xl border-border bg-background" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" className="rounded-xl border-border bg-background" />
                </div>
                <div className="space-y-2">
                  <Label>Select Location</Label>
                  <Select>
                    <SelectTrigger className="rounded-xl border-border bg-background">
                      <SelectValue placeholder="Choose a sanctuary" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lagos">Lagos, Nigeria</SelectItem>
                      <SelectItem value="london">London, UK</SelectItem>
                      <SelectItem value="ny">New York, USA</SelectItem>
                      <SelectItem value="toronto">Toronto, Canada</SelectItem>
                      <SelectItem value="dubai">Dubai, UAE</SelectItem>
                      <SelectItem value="joburg">Johannesburg, SA</SelectItem>
                      <SelectItem value="paris">Paris, France</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Guest Type</Label>
                  <Select>
                    <SelectTrigger className="rounded-xl border-border bg-background">
                      <SelectValue placeholder="Select guest type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="women">Women</SelectItem>
                      <SelectItem value="men">Men</SelectItem>
                      <SelectItem value="children">Children</SelectItem>
                      <SelectItem value="pets">Pets</SelectItem>
                      <SelectItem value="all">All / Family</SelectItem>
                      <SelectItem value="group">Group</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Service Category</Label>
                  <Select>
                    <SelectTrigger className="rounded-xl border-border bg-background">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="massage">Massage & Body</SelectItem>
                      <SelectItem value="nails">Nails & Hands</SelectItem>
                      <SelectItem value="facial">Facials</SelectItem>
                      <SelectItem value="hair">Hair Studio</SelectItem>
                      <SelectItem value="sanctuary">Sanctuary Space Access</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Stay Type</Label>
                  <Select>
                    <SelectTrigger className="rounded-xl border-border bg-background">
                      <SelectValue placeholder="Duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="day">Day Visit</SelectItem>
                      <SelectItem value="3day">3-Day Stay</SelectItem>
                      <SelectItem value="5day">5-Day Stay</SelectItem>
                      <SelectItem value="7day">7-Day Stay</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Room Type (If staying)</Label>
                  <Select>
                    <SelectTrigger className="rounded-xl border-border bg-background">
                      <SelectValue placeholder="Select room type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">Not staying</SelectItem>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="vip">VIP Suite</SelectItem>
                      <SelectItem value="exclusive">Exclusive Suite</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input id="date" type="date" className="rounded-xl border-border bg-background" />
                </div>
                <div className="space-y-2">
                  <Label>How did you hear about us?</Label>
                  <Select>
                    <SelectTrigger className="rounded-xl border-border bg-background">
                      <SelectValue placeholder="Let us know" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="friend">Friend / Family</SelectItem>
                      <SelectItem value="article">Article / Press</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="accessibility">Accessibility Needs & Special Requests</Label>
                <Textarea 
                  id="accessibility" 
                  placeholder="Tell us how we can make your visit comfortable (e.g., sensory-friendly room, wheelchair access, silent treatment)" 
                  className="rounded-xl border-border bg-background min-h-[120px]" 
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full bg-primary text-lg h-14 mt-4">
                Submit Request
              </Button>
            </form>

            <div className="mt-16 bg-card p-8 rounded-3xl border border-border">
              <h3 className="font-serif text-2xl mb-4 text-primary">Before You Arrive</h3>
              <p className="text-foreground/80 mb-4">We are committed to providing a fully soundproofed, sensory-considerate environment. Your comfort is our highest priority.</p>
              <p className="text-foreground/70 text-sm">When you arrive, expect a warm greeting and an immediate transition into quiet. Our staff will guide you to your space at your own pace.</p>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}