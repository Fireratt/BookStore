import React from "react";
import removeSpc from "../tools/removeSpc";
import "./OrderUnit.css"
// props consist name , date ,  price , paid 
import "../View/Page.css"
import OrderBookLine from "./Order_BookLine";
function OrderUnit(props)
{
    const itemLists = props.items ; 
    const nameWithoutSpc = removeSpc(itemLists[0].bookName) ; 
    const picSource = "/Source/Books/" + nameWithoutSpc + ".jpg" ; 
    
    let bookLineList = itemLists?.map((units)=><OrderBookLine name={units.bookName} amount={units.amount}/>)
    return(
        <div id = {props.code} className="OrderUnit">
            {/* <img className="OrderUnit_Pic" src={picSource} alt = {nameWithoutSpc}/> */}
            <p className="OrderUnit_Head">
                <span className="OrderUnit_Date"> {props.date} </span>
                <span className="OrderUnit_OrderCode"> 订单编号：{props.code} </span>
            </p>
            <div className="OrderUnit_Items">
                {bookLineList}
            </div>
            {/* <p className="OrderUnit_Price"> 
                价格： ￥
            </p> */}
            <p className="OrderUnit_Paid"> 
                实付款：
                <span className="OrderUnit_TruePaid">{props.price}￥ </span>
            </p>
            <label className="OrderUnit_Service Page_Btn"> 申请售后服务 </label>
        </div>
    )
}

export default OrderUnit ; 