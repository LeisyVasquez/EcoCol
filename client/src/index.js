import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Import path
import { _SignUpTraveler, _HomeEditor, _HomeTraveler, _ListPlacesToCreated, _HomeGeneral, _SignUpEditor, _ErrorRoute } from "./config/path";

//Styles
import './styles/body.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Import pages
import SignUpTraveler from "./pages/traveler/SignUp";
import SignUpEditor from './pages/editor/SingUp'
import HomeEditor from './pages/editor/Home';
import HomeTraveler from './pages/traveler/Home';
import ListPlacesToCreated from './pages/editor/ListPlacesToCreated';
import HomeGeneral from './pages/HomeGeneral';
import ErrorRoute from './pages/ErrorRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={_HomeGeneral} component={HomeGeneral} />
        <Route exact path={_SignUpTraveler} component={SignUpTraveler} />
        <Route exact path={_SignUpEditor} component={SignUpEditor} />
        <Route exact path={_HomeEditor} component={HomeEditor} />
        <Route exact path={_HomeTraveler} component={HomeTraveler} />
        <Route exact path={_ListPlacesToCreated} component={ListPlacesToCreated} />
        <Route exact path={_ErrorRoute} component={ErrorRoute} />

      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App path={_HomeGeneral} />
  </React.StrictMode>,
  document.getElementById('root')
);