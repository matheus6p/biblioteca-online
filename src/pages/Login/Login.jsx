import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function Login() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-[420px] ">
        <h1 className="text-3xl text-center mb-3 text-white">Login</h1>
        <form className="w-[500] bg-pink">
          <Input type="text" placeholder="Login" />
          <Input type="password" placeholder="Password" />
          <Button>Login</Button>
          <div className="flex gap-4 mt-2 justify-between items-center">
            <Link
              to="/registro"
              className="text-white hover:underline hover:underline-offset-1 hover:text-zinc-400 transition-all"
            >
              Registrar-se
            </Link>
            <Link
              to="/password-recovery"
              className="text-white hover:underline hover:underline-offset-1 hover:text-zinc-400 transition-all"
            >
              Esqueci minha senha
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
