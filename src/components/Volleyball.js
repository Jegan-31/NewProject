import React from "react";
import VolleyImg from './images/VolleyImg.jpg'

export const Vollyball=()=>
{
    return(<div>
        <div>
        <div><span className="type">Volleyball</span></div>
        
        <p><span className="desc">Smash!!!!</span></p>
        <img alt="vollyball" className="img" src={VolleyImg}></img>
        </div>
    </div>)
}