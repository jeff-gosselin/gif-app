import React, { Component } from "react";
import SearchIcon from "../img/search.png";
import "../css/SearchBar.scss";

// Search bar component that handles the input from the user
class SearchBar extends Component {
  state = {
    query: ""
  };

  handleInput = e => {
    this.setState({
      query: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={e => this.props.handleNewSearch(e, this.state.query)}>
        <input
          onChange={this.handleInput}
          className="search-input"
          type="text"
          placeholder="Search GIFs"
          value={this.state.query}
        />
        <input
          className="search-icon"
          type="image"
          src={SearchIcon}
          alt="Search"
        />
      </form>
    );
  }
}

export default SearchBar;
