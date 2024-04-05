import React from "react";
import './Components.css'
function AfterServiceUnit(props)                // parent will put a classifying status into it .
//                                               only when status == classifying , should it display(-1:all will display)
{
    if(!(props.Classifying === -1) && !(props.Status === props.Classifying))
    {
        return ; 
    }
    let Status ;
    switch(props.Status)
    {
        case 0 :
            Status = "审核中" ; 
            break ; 
        case 1 :
            Status = "已完成" ;
            break ; 
        case 2 :
            Status = "驳回" ;
            break ; 
        default:
            return ; 
    }
    return(
        <div id = {props.Code} className="Component_Block AfterService_Block" >
            <p className="AfterService_ID Component_Annotation" > 服务号：{props.Code} </p>
            <img src = {props.Pic} className="AfterService_Pic Component_Pic"/>
            <p className="AfterService_Title"> {props.Name} </p>
            <p className="AfterService_Reason Component_Annotation"> 申请理由：{props.Reason} </p>
            <p className="AfterService_Status Component_Annotation"> {Status} </p>
        </div>
    )
}
export default AfterServiceUnit ; 