import React from "react";

export async function getJson(url)
{
    const response = await fetch(url , {method : "GET" , credentials : "include"}) ; 
    return response.json() ;            // return the promise 
}

export async function post(url , data)
{
    const response = await fetch(url ,
        {
            method : "POST", 
            credentials : "include" ,
            headers :{
                "Content-Type" : "application/json" 
            },
            body : JSON.stringify(data) 
        })
    return response.json() ;
}

export async function put(url , data)
{
    const response = await fetch(url ,
        {
            method : "PUT", 
            credentials : "include" ,
            headers :{
                "Content-Type" : "application/json" 
            },
            body : JSON.stringify(data) 
        })
    return response.json() ;
}

export async function del(url , data)
{
    const response = await fetch(url ,
        {
            method : "DELETE", 
            credentials : "include" ,
            headers :{
                "Content-Type" : "application/json" 
            },
            body : JSON.stringify(data) 
        })
    return response.json() ;
}

export const BACKEND_URL = "http://localhost:8080" ; 