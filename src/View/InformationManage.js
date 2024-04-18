import React, { useState } from "react";
import EditableText from "../component/editableText";
import "./Page.css"
function InformationManage(props)
{
    const data = props.data ; 
    const [isMouseOnHead,setHead] = useState(false) ; 
    const hover = ()=>
    {
        setHead(true) ; 
    }
    const leave = ()=>
    {
        setHead(false) ; 
    }
    return(
        <div id = "InformationManage" className="Information_SubContent">
            <label htmlFor="Information_UploadHead" onMouseEnter={hover} onMouseLeave={leave} id = "Information_UploadLabel">
                {isMouseOnHead && <div id = "Information_Filter"> 上传头像 </div>}
                <img id = "Information_HeadPortrait" src={data.Head} />
            </label>
            <input type="file" id = "Information_UploadHead" accept=".png,.jpg"/> 
            <p id = "Information_Name">
               <span className="Information_Tag"> 用户名
                </span> 
                <EditableText content = {data.Name}/>
            </p>
            <p id = "Information_Mail">
               <span className="Information_Tag"> 邮箱
                </span> 
                <EditableText content = {data.Mail}/>
            </p>
            <p id = "Information_Phone">
               <span className="Information_Tag" > 电话号码
                </span> 
                <EditableText content = {data.Number}/>
            </p>
            <p id = "Information_Age">
               <span className="Information_Tag"> 年龄
                </span> 
                <EditableText content = {data.Age}/>
            </p>
            <p id = "Information_Date">
               <span className="Information_Tag"> 创建日期
                </span> 
                <EditableText content = {data.Date}/>
            </p>
            <label className="Information_Btn Page_Btn"> 保存 </label>
        </div>
    )
}
export default InformationManage ; 