import React, { Component } from "react";
import { SearchPage } from "./components/SearchPage";
import { FavsPage } from "./components/FavsPage";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { baseURL } from "./config";
import "./App.css";

class App extends Component {
  state = {
    data: [],
    favs: [],
    query: "",
    pagination: 0,
    perPage: 12
  };

  // Removes any previous search results before fetching new query
  handleNewSearch = (e, query) => {
    this.setState({
      data: []
    });
    return this.getGifs(e, query);
  };

  // Fetches query data and appends if necessary
  getGifs = (e, query) => {
    e.preventDefault();
    console.log("target", e.target);
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

  // Fetches more data from next page
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
          path="/"
          render={() => (
            <SearchPage
              data={this.state.data}
              query={this.state.query}
              getGifs={this.getGifs}
              handleNewSearch={this.handleNewSearch}
              getNextPage={this.getNextPage}
            />
          )}
        />
        <Route
          exact
          path="/favorites"
          render={() => (
            <FavsPage data={this.state.favs} query={this.state.query} />
          )}
        />
      </Switch>
    );
  }
}

export default App;
