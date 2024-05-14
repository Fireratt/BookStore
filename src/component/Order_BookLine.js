import React from "react";
import removeSpc from "../tools/removeSpc";
import "./OrderUnit.css"
// props consist name , date ,  price , paid 
import "../View/Page.css"

function OrderBookLine(props)
{
    return (
    <p>
        <span className="OrderUnit_Title"> 
            {props.name} 
            <span className="OrderUnit_Amount">
                x{props.amount}
            </span>
        </span>
    </p>
    )
}

export default OrderBookLine ; 