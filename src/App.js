import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store";
import Main from "./components/Main";
import Home from "./components/common/Home";
import CategoryPage from "./components/category/CategoryPage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <Main>
              <Route exact path="/category" component={Home} />
              <Route path="/category/:id" component={CategoryPage} />
            </Main>
        </Router>
      </Provider> 
    );
  }
}

export default App;