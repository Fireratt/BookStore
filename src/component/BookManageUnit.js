import React , {useRef, useState , getDeriveStateFromProps, useEffect} from "react";
import EditableText from "./editableText";
import "./BookManageUnit.css"
import "../View/Page.css"
import PictureLoader from "./PictureLoader";
import { Admin_ChangeBook, Admin_DeleteBook } from "../Service/administrator";
import { toBase64 } from "../tools/fileOperator";
let TableHeaders = [
    "书名：" ,
    "作者：" ,
    "库存：" ,
    "ISBN: "
]
export default function BookManageUnit(props)
{
    let book_id = props.id ; 
    let [bookName , setName] = useState(props.name) ; 
    let [author, setAuthor] = useState(props.author) ; 
    let [storage , setStorage] = useState(props.storage) ; 
    let [cover,setCover] = useState(props.cover) ; 
    let [isbn , setIsbn] = useState(props.isbn)
    let picRef = useRef(null) ; 
    let inputId = book_id + "_CoverInput" ; 
    let pictureString = null; 
    async function handleEdit()
    {
        let data = {book_id : book_id , cover: pictureString, name:bookName , author:author ,storage: storage} ; 
        let result = await Admin_ChangeBook(data) ; 
        if(result.state)
        {
            alert("修改成功") ;
        }
        else{
            alert("修改失败")
        }
    }
    async function handleNewPic()
    {
        pictureString = await toBase64(picRef.current.files[0]) ; 
        setCover(pictureString) ; 
    }
    async function handleDelete()
    {
        if(window.confirm(`确定要移除${bookName}吗？（将会暂停该书籍在页面中的显示）`)) 
        {
            Admin_DeleteBook(book_id) ; 
        }   
    }
    useEffect(()=>
    {
        console.log("Trigger a Unit Effect") ; 
        setName(props.name) ; 
        setStorage(props.storage) ; 
        setAuthor(props.author) ; 
        setCover(props.cover) ; 
        setIsbn(props.isbn) ; 

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
                <span className="BookManageUnit_Text">{TableHeaders[3]}  <EditableText content={isbn} valueHook={setIsbn}/> </span>
            </div>

            <label onClick={handleEdit} className="Page_RightTopBtn BookManageUnit_Commit"> 
                提交修改
            </label>

            <label onClick={handleDelete} className="Page_RightTopBtn BookManageUnit_Commit BookManageUnit_Delete"> 
                移除此书
            </label>
        </div>
    )
}