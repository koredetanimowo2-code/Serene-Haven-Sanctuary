import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { HairStudio } from "@/components/sections/HairStudio";
import { Philosophy } from "@/components/sections/Philosophy";
import { Locations } from "@/components/sections/Locations";
import { Testimonials } from "@/components/sections/Testimonials";
import { BookVisit } from "@/components/sections/BookVisit";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Philosophy />
      <Services />
      <HairStudio />
      <Locations />
      <Testimonials />
      <BookVisit />
      <Footer />
    </main>
  );
}
