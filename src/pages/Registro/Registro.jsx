import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { signUp } from "../../services/signUp";
import { success, error } from "../../services/notify.js";
import ShowPassword from "../../components/ShowPassword";

export function Registro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function handleFormRegister(e) {
    e.preventDefault(); //remove after tests done
    console.log({ name, email, phoneNumber, password });
    try {
      const res = await signUp(name, email, phoneNumber, password);
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
        <h1 className="text-3xl text-center mb-3 dark:text-white">
          Registre-se
        </h1>
        <form onSubmit={handleFormRegister} className="w-[500] bg-pink">
          <Input
            type="text"
            placeholder="Nome"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            type="email"
            placeholder="E-mail"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="Celular"
            name="phone"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <ShowPassword
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          </div>
          <Button>Registrar</Button>
        </form>
      </div>
    </div>
  );
}
