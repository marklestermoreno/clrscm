import { create } from "zustand";

const useOptionsStore = create((set) => ({
  isBackground: false,
  setIsBackground: (isNewBackground) => set({ isBackground: !isNewBackground }),
}));

export default useOptionsStore;
