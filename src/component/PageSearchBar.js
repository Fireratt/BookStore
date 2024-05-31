import React, { useState } from "react";
import { useRef } from "react";
import "../View/Page.css"
export default function PageSearchBar(props)
{
    let searchFunction = props.searchFunction ; 
    let [value , setValue] = useState("") ; 
    let inputRef = useRef(null) ; 
    function handleInput(event)
    {
        setValue(inputRef.current.value) ; 
    }
    function handleSearch()
    {
        searchFunction(value) ; 
    }
    return(
        <div className="PageSearchBar">
            <input type="text" placeholder="Search" 
            className="PageSearchBar_Input" ref={inputRef} onChange={handleInput}/>
            <label className="PageSearchBar_Submit" onClick={handleSearch}> 搜索 </label>
        </div>
    )
}