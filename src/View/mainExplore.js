import React from "react";
import BookUnit from "../component/bookUnit";
import "./mainExplore.css"

function MainExplore()
{
    const books = [
        {BookName :  "If Only I Had Told Her" , 
        BookPrice: "120" ,} , 

        {BookName :  "A Court of Wings and Ruin" , 
        BookPrice: "125" ,} , 

        {BookName :  "How to Catch a Leprechaun" , 
        BookPrice: "124" ,} , 

        {BookName :  "Fourth Wing" ,
        BookPrice: "123" ,} , 

        {BookName :  "Iron Flame" , 
        BookPrice: "122" ,} , 

        {BookName :  "Scientific Healing Affirmation" , 
        BookPrice: "121" ,} , 
    ]
    const booksInput =  books?.map((book)=><BookUnit BookName={book.BookName} BookPrice={book.BookPrice}/>) ; 

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