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
    resultsFound: null,
    perPage: 25
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

    // Resets status of results bqck to null prior to search
    this.setState({
      resultsFound: null
    });

    // Fetch data
    axios
      .get(
        `${baseURL}${query}&offset=${this.state.pagination}&limit=${this.state.perPage}`
      )
      .then(response => {
        // If no results are found, set resultsFound to false
        if (response.data.data.length === 0) {
          this.setState({
            resultsFound: false
          });
        } else {
          // results are found... append results to the data array within the state and set resultsFound to true
          this.setState({
            data: [...this.state.data, ...response.data.data],
            resultsFound: true,
            query
          });
        }
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

  // Adds GIF to Favorites and if already a favorite will execute removeFromFavs
  addToFavs = (e, id) => {
    const checkIfExists = this.state.favs.filter(fav => id === fav.id);
    const favorite = this.state.data.filter(fav => id === fav.id);
    if (checkIfExists.length < 1) {
      this.setState({
        favs: [...favorite, ...this.state.favs]
      });
    } else {
      return this.removeFromFavs(id);
    }
  };

  // Removes a specific gif from Favorites
  removeFromFavs = id => {
    const favsWithRemoval = this.state.favs.filter(fav => fav.id !== id);
    this.setState({
      favs: favsWithRemoval
    });
  };

  // Routes for Search page and Favorites page
  render() {
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
              resultsFound={this.state.resultsFound}
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
