import { ChevronLeft, Home } from "lucide-react";
import { useLocation } from "wouter";

export function BackNav() {
  const [, setLocation] = useLocation();

  return (
    <div className="fixed top-16 left-0 md:top-4 md:left-[96px] lg:left-[112px] z-40 bg-[hsl(25_15%_12%)]/85 backdrop-blur rounded-full border border-border flex items-center p-1 md:w-auto w-full md:rounded-full rounded-none justify-center shadow-lg">
      <button 
        onClick={() => window.history.back()}
        className="flex items-center justify-center p-2 rounded-full text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
        aria-label="Back"
      >
        <ChevronLeft size={20} />
      </button>
      <div className="w-[1px] h-6 bg-border mx-1"></div>
      <button 
        onClick={() => {
          setLocation("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="flex items-center justify-center p-2 rounded-full text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
        aria-label="Home"
      >
        <Home size={18} />
      </button>
    </div>
  );
}