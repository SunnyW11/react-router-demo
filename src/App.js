import React, { Component } from 'react';
// import { CSSTransitionGroup } from 'react-transition-group';
import {
  BrowserRouter as Router,
  // Link,
  Route
} from 'react-router-dom';
import './App.css';

// 组件
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Aboutus from './Pages/Aboutus/Aboutus';
import Product from './Pages/Product/Product';
import Footer from './Components/Footer/Footer';
          // <CSSTransitionGroup transitionName="fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          // </CSSTransitionGroup>

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <Route path='/home' component={Home} />
            <Route path='/aboutUs' component={Aboutus} />
            <Route path='/product' component={Product} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
