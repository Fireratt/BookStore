import React , {useState} from "react";
import "./PictureLoader.css"
export default function PictureLoader(props)
{
    let [state,setState] = useState(false) ; 
    let usage = props.usage ; 
    let classname = "PictureLoader " + props.className ; 
    let FilterClassName = "PictureLoader_Filter " + props.className + "_Filter"; 
    let For = props.for ; 
    function hover()
    {
        setState(true) ; 
    }
    function leave()
    {
        setState(false) ; 
    }
    return(
        <label className={classname} onMouseEnter={hover} onMouseLeave={leave} htmlFor={For}>
            {state && <div className={FilterClassName}> {usage} </div>}
            <img className="PictureLoader_Pic" src={props.pic}/> 
        </label>
    )
}