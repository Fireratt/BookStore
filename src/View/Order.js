import React from "react";
import TopBar from "../component/topBar";
import SideBar from "../component/sidebar";
import OrderUnit from "../component/OrderUnit";
import "./Page.css" ; 

function OrderPage(props)
{
    const data = [
        {name : "Fourth Wing" , price : 123 , paid : 120 , date : "1970/1/1" , code : "FW1145",amount:1} ,
        {name : "Fourth Wing" , price : 123 , paid : 120 , date : "1970/1/1" , code : "FW1146",amount:2} ,
        {name : "Fourth Wing" , price : 123 , paid : 120 , date : "1970/1/1" , code : "FW1147",amount:3} ,
        {name : "Fourth Wing" , price : 123 , paid : 120 , date : "1970/1/1" , code : "FW1148",amount:4} ,
        {name : "Iron Flame" , price : 122 , paid : 110 , date : "1970/1/1" , code : "FW1149",amount:5} ,
    ]
    const OrderList = data?.map((unit)=><OrderUnit name = {unit.name} 
    price = {unit.price} 
    paid = {unit.paid}
    date = {unit.date}
    code = {unit.code}
    amount = {unit.amount}
    />)
    return(
        <div id = "OrderPage">
            <TopBar/>
            <SideBar data={props.data}/>

            <div className="ContentBlock">
                <p className="Page_Title"> 订单 </p>

                <form>
                        <div id = "Order_SearchForm" className = "InPage_SearchForm">
                            <input type="text" id="Order_Search" className = "InPage_Search" placeholder="搜索"/>
                            <input type="submit" id="Order_SearchSubmit" className = "InPage_SearchSubmit"/>
                            <label htmlFor="Order_SearchSubmit" id="Order_SearchBtn" className = "InPage_SearchBtn"> 搜索！ </label>
                        </div>
                </form>
                {OrderList}
            </div>
        </div>
    )
}

export default OrderPage ; 