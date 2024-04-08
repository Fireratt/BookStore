import React, { useState } from "react";
import "../View/Cart.css"


function RemoveItem(event)
{
    let output = "You are Trying to remove " ; 
    output = output + event.currentTarget.id ; 
    alert(output+ ",but Not Support Yet") ; 
}
function CartItem(props)
{
    const src = "/Source/Books/" + props.name + ".jpg" ; 
    const price = props.price ; 
    const id = "CartItem_" + props.name ; 
    const removeId = id + "_Remove" ;
    const [amount,setAmount] = useState(1) ; 
    function AddAmount(event)
    {
        setAmount(amount+1) ; 
        // 重新统计总价钱
        props.changeFun() ; 
    }
    function SubAmount(event)
    {
        if(amount>1)
            setAmount(amount-1) ; 
        props.changeFun() ; 
    }
    return(
        <div id={id} className="CartItem">
            <input type="checkBox" defaultChecked={props.checked} className="CartItem_Check" onClick={props.changeFun}/>
            <img src={src} className="CartItem_Img" alt={props.name}/>

            <p className="CartItem_Title"> {props.name} </p>
            <div className="CartItem_AmountForm">
                    <span className="CartItem_SubAmount CartItem_OperateAmount" onClick={SubAmount}> - </span>
                    <span className="CartItem_Amount"> {amount} </span>
                    <span className="CartItem_AddAmount CartItem_OperateAmount" onClick={AddAmount}> + </span>
            </div>
            <p className="CartItem_Price" data-price={amount * price}> 金额:{amount * price}元 </p>

            <button id = {removeId} onClick={RemoveItem} className="CartItem_Remove"> </button>
            <label className="CartItem_RemoveBtn" htmlFor={removeId}> 
                移除
            </label>
        </div>
    )
}

export default CartItem ; 