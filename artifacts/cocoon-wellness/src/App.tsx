import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/Home";
import Services from "@/pages/Services";
import WomensWorld from "@/pages/WomensWorld";
import MensWorld from "@/pages/MensWorld";
import ChildrensWorld from "@/pages/ChildrensWorld";
import PetsWorld from "@/pages/PetsWorld";
import HairStudio from "@/pages/HairStudio";
import PostpartumWorld from "@/pages/PostpartumWorld";
import SanctuarySpaces from "@/pages/SanctuarySpaces";
import Stay from "@/pages/Stay";
import Locations from "@/pages/Locations";
import Book from "@/pages/Book";
import Checkout from "@/pages/Checkout";
import NotFound from "@/pages/not-found";

import { CartProvider } from "@/lib/cart";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

const queryClient = new QueryClient();

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/women" component={WomensWorld} />
      <Route path="/services/men" component={MensWorld} />
      <Route path="/services/children" component={ChildrensWorld} />
      <Route path="/services/pets" component={PetsWorld} />
      <Route path="/services/hair" component={HairStudio} />
      <Route path="/services/postpartum" component={PostpartumWorld} />
      <Route path="/services/sanctuary" component={SanctuarySpaces} />
      <Route path="/stay" component={Stay} />
      <Route path="/locations" component={Locations} />
      <Route path="/book" component={Book} />
      <Route path="/checkout" component={Checkout} />
      <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;