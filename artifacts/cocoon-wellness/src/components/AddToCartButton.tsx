import { Button } from "@/components/ui/button";
import { useCart, CartItem } from "@/lib/cart";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

interface AddToCartButtonProps {
  item: CartItem;
}

export function AddToCartButton({ item }: AddToCartButtonProps) {
  const { items, addToCart } = useCart();
  const { toast } = useToast();

  const isAdded = items.some((i) => i.id === item.id);

  const handleAdd = () => {
    if (isAdded) return;
    addToCart(item);
    toast({
      title: "Added to your Cocoon visit",
      description: `${item.name} has been added to your selections.`,
    });
  };

  return (
    <Button
      onClick={handleAdd}
      variant={isAdded ? "outline" : "default"}
      className={`rounded-full transition-all duration-300 w-full sm:w-auto h-12 px-6 mt-4 ${
        isAdded
          ? "border-primary text-primary hover:bg-transparent cursor-default"
          : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
      }`}
      disabled={isAdded}
      data-testid={`add-to-cart-${item.id}`}
    >
      {isAdded ? (
        <span className="flex items-center gap-2">
          <Check size={16} /> Added
        </span>
      ) : (
        "Add to My Visit"
      )}
    </Button>
  );
}