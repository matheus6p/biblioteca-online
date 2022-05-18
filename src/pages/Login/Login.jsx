import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import ShowPassword from "../../components/ShowPassword";
import { api } from "../../services/api";
import { error, success } from "../../services/notify";

export function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    const loginData = {
      email: login,
      password,
    };

    try {
      const res = await api.post("/signIn", loginData);
      if (res.data.status === "success") {
        navigate("/dashboard");
        success("Bem-vindo de volta!");
      } else if (res.data.status === "failed") {
        error("Login ou senha incorretos");
      }
      console.log(res);
    } catch (err) {
      error("Whoops! Algo deu errado!");
    }

    console.log(loginData);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-[420px] ">
        <h1 className="text-3xl text-center mb-3 dark:text-white">Login</h1>
        <form onSubmit={handleLogin} className="w-[500] bg-pink">
          <Input
            onChange={(e) => setLogin(e.target.value)}
            type="email"
            placeholder="E-mail"
            name="email"
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
          <Button>Login</Button>
          <div className="flex gap-4 mt-2 justify-between items-center">
            <Link
              to="/registro"
              className="dark:text-white hover:underline hover:underline-offset-1 hover:dark:text-zinc-400 hover:text-zinc-400 transition-all"
            >
              Registrar-se
            </Link>
            <Link
              to="/password-recovery"
              className="dark:text-white hover:underline hover:underline-offset-1 hover:dark:text-zinc-400 hover:text-zinc-400 transition-all"
            >
              Esqueci minha senha
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
