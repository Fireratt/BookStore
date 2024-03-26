import React from "react";
import "../TopBar.css"
import {Link} from "react-router-dom"
function TopBar()
{
    return(
        <div id="TopBar">
            <p>
            <img id="Settings" src="/Source/Setting.png" alt="Settings" className="TopButton"/>
            <img id="HeadPortrait" src="/Source/HeadPortrait.png" alt="My head" className="TopButton"/>
            <Link to="/Cart">
                <img id="Cart" src="/Source/Cart.png" alt="My Cart" className="TopButton" />
            </Link>
            <span id="WelcomeMessage"> Welcome,Firerat! </span>

            <Link class="TopTextBar" to="/explore"> 首页 </Link>
            <Link to="/orders" className="TopTextBar" > 订单 </Link>
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