import React, {useState } from "react";

// import SearchIcon from "@material-ui/icons/Search";


function SearchForm (props) {
  const [searchText, setSearchText] = useState("");
    // searchText:"",


   const onSearchChange = e=>{
    // console.log(e)
    // this.props.onSearch(this.state.searchText)
    setSearchText(e.target.value);}

    const handleSubmit = e =>{
      e.preventDefault()
      props.onSearch(searchText)
      e.currentTarget.reset();
      console.log(e)
    }

    return (
      <div>
        <form onSubmit={handleSubmit} className="search-form">
          <label className="is-hidden" htmlFor="search">
            Search
          </label>
          <input onChange={onSearchChange} name="search" type="search" placeholder="Search...."></input>
          <button type="submit" id="submit" className="search-button">
            <i className="material-icon icn-search">Search</i>
          </button>
        </form>
      </div>
    );
  }
  
//   render() {
//     console.log(this.state.searchText);
//   }


export default SearchForm