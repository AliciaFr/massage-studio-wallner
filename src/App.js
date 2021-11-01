import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Treatments from './components/Treatments';
import Prices from './components/Prices';
import Contact from './components/Contact';
import Imprint from './components/Imprint';
import Privacy from './components/Privacy';

class App extends Component {
  render() {
    return (
          <div className="App">
              <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
                  <Route exact path="/" render={props =>
                      <div>
                          <LandingPage />
                          <About />
                          <Treatments />
                          <Prices />
                          <Contact />
                      </div>
                  }
                  />
                  <Route path="/impressum" component={Imprint} />
                  <Route path="/datenschutzerklaerung" component={Privacy} />
              </BrowserRouter>
          </div>
    )
  }
}

export default App;
