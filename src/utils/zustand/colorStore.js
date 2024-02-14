import { create } from "zustand";

const useColorStore = create((set) => ({
  backgroundColor: "#FFFFFF",
  textColor: "#000000",

  setBackgroundColor: (newBackgroundColor) =>
    set({ backgroundColor: newBackgroundColor }),

  setTextColor: (newTextColor) => set({ textColor: newTextColor }),
}));

export default useColorStore;
