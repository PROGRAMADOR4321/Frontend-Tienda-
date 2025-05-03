import React from 'react';
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Sobre Nosotros</h1>
        <hr />
        <p className="lead text-center">
          Somos una tienda especializada en videojuegos para todas las plataformas: PlayStation, Xbox, PC y Nintendo.
          Nuestro objetivo es brindarte los mejores títulos del mercado, desde clásicos inolvidables hasta los últimos lanzamientos.
          Nos apasiona el gaming tanto como a ti, y trabajamos cada día para ofrecerte productos originales, ofertas exclusivas y una experiencia de compra única.
        </p>

        <h2 className="text-center py-4">Nuestras Categorías</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="./../assets/god-of-war.jpg"
                alt="PlayStation"
                height={160}
              />
              <div className="card-body text-center">
                <h5 className="card-title">PlayStation</h5>
                <a href="/products" className="btn btn-primary mt-2">Ver Juegos</a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="./assets/zelda-tears.jpg"
                alt="Nintendo"
                height={160}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Nintendo</h5>
                <a href="/products" className="btn btn-danger mt-2">Ver Juegos</a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="./../assets/Cyberpunk 2077.jpg"
                alt="PC"
                height={160}
              />
              <div className="card-body text-center">
                <h5 className="card-title">PC</h5>
                <a href="/products" className="btn btn-success mt-2">Ver Juegos</a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="./../assets/halo-infinite.jpg"
                alt="Xbox"
                height={160}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Xbox</h5>
                <a href="/products" className="btn btn-secondary mt-2">Ver Juegos</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
