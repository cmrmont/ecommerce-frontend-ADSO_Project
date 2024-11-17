import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "@/components/ui/use-toast";

interface CartStore {
  items: any[];
  addItem: (product: any) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        const currentItems = get().items;

        // Verificar si el producto ya está en el carrito
        const existingItem = currentItems.find((p) => p.id === product.id);

        if (existingItem) {
          setTimeout(() => {
            toast({
              title: "El producto ya existe en el carrito.",
              variant: "destructive",
            });
          }, 0);
          return;
        }

        // Añadir el producto al carrito
        set({ items: [...currentItems, product] });
        setTimeout(() => {
          toast({
            title: "Producto añadido al carrito 🛍️",
          });
        }, 0);
      },
      removeItem: (id: number) => {
        set({ items: get().items.filter((item) => item.id !== id) });
        setTimeout(() => {
          toast({
            title: "Producto eliminado del carrito 🗑️",
          });
        }, 0);
      },
      removeAll: () => {
        set({ items: [] });
        setTimeout(() => {
          toast({
            title: "Carrito limpiado 🧹",
          });
        }, 0);
      },
    }),
    {
      // Persistencia en localStorage
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
