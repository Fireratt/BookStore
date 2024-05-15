import React from "react";
import { BACKEND_URL, getJson , post} from "./common";
import { ORDER_URL } from "./order";
export const PAY_URL = "/pay" ; 
export async function getPayInfo(book_id , amount)
{
    // pass parameter 
    if(typeof(book_id) == "object")
    {
        let lists = [] ; 
        let url = BACKEND_URL+PAY_URL ; 
        for(let i = 0 ; i < book_id.length ; i++)
        {
            let orderItem = {book_id:book_id[i] , amount:amount[i]} ; 
            lists[i] = orderItem ; 
        }
        return post(url , lists) ; 
    }
    throw "getPayInfo Need a Array Parameter"
}
// the data should consist of bookname , bookprice , paid , etc 
export async function submitOrder(data)
{

    return post(BACKEND_URL+ORDER_URL , data) ; 
}