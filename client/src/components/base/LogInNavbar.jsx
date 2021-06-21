import React from 'react';
import '../../styles/navbar.css';

const LogInNavbar = () => {
    return (
        <div className="Navbar">
            <nav className="navbar navbar-light bg-dark">
                <div className="mx-3 my-1" style={{ width: '100vw' }}>
                    <a className="navbar-brand" href="/" >
                        <img src="https://raw.githubusercontent.com/JuanManuel-GAA/equipo7_gaa_ppi2020/master/Recursos%20gu%C3%ADa/logo%20(1).png" alt="logo" width="34" height="31" />
                        <h4 className="d-inline">EcoCol</h4>
                    </a>
                    <button className="btn float-end" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">
                        <img src="https://raw.githubusercontent.com/JuanManuel-GAA/equipo7_gaa_ppi2020/master/Recursos%20gu%C3%ADa/profile.png" alt="logo" width="35" height="33" />
                    </button>
                </div>
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="mydiv animate-bg py-2">
                            <img className="d-block mt-3 mx-auto" src="https://raw.githubusercontent.com/JuanManuel-GAA/equipo7_gaa_ppi2020/22a4be8671d3b2ca676fd7a5f0d21e6148c81859/profile-user.svg" alt="profile" width="150" />
                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto my-5 w-75 ">
                            <button className="btn btn-dark mt-5 fs-5" type="button">Iniciar sesión</button>
                            <button className="btn btn-dark mt-4 fs-5" type="button">  Registrarse </button> 
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default LogInNavbar;