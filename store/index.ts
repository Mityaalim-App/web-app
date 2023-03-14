import { User, UserDetails } from "@prisma/client";
import { create } from "zustand";

interface IFullUser extends User, UserDetails {}

export interface IStoreState {
  loggedUser: IFullUser | null;
  phoneNumber: string | null;
  setUser: (payload: IFullUser | null) => void;
  setPhone: (payload: string | null) => void;
}
export const useMainStore = create<IStoreState>((set) => ({
  loggedUser: null,
  phoneNumber: null,
  setUser: (payload: IFullUser | null) => set({ loggedUser: payload }),
  setPhone: (payload: string | null) => set({ phoneNumber: payload })
}));
