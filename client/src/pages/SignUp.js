import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/base/LogInNavbar";
import Footer from "../components/base/Footer";

const SignUp = () => {

    //States
    const [nombre, setNombre] = useState([]);
    const [correo, setCorreo] = useState([]);
    const [contraseña, setContraseña] = useState([]);
    const [fecha_nacimiento, setFecha_Nacimiento] = useState([]);

    //Render start
    useEffect(() => {
        console.clear();
        axios
            .get("http://localhost:5001/getUsers")
            .catch((err)=>{
                console.log(err);
            });
    });

    const agregarUsuario = (values) => {
        try {
            axios.post(`http://localhost:5001/addUsers`, {
                nombre: nombre,
                correo: correo,
                contraseña: contraseña,
                fecha_nacimiento: fecha_nacimiento
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h1 className="pt-5 pb-3">Crea tu cuenta</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" name="name" onChange={(e) => { setNombre(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Dirección de correo electrónico</label>
                        <input type="email" className="form-control" id="email" name="email" onChange={(e) => { setCorreo(e.target.value) }} />
                        <div id="email-alert" className="form-text text-secondary bg-light rounded-pill">Nunca compartas tu correo con nadie.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="password" name="password" onChange={(e) => { setContraseña(e.target.value) }} />
                        <div id="password-alert" className="form-text text-secondary bg-light rounded-pill">Asegúrese de que tenga al menos 15 caracteres O al menos 8 caracteres, incluido un número y una letra minúscula.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="birthDay" class="col-2 col-form-label">Fecha de nacimiento</label>
                        <input className="form-control" type="date" id="birthDay" name="birthDay" onChange={(e) => { setFecha_Nacimiento(e.target.value) }} />
                    </div>
                    <a href="/signin"> <button type="submit" onClick={() => { agregarUsuario() }} className="btn btn-primary">Crear cuenta</button> </a>
                    <div className="pb-5">{/* Espacio entre el form y el container */}</div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default withRouter(SignUp);