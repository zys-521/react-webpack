import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './pages/login';
import Home from './pages/home';
import {Provider} from 'react-redux'

function FadingRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={routeProps => (
        <Component {...routeProps} />
      )}
    />
  );
}

export default function App(props) {
  return (
    <Provider {...props}>
      <Router>
          <Switch>
                <FadingRoute path="/login" component={Login}/>
                <FadingRoute path="/home" component={Home}/>
            </Switch>
        </Router>
    </Provider>
  );
}
