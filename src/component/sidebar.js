import React from "react";
import SideButton from "./sideButton";

import "./SideBar.css"
function SideBar(props)
{
    const lists = props.data?.map((btn)=><SideButton name={btn.name}/>) ; 
    return(
        <div id="SideBar">
            <div id="BigIcon">
                <img src="/Source/BigIcon2.png" alt="Icon" id="BigIconImg"/>
            </div>
            {/* <SideButton name="热门好书"/>
            <SideButton name="最新上市"/>
            <SideButton name="幼儿图书"/>
            <SideButton name="教辅资料"/>
            <SideButton name="世界小说"/>
            <SideButton name="古代名著"/> */}
            {lists}
        </div>
    ) ; 
}

export default SideBar ; 