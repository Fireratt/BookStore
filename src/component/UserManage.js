import React, { useEffect, useState } from "react";
import { Admin_GetUserInfo } from "../Service/administrator";
import UserManageUnit from "./UserManageUnit";

export default function UserManage(props)
{
    let [unitList,setUnitList] = useState([]) ; 
    async function initialize()
    {
        let response = await Admin_GetUserInfo() ; 
        console.log(response) ; 
        setUnitList(response?.map((unit)=><UserManageUnit id={unit.id} username={unit.username} mail={unit.mail} isBan={unit.ban}/>))
    }

    useEffect(()=>
    {
        initialize() ; 
    },props)

    return(
        <div>
            {unitList}
        </div>
    )
}