import React from "react";
import "../TopBar.css"
function TopBar()
{
    return(
        <div id="TopBar">
            <p>
            <img id="Settings" src="/Source/Setting.png" alt="Settings" className="TopButton"/>
            <img id="HeadPortrait" src="/Source/HeadPortrait.png" alt="My head" className="TopButton"/>
            <img id="Cart" src="/Source/Cart.png" alt="My Cart" className="TopButton"/>
            <span id="WelcomeMessage"> Welcome,Firerat! </span>

            <a class="TopTextBar" href="/"> 首页 </a>
            <a class="TopTextBar" href="/explore"> 订单 </a>
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