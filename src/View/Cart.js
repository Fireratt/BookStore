import React, { useEffect, useState } from "react";
import SideBar from "../component/sidebar";
import TopBar from "../component/topBar";
import "./ContentBlock.css" ; 
import "./Cart.css" ; 
import "./Page.css" ; 
import CartItem from "../component/CartItem";
import { getCartList } from "../Service/cart";
import { getPayInfo } from "../Service/pay";
import { submitOrder } from "../Service/pay";
async function processingPay(event)
{
    // const value = document.getElementById("Cart_Total").dataset.total ; 
    // alert("You have paid " + value + "元") ; 
    let payItems = []; 
    let itemAmounts = [] ; 
    let checkedItems = document.getElementsByClassName("CartItem_Check") ; 
    for(let i = 0 ; i < checkedItems.length ; i++)
    {
        if(checkedItems[i].checked)
        {
            console.log("processingPay get book:", checkedItems[i].dataset.id , checkedItems[i].dataset.amount )
            payItems.push(checkedItems[i].dataset.id
            ) ; 
            itemAmounts.push(checkedItems[i].dataset.amount) ; 
        }
    }
    let payInfo = await getPayInfo(payItems , itemAmounts) ; 
    let orderToConfirm = payInfo ; 
    console.log(JSON.stringify(payInfo)) ; 
    if(window.confirm("Confirm Order:\n" + JSON.stringify(payInfo)))
    {
        let response = await submitOrder(payInfo) ; 
        if(response.Success == "true")
        {
            alert("购买成功") ;
            for(let i = 0 ; i < checkedItems.length ; i++)
            {
                if(checkedItems[i].checked)
                {
                checkedItems[i].parentElement.style.display="none" ;  // set all the processed cartItem invisible
                }
            }
        }
        else
        {
            alert("购买失败：原因：" + response.reason) ; 
        }

    }
    
}
function CartPage(props)
{
    let [sum,setSum] = useState(0) ; 
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
        sum = summ ; 
        setSum(sum) ; 
    }
    let [bookList,setList] = useState([]) ; 
    let [bookComponents,setComponents] = useState([]) ; 
    useEffect(
        ()=>
        {
            getCartList().then(
                (Response)=>
                {
                    console.log(Response) ; 
                    bookList = Response ; 
                    setList(bookList) ; 
                    bookComponents = bookList?.map((unit)=>
                        <CartItem bookid={unit.bookId} name={unit.bookName} price={unit.bookPrice} checked={false} changeFun = {CalcPrice} src={unit.cover}/>
                    ) ; 
                    setComponents(bookComponents) ; 
                    console.log("BookList:",bookComponents) ; 
                }
            ) 
        } , [])
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
                { bookComponents }
                <p id="Cart_PageEnd"> </p>
                <p id="Cart_BottomBar"> 
                    <span id="Cart_Total" data-total="0"> 总金额: {sum} 元 </span>
                    <button name="Pay" id="Cart_Pay" > 支付 </button>
                    <label id = "Cart_PayBtn" htmlFor="Cart_Pay" onClick={processingPay}> 结算 </label>
                </p>
            </div>
        </div>
    )
}

export default CartPage ; 