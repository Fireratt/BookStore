import React from "react";
import { getJson , BACKEND_URL, post} from "./common";
export const ORDER_URL = "/order" ; 
export async function getOrderList()
{
    return getJson(BACKEND_URL+ORDER_URL) ;  
}
