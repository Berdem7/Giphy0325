import React from "react";
import Gif from "./Gif";

const GifList = props=>{
    const results = props.data;
    let gifs = results.map(e=>(
       <Gif url = {e.images.fixed_height.url}
        key= {e.id} />
    ))
    return (
        <ul className="gif-list">
            {gifs}
        </ul>
    )
}

export default GifList