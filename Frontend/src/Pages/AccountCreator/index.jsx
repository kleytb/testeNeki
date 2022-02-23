import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import api from "../../service/api";

import "./../Login/style.css";

export default function AccountCreator(props) {
  const navigation = useNavigate();

  const [name, setName] = useState("");
  

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword)
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "As senhas não são iguais!",
      });

    if (password.length < 3)
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Senha muito curta!",
      });

    let user = await api.post("/api/user/CreateUser", {
      
      nome: name,

      senha: password,
    });

    localStorage.setItem("user", JSON.stringify(user.data));

    navigation("/teams");
  };

  return (
    <>
      <div className="telaLogin">
        <div className="pageCenter">
          <form className="form" onSubmit={submitHandler}>
            <div>
              <h1 className="topText">Faça sua conta</h1>
            </div>

            <div>
              <input
                type="text"
                id="name"
                placeholder="Nome"
                required
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>

            <div>
              <input
                type="password"
                id="password"
                placeholder="Senha"
                required
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirme sua senha"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>

            <div>
              <button onClick={submitHandler} className="primary" type="submit">
                Cadastre-se
              </button>
            </div>
            <div>
              <div className="bottomText">
                Já possui uma conta? <Link to="/login">Faça Login</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
