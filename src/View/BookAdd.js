import React from "react";
import TopBar from "../component/topBar"
import SideBar from "../component/sidebar"
export default function BookAdd(props)
{
    // when go into this page from the manager page properly , it will show the status 
    // else it will redirect to the login 
    return(
        <div>
            <TopBar/>
            <SideBar data={props.data}/>
        </div>
    )
}