import React, { useEffect, useState, useRef } from "react";
import { api, getAutores } from "../../services/api.js";
import { success, error } from "../../services/notify.js";

export function FormCadastro() {
  // const [livros, setLivros] = useState([]);
  const [livro, setLivro] = useState("");
  const [autores, setAutores] = useState([]);
  const [autor, setAutor] = useState("");
  const [novoAutor, setNovoAutor] = useState("");
  const [price, setPrice] = useState("");
  const [numPaginas, setNumPaginas] = useState(null);

  const [url, setUrl] = useState("");

  const autorInput = useRef();
  const form = useRef();

  useEffect(() => {
    getAutores(setAutores);
  }, []);

  function onClickChange(url) {
    setUrl(url);
  }

  async function cadastrarLivro(e) {
    try {
      await api.post(url, {
        titulo: livro,
        autor,
        editora: price,
        numPaginas,
      });
      success("Livro cadastrado com sucesso");
      e.target.reset();
    } catch (err) {
      error("Falha ao cadastrar");
    }
  }

  async function cadastrarAutor(e) {
    try {
      await api.post(url, { nome: novoAutor });
      setNovoAutor("");
      autorInput.current.value = "";
      success("Autor cadastrado com sucesso");
      getAutores();
    } catch (err) {
      error("Falha ao cadastrar");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (url === "/livros") {
      await cadastrarLivro(e);
    } else if (url === "/autores") {
      await cadastrarAutor(e);
    }
  }

  return (
    <div className="container mx-auto">
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="flex flex-col py-3 w-6/12"
      >
        <input
          className="border-1 border-brand-500 mb-2 p-2 rounded-md w-full bg-zinc-800 text-zinc-50 focus:border-brand-500 focus:ring-brand-500 focus:outline-none focus:ring-1"
          type="text"
          placeholder="Titulo"
          onChange={(e) => setLivro(e.target.value)}
        />
        <div id="autor" className="flex justify-between gap-2">
          <select
            className="border-1 border-brand-500 mb-2 p-2 rounded-md max-w-[320px] bg-zinc-800 text-zinc-50 focus:border-brand-500 focus:ring-brand-500 focus:outline-none focus:ring-1"
            name="autores"
            id="autores"
            onChange={(e) => {
              console.log(e.target.value);
              setAutor(e.target.value);
            }}
            value={autor}
          >
            <option className="focus:border-brand-500 focus:ring-brand-500 focus:outline-none focus:ring-1">
              Autor
            </option>
            {autores.map((autor) => {
              return (
                <option
                  className="focus:border-brand-500 focus:ring-brand-500 focus:outline-none focus:ring-1"
                  value={autor._id}
                  key={autor._id}
                >
                  {autor.nome}
                </option>
              );
            })}
          </select>
          <input
            ref={autorInput}
            className="border-1 border-brand-500 mb-2 p-2 rounded-md w-full bg-zinc-800 text-zinc-50 focus:border-brand-500 focus:ring-brand-500 focus:outline-none focus:ring-1"
            type="text"
            placeholder="Novo Autor"
            onChange={(e) => setNovoAutor(e.target.value)}
          />
          <button
            onClick={() => onClickChange("/autores")}
            className="bg-brand-500 hover:bg-brand-300 transition-colors w-[320px] p-2 mb-2 text-white rounded-md"
          >
            Cadastrar Autor
          </button>
        </div>
        <div className="flex gap-2">
          <input
            className="border-1 border-brand-500 mb-2 p-2 rounded-md w-full bg-zinc-800 text-zinc-50 focus:border-brand-500 focus:ring-brand-500 focus:outline-none focus:ring-1"
            type="text"
            placeholder="Preço"
            onChange={(e) => setPrice(parseInt(e.target.value))}
          />
          <input
            className="border-1 border-brand-500 mb-2 p-2 rounded-md w-full bg-zinc-800 text-zinc-50 focus:border-brand-500 focus:ring-brand-500 focus:outline-none focus:ring-1"
            type="text"
            placeholder="Numero de Paginas"
            onChange={(e) => setNumPaginas(parseInt(e.target.value))}
          />
        </div>
        <button
          onClick={() => onClickChange("/livros")}
          className="bg-brand-500 hover:bg-brand-300 transition-colors w-full p-2 text-white rounded-md"
        >
          Cadastrar Livro
        </button>
      </form>
    </div>
  );
}
