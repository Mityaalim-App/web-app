import { Account, User } from "@prisma/client";
import { isClientSide } from ".";

const USER_KEY = "mit-user";

interface ILoggedUser {
  account: Account;
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}
export function getLoggedUser(): ILoggedUser | null {
  if (isClientSide()) {
    const userStr = window.sessionStorage.getItem(USER_KEY);
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  }

  return null;
}

export function setLoggedUser(user: ILoggedUser) {
  if (isClientSide()) {
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
}
