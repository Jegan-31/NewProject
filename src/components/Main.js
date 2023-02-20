import React from "react";
import { NavBar } from "./Nav";
import { Outlet} from "react-router-dom";
import { Sidebar } from "./Sidebar";


export const Main=()=>
{
    return(<div>
        <NavBar/>
        <Sidebar/>
        <div className="content">
        <Outlet />
        </div>
    </div>)
}