import React from "react";
import Location from "../component/Location";
function LocationManage(props)
{
    let data = (props.data)?.map((unit)=><Location Location = {unit.Location}/>)
    return(
        <div id = "LocationManage">
            {data} 
        </div >
    )
}
export default LocationManage ;