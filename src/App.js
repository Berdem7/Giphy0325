import React, { Component } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import GifList from "./components/GifList";

class App extends Component {
  constructor(){
    super();
    this.state ={
      gifs :[],
    }
  }

  componentDidMount(){
    fetch("http://api.giphy.com/v1/gifs/trending?api_key=nepJeKHHRhQqaEiCq0bVqC2MKS9SpMxC")
    .then(response=>response.json())
    .then(data=>console.log(data.data))
    .then(data=> this.setState(prevState=>{
      const newData = [...prevState.gifs]
      newData.push(data)
      return {
        gifs: newData
      }
      // gifs: [...data.data]
    }))
    console.log(this.state.gifs)
  }
  
  render() {
    return (
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">Search App</h1>
          <SearchForm />
        </div>

            <div className="main-content">
            <GifList />
            </div>
      </div>
    );
  }
}

export default App;
