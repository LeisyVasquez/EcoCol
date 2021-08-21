import React, { useState } from "react"; 
import { withRouter } from "react-router-dom";
//import Navbar from "../components/traveler/";
import Footer from "../components/Footer";
import axios from "axios";
import "../styles/signup.css";

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitUser = () =>{
        axios.post("http://localhost:6000/api/", {nameUser: name, email: email, password: password})
    }

    return (
        <>
            {/*<Navbar />*/}
            <div className="container mt-5" >
                <h1 className="pt-5 pb-3" style={{ color: "white"}}>Crea tu cuenta</h1>
                <form>
                <div className="mb-3">
                        <label for="name" className="form-label">Nombre</label>
                        <input type="name" onChange={(e) => {setName(e.target.value)}} className="form-control" id="name" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Dirección de correo electrónico</label>
                        <input type="email" onChange={(e) => {setEmail(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Contraseña</label> 
                        <input type="password" onChange={(e) => {setPassword(e.target.value)}} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <label for="example-date-input" className="col-2 col-form-label">Fecha de nacimiento</label>
                    <div className="mb-3">
                        <input className="form-control" type="date" id="example-date-input" />
                        <div id="emailHelp" className="form-text text-secondary bg-light rounded-pill">Asegúrese de que tenga al menos 15 caracteres O al menos 8 caracteres, incluido un número y una letra minúscula.</div>
                    </div>
                    <a href="/signin"> <button type="button" className="btn btn-dark btn-create" onClick={submitUser()}>Crear cuenta</button> </a>
                    <div className="pb-5">{/* Espacio entre el form y el container */}</div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default withRouter(SignUp);