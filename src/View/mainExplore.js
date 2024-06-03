import {React , useEffect, useState} from "react";
import BookUnit from "../component/bookUnit";
import "./mainExplore.css"
import {getBookList} from "../Service/book"
import { useLocation } from "react-router-dom";
function MainExplore()
{
    let [booksInput,setBooksInput] = useState(false) ; 
    let books ; 
    useEffect(()=>
    {
        getBookList().then((response)=>
        {
            console.log(response) ; 
            books = response ; 
            booksInput =  books?.map((book)=><BookUnit id = {book.bookId} BookName={book.Name} BookPrice={book.Price} cover={book.cover}/>) ; 
            setBooksInput(booksInput) ;         // trigger redraw.
            console.log(books) ; 
        }).catch((err)=>
        {
            console.log(err) ; 
        })
    },[]) ; 

    return(
        <div id="MainExplore">
            <div id="BigDisplay">
                <img id="BigScreenPic" src="Source/BigScreenPic.png" alt="TopBook"></img>
            </div>
            <div id="BookStorage">
                {booksInput}
            </div>
        </div>
    )
};
export default MainExplore ; 