const countries=["UK","US","Indonesia","Kuwait","Dubai"]
export function getCountryOptions(searchText){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(countries);
        },1000)
    })
}