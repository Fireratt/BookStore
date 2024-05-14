import { getJson , post ,BACKEND_URL} from "./common";
const LOGIN_URL = "/login"
export async function confirmLogin(username,password)
{
    let body = {username:username , password:password} ; 
    let url = BACKEND_URL+LOGIN_URL ; 
    return post(url,body) ; 
}