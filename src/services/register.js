import { api } from "./api";

export async function register(name, email, phoneNumber, password) {
  await api.post("/register", { name, email, phoneNumber, password });
}
