import React, { Component } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import GifList from "./components/GifList";
import axios from "axios";
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";


class App extends Component {
  constructor(){
    super();
    this.state ={
      gifs :[],
      searchText:""
    }
  }

  // componentDidMount(){
  //   const searchStr="horse";}
    

    // fetch("http://api.giphy.com/v1/gifs/trending?api_key=nepJeKHHRhQqaEiCq0bVqC2MKS9SpMxC")
    // .then(response=>response.json())
    // .then(data=>this.setState({gifs: data.data}))
    // .catch((error)=>{
    //   console.log("Errors fetching")
    // })
    // .then(data=>console.log(data.data))
    // .then(data=>console.log(typeof data.data))
    // .then(arr=> this.setState(prevState=>
      
      
    //   {
    //     let newData = arr.data
    //     return {

    //       gifs: [...prevState.gifs.concat(arr.data)]
    //     }
    //     // newData.push(data)
    //     // return {
    //       //   gifs: newData
    //       // }
    //       // gifs: [...data.data]
    //     }
        
        
    //     // console.log(arr.data)
        
    // ))
  

  // changeSearch = (event)=>
  
  performSearch =(query)=>{
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=nepJeKHHRhQqaEiCq0bVqC2MKS9SpMxC`)
    .then(response=>{
      this.setState({
        gifs: response.data.data
      })
    })
    .catch(error=>console.log("Error fetching data"))
  }

  render() {
    console.log(this.state.gifs)
    return (
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">Search App</h1>
          <SearchForm onSearch={this.performSearch} />
        </div>

            <div className="main-content">
            <GifList data ={this.state.gifs}/>
            </div>
      </div>
    );
  }
}

export default App;
