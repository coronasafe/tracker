export const existingSuspectsConfig={
    columns:[
        {
            title:"Name",
            key:"name",
        },
        {
            title:"Phone Number",
            key:"phone_number",
        },
        {
            title:"Gender",
            key:"gender",
        },
        {
            title:"Date of Birth",
            key:"date_of_birth",
            component:({children,row})=>{
                if(!children){
                    return row["year_of_birth"];
                }
                else{
                    return children
                }
            }
        }
    ]
}