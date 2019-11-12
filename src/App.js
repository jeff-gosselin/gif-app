import React, { Component } from 'react';
import { SearchPage } from './components/SearchPage';
import { FavsPage } from './components/FavsPage';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from './config';
import './App.css';

class App extends Component {
  state = {
    data: [],
    favs: [],
    query: '',
    pagination: 0,
    perPage: 2
  };

  getGifs = (e, query) => {
    e.preventDefault();
    axios
      .get(
        `${baseURL}${query}&offset=${this.state.pagination}&limit=${this.state.perPage}`
      )
      .then(response => {
        this.setState({
          data: [...this.state.data, ...response.data.data],
          query
        });
      })
      .catch(err => console.error(err));
  };

  getNextPage = e => {
    this.setState(
      {
        pagination: this.state.pagination + this.state.perPage
      },
      () => this.getGifs(e, this.state.query)
    );
  };

  render() {
    console.log(this.state.data);
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <SearchPage
              data={this.state.data}
              query={this.state.query}
              getGifs={this.getGifs}
              getNextPage={this.getNextPage}
            />
          )}
        />
        <Route exact path='/favorites' render={() => <FavsPage />} />
      </Switch>
    );
  }
}

export default App;
