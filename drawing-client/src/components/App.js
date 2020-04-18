import React, {Component} from 'react';
import {HomePage, AboutPage, SigninPage, SettingsPage, RoomPage, NotFoundPage} from './pages';
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
            <Route exact path="/Signin" component={SigninPage} />
            <Route exact path="/Settings" component={SettingsPage} />
            <Route exact path="/Room" component={RoomPage} />
            <Route exact path="/About" component={AboutPage} />
            <Route component={NotFoundPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
