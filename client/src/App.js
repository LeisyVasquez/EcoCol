import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './styles/body.css';

import Home from '../src/pages/Home';

function App() {
  return(
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;