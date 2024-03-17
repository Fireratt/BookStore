import React from "react";
import {useNavigate} from 'react-router-dom'
function LoginFile(props)
{
    const navigate = useNavigate() ; 
    return (
        <div className="App" id="MainPage1">
            <div id= 'LoginFile' >
                <h2 id = "LoginTitle"> Login </h2> 
                <form>
                <p> 
                    {/* <label >账号： </label>  */}
                    <input id = 'Input Account' type = 'text' 
                        placeholder=" Account" className="LoginInput"></input> </p>
                <p> 
                    {/* <label>密码： </label>  */}
                    <input id = 'Input PassWord' type = 'password' 
                        placeholder=" Password" className="LoginInput"></input></p>
                <p> 
                    <input id = 'SignIn' type="submit" value='Log in' 
                    onClick={() => navigate('/explore')}/>
                </p>
                {/* <button id = 'SignUp'> 注册新账号 </button> */}
                <a href="https://oc.sjtu.edu.cn/" id="RegisterLink">Register Now!</a>
                </form>
            </div>
        </div>

    )
}

export default LoginFile ; 