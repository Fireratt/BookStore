import React, {  useState ,useEffect} from "react";
import AfterServiceUnit from "../component/AfterServiceUnit";
function AfterService(props)
{
    let data = props.data ; 
    let [classifying , setClassify] = useState(-1) ; // -1  : display all ; 0 : display judging ; 1 : finished ; 2 : Failed
    const changeClassify = (event)=>
    {
        setClassify(parseInt(event.currentTarget.dataset.tag)) ; 
    }
    useEffect(()=>
    {
        let btns = document.getElementsByClassName("AfterServicePage_Btn") ; 
        for(let i of btns)
        {
            // dataset's data is all-string , even when you set it using a integer
            if(parseInt(i.dataset.tag) === classifying)
            {
                i.style.backgroundColor = "Salmon" ; 
            }
            else
            {
                i.style.backgroundColor = "rgba(224, 255, 255, 0.9)" ; 
            }
        }
    },[classifying])                                // when change classifying , redraw the buttons and change color

    let lists = data?.map((ele)=><AfterServiceUnit   
    Code = {ele.Code}
    Name = {ele.Name}
    Status = {ele.Status}
    Reason = {ele.Reason}
    Pic = {ele.Pic}
    Classifying = {classifying}/>) ;                // put the classifying into the child , to judge if it should be draw

    return(
        <div id = "AfterService">
            <div id = "AfterService_Top">
                <label className="Page_Btn AfterServicePage_Btn" onClick={changeClassify} data-tag = {-1}> 全部 </label>
                <label className="Page_Btn AfterServicePage_Btn" onClick={changeClassify} data-tag = {0}> 审核中 </label>
                <label className="Page_Btn AfterServicePage_Btn" onClick={changeClassify} data-tag = {1}> 已完成</label>
                <label className="Page_Btn AfterServicePage_Btn" onClick={changeClassify} data-tag = {2}> 驳回 </label>

            </div>
            {lists}
        </div>
    )
}

export default AfterService ; 