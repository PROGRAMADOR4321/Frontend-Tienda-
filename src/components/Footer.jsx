import React from "react";

const Footer = () => {
  return (
    <footer className="text-center bg-dark text-white py-4">
      <div className="container">
        <p className="mb-2">
          🎮 Tienda Gamer - Juegos para PC, PlayStation, Xbox y Nintendo
        </p>
        <p className="mb-3">
          Desarrollado con ❤️ por{" "}
          <span className="text-warning">
            PROGRAMADOR4321, Akiles-55, GilbertoGonzales y josue-ruiz24
          </span>
        </p>
        <div className="d-flex justify-content-center gap-4 flex-wrap">
          <a
            href="https://github.com/PROGRAMADOR4321"
            className="text-white fs-4"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i> PROGRAMADOR4321
          </a>
          <a
            href="https://github.com/Akiles-55"
            className="text-white fs-4"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i> Akiles-55
          </a>
          <a
            href="https://github.com/GilbertoGonzales"
            className="text-white fs-4"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i> GilbertoGonzales
          </a>
          <a
            href="https://github.com/josue-ruiz24"
            className="text-white fs-4"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i> josue-ruiz24
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
