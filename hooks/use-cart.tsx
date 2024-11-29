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
    (set, get) => {
      return {
        items: [],
        addItem: (product) => {
          const currentItems = get().items;

          // Verificar si el producto ya está en el carrito
          const existingItem = currentItems.find((p) => p.id === product.id);

          if (existingItem) {
            return toast({
              title: "El producto ya existe en el carrito.",
              variant: "destructive",
            });
          }

          // Añadir el producto al carrito
          set({ items: [...currentItems, product] });
          toast({
            title: "Producto añadido al carrito 🛍️",
          });
        },
        removeItem: (id: number) => {
          set({ items: get().items.filter((item) => item.id !== id) });
          toast({
            title: "Producto eliminado del carrito 🗑️",
          });
        },
        removeAll: () => {
          set({ items: [] });
          toast({
            title: "Carrito limpiado 🧹",
          });
        },
      };
    },
    {
      // Persistencia en localStorage
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);