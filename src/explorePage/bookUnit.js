import React from "react";
import {useNavigate} from "react-router-dom"
let Navigate ;
function openBook(event)
{
    const BookName = event.currentTarget.id ; 
    // alert(BookName) ;
    const BookEle = document.getElementById(BookName) ; 
    const BookValue = BookEle.getElementsByClassName("BookPrice")[0].textContent ; 
    // window.location.href="/BookDetail/"+BookName ; 
    // document.location.href="/BookDetail/"+BookName ; 
    Navigate("/BookDetail/"+BookName) ; 
    document.cookie = "BookName=" + BookName ; 
    document.cookie = "BookPrice=" + BookValue ; 
    // alert(document.cookie) ; 

}
function BookUnit(props)    //With the props::BookName , BookUrl , BookPrice
{
    const BookPrice = props.BookPrice + "元" ; 
    const iUrl = "/Source/Books/" + 
    props.BookName.replace(new RegExp(" ","g"),"") 
    + ".jpg" ;
    Navigate = useNavigate() ; 
    return(
        <div className="BookUnit" id = {props.BookName} onClick={openBook}>
            <img src={iUrl} alt={props.BookName} className="BookImg" />
            <p className="BookName"> {props.BookName}</p>
            <p className="BookPrice"> {BookPrice}</p>
        </div>
    ) ; 
} ; 
export default BookUnit ; 