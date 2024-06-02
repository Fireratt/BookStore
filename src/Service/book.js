import React from "react";
import { BACKEND_URL,getJson } from "./common";
export const BOOK_URL = "/book" ; 
export const BOOKLIST_URL = "/booklist"
export const SEARCH_URL = "/search"
export async function getBook(book_id)
{
    let url = BACKEND_URL + BOOK_URL ;
    // pass the url parameter .
    url = url + `?id=${book_id}` ;
    return getJson(url) ; 
}

export async function getBookList(page = 1)
{
    let url = BACKEND_URL + BOOKLIST_URL ;
    // pass the url parameter .
    return getJson(url) ; 
}

export async function searchBook(bookName)
{
    let url = BACKEND_URL + BOOK_URL+SEARCH_URL + "?bookname=" + bookName; 
    return getJson(url) ; 
}