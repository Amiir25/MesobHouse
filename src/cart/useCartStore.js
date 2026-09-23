import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
    persist(
        (set, get) => ({
            cart: [],

            // Add dish
            addDish: (newDish) => set((state) => {
                // Check if dish is on cart
                const existing = state.cart.find(dish => dish.id === newDish.id);

                // Increment if it exists
                if (existing) {
                    return {
                        cart: state.cart.map(dish => (
                            dish.id === newDish.id
                                ? { ...dish, qty: dish.qty + 1 }
                                : dish
                        ))
                    }
                }

                // Add new dish
                return {
                    cart: [ ...state.cart, { ...newDish, qty: 1 } ],
                };
            }),

            // Remove dish
            removeDish: (id) => set((state) => {
                cart: state.cart.filter(dish => dish.id !== id);
            }),

            // Increment
            increment: (id) => set((state) => {
                cart: state.cart.map(dish =>
                    dish.id === id
                        ? { ...dish, qty: dish.qty + 1 }
                        : dish
                )
            }),

            // Decrement
            decrement: (id) => set((state) => {
                cart: state.cart
                .map(dish =>
                    dish.id === id
                        ? { ...dish, qty: dish.qty - 1 }
                        : dish
                )
                .filter((dish) => dish.qty > 0) // remove if qty reaches 0
            }),

            // Clear cart
            clearCart: () => set({ cart: [] }),

            // Prices
            getSubtotal: () => (
                get().cart.reduce((sum, dish) => sum + dish.price * dish.qty, 0)
            ),
            getVat: () => (get().getSubtotal() + 0.15),
            getTotal: () => (get().getSubtotal() + get().getVat()),
        }),
        {
            name: "savedCart",
        }
    )
);

export default useCartStore;