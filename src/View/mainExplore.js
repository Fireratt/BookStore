import {React , useEffect, useState} from "react";
import BookUnit from "../component/bookUnit";
import "./mainExplore.css"
import {getBookList} from "../Service/book"
import { useLocation } from "react-router-dom";
import { Pagination } from "antd";
function MainExplore()
{
    let [booksInput,setBooksInput] = useState(false) ; 
    let [pageState,setPageState] = useState({currentPage:0}) ; 
    let books ; 
    let [current , setCurrent] = useState(1) ; 
    useEffect(()=>
    {
        getBookList(current-1).then((response)=>
        {
            console.log(response) ; 
            let size = response.pageable.pageSize; 
            let pageNumber = response.totalPages ; 
            let total = response.totalElements ; 
            setPageState({size:size , pageNumber:pageNumber , total:total , currentPage:0}) ; 
            books = response.content ; 
            booksInput =  books?.map((book)=><BookUnit id = {book.bookId} BookName={book.Name} BookPrice={book.Price} cover={book.cover}/>) ; 
            setBooksInput(booksInput) ;         // trigger redraw.
            console.log(books) ; 
        }).catch((err)=>
        {
            console.log(err) ; 
        })
    },[current]) ; 
    function handleChangePage(page , pageSize)
    {
        setCurrent(page) ; 
    }
    return(
        <div id="MainExplore">
            <div id="BigDisplay">
                <img id="BigScreenPic" src="Source/BigScreenPic.png" alt="TopBook"></img>
            </div>
            <div id="BookStorage">
                {booksInput}
            </div>
            <Pagination defaultPageSize={8} defaultCurrent={1} className="MainExplore_Pagination" 
                total={pageState.total} pageSize={pageState.size} onChange={handleChangePage} current={current}/>
        </div>
    )
};
export default MainExplore ; 