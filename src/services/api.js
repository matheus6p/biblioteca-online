import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});

export async function getAutores(setAutores) {
  const res = await api.get("/autores");

  try {
    setAutores(res.data);
  } catch (err) {
    console.log(err);
  }
}

export async function getLivros(setLivros) {
  try {
    const res = await api.get("/livros");
    setLivros(res.data);
  } catch (err) {
    console.log(err);
  }
}
