import React , {useState} from "react";
import TopBar from "../component/topBar";
import SideBar from "../component/sidebar";
import "./ContentBlock.css"
import "./Page.css"
import BookManage from "../component/BookManage";
const tags = ["书籍管理" , "用户管理" , "订单管理" ]
export default function Administrator(props)
{
    let [displaying,setDisplaying] = useState(0) ;  // use to change the tag of this page ; 
    return(
        <div>
            <TopBar/>
            <SideBar data={props.data}/>
            <div className="ContentBlock">
                <p className="Page_Title"> 
                    {displaying===0 && tags[0]} 
                    {displaying===1 && tags[1]} 
                    {displaying===2 && tags[2]} 
                </p>
                <div id = "Administrator_SideBar" className="Page_SideBar">
                    <div id = "Information_Basic" className="Page_SideBtn" onClick={()=>setDisplaying(0)}>   
                        {tags[0]}
                    </div>

                    <div id = "Information_ChangePwd" className="Page_SideBtn" onClick={()=>setDisplaying(1)}>
                        {tags[1]}
                    </div>

                    <div id = "Information_Location" className="Page_SideBtn" onClick={()=>setDisplaying(2)}>
                        {tags[2]}
                    </div>
                </div>
                <div className="Page_View">
                    {displaying===0 && <BookManage/>}

                </div>
            </div>
        </div>
    )
}