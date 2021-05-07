import React from 'react';
import '../../styles/navbar.css';
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top" />
                            EcoCol
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;