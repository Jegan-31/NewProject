import React from "react";

import { Link } from "react-router-dom";
import { BiFootball } from "react-icons/bi";
import { FaChessKing } from "react-icons/fa";
import { FaVolleyballBall } from "react-icons/fa";
import { FaFootballBall } from "react-icons/fa";
export const Sidebar=()=>
{
    return(<div>
        
<div class="sidebar">
    <Link to="/football"><BiFootball/> Football</Link>
    <Link to="/chess"><FaChessKing/> Chess</Link>
    <Link to="/volley"><FaVolleyballBall/> VolleyBall</Link>
    <Link to="/rugby"><FaFootballBall/> Rugby</Link>
</div>

    </div>)
}