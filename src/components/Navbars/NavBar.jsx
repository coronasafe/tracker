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
         },
         {
           link: '/users',
           title: 'Users'
         },
       ].map(route=>(
         <A className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8" 
                  href={route.link}
          >
             {route.title}
         </A>
       ))}
     </div>
    </nav>
  )
}
