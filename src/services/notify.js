import { toast } from "react-toastify";

export const success = (message) =>
  toast.success(message, { theme: "colored" });

export const error = (message) => toast.error(message, { theme: "colored" });
