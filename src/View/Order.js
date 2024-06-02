import {React , useEffect, useRef, useState} from "react";
import TopBar from "../component/topBar";
import SideBar from "../component/sidebar";
import OrderUnit from "../component/OrderUnit";
import "./Page.css" ; 
import "./Order.css"
import { getOrderList, searchOrder, selectOrderByTime } from "../Service/order";

function OrderPage(props)
{
    let data ; 
    // make orderlist a state , when get the response , it can trigger redraw . 
    let [OrderList,setOrderList] = useState(false); 
    let queryRef = useRef(null) ; 
    let startRef = useRef(null) ; 
    let endRef = useRef(null) ; 
    useEffect(()=>
    {
        getOrderList().then(
            (response)=>
            {
                console.log(response) ; 
                data = response ;
                // trigger the redraw
                setOrderList(data?.map((unit)=><OrderUnit items = {unit.orderItems} 
                price = {unit.totalPrice} 
                date = {unit.date}  
                code = {unit.order_id}
                />)) ; 
            }
        ).catch((err)=>
        {
            console.log(err) ; 
        })
     } , [])
    function handleSelect(event)
    {
        let startTime = startRef.current.value ; 
        let endTime = endRef.current.value ; 
        console.log("Start" , startTime , ",End" , endTime);
        selectOrderByTime(startTime, endTime).then(
            (response)=>
            {
                console.log(response) ; 
                data = response ;
                // trigger the redraw
                setOrderList(data?.map((unit)=><OrderUnit items = {unit.orderItems} 
                price = {unit.totalPrice} 
                date = {unit.date}  
                code = {unit.order_id}
                />)) ; 
            }
        ).catch((err)=>
        {
            console.log(err) ; 
        })
    }
    function handleSearch(event)
    {
        searchOrder(queryRef.current.value).then(
            (response)=>
            {
                console.log(response) ; 
                data = response ;
                // trigger the redraw
                setOrderList(data?.map((unit)=><OrderUnit items = {unit.orderItems} 
                price = {unit.totalPrice} 
                date = {unit.date}  
                code = {unit.order_id}
                />)) ; 
            }
        ).catch((err)=>
        {
            console.log(err) ; 
        })

    }
    return(
        <div id = "OrderPage">
            <TopBar/>
            <SideBar data={props.data}/>

            <div className="ContentBlock">
                <p className="Page_Title"> 订单 </p>

                <form>
                        <div id = "Order_SearchForm" className = "InPage_SearchForm">
                            <input type="text" id="Order_Search" className = "InPage_Search" placeholder="搜索" ref={queryRef}/>
                            <label  id="Order_SearchBtn" className = "InPage_SearchBtn" onClick={handleSearch}> 搜索！ </label>
                        </div>
                        <div className="Order_SelectorBlock">
                            <p className="Line_Title Order_SelectorTitle"> 起始时间 </p>
                            <input type="date" className="Order_Selector Date_Selector" ref={startRef}/> 
                            <p className="Line_Title Order_SelectorTitle"> 终止时间 </p>
                            <input type="date" className="Order_Selector Date_Selector" ref={endRef}/>
                            <label className="Order_Select Page_Btn" onClick={handleSelect}> 按时间筛选 </label>
                        </div>
                </form>
                {OrderList}
            </div>
        </div>
    )
}

export default OrderPage ; 