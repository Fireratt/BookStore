import React, { useRef, useState } from "react";
import "../View/Cart.css"
import { removeCart } from "../Service/cart";


// function RemoveItem(event)
// {
//     let output = "You are Trying to remove " ; 
//     output = output + event.currentTarget.id ; 
//     alert(output+ ",but Not Support Yet") ; 
// }
function CartItem(props)
{
    let checkRef = useRef(null) ; 
    let [show,setShow] = useState(true) ; 
    let priceRef = useRef(null) ; 
    const book_id = props.bookid
    const src = props.src ; 
    const price = props.price ; 
    const id = "CartItem_" + props.name ; 
    const removeId = id + "_Remove" ;
    let [amount,setAmount] = useState(1) ; 
    function AddAmount(event)
    {
        amount = amount+1
        setAmount(amount) ; 
        // 重新统计总价钱
        priceRef.current.dataset.price = amount * price ; 

        props.changeFun() ; 
    }
    function RemoveItem()
    {
        
        removeCart(book_id).then((Response)=>
        {
            if(Response&& Response.State)
            {
                checkRef.current.checked = false ; 
                setShow(false) ; 
                props.changeFun() ; 

            }
            else
            {
                alert("NetWork Error , Delete Cart Failed") ;
            }
        }).catch((err)=>
        {
            alert(err) ;
        })
    }
    function SubAmount(event)
    {
        if(amount>1)
        {
            amount = amount-1 ;
            setAmount(amount) ; 
        }
        priceRef.current.dataset.price = amount * price ; 
        props.changeFun() ; 
    }
    if(!show)
        return ; 
    return(
        <div id={id} className="CartItem">
            <input type="checkBox" defaultChecked={props.checked} ref={checkRef}
             className="CartItem_Check" onClick={props.changeFun} data-id={book_id} data-amount={amount}/>
            <img src={src} className="CartItem_Img" alt={props.name}/>

            <p className="CartItem_Title"> {props.name} </p>
            <div className="CartItem_AmountForm">
                    <span className="CartItem_SubAmount CartItem_OperateAmount" onClick={SubAmount}> - </span>
                    <span className="CartItem_Amount" > {amount} </span>
                    <span className="CartItem_AddAmount CartItem_OperateAmount" onClick={AddAmount}> + </span>
            </div>
            <p className="CartItem_Price" data-price={amount * price} ref={priceRef}> 金额:{amount * price}元 </p>

            <button id = {removeId} onClick={RemoveItem} className="CartItem_Remove"> </button>
            <label className="CartItem_RemoveBtn" htmlFor={removeId}> 
                移除
            </label>
        </div>
    )
}

export default CartItem ; 