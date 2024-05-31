import React from "react";
import "./TopBar.css"
import {Link, useNavigate} from "react-router-dom"
function TopBar()
{
    let isAdministrator = window.sessionStorage.getItem("Administrator") == "1" ; 
    let navigate = useNavigate() ;  
    function handleManagerClick()       // to handle the navigate to the administrator page
    {
        navigate("/administrator") ;
    }
    console.log(window.sessionStorage.getItem("Administrator") ) ; 
    return(
        <div id="TopBar">
            <p>
            { isAdministrator && <img id="Settings" src="/Source/Setting.png" alt="Settings" className="TopButton" onClick={handleManagerClick}/>}
            <Link to="/Information">
                <img id="HeadPortrait" src="/Source/HeadPortrait.png" alt="My head" className="TopButton"/>
            </Link>
            <Link to="/Cart">
                <img id="Cart" src="/Source/Cart.png" alt="My Cart" className="TopButton" />
            </Link>
            <span id="WelcomeMessage"> Welcome,Firerat! </span>

            <Link class="TopTextBar" to="/"> 首页 </Link>
            <Link to="/Orders" className="TopTextBar" > 订单 </Link>
            <form id="SearchInput">
                <p>
                    <input id="SearchBar" type="text" placeholder="搜索"/>
                    <input type="submit" id="SearchBtn" value=""/>
                </p>
            </form>
            </p>
        </div>
    ) ;
}
export default TopBar ; 