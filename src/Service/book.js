import React from "react";
import { BACKEND_URL,getJson } from "./common";
export const BOOK_URL = "/book" ; 
export async function getBook(bookName)
{
    let url = BACKEND_URL + BOOK_URL ;
    // pass the url parameter .
    url = url + (`?Name=${bookName}`) ;
    return getJson(url) ; 
}
