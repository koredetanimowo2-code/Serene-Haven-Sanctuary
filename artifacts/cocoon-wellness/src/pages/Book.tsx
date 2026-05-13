import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { BackNav } from "@/components/layout/BackNav";

export default function Book() {
  const [guestType, setGuestType] = useState("");
  const [stayType, setStayType] = useState("");
  const [serviceWorld, setServiceWorld] = useState("");
  
  const getPreFilledMessage = () => {
    switch(serviceWorld) {
      case "women": return "Hello, The Cocoon team. I came across your sanctuary and I've been meaning to reach out. I'd love to book a Women's World treatment — a moment that's just mine. I've been carrying quite a bit lately, and I think I need this. I'm interested in [the treatment you offer] and would love to know what dates are available. Please be in touch when you can. With warmth.";
      case "men": return "Hello, The Cocoon. I don't usually do things like this for myself, but something about your space made me want to. I'd love to book a Men's World treatment — perhaps a massage or a therapy session. I'm not entirely sure where to start, and I think that's okay. Could you help me find the right thing? Looking forward to hearing from you.";
      case "children": return "Hello, The Cocoon team. I'd love to bring my little one in for a Children's World experience. They've been a bit overwhelmed lately and I think a gentle, calm space would do them the world of good. Please let me know what's available for their age, and what I should expect. Thank you so much for creating a space that remembers children too.";
      case "postpartum": return "Hello. I'm not sure how to start this, so I'll just be honest — I've just had a baby and I am running on empty. A friend told me about The Cocoon's Postpartum Suite and I cried a little reading about it. I'd love to book a visit — just to be cared for for once. Please tell me how it works and when I can come. Thank you for this.";
      case "pets": return "Hello, The Cocoon. My [dog/cat] is honestly due some pampering — I think they feel everything I feel, and if I need rest, they probably do too. I'd love to book them in for a Pets' World session. Could you let me know what's available and what I should bring along? Thank you for thinking of our animals.";
      case "hair": return "Hello, The Cocoon team. I've been looking for somewhere that truly understands hair — all of it, not just some of it. I'd love to book a Hair Studio appointment. My hair type is [describe yours] and I've been struggling with [what you're experiencing]. Could you recommend a treatment and let me know when you have availability? Really looking forward to being in your hands.";
      case "grief": return "Hello. This is a message I've been meaning to write for a while. I lost my baby and I haven't really found a space where I could fall apart safely. I read about your grief counselling service for mothers with angel babies and I'd like to come, when I'm ready. Could you tell me more about what a session looks like? I just need to know someone will be gentle with me.";
      default: return "Hello, The Cocoon. I've been looking at your website and I feel something just reading it — like I've been needing this without knowing what to call it. I'm not sure exactly what I need yet, but I'd love to talk to someone and figure it out. Could you reach out to me? Thank you for building something this beautiful.";
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col md:pl-20 pt-0 pb-20 md:pb-0">
      <Navbar />
      <BackNav />
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left Side - Image */}
        <div className="lg:w-1/2 relative hidden lg:block h-screen sticky top-0">
          <img src="/images/stay-standard.png" alt="Calming Sanctuary" className="absolute inset-0 w-full h-full object-cover" onError={e=>e.currentTarget.src='/images/hero.png'} />
          <div className="absolute inset-0 bg-background/20" />
          <div className="absolute bottom-12 left-12 p-8 bg-card/80 backdrop-blur-md rounded-3xl border border-border max-w-md">
            <h3 className="font-serif text-3xl mb-4 text-foreground">Contact Us Directly</h3>
            <p className="text-foreground/80 mb-2 font-medium">+234 812 547 4604</p>
            <p className="text-foreground/80 font-medium">koredetanimowo2@gmail.com</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-1/2 py-24 px-6 lg:px-16 xl:px-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Book a Visit</h1>
            <p className="text-xl text-foreground/70 mb-12 font-light italic">Step in. The world stops here. Let us know how we can prepare for your arrival.</p>
            
            <form className="space-y-8" action="mailto:koredetanimowo2@gmail.com" method="post" encType="text/plain">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-foreground/80 font-medium text-sm">Full Name</Label>
                  <Input id="name" name="name" required className="h-14 rounded-xl border-border bg-card focus:border-primary" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-foreground/80 font-medium text-sm">Email Address</Label>
                  <Input id="email" name="email" type="email" required className="h-14 rounded-xl border-border bg-card focus:border-primary" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-foreground/80 font-medium text-sm">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" required className="h-14 rounded-xl border-border bg-card focus:border-primary" />
                </div>
                <div className="space-y-3">
                  <Label className="text-foreground/80 font-medium text-sm">Select Location</Label>
                  <Select name="location">
                    <SelectTrigger className="h-14 rounded-xl border-border bg-card focus:border-primary">
                      <SelectValue placeholder="Choose a sanctuary" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lagos">Lagos, Nigeria</SelectItem>
                      <SelectItem value="london">London, UK</SelectItem>
                      <SelectItem value="newyork">New York, USA</SelectItem>
                      <SelectItem value="toronto">Toronto, Canada</SelectItem>
                      <SelectItem value="dubai">Dubai, UAE</SelectItem>
                      <SelectItem value="johannesburg">Johannesburg, SA</SelectItem>
                      <SelectItem value="paris">Paris, France</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label className="text-foreground/80 font-medium text-sm">Guest Type</Label>
                  <Select name="guest_type" onValueChange={setGuestType}>
                    <SelectTrigger className="h-14 rounded-xl border-border bg-card focus:border-primary">
                      <SelectValue placeholder="Visit duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="day">Day Visit / Walk-In</SelectItem>
                      <SelectItem value="multi-day">Multi-Day Stay</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-3">
                  <Label className="text-foreground/80 font-medium text-sm">Service World</Label>
                  <Select name="service_world" onValueChange={setServiceWorld}>
                    <SelectTrigger className="h-14 rounded-xl border-border bg-card focus:border-primary">
                      <SelectValue placeholder="Which world?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="women">Women's World</SelectItem>
                      <SelectItem value="men">Men's World</SelectItem>
                      <SelectItem value="children">Children's World</SelectItem>
                      <SelectItem value="pets">Pets' World</SelectItem>
                      <SelectItem value="hair">Hair Studio</SelectItem>
                      <SelectItem value="postpartum">Postpartum Suite</SelectItem>
                      <SelectItem value="grief">Angel Baby Grief Counselling</SelectItem>
                      <SelectItem value="sanctuary">Sanctuary Access Only</SelectItem>
                      <SelectItem value="unsure">Unsure / Need Advice</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {guestType === 'multi-day' && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div className="space-y-3">
                    <Label className="text-foreground/80 font-medium text-sm">Stay Duration</Label>
                    <Select name="stay_duration">
                      <SelectTrigger className="h-14 rounded-xl border-border bg-card focus:border-primary">
                        <SelectValue placeholder="How long?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3days">3 Days</SelectItem>
                        <SelectItem value="5days">5 Days</SelectItem>
                        <SelectItem value="7days">7 Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-3">
                    <Label className="text-foreground/80 font-medium text-sm">Room Type</Label>
                    <Select name="room_type">
                      <SelectTrigger className="h-14 rounded-xl border-border bg-card focus:border-primary">
                        <SelectValue placeholder="Select suite" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard Stay</SelectItem>
                        <SelectItem value="vip">VIP Suite</SelectItem>
                        <SelectItem value="exclusive">Exclusive Suite</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="date" className="text-foreground/80 font-medium text-sm">Preferred Date</Label>
                  <Input id="date" name="date" type="date" className="h-14 rounded-xl border-border bg-card focus:border-primary" />
                </div>
                <div className="space-y-3">
                  <Label className="text-foreground/80 font-medium text-sm">How did you hear about us?</Label>
                  <Select name="referral">
                    <SelectTrigger className="h-14 rounded-xl border-border bg-card focus:border-primary">
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

              <div className="space-y-3">
                <Label htmlFor="message" className="text-foreground/80 font-medium text-sm">Message & Accessibility Needs</Label>
                <Textarea 
                  key={serviceWorld}
                  id="message" 
                  name="message"
                  defaultValue={getPreFilledMessage()}
                  className="rounded-xl border-border bg-card focus:border-primary min-h-[160px] p-4 text-base" 
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-16 mt-8 shadow-lg">
                Submit Booking Request
              </Button>
            </form>

            <div className="mt-16 bg-card/50 p-10 rounded-[2rem] border border-border">
              <h3 className="font-serif text-3xl mb-4 text-foreground">Walk-In Guests</h3>
              <p className="text-foreground/80 mb-6 font-light leading-relaxed">
                Walk-in guests are welcome to book day treatments and enjoy our common spaces, lounges, and cafes. 
              </p>
              <p className="text-foreground/80 font-light leading-relaxed">
                The Nature Walk, heated pool, and sleep rooms are reserved strictly for our stay guests. Every guest is family — staying longer simply opens more doors.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}