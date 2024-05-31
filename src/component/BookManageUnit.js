import React , {useRef, useState , getDeriveStateFromProps, useEffect} from "react";
import EditableText from "./editableText";
import "./BookManageUnit.css"
import "../View/Page.css"
import PictureLoader from "./PictureLoader";
import { Admin_ChangeBook } from "../Service/administrator";
import { toBase64 } from "../tools/fileOperator";
let TableHeaders = [
    "书名：" ,
    "作者：" ,
    "库存："
]
export default function BookManageUnit(props)
{
    let book_id = props.id ; 
    let [bookName , setName] = useState(props.name) ; 
    let [author, setAuthor] = useState(props.author) ; 
    let [storage , setStorage] = useState(props.storage) ; 
    let [cover,setCover] = useState(props.cover) ; 
    let picRef = useRef(null) ; 
    let inputId = book_id + "_CoverInput" ; 
    let pictureString = null; 
    async function handleEdit()
    {
        // let pictureNum = picRef.current.files.length; 
        // let picture = null;
        // if(pictureNum >= 1)
        // {
        //     picture = picRef.current.files[0] ; 
        // }
        let data = {book_id : book_id , cover: pictureString, name:bookName , author:author ,storage: storage} ; 
        console.log(data) ; 
        let result = await Admin_ChangeBook(data) ; 
        console.log(result,  "Status:" , result.status) ; 
    }
    async function handleNewPic()
    {
        console.log("Trigger HandleNewPic") ; 
        pictureString = await toBase64(picRef.current.files[0]) ; 
        setCover(pictureString) ; 
    }
    useEffect(()=>
    {
        console.log("Trigger a Unit Effect") ; 
        setName(props.name) ; 
        setStorage(props.storage) ; 
        setAuthor(props.author) ; 
        setCover(props.cover) ; 

    },[props.id])
    return(
        <div className="BookManageUnit">
            <input type="file" className="FileInput" accept=".png,.jpg" id = {inputId} ref={picRef} onChange={handleNewPic}/>
            <PictureLoader pic={cover} className="BookManageUnit_Cover" usage="上传封面" for={inputId}/>
            <div className="BookManageUnit_TextBlock">
                <span className="BookManageUnit_Text">{TableHeaders[0]}  <EditableText content={bookName} valueHook={setName}/>  </span>
                <span className="BookManageUnit_Text">{TableHeaders[1]}  <EditableText content={author} valueHook={setAuthor}/> </span>
            </div>
            <div className="BookManageUnit_TextBlock">
                <span className="BookManageUnit_Text">{TableHeaders[2]}  <EditableText content={storage} valueHook={setStorage}/> </span>
            </div>

            <label onClick={handleEdit} className="Page_RightTopBtn BookManageUnit_Commit"> 
                提交修改
            </label>
        </div>
    )
}