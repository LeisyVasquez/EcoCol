import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from "../components/base/LogInNavbar";
import Footer from "../components/base/Footer";

const SignIn = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h1 className="pt-5 pb-3">Iniciar Sesión</h1>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Dirección de correo electrónico</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text text-secondary bg-light rounded-pill">Nunca compartas tu correo con nadie.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Contraseña</label><a href="/">¿Se te olvidó tu contraseña?</a>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <a href="/"> <button type="button" className="btn btn-primary">Ingresar</button> </a>
                    <div className="pt-3 pb-4">¿No tienes una cuenta?<a href="/signup">Crear una cuenta</a></div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default withRouter(SignIn);