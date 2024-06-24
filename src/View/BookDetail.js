import React, { useEffect ,useState} from "react";
import TopBar from "../component/topBar";
import removeSpc from "../tools/removeSpc"
import SideBar from "../component/sidebar";
import './BookDetail.css' ; 
import {useLocation} from "react-router-dom"
import { getPayInfo, submitOrder } from "../Service/pay";
import { getBook } from "../Service/book"
import { addCart } from "../Service/cart";
let jsonData = ""; 
function initialize(jsonItem, name,nameWithoutSpc)
{
    // alert(jsonItem) ; 
    const price = jsonItem['price'] ; 
    const description = jsonItem['description'] ; 
    const author = jsonItem['author'] ; 
    const storage = jsonItem['storage']
    const picString = jsonItem['cover'] ; 
    const isbn = jsonItem['isbn'] ; 
// It is bad in REACT frameWork , but it is a calculated state , and the initialize function will calculate it when the state(bookName)change and call useEffect
// So it is OK to use it I think . 
    document.getElementsByClassName('Detail_Img')[0].src = picString ; 
    document.getElementsByClassName('Detail_Storage')[0].textContent = "库存: " + storage ; 
    document.getElementsByClassName('Detail_Price')[0].textContent = price + "￥" ; 
    document.getElementsByClassName('Detail_Description')[0].textContent = description ; 
    document.getElementsByClassName('Detail_Author')[0].textContent = "作者: " + author ; 
    document.getElementsByClassName('Detail_ISBN')[0].textContent = "ISBN: " + isbn ; 

}
async function readCookie(bookName , book_id)
{
    const nameWithoutSpc =  removeSpc(bookName) ; 
    
    let jsonSource  ; 
    getBook(book_id)
    .then(
            (result)=>
                {
                    jsonData = result ;
                    console.info(JSON.stringify(jsonData)) ; 
                    initialize(jsonData,bookName,nameWithoutSpc) ; 
                })
    .catch((err) =>     
    {
        alert(err) ; 
    })

}


function BookDetail(props)
{
    const para = useLocation() ; 
    let [bookName] = useState(para.state.BookName) ; 
    let [book_id,setBookId] = useState(para.state.book_id) ; 
    useEffect(()=>
    {
        readCookie(bookName , book_id) ; 
    }
    ,[bookName]
    ) ; 
    // All The part will be initialized in the function "Initialize"
    async function handlePaid()
    {
        // first get the book's information in the server's paid information ; 
        // must remove the blank in the name 
        let ids = [book_id] ; 
        let amounts = [1] ; 
        const paidItem = await getPayInfo(ids , amounts) ; 
        // the amount should get from the client . Currently It will be written in the client ; 
        paidItem["Amount"] = 1 ; 
        // Make client confirm the order ; 
        if(window.confirm("请确认订单:\n" + JSON.stringify(paidItem)))
        {
            let response = await submitOrder(paidItem) ;
            console.log(response) 
            if(response.Success == "true")
            {
                alert("购买成功")
            }
            else
            {
                alert("购买失败，原因："+ response.reason)
            }
        }
    }
    function handleAddCart()
    {
        addCart(book_id).then((Response)=>
        {
            console.info(Response) ; 
            if(Response.State == "true")
            {
                alert("AddCart Success!")
            }
            else
            {
                alert("AddCart Failed")
            }
        }).catch((err)=>
        {
            alert(err ) ; 
        })
    }
    return(
            <div className="BookDetail">
                 <TopBar/>
                <SideBar data = {props.data}/> 
                <img src="" alt="图书图片" className = "Detail_Img"/>           
                <div className = "Detail_TextPage">
                    <p className="Detail_Title">{bookName} </p>
                    <p className="Detail_Author Detail_Text"></p>
                    <p className="Detail_ISBN Detail_Text"></p>
                    <p className="Detail_PriceLine Detail_Text">
                        <span> 定价： </span>
                        <span className="Detail_Price"> </span>
                    </p>

                    <p className="Detail_Storage Detail_Text"> </p>
                    <p> 简介: </p>
                    <p className="Detail_Description "> </p>
                </div>
                <p className="Detail_Btn">
                    <button className="Detail_AddCart" onClick={handleAddCart}> 加入购物车 </button>
                    <button className = "Detail_Buy" onClick={handlePaid}> 马上购买 </button>
                </p>
            </div>
    )
}
export default BookDetail ; 