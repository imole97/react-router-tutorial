import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Product = () => {
    return (
        <>
        <div>
         <input type ='search' placeholder="search product..."/>
        </div>

        <nav>
            <Link to = 'featured'>Featured</Link>
            <Link to = 'new'>new</Link>
        </nav>
        <Outlet/>
        </>
    )
}
//we don't include foward slash(absolute path) for nested route 