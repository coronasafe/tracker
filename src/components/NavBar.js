import React from 'react';
export default function NavBar(){
  return (
    <nav class="bg-white px-8 pt-2 shadow-md">
     <div class="-mb-px flex">
         <a class="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8" href="#">
             Home
         </a>
         <a class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8" href="#">
             Suspects
         </a>
         <a class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8" href="#">
             Users
         </a>
     </div>
    </nav>
  )
}
