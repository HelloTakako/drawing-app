import React, {Component} from 'react';
import {HomePage, AboutPage, LoginPage, NotFoundPage} from './pages';
import {NavBar} from './NavBar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <Router >
        <div className="App">
          <NavBar
          />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/About" component={AboutPage} />
            <Route exact path="/Login" component={LoginPage} />
            <Route component={NotFoundPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
