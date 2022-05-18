import { api } from "./api";

export async function signUp(name, email, phoneNumber, password) {
  await api.post("/signup", { name, email, phoneNumber, password });
}
