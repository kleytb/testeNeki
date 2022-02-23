import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



import Swal from "sweetalert2";

import api from "../../service/api";

import "./style.css";

export default function Login(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      let response = await api.post("/api/user/findUser", {
        login,
        senha: password,
      });

      let user = response.data;
      localStorage.setItem("user", JSON.stringify(user));

      navigation("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Dados incorretos",
      });
    }
  };

  return (
    <>
    
    <div className="telaLogin">
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1 className="topText">Login</h1>
        </div>
        <div>
          <input
            type="login"
            id="login"
            placeholder="Login"
            required
            onChange={(e) => setLogin(e.target.value)}
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
          <button className="primary" type="submit">
            Entrar
          </button>
        </div>
        <div>
          <div className="bottomText">
            Novo usuário? <Link to="/createaccount">Crie sua conta</Link>
          </div>
        </div>
      </form>
    </div>
    
    </>
  );
}
