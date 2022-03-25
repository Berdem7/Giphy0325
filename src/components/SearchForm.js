import { Component } from "react";

// import SearchIcon from "@material-ui/icons/Search";

export default class SearchForm extends Component {
  render() {
    return (
      <div>
        <form className="search-form">
          <label className="is-hidden" htmlFor="search">
            Search
          </label>
          <input name="search" type="search" placeholder="Search...."></input>
          <button type="submit" id="submit" className="search-button">
            <i className="material-icon icn-search">Search</i>
          </button>
        </form>
      </div>
    );
  }
}
