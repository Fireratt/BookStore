import React, { useRef, useState } from "react";
import { register } from "../Service/user";
import "./Page.css"
import './RegisterPage.css'
import { Navigate, useNavigate } from "react-router-dom";
import { isValidEmail } from "../tools/mail";
const errorMessage = 
[
    "用户名不能为空" ,
    "密码不能为空" ,
    "输入的密码与前一次不一致" ,
    "邮箱格式不正确"  ,
    "用户名与其他用户重复，请更换" 
]
export default function RegisterPage(props)
{
    let navigate = useNavigate() ; 
    let [error,setError] = useState(-1) ;
    let usernameRef = useRef(null) ; 
    let passwordRef = useRef(null) ; 
    let repeatRef = useRef(null) ; 
    let mailRef = useRef(null) ; 

    function handleRegister(event)
    {
        let username = usernameRef.current.value ; 
        if(username == "")
        {
            setError(0) ; 
            return ; 
        }

        let password = passwordRef.current.value ; 
        if(password == "")
        {
            setError(1) ; 
            return ; 
        }

        let repeat = repeatRef.current.value ; 
        if(password != repeat)
        {
            setError(2) ; 
            return ;
        }
        let mail = mailRef.current.value ; 
        if(!isValidEmail(mail))
        {
            setError(3) ; 
            return ; 
        }
        register({
            username:username , 
            mail:mail ,
            password:password
        }).then((Response)=>
        {
            console.log(Response.State) ; 
            if(Response.State == "Duplicate")
            {
                setError(4) ; 
                return ; 
            }
            if(Response.State == "Success")
            {
                alert("注册成功， 返回登陆界面...") ; 
                navigate("/login") ; 
            }
        })
        .catch((err)=>
        {
            console.info(JSON.stringify(err)) ; 
        })
    }
    return(
        <div id="registerPage">
            <p className="Page_Title"> 注册 </p>
            <div id="register_ContentBlock">
                {error === 0 && <p className="warning"> {errorMessage[0]} </p>}
                {error === 4 && <p className="warning"> {errorMessage[error]} </p>}
                <input className="Information_InputForm registerPage_InputForm" type="Text" placeholder="用户名" ref={usernameRef}/>
                {error === 1 && <p className="warning"> {errorMessage[error]} </p>}
                <input className="Information_InputForm registerPage_InputForm" type="Password" placeholder="密码" ref={passwordRef}/>
                {error === 2 && <p className="warning"> {errorMessage[error]} </p>}
                <input className="Information_InputForm registerPage_InputForm"  type="Password" placeholder="请重复密码" ref={repeatRef}/>
                {error === 3 && <p className="warning"> {errorMessage[error]} </p>}
                <input className="Information_InputForm registerPage_InputForm"  type="email" placeholder="请输入邮箱" ref={mailRef}/>
                <label className="Page_Btn registerPage_Btn" onClick={handleRegister}> 注册！ </label>
            </div>
        </div>
    )
}