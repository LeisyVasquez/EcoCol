import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from "../components/base/LogInNavbar";
import Footer from "../components/base/Footer";
import "../styles/signin.css";

const SignIn = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h1 style={{ color: "white" }} className="pt-5 pb-3">Iniciar Sesión</h1>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Dirección de correo electrónico</label>
                        <input type="email" className="form-control input-email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input type="password" className="form-control input-password " id="exampleInputPassword1" />
                    </div>
                    <div className="d-flex justify-content-between"><a className="help-password" href="/">¿Se te olvidó tu contraseña?</a>
                        <button type="button" className="btn btn-dark btn-ingresar"> <a className="login" href="/home-editor"> Ingresar </a></button>
                    </div>
                    <div className="pt-3 pb-4 help-account">¿No tienes una cuenta?<a className="help-create" href="/signup">Crear una cuenta</a></div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default withRouter(SignIn);