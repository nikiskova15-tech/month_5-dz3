import { create } from "zustand";

export const useThemeStore = create((set) => ({
    theme: 'light',
    changeOnDark: () => set((state) => ({ theme: 'dark' })),
    changeOnLight: () => set((state) => ({ theme: 'light'}))
}))