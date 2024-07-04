import React from "react";
import NavMenu from "./NavMenu";
import '../App.css';

export const Header = () => {
  return (
    <>
      <div id="Header-Container">
        <div id="Header">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc7d5466b112bd9a0a944b465e68250748ce14b13369b2d48e825a2d2a51ce0b?"
            className="img"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/69d0cbfd520ddaf18005e563c051893151d4c36cd823fa806e0bcada11ee1203?"
            className="img"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/896f639dfc1a50a5d1dd496c65f2f41572deef69beebca615b089360b7867629?"
            className="img"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/46a6bc15f5fa162f90b89b101e39cdbaaa386009c0373a2c1d392db9a4e651ba?"
            className="img"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2206b7980451b32c9f6a25d73f206faed6330d3c7dbcdfb31a1b682a649866e7?"
            className="img"
          />
        </div>
        <NavMenu />
      </div>
      
    </>
  );
};
