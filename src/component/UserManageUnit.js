import React, { useEffect, useState } from "react";
import './UserManageUnit.css'
import '../View/Page.css'
import { Admin_HandleBan } from "../Service/administrator";
const buttonMessage = ["封禁用户" , "解除封禁"]
const BasicBanClass = "Page_Btn UserManageUnit_Btn "
export default function UserManageUnit(props)
{
    let userId = props.id ; 
    let userName = props.username ; 
    let mail = props.mail ; 
    let [banState,setState]= useState(props.isBan)
    let [message,setMessage] = useState("") ; 
    let [buttonClass,setClass] = useState(BasicBanClass)
    useEffect(()=>
    {

        if(props.isBan)
        {
            message = buttonMessage[1]
            buttonClass = BasicBanClass + "UserManageUnit_UnBan"
        }else{
            message = buttonMessage[0]
            buttonClass = BasicBanClass + "UserManageUnit_Ban"
        }
        setMessage(message)
        setClass(buttonClass)
    },[props])
    async function handleBan(event)
    {
        let response = await Admin_HandleBan(userId , !banState)
        console.log(response)
        if(response)
        {
            alert("封禁/解封成功")
            banState = !banState
            setState(banState)
            if(banState)
            {
                message = buttonMessage[1]
                buttonClass = BasicBanClass + "UserManageUnit_UnBan"
            }else{
                message = buttonMessage[0]
                buttonClass = BasicBanClass + "UserManageUnit_Ban"
            }
            console.log(message)
            setClass(buttonClass)
            setMessage(message)
        }
        else{
            alert("封禁/解封失败")
        }
    }
    return(
        <div className="UserManageUnit">
            <div className="UserManageUnit_TextBlock">
                <p className="UserManageUnit_Text">
                    <span className="Line_Title">
                        用户名:
                    </span>

                    {userName}
                </p>

                <p className="UserManageUnit_Text">
                    <span className="Line_Title">
                        用户邮箱:
                    </span>
                    {mail}
                </p>
            </div>

            <label className={buttonClass} onClick={handleBan}>
                {message}
            </label>
        </div>
    )
}