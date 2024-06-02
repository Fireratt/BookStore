import React, { useEffect, useState } from "react";
import { searchBook } from "../Service/book";
import TopBar from "../component/topBar";
import SideBar from "../component/sidebar";
import BookUnit from "../component/bookUnit";
import { useLocation } from "react-router-dom";
import "./ContentBlock.css"
export default function SearchResult(props)
{
    let location = useLocation() ; 
    let books = [] ; 
    let [booksInput,setBooksInput] = useState([]) ; 
    useEffect(
        ()=>
        {
            let query = location.state.query ; 
            searchBook(query).then((response)=>
            {
                console.log(response) ; 
                books = response ; 
                booksInput =  books?.map((book)=><BookUnit id = {book.bookId} BookName={book.Name} BookPrice={book.Price}/>) ; 
                setBooksInput(booksInput) ;         // trigger redraw.
                console.log(books) ; 
            }).catch((err)=>
            {
                console.log(err) ; 
            })
        }
    ,[location.state.query])

    return(
        <div>
            <TopBar />
            <SideBar data={props.data}/>
            <div id="SearchResult" className="ContentBlock">
                {booksInput}
            </div>
        </div>
    )
}