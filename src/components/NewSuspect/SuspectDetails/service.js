const districts=["Ernakulam","Calicut","Trivandrum","Kollam","Kannur"];


export function getDistrictOptions(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(districts);
        },1000)
    })
}