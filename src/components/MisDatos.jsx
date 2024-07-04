import React, { useState } from "react";


export const MisDatos = () => {
  const [userData, setUserData] = useState("");
  return (
    <div className="Container" >
      <p className="Title">Mis Datos</p>
      <div id="Datos-Container">
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <div className="div-datos-label">
              <label className="text-datos-label inline">Nombre</label>
              <p className="required inline">*</p>
            </div>

            <div>
              <input
                type="text"
                name="userName"
                placeholder="Nombre"
                required
                onChange={(e) => setUserData(e.target.value)}
                className="input-field"
              />
            </div>
          </div>
          <div>
            <div className="div-datos-label">
              <label className="text-datos-label inline">Email</label>
              <p className="required inline">*</p>
            </div>
            <div>
              <input
                type="text"
                name="userEmail"
                placeholder="Email"
                required
                onChange={(e) => setUserData(e.target.value)}
                className="input-field"
              />
            </div>
          </div>
          <div>
            <div className="div-datos-label">
              <label className="text-datos-label inline">Telefono</label>
              <p className="required inline">*</p>
            </div>
            <div>
              <input
                type="text"
                name="userPhone"
                placeholder="Telefono"
                required
                onChange={(e) => setUserData(e.target.value)}
                className="input-field"
              />
            </div>
          </div>
          <div>
            <button id="BtnDatosGuardar">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
};
