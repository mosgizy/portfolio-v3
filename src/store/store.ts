import { create } from 'zustand';

interface StoreI{
  hamburger: boolean;
  setHamburger: (status?:boolean) => void
}

export const useStore = create<StoreI>((set) => ({
  hamburger: false,
  setHamburger: (status) => set((state) => ({ hamburger: status === false ? status : !state.hamburger })),
}))