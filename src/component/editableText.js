import React, { useState } from "react";

function EditableText(props)
{
    let [isToggle,setToggle] = useState(true) ;
    let [name,setName] = useState(props.content) ; 
    // function content()
    // {
    //     return (
    //         <p> {name} </p> 
    //     )
    // }
    function changeState()
    {
        setToggle(!isToggle) ; 
    }
    function restore(event)         // If it is "Enter" , restore the status of the input . 
    {
        if(event.key === 'Enter' || event.key ==='Escape')
        {
            changeState() ; 
        }
    }
    return(
        <div id = {props.id} className="EditableText">
            {isToggle && <p onDoubleClick={changeState} className="EditableText_P"> {name} </p> }
            {!isToggle && <input type="text" value={name} 
            onChange={(event)=>setName(event.currentTarget.value)}
            onKeyDown={restore}
            className="EditableText_Edit"/> }
        </div>
    )
}

export default EditableText ; 