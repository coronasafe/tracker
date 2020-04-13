import React from 'react';
import { A, navigate } from 'hookrouter'

export default function PublicNavBar(){
  return (
    <nav className="bg-green-600 px-8 pt-2 shadow-md">
     <div className="-mb-px flex max-w-6xl mx-auto">
       <img className="px-10" src={require("../../img/covid_tracker_small_logo.png")} />
       {[
         {
           link: '/login',
           title: 'Login'
         },
       ].map(route=>(
         <A className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
                  href={route.link}
                  key={route.link}>
             {route.title}
         </A>
       ))}
     </div>
    </nav>
  )
}
