import React from "react";
import "./Cart.css"


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
    return(
        <div id={id} className="CartItem">
            <input type="checkBox" defaultChecked={props.checked} className="CartItem_Check" onClick={props.changeFun}/>
            <img src={src} className="CartItem_Img" alt={props.name}/>
            <p className="CartItem_Title"> {props.name} </p>
            <p className="CartItem_Price" data-price={price}> 金额:{price}元 </p>
            <button id = {removeId} onClick={RemoveItem} className="CartItem_Remove"> </button>
            <label className="CartItem_RemoveBtn" htmlFor={removeId}> 
                移除
            </label>
        </div>
    )
}

export default CartItem ; 