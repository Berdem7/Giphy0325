import { Component } from "react";

// import SearchIcon from "@material-ui/icons/Search";

export default class SearchForm extends Component {
  state = {
    searchText:"",
  }

  onSearchChange = e=>{
    // console.log(e)
    // this.props.onSearch(this.state.searchText)
    this.setState({searchText: e.target.value});
  }
  
  handleSubmit = e =>{
    e.preventDefault()
    this.props.onSearch(this.state.searchText)
    e.currentTarget.reset();
  }
  render() {
    console.log(this.state.searchText);
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="search-form">
          <label className="is-hidden" htmlFor="search">
            Search
          </label>
          <input onChange={this.onSearchChange} name="search" type="search" placeholder="Search...."></input>
          <button type="submit" id="submit" className="search-button">
            <i className="material-icon icn-search">Search</i>
          </button>
        </form>
      </div>
    );
  }
}
