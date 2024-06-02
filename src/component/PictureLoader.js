import React , {useState} from "react";
import "./PictureLoader.css"
export default function PictureLoader(props)
{
    let [state,setState] = useState(false) ; 
    let usage = props.usage ; 
    let classname = "PictureLoader " + props.className ; 
    let FilterClassName = "PictureLoader_Filter " + props.className + "_Filter"; 
    let For = props.for ; 
    let havePic = props.pic!="" ; 
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
            {(state||!havePic) && <div className={FilterClassName}> {usage} </div>}
            {havePic &&<img className="PictureLoader_Pic" src={props.pic}/> }
        </label>
    )
}