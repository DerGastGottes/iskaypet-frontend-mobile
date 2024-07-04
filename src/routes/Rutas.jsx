import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { MisDatos } from "../components/MisDatos";
import '../App.css';
import { Header } from "../components/Header";
import { Devoluciones } from "../components/Devoluciones";
import { Comunicaciones } from "../components/Comunicaciones";
import { MejoresAmigos } from "../components/MejoresAmigos";

const Rutas = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="*"
            element={<Navigate replace to={"/"}></Navigate>}
          ></Route>
          <Route path="" element={<TaskForm />}></Route>
          <Route path="/mis-datos" element={<MisDatos />}></Route>
          <Route path="/mis-devoluciones" element={<Devoluciones />}></Route>
          <Route path="/mis-comunicaciones" element={<Comunicaciones />}></Route>
          <Route path="/mis-mejores-amigos" element={<MejoresAmigos />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Rutas;
