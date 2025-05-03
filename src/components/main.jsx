import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">S
        <div className="card bg-dark text-white border-0 mx-3">
        <img
          src="./assets/main.png.jpg"
          alt="Videojuegos"
          style={{
            height: "600px",
            width: "100%",
            objectFit: "cover",
            display: "block"
          }}
        />


          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">
                ¡Nuevas Temporadas de Videojuegos!
              </h5>
              <p className="card-text fs-5 d-none d-sm-block">
                Descubre lo último en videojuegos para PlayStation, Xbox, Nintendo y PC.
                Vive la mejor experiencia gamer con nuestras ofertas exclusivas y títulos de estreno.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
