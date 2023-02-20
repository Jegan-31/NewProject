import React from "react";

import ChesslImg from './images/ChessImg.jpg'
export const Chess=()=>
{
    return(<div>
        <div>
        <div><span className="type">Chess</span></div>
        
        <p><span className="desc">CheckMate</span></p>
        <img className="img" al src={ChesslImg}></img>
        </div>
    </div>)
}