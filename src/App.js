import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store/store";
import Register from "./component/Register";
import Login from "./component/Login";
import Home from "./component/Home";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
      </Router>
    </Provider>
  );
}

export default App;
