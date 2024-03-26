import React from "react";
import TopBar from "../component/topBar";
import SideBar from "../component/sidebar";
import OrderUnit from "./OrderUnit";

function OrderPage(props)
{
    const data = [
        {name : "Fourth Wing" , price : 123 , paid : 120 , date : "1970/1/1" , code : "FW1145"} ,
        {name : "Fourth Wing" , price : 123 , paid : 120 , date : "1970/1/1" , code : "FW1146"} ,
        {name : "Fourth Wing" , price : 123 , paid : 120 , date : "1970/1/1" , code : "FW1147"} ,
        {name : "Fourth Wing" , price : 123 , paid : 120 , date : "1970/1/1" , code : "FW1148"} ,
        {name : "Iron Flame" , price : 122 , paid : 110 , date : "1970/1/1" , code : "FW1149"} ,
    ]
    const OrderList = data?.map((unit)=><OrderUnit name = {unit.name} 
    price = {unit.price} 
    paid = {unit.paid}
    date = {unit.date}
    code = {unit.code}/>)
    return(
        <div id = "OrderPage">
            <TopBar/>
            <SideBar data={props.data}/>
            <div className="ContentBlock">
            {OrderList}
            </div>
        </div>
    )
}

export default OrderPage ; 