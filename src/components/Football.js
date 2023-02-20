import React from "react";
import FootballImg from './images/FootballImg.jpg'
export const Football=()=>
{
    return(<div>
        <div>
        <div><span className="type">Football</span></div>
        
        <p><span className="desc">Shoot!!!!</span></p>
        <img alt="tFootball" className="img" src={FootballImg}></img>
        </div>
    </div>)
}