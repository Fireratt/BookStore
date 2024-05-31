import { put , getJson,post,BACKEND_URL } from "./common";
const USER_URL="/user"
const REG_URL = "/register"
export async function register(data)
{
    let url = BACKEND_URL + REG_URL ; 
    return put(url , data) ;
}

export async function editUserInfo(data)
{
    let url = BACKEND_URL + USER_URL ; 
    return post(url,data) ; 
}

export async function getUserInfo()
{
    let url = BACKEND_URL + USER_URL ; 
    return getJson(url) ;               // bring with the cookie , use cookie to judge the login info 
}
