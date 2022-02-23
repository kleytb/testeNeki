import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccountCreator from "../Pages/AccountCreator";
import Home from "../Pages/Home";
import Login from "../Pages/Login";



const Rout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/createaccount" element={<AccountCreator />}></Route>
        
        
        
        
      </Routes>
    </BrowserRouter>
  );
};

export default Rout;
