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
    perPage: 36
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

  // Adds GIF to Favorites
  addToFavs = (e, id) => {
    const checkIfExists = this.state.favs.filter(fav => id === fav.id);
    const favorite = this.state.data.filter(fav => id === fav.id);
    if (checkIfExists.length < 1) {
      this.setState({
        favs: [...favorite, ...this.state.favs]
      });
    }
  };

  render() {
    console.log("X", this.state.load);
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
              addToFavs={this.addToFavs}
              favAmount={this.state.favs.length}
              favorites={this.state.favs}
            />
          )}
        />
        <Route
          exact
          path="/favorites"
          render={() => (
            <FavsPage
              data={this.state.favs}
              query={this.state.query}
              favorites={this.state.favs}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
