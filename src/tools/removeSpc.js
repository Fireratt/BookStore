function removeSpc(str)
{
    const withoutSpc =  str.replace(new RegExp(" ","g"),"") ; 
    return withoutSpc ; 
}

export default removeSpc ; 