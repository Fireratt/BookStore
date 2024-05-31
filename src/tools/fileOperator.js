export function toBase64(file)
{
    return new Promise((resolve , reject)=>{
    if(file == null)
    {
        return null ; 
    }
    let fileReader = new FileReader() ; 
    let ready ; 
    fileReader.readAsDataURL(file) ; 
    fileReader.onload = function()
    {
        console.log(fileReader.result) ; 
        resolve(fileReader.result)
    }
    })
}

export function base64toFile(base64)
{

}