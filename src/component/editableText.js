import React, { useState } from "react";

function EditableText(props)
{
    let [isToggle,setToggle] = useState(true) ;
    // let [name,setName] = useState(props.content) ; 
    let name = props.content ; 
    let valueHook = props.valueHook ; 
    // function content()
    // {
    //     return (
    //         <p> {name} </p> 
    //     )
    // }
    let className = "EditableText_P" ; 
    if(props.className)
    {
        className = className + " " + props.className ; 
    }
    function changeState()
    {
        setToggle(!isToggle) ; 
    }

    function handleChange(event)
    {
        name = event.currentTarget.value ; 
        valueHook(event.currentTarget.value) ;
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
            {isToggle && <p onDoubleClick={changeState} className={className}> {name} </p> }
            {!isToggle && <input type="text" value={name} 
            onChange={handleChange}
            onKeyDown={restore}
            className="EditableText_Edit"/> }
        </div>
    )
}

export default EditableText ; 