import React from "react";
import { BACKEND_URL,getJson, put , post, postRaw} from "./common";
export const ADMIN_URL = "/administrator" ; 
export const BOOK_URL = "/book" ; 

export async function Admin_SearchBook(bookName)
{
    let url = BACKEND_URL + ADMIN_URL + BOOK_URL + "?bookname=" + bookName; 
    return getJson(url) ; 
}
// if dont change , the cover will not changed. Dont need to pass the pictureData if not changed
export async function Admin_ChangeBook(newData) 
{
    // new Data : {cover , author , name , storage}
    let url = BACKEND_URL + ADMIN_URL + BOOK_URL ; 
    return post(url , newData) ;
}