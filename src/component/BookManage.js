import React,{useEffect, useState} from "react";
import PageSearchBar from "./PageSearchBar";
import { Admin_SearchBook } from "../Service/administrator";
import BookManageUnit from "./BookManageUnit";
import { useNavigate } from "react-router-dom";
import "../View/Page.css"
export default function BookManage(props)
{
    let result = [] ; 
    let navigate = useNavigate() ; 
    let [units,setUnits] = useState([]) ; 
    
    async function search(value)
    {
        try{
            let response = await Admin_SearchBook(value) ; 
            console.log(response) ; 
            result = response ; 
            setUnits([]) ; 
            units = result?.map(
                (resultData)=>
                <BookManageUnit author = {resultData.author} isbn={resultData.isbn}
                    name = {resultData.name} storage = {resultData.storage} 
                    id = {resultData.bookId} cover ={resultData.cover} price={resultData.price}/>
            )
            console.log(units) ;
            setUnits(units) ;
        }catch(err)
        {
            alert(err) ;
        }
    }
    function handleAdd()
    {
        navigate("/addBook") ; 
    }
    // search("")  // show all 
    useEffect(()=>
    {
        search("")
    },props)
    return(
        <div id = "BookManage">
            <PageSearchBar searchFunction = {search}/>
            <label onClick={handleAdd} className="Page_RightTopBtn BookManage_Btn"> 
                添加书籍
            </label>
            {units}
        </div>
    )
}