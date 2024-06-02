import React, { useRef } from "react";
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
    let queryRef=  useRef(null) ; 
    function handleSearch()
    {
        let query = queryRef.current.value ;
        console.log("TopBar", query) ; 
        navigate("/SearchResult" , {state:{query:query}}) ; 
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
                    <input id="SearchBar" type="text" placeholder="搜索" ref={queryRef}/>
                    <input type="button" id="SearchBtn" value="" onClick={handleSearch}/>
                </p>
            </form>
            </p>
        </div>
    ) ;
}
export default TopBar ; 