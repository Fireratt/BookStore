import React from "react";
import {useNavigate} from "react-router-dom"
let Navigate ;

function BookUnit(props)    //With the props::BookName , BookUrl , BookPrice
{
    const book_id = props.id ; 
    const BookPrice = props.BookPrice + "元" ; 
    const iUrl = "/Source/Books/" + 
    props.BookName.replace(new RegExp(" ","g"),"") 
    + ".jpg" ;
    Navigate = useNavigate() ; 
    function openBook(event)
    {
        const BookName = event.currentTarget.id ; 
        const BookEle = document.getElementById(BookName) ; 
        const BookValue = BookEle.getElementsByClassName("BookPrice")[0].textContent ; 
        Navigate("/BookDetail/"+BookName,{state:{BookName : BookName , BookValue : BookValue , book_id : book_id}}) ; 
        
    }
    return(
        <div className="BookUnit" id = {props.BookName} onClick={openBook}>
            <img src={iUrl} alt={props.BookName} className="BookImg" />
            <p className="BookName"> {props.BookName}</p>
            <p className="BookPrice"> {BookPrice}</p>
        </div>
    ) ; 
} ; 
export default BookUnit ; 