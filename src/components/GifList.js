import React from "react";
import Gif from "./Gif";

const GifList = props=>{
    const results = props.data;
    // let gifs = results.map(e=>(
    //    <Gif url = {e.images.fixed_height.url}
    //     key= {e.id} />
    // ))
    return (
        <ul className="gif-list">
            < Gif data={props.data} key={props.data.id}/>
        </ul>
    )
}

export default GifList