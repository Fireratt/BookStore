import React, { useEffect ,useState} from "react";
import TopBar from "../component/topBar";
import removeSpc from "../tools/removeSpc"
import SideBar from "../component/sidebar";
import './BookDetail.css' ; 
import '../TopBar.css' ; 
import '../SideBar.css' ; 
import {useLocation} from "react-router-dom"
import { getPayInfo, submitOrder } from "../Service/pay";
let jsonData = ""; 
function initialize(jsonItem, name,nameWithoutSpc)
{
    // alert(jsonItem) ; 
    const price = jsonItem['Price'] ; 
    const description = jsonItem['Description'] ; 
    const author = jsonItem['Author'] ; 
    const storage = jsonItem['Storage']
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
    const nameWithoutSpc =  removeSpc(bookName) ; 
    // const jsonSource = await fetch('/Source/BookData.json') ; 
    // get the json from backend
    const url = 'http://localhost:8080/Book' + "?Name=" + nameWithoutSpc + "&id=1" ; 
    // const jsonSource = await fetch(url , 
    // const url = 'localhost:8080/Book' + "?Name=" + "ACourtofWingsandRuin" ; 
    
    let jsonSource  ; 
    fetch(url , 
    {
        method:"GET" , 
        // body : JSON.stringify({Name: nameWithoutSpc , id : 1}) ,
        credentials : 'include' 
    })
    .then(data=>data.json().then(
                (result)=>
                {
                    jsonData = result ;
                    initialize(jsonData,bookName,nameWithoutSpc) ; 
                }))
    .catch((err) =>     
    {
        alert(err) ; 
    })

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
    async function handlePaid()
    {
        // first get the book's information in the server's paid information ; 
        // must remove the blank in the name 
        const paidItem = await getPayInfo(removeSpc(bookName)) ; 
        // the amount should get from the client . Currently It will be written in the client ; 
        paidItem["Amount"] = 1 ; 
        // Make client confirm the order ; 
        if(window.confirm("请确认订单:\n" + JSON.stringify(paidItem)))
            submitOrder(paidItem) ; 
    }

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
                    <button className = "Detail_Buy" onClick={handlePaid}> 马上购买 </button>
                </p>
            </div>
    )
}
export default BookDetail ; 