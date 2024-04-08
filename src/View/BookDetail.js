import React, { useEffect ,useState} from "react";
import TopBar from "../component/topBar";
import SideBar from "../component/sidebar";
import './BookDetail.css' ; 
import '../TopBar.css' ; 
import '../SideBar.css' ; 
import {useLocation} from "react-router-dom"
let jsonData = ""; 
function initialize(jsonItem, name,nameWithoutSpc)
{
    const price = jsonItem['value'] ; 
    const description = jsonItem['description'] ; 
    const author = jsonItem['author'] ; 
    const storage = jsonItem['storage']
    const picURL = '/Source/Books/' + nameWithoutSpc + ".jpg"
// It is bad in REACT frameWork , but it is a calculated state , and the initialize function will calculate it when the state(bookName)change and call useEffect
// So it is OK to use it I think . 
    document.getElementsByClassName('Detail_Img')[0].src = picURL ; 
    document.getElementsByClassName('Detail_Storage')[0].textContent = "库存: " + storage ; 
    document.getElementsByClassName('Detail_Price')[0].textContent = price + "￥" ; 
    document.getElementsByClassName('Detail_Description')[0].textContent = description ; 
    document.getElementsByClassName('Detail_Author')[0].textContent = "作者: " + author ; 

}
async function readCookie(bookName)
{
    const nameWithoutSpc =  bookName.replace(new RegExp(" ","g"),"") ; 
    const jsonSource = await fetch('/Source/BookData.json') ; 
    jsonData = await jsonSource.json() ; 
    initialize(jsonData[nameWithoutSpc],bookName,nameWithoutSpc) ; 

}
function BookDetail(props)
{
    const para = useLocation() ; 
    let [bookName] = useState(para.state.BookName) ; 
    useEffect(()=>
    {
        readCookie(bookName) ; 
    }
    ,[bookName]
    ) ; 
    // All The part will be initialized in the function "Initialize"
    return(
            <div className="BookDetail">
                 <TopBar/>
                <SideBar data = {props.data}/> 
                <img src="" alt="图书图片" className = "Detail_Img"/>           
                <div className = "Detail_TextPage">
                    <p className="Detail_Title">{bookName} </p>
                    <p className="Detail_Author Detail_Text"></p>

                    <p className="Detail_PriceLine Detail_Text">
                        <span> 定价： </span>
                        <span className="Detail_Price"> </span>
                    </p>

                    <p className="Detail_Storage Detail_Text"> </p>
                    <p> 简介: </p>
                    <p className="Detail_Description "> </p>
                </div>
                <p className="Detail_Btn">
                    <button className="Detail_AddCart"> 加入购物车 </button>
                    <button className = "Detail_Buy"> 马上购买 </button>
                </p>
            </div>
    )
}
export default BookDetail ; 