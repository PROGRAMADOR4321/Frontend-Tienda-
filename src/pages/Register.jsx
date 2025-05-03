import React from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-4 bg-dark text-white rounded shadow-lg">
        <h1 className="text-center text-info fw-bold">🕹️ Crear Cuenta Gamer</h1>
        <hr className="border-info" />
        <div className="row my-4 h-100">
          <div className="col-md-6 col-lg-4 col-sm-8 mx-auto">
            <form className="bg-black p-4 rounded border border-secondary">
              <div className="mb-3">
                <label htmlFor="Name" className="form-label fw-bold">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  className="form-control bg-dark text-white border-info"
                  id="Name"
                  placeholder="Ej: Leon Gamer"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label fw-bold">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="form-control bg-dark text-white border-info"
                  id="Email"
                  placeholder="gamer@ejemplo.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Password" className="form-label fw-bold">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control bg-dark text-white border-info"
                  id="Password"
                  placeholder="••••••••"
                />
              </div>
              <div className="my-3">
                <p>
                  ¿Ya tienes una cuenta?{" "}
                  <Link to="/login" className="text-decoration-underline text-warning">
                    Inicia sesión
                  </Link>
                </p>
              </div>
              <div className="text-center">
                <button className="btn btn-warning px-4 fw-bold" type="submit">
                  Registrarme
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

export default Register;
