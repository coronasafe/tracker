import React from 'react';
import { A, navigate } from 'hookrouter'

export default function NavBar(){
  return (
    <nav class="bg-white px-8 pt-2 shadow-md">
     <div class="-mb-px flex">
       {[
         {
           link: '/',
           title: 'Home'
         },
         {
           link: '/suspect/create',
           title: 'Suspect Create'
         },
         {
           link: '/suspect/details',
           title: 'Suspect Details'
         }
       ].map(route=>(
         <A className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8" 
                  href={route.link}
          >
             {route.title}
         </A>
       ))}
        <A className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
           href='/logout'
           onClick={(e)=>{
              e.preventDefault()
              localStorage.setItem("care_access_token","")
              localStorage.setItem("care_refresh_token","")
              navigate("/")
              window.location.reload()
           }}
        >
          LOGOUT
        </A>
     </div>
    </nav>
  )
}
