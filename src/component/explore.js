import React from "react";
import SideBar from "./sidebar";
import TopBar from "./topBar";
import MainExplore from "../explorePage/mainExplore";
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