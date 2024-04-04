import React from "react";

function ChangePWPage()
{
    return(
        <div id = "ChangePW">
            <form>
                <input type="password" placeholder="原密码" className="Information_InputForm"></input>
                <input type="password" placeholder="新密码" className="Information_InputForm"></input>
                <input type="password" placeholder="重复新密码" className="Information_InputForm"></input>
                <label htmlFor="ChangePW_Submit" className="Page_Btn"> 提交 </label>
                <input type="submit" id = "ChangePW_Submit" className="Page_Submit"></input>
            </form>
        </div>
    )
}

export default ChangePWPage ; 