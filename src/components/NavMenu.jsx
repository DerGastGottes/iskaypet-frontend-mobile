/* import React from "react";
import { Link } from "react-router-dom";
export default function NavMenu() {
  return (
    <div>
      <nav>
        <div className="Nav-container">
          <div>
            <Link to="/mis-datos" className="Nav-btn-text">
              Mis datos
            </Link>
          </div>
          <div>
            <Link to="/" className="Nav-btn-text">
              Mis tareas
            </Link>
          </div>
          <div>
            <Link to="/mis-devoluciones" className="Nav-btn-text">
              Mis devoluciones
            </Link>
          </div>
          <div>
            <Link to="/mis-comunicaciones" className="Nav-btn-text">
            Mis comunicaciones
            </Link>
          </div>
          <div>
            <Link to="/mis-mejores-amigos" className="Nav-btn-text">
            Mis mejores amigos
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavMenu() {
  const [selectedOption, setSelectedOption] = useState("/");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <nav className="mobile-nav">
        <div className="nav-container">
          <div className="nav-scroll">
            <div
              className={`nav-btn ${selectedOption === "/mis-datos" ? "active" : ""}`}
            >
              <Link to="/mis-datos" className={`nav-btn-text ${selectedOption === "/mis-datos" ? "active" : ""}`} onClick={() => handleOptionClick("/mis-datos")}>
                Mis datos
              </Link>
            </div>
            <div
              className={`nav-btn ${selectedOption === "/" ? "active" : ""}`}
            >
              <Link to="/" className={`nav-btn-text ${selectedOption === "/" ? "active" : ""}`} onClick={() => handleOptionClick("/")}>
                Mis tareas
              </Link>
            </div>
            <div
              className={`nav-btn ${selectedOption === "/mis-devoluciones" ? "active" : ""}`}
            >
              <Link to="/mis-devoluciones" className={`nav-btn-text ${selectedOption === "/mis-devoluciones" ? "active" : ""}`} onClick={() => handleOptionClick("/mis-devoluciones")}>
                Mis devoluciones
              </Link>
            </div>
            <div
              className={`nav-btn ${selectedOption === "/mis-comunicaciones" ? "active" : ""}`}
            >
              <Link to="/mis-comunicaciones" className={`nav-btn-text ${selectedOption === "/mis-comunicaciones" ? "active" : ""}`} onClick={() => handleOptionClick("/mis-comunicaciones")}>
                Mis comunicaciones
              </Link>
            </div>
            <div
              className={`nav-btn ${selectedOption === "/mis-mejores-amigos" ? "active" : ""}`}
            >
              <Link to="/mis-mejores-amigos" className={`nav-btn-text ${selectedOption === "/mis-mejores-amigos" ? "active" : ""}`} onClick={() => handleOptionClick("/mis-mejores-amigos")}>
                Mis mejores amigos
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}