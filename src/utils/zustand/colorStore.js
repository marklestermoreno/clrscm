import { create } from "zustand";

const useColorStore = create((set) => ({
  backgroundColor: "#FFF",
  textColor: "#000",

  setBackgroundColor: (newBackgroundColor) =>
    set({ backgroundColor: newBackgroundColor }),

  setTextColor: (newTextColor) => set({ textColor: newTextColor }),
}));

export default useColorStore;
