import React,{useState} from "react";
import TopBar from "../component/topBar";
import SideBar from "../component/sidebar";
import "../css/ContentBlock.css"
import "../Page.css"
import EditableText from "../component/editableText";
import InformationManage from "./InformationManage";
import ChangePWPage from "./ChangePW";
import LocationManage from "./LocationManage";
function InformationPage(props)
{
    let [displaying,setDisplaying] = useState(0) ;  // use to change the tag of this page ; 
    const data = {
        Name : "Firerat" ,
        Number : 54749110  , 
        Mail : "firerat2020@163.com" , 
        Age : 14 ,
        Date : "1970/1/1"  , 
        Head : "/Source/HeadPortrait.png"
    }
    const location = [
        {Location : "东川路800号"} , 
        {Location : "东川路800号"} , 
        {Location : "东川路800号"} , 
    ]
    return(
        <div id ="InformationPage">
            <TopBar/>
            <SideBar data = {props.data}/>
            <div className="ContentBlock">
                <p className="Page_Title"> 
                    {displaying===0 && "个人中心"} 
                    {displaying===1 && "修改密码"} 
                    {displaying===2 && "地址管理"} 
                    {displaying===3 && "售后服务"} 
                </p>
                <div id = "Information_SideBar">
                    <div id = "Information_Basic" className="Information_SideBtn" onClick={()=>setDisplaying(0)}>   
                        基本信息
                    </div>
                    <div id = "Information_ChangePwd" className="Information_SideBtn" onClick={()=>setDisplaying(1)}>
                        修改密码
                    </div>
                    <div id = "Information_Location" className="Information_SideBtn" onClick={()=>setDisplaying(2)}>
                        地址管理
                    </div>
                    <div id = "Information_AfterService" className="Information_SideBtn" onClick={()=>setDisplaying(3)}>
                        售后服务
                    </div>
                </div>
                <div id = "Information_View">
                    {displaying===0 && <InformationManage data = {data}/>}
                    {displaying===1 && <ChangePWPage/>}
                    {displaying===2 && <LocationManage data = {location}/>}
                    {displaying===3 && <InformationManage data = {data}/>}
                </div>
            </div>
        </div>
    )
}

export default InformationPage ; 