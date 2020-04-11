import React from 'react';
import { A, navigate } from 'hookrouter'

export default function PublicNavBar(){
  return (
    <nav className="bg-white px-8 pt-2 shadow-md">
     <div className="-mb-px flex">
       {[
         {
           link: '/',
           title: 'Home'
         },
         {
           link: '/login',
           title: 'Login'
         },
         {
           link: '/contact',
           title: 'Contact'
         },
       ].map(route=>(
         <A className="mx-auto no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3" 
                  href={route.link}
                  key={route.link}>
             {route.title}
         </A>
       ))}
     </div>
    </nav>
  )
}
