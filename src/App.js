import React, { useEffect, useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import GifList from "./components/GifList";
import axios from "axios";


function App () {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("dog");
  const [isLoading, setLoading] = useState(true);
  // document.title = "Loading..."

// useEffect (()=>{
//   const getItems = async ()=>{
//     const result = await renderData

//     setLoading(false)
//   }

// }, [])

const renderData = () =>{
  // let query = "dog";
  // if(isLoading){
    // document.title = "Loading"
  //   // console.log("loading")
  // } else {
  //   document.title = "React App"
  // }
  setLoading(true)
  axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=nepJeKHHRhQqaEiCq0bVqC2MKS9SpMxC`)
  // .then(response=>console.log)
  .then(response=>{
    setGifs(response.data.data)
  })
  .catch(error=>console.log("Error fetching data", error))
  .finally(()=>setTimeout(()=>setLoading(false),3000))
  // if(isLoading){
  //   document.title = "Loading"
  //   // console.log("loading")
  // } else {
  //   document.title = "React App"
  // }
}

  useEffect( () => {
    renderData();
  },[query]);
  
  const performSearch =(query)=>{setQuery(query)
  }

  // useEffect ( ()=>{
  //   performSearch()
  // })

  console.log(gifs)
    return (
      <>
      
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">Search App</h1>
          <SearchForm onSearch={performSearch} />
        </div>

      </div>
            <div className="main-content">
              {isLoading?
              
              // <p>is Loading...</p>
              // <img src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif?cid=e04614f335y80f6iqu1l3jd484kgtii5pzrqq3fcq53vuad9&amp;rid=200.gif&amp;ct=g" alt="" />
              // <video alt="Loading Load GIF by Cod3r Cursos" src="https://media3.giphy.com/media/FaAxdPWZ7HKGmlnku7/giphy.mp4?cid=790b7611dd496b9b4c92eb21bcbcea6d77fa791043a8d51b&amp;rid=giphy.mp4&amp;ct=g" poster="https://media3.giphy.com/media/FaAxdPWZ7HKGmlnku7/giphy_s.gif?cid=790b7611dd496b9b4c92eb21bcbcea6d77fa791043a8d51b&amp;rid=giphy_s.gif&amp;ct=g" ></video>
              // <iframe src="https://giphy.com/embed/C9kK1lR4v93y9mOR8s" width="1020" height="1020" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
              <iframe src="https://giphy.com/embed/xTkcEQACH24SMPxIQg" width="1020" height="1020" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
              :
            <GifList data ={gifs}/>}
            </div>
      </>
    );
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
  


export default App;
