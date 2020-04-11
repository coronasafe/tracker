import React,{useState} from 'react';
import DatePicker from "react-date-picker";

export default function CreateSuspect() {
  const [check, setCheck] = useState({dob: new Date(1991,0)})
  const [inputs,setInputs]=useState({})
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center" style={{background: "#edf2f7"}}>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <div className="-mx-3 md:flex mb-2">
          <div className="px-3 mb-6 w-full">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
            Name
            </label>
            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-name" type="text" placeholder="Doe"/>
            <p className="text-red text-xs italic">Please fill out this field.</p>
          </div>
        </div>
          <div className="-mx-3 md:flex mb-2">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
              Date of Birth
            </label>
            <DatePicker
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              onChange={(date) => setCheck({dob:date})}
              value={check.dob}
              />
          </div>
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
              Gender
            </label>
            <div className="block w-full rounded py-3 px-4">
              <span class="relative z-0 inline-flex shadow-sm">
                <button type="button" class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:bg-blue-300 focus:shadow-outline-blue active:bg-gray-200 active:text-gray-700 transition ease-in-out duration-150">
                  Male
                </button>
                <button type="button" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:bg-blue-300 focus:shadow-outline-blue active:bg-gray-200 active:text-gray-700 transition ease-in-out duration-150">
                  Female
                </button>
                <button type="button" class="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:bg-blue-300 focus:shadow-outline-blue active:bg-gray-200 active:text-gray-700 transition ease-in-out duration-150">
                  Other
                </button>
              </span>
            </div>
          </div>
        </div>

        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
              Phone Number
            </label>
            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="+91-9876543210"/>
            <p className="text-red text-xs italic">Please fill out this field.</p>
          </div>
        </div>
        <div class="md:flex md:items-right">
          <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline float-right" type="button">
               Submit
              </button>
            </div>
          </div>
      </div>
    </div>
  );
}
