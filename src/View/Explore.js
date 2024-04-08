import React from "react";
import SideBar from "../component/sidebar";
import TopBar from "../component/topBar";
import MainExplore from "./mainExplore";
function Explore(props)
{
    return(
        <div id="ExplorePage">
            <TopBar />
            <SideBar data={props.data}/>
            <MainExplore/>
        </div>
    )
}

export default Explore ; 