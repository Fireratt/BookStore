import React, { useState } from "react";
import "./Components.css"
import "../Page.css"
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
    // return(
    //     <div className="locationBlock Component_Block">
    //         {
    //             !isEdit && 
    //             <p className="Location_Text Component_TextBlock">
    //                 {location}
    //             </p> 
    //         }
    //         {
    //             isEdit && 
    //             <input type="text" className="Location_Text Component_TextEdit" 
    //                 value={location}
    //                 onChange={changeContent}
    //             />
    //         }
    //         <label className="Page_Btn Location_Edit" onClick={changeEdit}> 
    //             {!isEdit && "编辑"} 
    //             {isEdit && "保存"} 
    //         </label>
    //     </div>
    // )
    return(
        <ButtonEdit str = {location}/>
    )
}
export default Location ; 