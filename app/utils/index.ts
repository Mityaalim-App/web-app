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
  showErrorMessage(error);
}

export function isClientSide() {
  return typeof window !== "undefined";
}
