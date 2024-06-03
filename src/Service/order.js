import React from "react";
import { getJson , BACKEND_URL, post} from "./common";
export const ORDER_URL = "/order" ; 
export const ORDER_SEARCH = "/search"
export const ORDER_SELECT = "/select"
export const ORDER_COUNT = "/statistic"
export async function getOrderList()
{
    return getJson(BACKEND_URL+ORDER_URL) ;  
}

export async function searchOrder(query)
{
    let url = BACKEND_URL+ORDER_URL+ORDER_SEARCH + `?query=${query}` ; 
    return getJson(url) ; 
}

export async function selectOrderByTime(startTime , endTime)
{
    let url = BACKEND_URL+ORDER_URL+ORDER_SELECT + `?start=${startTime}&end=${endTime}` ; 
    return getJson(url) ; 
}

export async function countOrder(startTime , endTime)
{
    let url = BACKEND_URL+ORDER_URL+ORDER_COUNT + `?start=${startTime}&end=${endTime}` ; 
    return getJson(url) ; 
}