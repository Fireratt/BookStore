import React,{useState} from "react";
import TopBar from "../component/topBar";
import SideBar from "../component/sidebar";
import "./ContentBlock.css"
import "./Page.css"
import InformationManage from "./InformationManage";
import ChangePWPage from "./ChangePW";
import LocationManage from "./LocationManage";
import AfterService from "./AfterService";

import { getUserInfo ,editUserInfo} from "../Service/user";
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
    const afterService = [
        {Code : 100 , Name : "IronFlame" , Reason : "书本破损" , Status : 0 , Pic : "/Source/Books/IronFlame.jpg"} , 
        {Code : 101 , Name : "IronFlame" , Reason : "书本破损" , Status : 1 , Pic : "/Source/Books/IronFlame.jpg"} , 
        {Code : 102 , Name : "IronFlame" , Reason : "书本破损" , Status : 2 , Pic : "/Source/Books/IronFlame.jpg"} , 
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
                    <div id = "Information_Basic" className="Page_SideBtn" onClick={()=>setDisplaying(0)}>   
                        基本信息
                    </div>
                    <div id = "Information_ChangePwd" className="Page_SideBtn" onClick={()=>setDisplaying(1)}>
                        修改密码
                    </div>
                    <div id = "Information_Location" className="Page_SideBtn" onClick={()=>setDisplaying(2)}>
                        地址管理
                    </div>
                    <div id = "Information_AfterService" className="Page_SideBtn" onClick={()=>setDisplaying(3)}>
                        售后服务
                    </div>
                </div>
                <div id = "Information_View">
                    {displaying===0 && <InformationManage data = {data}/>}
                    {displaying===1 && <ChangePWPage/>}
                    {displaying===2 && <LocationManage data = {location}/>}
                    {displaying===3 && <AfterService data = {afterService}/>}
                </div>
            </div>
        </div>
    )
}

export default InformationPage ; 