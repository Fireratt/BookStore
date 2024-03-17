import React from "react";
function SideButton(props)
{
    return(
        <div >
            <button type="button" className="SideButton"> {props.name}</button>
        </div>        
    )
}
export default SideButton ; 