import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Import path
import {_Home, _SignIn, _SignUp, _HomeEditor, _HomeTraveler} from "./config/path";

//Styles
import './styles/body.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Import pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomeEditor from './pages/HomeEditor';
import HomeTraveler from './pages/HomeTraveler';

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path={_Home} component={Home} />
        <Route exact path={_SignIn} component={SignIn} />
        <Route exact path={_SignUp} component={SignUp} />
        <Route exact path={_HomeEditor} component={HomeEditor} />
        <Route exact path={_HomeTraveler} component={HomeTraveler} />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App path={_Home} />
  </React.StrictMode>,
  document.getElementById('root')
);