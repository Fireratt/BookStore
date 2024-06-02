import React from "react";
import { BACKEND_URL,getJson, put , post, postRaw , del} from "./common";
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

export async function Admin_AddBook(newData)
{
    // new Data : {cover , author , name , storage , isbn , price , description}
    let url = BACKEND_URL + ADMIN_URL + BOOK_URL ; 
    return put(url , newData) ; 
}

export async function Admin_DeleteBook(book_id)
{
    let url = BACKEND_URL + ADMIN_URL + BOOK_URL ; 
    let body = {
        book_id : book_id
    }
    return del(url , body) ; 
}