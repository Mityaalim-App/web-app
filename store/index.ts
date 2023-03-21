import { User } from "@prisma/client";
import { create } from "zustand";

interface IFullUser extends User {}

export interface IStoreState {
  loggedUser: IFullUser | null;
  phoneNumber: string | null;
  getUser: () => IFullUser | null;
  setPhone: (payload: string | null) => void;
}
export const useMainStore = create<IStoreState>((set) => ({
  loggedUser: null,
  phoneNumber: null,
  getUser: () => {
    const user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    }
    return null;
  },
  setPhone: (payload: string | null) => set({ phoneNumber: payload })
}));
