import React from "react";
import { BACKEND_URL,getJson, put , post, postRaw , del} from "./common";
export const ADMIN_URL = "/administrator" ; 
export const BOOK_URL = "/book" ; 
export const USER_URL = "/user" ; 
export const ORDER_URL = "/order" ; 
export const ORDER_SEARCH = "/search"
export const ORDER_SELECT = "/order/select" ; 
export const BOOK_SELECT = "/book/select" ; 
export const USER_SELECT = "/user/select" ; 
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

export async function Admin_GetUserInfo()
{
    let url = BACKEND_URL + ADMIN_URL + USER_URL ; 
    return getJson(url) ; 
}

export async function Admin_HandleBan(userId , ban)
{
    let url = BACKEND_URL + ADMIN_URL + USER_URL ; 
    let data = {user_id : userId , ban : ban}
    return put(url , data) ; 
}

export async function Admin_GetAllOrder(page)
{
    let url = BACKEND_URL + ADMIN_URL + ORDER_URL + `?page=${page}`; 
    return getJson(url) ;
}

export async function Admin_searchAllOrder(query , page)
{
    let url = BACKEND_URL + ADMIN_URL + ORDER_SEARCH ;
    url = url + `?page=${page}&query=${query}` 
    return getJson(url) ; 
}

export async function Admin_selectAllOrderByDate(start , end , page)
{
    let url = BACKEND_URL + ADMIN_URL + ORDER_SEARCH ;
    url = url + `?page=${page}&start=${start}&end=${end}` ; 
    return getJson(url) ;  
}