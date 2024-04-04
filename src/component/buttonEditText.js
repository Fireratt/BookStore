import React, { useState } from "react";
import "./Components.css"
import "../Page.css"
function ButtonEdit(props)
{
    let [str,setLocation] = useState(props.str) ; 
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
        <div className="Component_Block Edit_Block">
            {
                !isEdit && 
                <p className="Component_TextBlock Edit_TextBlock">
                    {str}
                </p> 
            }
            {
                isEdit && 
                <input type="text" className="Component_TextEdit" 
                    value={str}
                    onChange={changeContent}
                />
            }
            <label className="Edit_Btn Page_Btn" onClick={changeEdit}> 
                {!isEdit && "编辑"} 
                {isEdit && "保存"} 
            </label>
        </div>
    )
}
export default ButtonEdit ; 