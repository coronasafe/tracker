const districts=["Ernakulam","Calicut","Trivandrum","Kollam","Kannur"];

export function getDistrictOptions(searchText){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(districts);
        },1000)
    })
}

function getPanchayatOptions(searchText){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(districts);
        },1000)
    })
}
function getMuncipalityOptions(searchText){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(districts);
        },1000)
    })
}
function getCorporationOptions(searchText){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(districts);
        },1000)
    })
}

export function getLSGNameOptions(type){
    switch(type){
        case "Panchayat":return getPanchayatOptions;
        case "Muncipality":return getMuncipalityOptions;
        case "Corporation":return getCorporationOptions;
    }
}

export function getHCNameOptions(type){
    return (searchText)=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(districts);
            },1000)
        })
    }
}