import React from "react";
import "../View/Page.css" ; 
import "../View/Order.css" ; 
export default function OrderStatistic(props)
{
    let data = props.data ; 
    let books = Object(data.books)
    console.log(Object.entries(books)) ; 
    let bookList = Object.entries(books)?.map(
        (unit)=> <p className="Line_Title">{unit[0]} <span className="warning"> x{unit[1]} </span></p>
    )
    return(
        <div id="OrderStatistic">
            <p className="Line_Title Statistic_Title"> 期间购买图书数： {data.numberSum} 本</p>
            <p className="Line_Title Statistic_Title"> 期间消费总金额：<span className="warning">  {data.priceSum} </span>元</p>
            <p className="Line_Title Statistic_Title"> 购买图书列表： </p>
            {bookList}
        </div>
    )
}