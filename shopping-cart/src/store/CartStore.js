import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
    persist(
        (set) => ({
            cart: [],
            setCart: (newCart) => set({ cart: newCart }),
        }),
        {
            name: "cart-storage", // 로컬스토리지 키 이름
        }
    )
);
