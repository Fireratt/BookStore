import React , {useRef, useState} from "react";
import TopBar from "../component/topBar"
import SideBar from "../component/sidebar"
import PictureLoader from "../component/PictureLoader";
import "./Page.css"
import "./ContentBlock.css"
import "./BookAdd.css"
import { toBase64 } from "../tools/fileOperator";
import { Admin_AddBook } from "../Service/administrator";
let InputFormsContents = [
    "name", "author" , "isbn" ,"price" , "storage"
]
export default function BookAdd(props)
{
    // when go into this page from the manager page properly , it will show the status 
    // else it will redirect to the login 
    
    let [cover,setCover] = useState(null) ; 
    let picRef = useRef(null) ; 
    let [errorMessage,setMessage] = useState("") ; 
    let [error,setError] = useState(false) ; 
    let descriptionRef = useRef(null) ; 
    async function handlePictureLoad()
    {
        let picString =await toBase64(picRef.current.files[0]); 
        setCover(picString)
    }
    async function handleSubmit()
    {
        let forms = document.getElementsByClassName("BookAdd_InputForm") ; 
        let data = {};
        for(let i = forms.length-1 ; i >= 0 ; i--)
        {
            if(forms[i].value == "")
            {
                errorMessage = `${InputFormsContents[i]}` + "不能为空" ;
                setMessage(errorMessage)
                setError(true) ; 
            }
            data[InputFormsContents[i]] = forms[i].value; 
        }
        data["description"] = descriptionRef.current.value ; 
        data["cover"] = cover ; 
        let response = await Admin_AddBook(data) ; 
        if(response.state == "true")
        {
            alert("创建成功")
            window.history.back() ; 
        }
        else
        {
            alert("创建失败")
        }
    }
    return(
        <div>
            <TopBar/>
            <SideBar data={props.data}/>
            <input type="file" className="FileInput" accept=".png,.jpg" ref={picRef} id="BookAdd_PicInput" onChange={handlePictureLoad}/>

            <div className="ContentBlock">
                <p className="Page_Title"> 新增书籍 </p>

                <PictureLoader pic={cover} usage="上传封面" className="BookAdd_Cover" for="BookAdd_PicInput"/>
                {error && <p className="warning BookAdd_Warning"> {errorMessage} </p>}
                <div className="BookAdd_TextBlock">
                    <input className="Page_InputForm BookAdd_InputForm" type="text" placeholder="标题"/>
                    <input className="Page_InputForm BookAdd_InputForm" type="text" placeholder="作者"/>
                    <input className="Page_InputForm BookAdd_InputForm" type="text" placeholder="ISBN"/>
                    <input className="Page_InputForm BookAdd_InputForm" type="text" placeholder="价格"/>
                    <input className="Page_InputForm BookAdd_InputForm" type="text" placeholder="库存"/>
                    <textarea className="Page_InputTextArea"  placeholder="简介" ref={descriptionRef}/>

                    <label className="Page_Btn BookAdd_Btn" onClick={handleSubmit}> 创建 </label>
                </div>
            </div>
        </div>
    )
}