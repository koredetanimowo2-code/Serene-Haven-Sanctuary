import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  location: z.string().min(1, "Please select a location"),
  service: z.string().min(1, "Please select a service category"),
  date: z.string().min(1, "Please enter a preferred date"),
  message: z.string().optional(),
});

export function BookVisit() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      location: "",
      service: "",
      date: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Inquiry Received",
        description: `Thank you, ${values.name}. Our concierge in ${values.location} will contact you shortly.`,
      });
      form.reset();
    }, 1500);
  }

  return (
    <section id="book" className="py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="bg-card rounded-[3rem] p-8 md:p-16 shadow-2xl border border-card-border overflow-hidden relative">
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Begin Your Transformation</h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Send us an inquiry and our dedicated concierge will reach out to arrange every detail of your visit, ensuring a perfectly tailored experience.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-serif text-xl text-foreground mb-2">Global Headquarters</h4>
                  <p className="text-muted-foreground">Victoria Island, Lagos, Nigeria</p>
                  <p className="text-primary mt-1">+234 1 234 5678</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-foreground mb-2">General Inquiries</h4>
                  <p className="text-primary">sanctuary@thecocoon.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" className="bg-background/50 border-input focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="jane@example.com" className="bg-background/50 border-input focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Sanctuary Location</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background/50 border-input focus:ring-primary">
                                <SelectValue placeholder="Select a city" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="lagos">Lagos, Nigeria</SelectItem>
                              <SelectItem value="london">London, UK</SelectItem>
                              <SelectItem value="newyork">New York, USA</SelectItem>
                              <SelectItem value="toronto">Toronto, Canada</SelectItem>
                              <SelectItem value="dubai">Dubai, UAE</SelectItem>
                              <SelectItem value="capetown">Cape Town, South Africa</SelectItem>
                              <SelectItem value="paris">Paris, France</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Primary Service Category</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background/50 border-input focus:ring-primary">
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="women">Women's Spa</SelectItem>
                              <SelectItem value="men">Men's Grooming & Spa</SelectItem>
                              <SelectItem value="hair">The Hair Studio</SelectItem>
                              <SelectItem value="kids">Children's Spa</SelectItem>
                              <SelectItem value="pets">Pet Sanctuary</SelectItem>
                              <SelectItem value="family">Family Package</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Preferred Date</FormLabel>
                        <FormControl>
                          <Input type="date" className="bg-background/50 border-input focus-visible:ring-primary text-foreground" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Additional Needs</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any specific requests, allergies, or concerns..." 
                            className="resize-none min-h-[100px] bg-background/50 border-input focus-visible:ring-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-lg" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Request Booking"}
                  </Button>
                </form>
              </Form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
