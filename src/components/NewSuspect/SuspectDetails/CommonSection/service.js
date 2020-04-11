
const mock=["UK","US","Indonesia","Kuwait","Dubai"]
export function getLabOptions(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(mock);
        },1000)
    })
}