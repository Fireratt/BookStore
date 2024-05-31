import React from "react";
import { useNavigate } from "react-router-dom";
export async function getJson(url)
{
    const response = await fetch(url , {method : "GET" , credentials : "include"}) ;
    if(!isLogin(response))
    {
        return null ; 
    } 
    return response.json() ;            // return the promise 
}
export async function postRaw(url , data)
{
    const response = await fetch(url ,
        {
            method : "POST", 
            credentials : "include" ,
            headers :{
                "Content-Type" : "application/json" 
            },
            body : data
        })
        if(!isLogin(response))
        {
            return null ; 
        } 
        return response.json() ;
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
    if(!isLogin(response))
    {
        return null ; 
    } 
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
    console.log("Got Response Status:" , response.status) ; 
    if(!isLogin(response))
    {
        return null ; 
    } 
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
    if(!isLogin(response))
    {
        return null ; 
    } 
    return response.json() ;
}
export async function isLogin(response)
{
    console.log("IsLogin: status:" , response.status) ; 
    if(response.status == 401)
    {
        // redirect to the login page , instead of read the server's redirect
        alert("You have not logged in yet , Returning to the login page...") ; 
        window.location.href = ("/login") ; 
        return false ; 
    }else
    {
        return true ; 
    }

}
export const BACKEND_URL = "http://localhost:8080" ; 