import { create } from "zustand";

const useColorStore = create((set) => ({
  color: "#00000",
  setColor: (newColor) => set({ color: newColor }),
}));

export default useColorStore;