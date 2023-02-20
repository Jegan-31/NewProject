import React from "react";
import RugbyImg from './images/RugbyImg.jpg'
export const Rugby=()=>
{
    return(<div>
        <div>
        <div><span className="type">Rugby</span></div>
        
        <p><span className="desc">! Try !</span></p>
        <img alt="Rugby" className="img" src={RugbyImg}></img>
        </div>
    </div>)
}