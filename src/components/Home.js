import React from "react";
import { DiAndroid} from "react-icons/di";
import hw from "./images/hw.jpg";


export const Home=()=>
{
    return(
        <div>
<DiAndroid></DiAndroid>
            Welcome to Home
            <img alt="hello" className="img" src={hw}></img>

        </div>
    )
}