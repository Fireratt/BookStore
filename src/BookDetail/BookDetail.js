import React, { useEffect } from "react";
import TopBar from "../component/topBar";
import SideBar from "../component/sidebar";
import './BookDetail.css'
let name = "";
let value = ""; 
let jsonData = ""; 
let nameWithoutSpc = "" ; 
function initialize(jsonItem)
{
    const price = jsonItem['value'] ; 
    const description = jsonItem['description'] ; 
    const author = jsonItem['author'] ; 
    const storage = jsonItem['storage']
    const picURL = '/Source/Books/' + nameWithoutSpc + ".jpg"

    document.getElementsByClassName('Detail_Img')[0].src = picURL ; 
    document.getElementsByClassName('Detail_Title')[0].textContent = name ; 
    document.getElementsByClassName('Detail_Storage')[0].textContent = "库存: " + storage ; 
    document.getElementsByClassName('Detail_Price')[0].textContent = price + "￥" ; 
    document.getElementsByClassName('Detail_Description')[0].textContent = description ; 
    document.getElementsByClassName('Detail_Author')[0].textContent = "作者: " + author ; 

}
async function readCookie()
{
    const cookieArray = document.cookie.split(';') ; 
    for(const i of cookieArray)
    {
        if(i.split('=')[0] === "BookName")
        {
            name = i.split('=')[1] ; 
        }

        if(i.split('=')[0] === "BookPrice")
        {
            value = i.split('=')[1] ; 
        }
    }
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC" ; 
    nameWithoutSpc =  name.replace(new RegExp(" ","g"),"") ; 
    // alert(document.cookie) ; 
    // read the json to know other information 
    // const request = new Request('/Source/BookData.json')
    const jsonSource = await fetch('/Source/BookData.json') ; 
    jsonData = await jsonSource.json() ; 
    // const storage = document.createElement("p") ; 
    // storage.textContent = jsonData[nameWithoutSpc]["storage"] ; 
    // storage.id = name + "Storage" ; 
    // if(!document.getElementById(storage.id))
    // {
    //     document.body.appendChild(storage) ; 
    // }
    initialize(jsonData[nameWithoutSpc]) ; 

}
function BookDetail(props)
{
    useEffect(()=>
    {
        readCookie() ; 
    }
    ,[name] 
    ) ; 
    // All The part will be initialized in the function "Initialize"
    return(
            <div className="BookDetail">
                 <TopBar/>
                <SideBar data = {props.data}/> 
                <img src="" alt="图书图片" className = "Detail_Img"/>           
                <div className = "Detail_TextPage">
                    <p className="Detail_Title"> </p>
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