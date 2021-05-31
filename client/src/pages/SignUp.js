import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from "../components/base/LogInNavbar";
import Footer from "../components/base/Footer";

const SignUp = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h1 className="pt-5 pb-3">Crea tu cuenta</h1>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Dirección de correo electrónico</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text text-secondary bg-light rounded-pill">Nunca compartas tu correo con nadie.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Contraseña</label> 
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <label for="example-date-input" class="col-2 col-form-label">Fecha de nacimiento</label>
                    <div class="mb-3">
                        <input class="form-control" type="date" id="example-date-input" />
                        <div id="emailHelp" className="form-text text-secondary bg-light rounded-pill">Asegúrese de que tenga al menos 15 caracteres O al menos 8 caracteres, incluido un número y una letra minúscula.</div>
                    </div>
                    <a href="/signin"> <button type="button" className="btn btn-primary">Crear cuenta</button> </a>
                    <div className="pb-5">{/* Espacio entre el form y el container */}</div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default withRouter(SignUp);