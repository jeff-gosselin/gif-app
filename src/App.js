import React, { Component } from 'react';
import { HeaderSection } from './components/HeaderSection';
import { GifSection } from './components/GifSection';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={() => {
            return (
              <div>
                <HeaderSection page='home' />
                <GifSection />
              </div>
            );
          }}
        />
        <Route
          exact
          path='/favorites'
          render={() => {
            return (
              <div>
                <HeaderSection page='favorites' />
                <GifSection />
              </div>
            );
          }}
        />
      </Switch>
    );
  }
}

export default App;
