import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { register } from "../../services/register";
import { success, error } from "../../services/notify.js";

export function Registro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  async function handleFormRegister(e) {
    e.preventDefault(); //remove after tests done
    console.log({ name, email, phoneNumber, password });
    try {
      const res = await register(name, email, phoneNumber, password);
      console.log(res);
      success("Bem-Vindo, novo membro!");
    } catch (err) {
      console.log(err);
      error("Oops! Algo deu errado!");
    }
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-[420px] ">
        <h1 className="text-3xl text-center mb-3 text-white">Registre-se</h1>
        <form onSubmit={handleFormRegister} className="w-[500] bg-pink">
          <Input
            type="text"
            placeholder="Nome"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="E-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="Celular"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button>Registrar</Button>
        </form>
      </div>
    </div>
  );
}
