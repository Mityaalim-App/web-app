import { NextRequest } from "next/server";
import { toast } from "react-toastify";

export function formatPhoneNumber(phoneNumber: string | undefined) {
  if (!phoneNumber) return;
  // Remove any non-digit characters
  const cleaned = phoneNumber.replace(/\D/g, "");

  // Insert a hyphen between the third and fourth digits
  const formatted = cleaned.replace(/(\d{3})(\d{1,})/, "$1-$2");

  // Return the formatted phone number
  return formatted;
}

export function showErrorMessage(message: string) {
  toast.error(message);
}
export async function handleError(response: Response) {
  const { error } = await response.json();
  console.error(error);

  showErrorMessage(error);
}

export function isClientSide() {
  return typeof window !== "undefined";
}

export function roundTime(date: Date) {
  var roundedDate = new Date(date);

  var hours = roundedDate.getHours();
  var minutes = roundedDate.getMinutes();

  // Round the minutes to the nearest 15 minutes
  minutes = Math.round(minutes / 15) * 15;

  // If the rounded minutes exceed 60, adjust the hours accordingly
  if (minutes === 60) {
    hours += 1;
    minutes = 0;
  }

  // Set the rounded hours and minutes on the new date object
  roundedDate.setHours(hours);
  roundedDate.setMinutes(minutes);

  // Return the rounded date object
  return roundedDate;
}

export function getAccountId(request: NextRequest) {
  return request.headers.get("x-account-id")!;
}
export function getUserId(request: NextRequest) {
  return request.headers.get("x-user-id")!;
}
