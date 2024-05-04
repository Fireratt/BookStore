import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
const Notice = [
    "The Account Cant be Empty!" , 
    "The PassWord Cant be Empty!" , 
    "The Account Invalid or the pwd is WRONG!"
]
function LoginFile(props)
{
    const navigate = useNavigate() ; 
    // when input wrong pwd , it will be set to 1  , print the error message
    const [pwdError , setError] = useState(false) ; 
    // if account is empty , it will be set to 1 and show a hint message
    const [accountEmpty , setAccountEmpty] = useState(false) ; 
    const [pwdEmpty , setPwdEmpty] = useState(false ) ; 
    const [userName , setName] = useState("") ; 
    const [userPwd , setPwd] = useState("") ; 
    const handleLogin = ()=>
    {
        if(userName === "")
        {
            setAccountEmpty(true) ; 
            return ;
        }
        if(userPwd === "")
        {
            setPwdEmpty(true) ; 
            return ;
        }
        if(
            props.data.find((obj)=>
        {
            return (obj.Account === userName && obj.Pwd === userPwd) ;
        }))
        {
            navigate('/explore') ; 
        }
        else
        {
            setError(1) ; 
        }
    }
    function handleAccount(event)
    {
        let target = event.currentTarget ; 
        setName(target.value) ; 
        setAccountEmpty(false) ;
        setError(false) ; 
    }
    function handlePwd (event)
    {
        let target = event.currentTarget ; 
        setPwd(target.value) ; 
        setPwdEmpty(false) ;
        setError(false) ; 
    }
    return (
        <div className="App" id="MainPage1">
            <div id= 'LoginFile' >
                <h2 id = "LoginTitle"> Login </h2> 
                <form>
                <p> 
                    {/* <label >账号： </label>  */}
                    <input id = 'Input Account' type = 'text'  value={userName}
                        placeholder=" Account" className="LoginInput" onChange={handleAccount}></input> </p>
                    {accountEmpty && <p className="Login_Notice"> {Notice[0]} </p>}
                <p> 
                    {/* <label>密码： </label>  */}
                    <input id = 'Input PassWord' type = 'password'  value={userPwd}
                        placeholder=" Password" className="LoginInput" onChange={handlePwd}></input></p>
                    {pwdEmpty && <p className="Login_Notice"> {Notice[1]} </p>}
                <p> 
                <label id = 'SignIn' onClick={handleLogin}> log in! </label>

                </p>
                {pwdError && <p className="Login_Notice"> {Notice[2]} </p>}
                <a href="https://oc.sjtu.edu.cn/" id="RegisterLink">Register Now!</a>
                </form>
            </div>
        </div>

    )
}

export default LoginFile ; 