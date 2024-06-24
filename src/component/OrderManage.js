import React, { useEffect, useState } from "react";
import { Admin_GetAllOrder } from "../Service/administrator";
import OrderUnit from "./OrderUnit";
import { Pagination } from "antd";
export default function OrderManage(props)
{
    let [unitList,setList] = useState([])
    let [page, setPage] = useState(1) ; 
    let [pageState,setPageState] = useState({currentPage:0}) ; 
    async function initialize()
    {
        let response = await Admin_GetAllOrder(page-1) ;
        console.log(response)
        let size = response.pageable.pageSize; 
        let pageNumber = response.totalPages ; 
        let total = response.totalElements ; 
        setPageState({size:size , pageNumber:pageNumber , total:total , currentPage:0}) ; 
        setList((response.content)?.map((unit)=><OrderUnit items = {unit.orderItems} 
        price = {unit.totalPrice} 
        date = {unit.date}  
        code = {unit.orderId}
        />)) ; 
    }
    async function handleChangePage(page,pageSize)
    {
        setPage(page) ; 
    }
    useEffect(
        ()=>
        {
            initialize() ; 
        }
    ,[page])
    return(
        <div id = "OrderManage">
            {unitList}
            <Pagination defaultPageSize={8} defaultCurrent={1} className="MainExplore_Pagination" 
                total={pageState.total} pageSize={pageState.size} onChange={handleChangePage} current={page}/>
        </div>
    )
}