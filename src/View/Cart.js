import React, { useState } from "react";
import SideBar from "../component/sidebar";
import TopBar from "../component/topBar";
import "../ContentBlock.css" ; 
import "./Cart.css" ; 
import "../Page.css" ; 
import CartItem from "../component/CartItem";
function processingPay(event)
{
    const value = document.getElementById("Cart_Total").dataset.total ; 
    alert("You have paid " + value + "元") ; 
}
function CartPage(props)
{
    const [sum,setSum] = useState(0) ; 
    const CalcPrice = (event)=>
    {
        const Items = document.getElementsByClassName("CartItem") ; 
        let summ = 0 ; 
        for(const i of Items)
        {
            if(i.getElementsByClassName("CartItem_Check")[0].checked)
            {
                summ += parseFloat(i.getElementsByClassName("CartItem_Price")[0].dataset.price) ; 
            }
        }
        setSum(summ) ; 
    }
    return(
        <div>
            <TopBar/>
            <SideBar data = {props.data}/> 
            <div className="ContentBlock">
                <p className="Page_Title"> 购物车 </p>
                <form>
                    <div id = "Cart_SearchForm" className = "InPage_SearchForm">
                        <input type="text" id="Cart_Search" className = "InPage_Search" placeholder="搜索"/>
                        <input type="submit" id="Cart_SearchSubmit" className = "InPage_SearchSubmit"/>
                        <label htmlFor="Cart_SearchSubmit" id="Cart_SearchBtn" className = "InPage_SearchBtn"> 搜索！ </label>
                    </div>
                </form>
                <CartItem  name="FourthWing" price="123" checked={false} changeFun = {CalcPrice}/>
                <CartItem  name="IronFlame" price="122" checked={false} changeFun = {CalcPrice}/>
                <CartItem  name="IronFlame" price="122" checked={false} changeFun = {CalcPrice}/>
                <CartItem  name="IronFlame" price="122" checked={false} changeFun = {CalcPrice}/>
                <CartItem  name="IronFlame" price="122" checked={false} changeFun = {CalcPrice}/>
                <p id="Cart_PageEnd"> </p>
                <p id="Cart_BottomBar"> 
                    <span id="Cart_Total" data-total="0"> 总金额: {sum}元 </span>
                    <button name="Pay" id="Cart_Pay" onClick={processingPay}> 支付 </button>
                    <label id = "Cart_PayBtn" htmlFor="Cart_Pay"> 结算 </label>
                </p>
            </div>
        </div>
    )
}

export default CartPage ; 