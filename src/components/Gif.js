import React from "react";

const Gif = props =>{
    // console.log(props.data)
    return (
        // <>
        props.data.map(e=>(
        <li className="gif-wrap">
            <img src={e.images.fixed_height.url} alt="" />
        </li>

    ))
        
        // </>
    )
}

export default Gif