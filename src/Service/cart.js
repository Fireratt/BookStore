import React from "react";
import { getJson , BACKEND_URL, post , put , del} from "./common";
export const ORDER_URL = "/cart" ; 

export async function addCart(book_Id)
{
    let url = `${BACKEND_URL}${ORDER_URL}`
    let data = 
    {
        book_id : book_Id
    }
    return put(url , data)
}

export async function getCartList()
{
    let url = `${BACKEND_URL}${ORDER_URL}` ; 
    return getJson(url) ; 
}

export async function removeCart(book_Id)
{
    let url = `${BACKEND_URL}${ORDER_URL}`
    let data = 
    {
        book_id : book_Id
    }
    return del(url , data)
}