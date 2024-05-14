import React from "react";
import { BACKEND_URL, getJson , post} from "./common";
export const PAY_URL = "/pay" ; 
export async function getPayInfo(bookName)
{
    // pass parameter
    let url = BACKEND_URL+PAY_URL + `?Name=${bookName}` ; 
    return getJson(url) ; 
}
// the data should consist of bookname , bookprice , paid , etc 
export async function submitOrder(data)
{
    return post(BACKEND_URL+PAY_URL , data) ; 
}