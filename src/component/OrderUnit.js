import React from "react";
import removeSpc from "../tools/removeSpc";
import "./OrderUnit.css"
import "../View/Page.css"
function OrderUnit(props)
{
    const nameWithoutSpc = removeSpc(props.name) ; 
    const picSource = "/Source/Books/" + nameWithoutSpc + ".jpg" ; 
    return(
        <div id = {props.code} className="OrderUnit">
            <img className="OrderUnit_Pic" src={picSource} alt = {nameWithoutSpc}/>
            <p className="OrderUnit_Head">
                <span className="OrderUnit_Title"> {props.name} <span className="OrderUnit_Amount">x{props.amount}</span></span>
                <span className="OrderUnit_Date"> {props.date} </span>
                <span className="OrderUnit_OrderCode"> 订单编号：{props.code} </span>
            </p>
            <p className="OrderUnit_Price"> 
                价格：{props.price} ￥
            </p>
            <p className="OrderUnit_Paid"> 
                实付款：
                <span className="OrderUnit_TruePaid">{props.paid}￥ </span>
            </p>
            <label className="OrderUnit_Service Page_Btn"> 申请售后服务 </label>
        </div>
    )
}

export default OrderUnit ; 