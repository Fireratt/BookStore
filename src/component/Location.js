import React, { useState } from "react";
import "./Components.css"
import "../View/Page.css"
import ButtonEdit from "./buttonEditText";
function Location(props)
{
    let [location,setLocation] = useState(props.Location) ; 
    let [isEdit , setEdit] = useState(false) ;
    function changeEdit()
    {
        setEdit(!isEdit) ; 
    }
    function changeContent(event)
    {
        setLocation(event.currentTarget.value) ; 
    }
    return(
        <ButtonEdit str = {location}/>
    )
}
export default Location ; 