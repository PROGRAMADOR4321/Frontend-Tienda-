import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-4 bg-dark text-white rounded shadow-lg">
        <h1 className="text-center text-info fw-bold">🎮 Iniciar Sesión Gamer</h1>
        <hr className="border-info" />
        <div className="row my-4 h-100">
          <div className="col-md-6 col-lg-4 col-sm-8 mx-auto">
            <form className="bg-black p-4 rounded border border-secondary">
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="form-control bg-dark text-white border-info"
                  id="email"
                  placeholder="gamer@ejemplo.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-bold">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control bg-dark text-white border-info"
                  id="password"
                  placeholder="••••••••"
                />
              </div>
              <div className="my-3">
                <p>
                  ¿Nuevo aquí?{" "}
                  <Link to="/register" className="text-decoration-underline text-warning">
                    Regístrate
                  </Link>
                </p>
              </div>
              <div className="text-center">
                <button className="btn btn-warning px-4 fw-bold" type="submit">
                  Entrar al mundo gamer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
