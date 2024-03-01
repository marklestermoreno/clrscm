import { create } from "zustand";

const useColorStore = create((set) => ({
  backgroundColor: "#000000",
  textColor: "#FFFFFF",

  setBackgroundColor: (newBackgroundColor) =>
    set({ backgroundColor: newBackgroundColor }),

  setTextColor: (newTextColor) => set({ textColor: newTextColor }),
}));

export default useColorStore;
