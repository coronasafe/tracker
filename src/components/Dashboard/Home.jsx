import React from 'react';
import {SimpleBarChart, StackedBarChart, CustomPieChart, TwoLevelPieChart} from '../common/Charts'

export default function Home() {

  return(
  <div className='h-screen justify-center py-6'>

    <div className='flex flex-wrap bg-gray-200 justify-center'>
      <div className='w-full sm:w-full md:w-1/2 md:p-1 lg:w-1/3 lg:p-1 pb-5'>
        <TwoLevelPieChart heading="Total number of those affected"
                          data01 = {[
                                     { name: 'Male', value: 200 },
                                     { name: 'Female', value: 300 },
                                     { name: 'Transgender', value: 0 }]}
                           data02 = {[
                                     { name: '0-10', value: 100 },
                                     { name: '10-20', value: 300 },
                                     { name: '20-60', value: 100 },
                                     { name: '>60', value: 80 }]}
                           colors01= {["#8884D8", "#FF9FC0", "#476DAF"]}
                           colors02= {["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]}
                           legend01="Gender Wise"
                           legend02="Age Wise"/>
      </div>
      <div className='w-full sm:w-full md:w-1/2 md:p-1 lg:w-1/3 lg:p-1 pb-5'>
        <TwoLevelPieChart heading="Total number of those under hospital quarantine"
                           data01 = {[
                                      { name: 'Male', value: 400 },
                                      { name: 'Female', value: 300 },
                                      { name: 'Transgender', value: 0 }]}
                           data02 = {[
                                      { name: '0-10', value: 100 },
                                      { name: '10-20', value: 300 },
                                      { name: '20-60', value: 100 },
                                      { name: '>60', value: 80 }]}
                           colors01= {["#8884D8", "#FF9FC0", "#476DAF"]}
                           colors02= {["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]}
                           legend01="Gender Wise"
                           legend02="Age Wise"/>
       </div>
       <div className='w-full sm:w-full md:w-1/2 md:p-1 lg:w-1/3 lg:p-1 pb-5'>
         <TwoLevelPieChart heading="Total number of those under home quarantine"
                          data01 = {[
                                     { name: 'Male', value: 400 },
                                     { name: 'Female', value: 300 },
                                     { name: 'Transgender', value: 0 }]}
                           data02 = {[
                                     { name: '0-10', value: 100 },
                                     { name: '10-20', value: 300 },
                                     { name: '20-60', value: 100 },
                                     { name: '>60', value: 80 }]}
                           colors01= {["#8884D8", "#FF9FC0", "#476DAF"]}
                           colors02= {["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]}
                           legend01="Gender Wise"
                           legend02="Age Wise"/>
       </div>
    </div>
    <div className='flex flex-wrap bg-gray-200 justify-center'>
       <div className='w-full sm:w-full md:w-1/2 md:p-1 lg:w-1/3 lg:p-1 pb-5'>
        <TwoLevelPieChart heading="Total number of those affected as of today"
                          data01 = {[
                                     { name: 'Male', value: 400 },
                                     { name: 'Female', value: 300 },
                                     { name: 'Transgender', value: 0 }]}
                          data02 = {[
                                     { name: '0-10', value: 100 },
                                     { name: '10-20', value: 300 },
                                     { name: '20-60', value: 100 },
                                     { name: '>60', value: 80 }]}

                          colors01= {["#8884D8", "#FF9FC0", "#476DAF"]}
                          colors02= {["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]}
                          legend01="Gender Wise"
                          legend02="Age Wise"/>
       </div>
       <div className='w-full sm:w-full md:w-1/2 md:p-1 lg:w-1/3 lg:p-1 pb-5'>
        <TwoLevelPieChart heading="Total number of those affected under hospital quarantine today"
                           data01 = {[
                                      { name: 'Male', value: 400 },
                                      { name: 'Female', value: 300 },
                                      { name: 'Transgender', value: 0 }]}
                            data02 = {[
                                      { name: '0-10', value: 100 },
                                      { name: '10-20', value: 300 },
                                      { name: '20-60', value: 100 },
                                      { name: '>60', value: 80 }]}
                            colors01= {["#8884D8", "#FF9FC0", "#476DAF"]}
                            colors02= {["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]}
                            legend01="Gender Wise"
                            legend02="Age Wise"/>
       </div>
       <div className='w-full sm:w-full md:w-1/2 md:p-1 lg:w-1/3 lg:p-1 pb-5'>
        <TwoLevelPieChart heading="Total number of those affected under home quarantine today"
                          data01 = {[
                                     { name: 'Male', value: 400 },
                                     { name: 'Female', value: 300 },
                                     { name: 'Transgender', value: 0 }]}
                           data02 = {[
                                     { name: '0-10', value: 100 },
                                     { name: '10-20', value: 300 },
                                     { name: '20-60', value: 100 },
                                     { name: '>60', value: 80 }]}
                           colors01= {["#8884D8", "#FF9FC0", "#476DAF"]}
                           colors02= {["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]}
                           legend01="Gender Wise"
                           legend02="Age Wise"/>
      </div>
    </div>
    <div className='flex flex-wrap bg-gray-200 justify-center'>
      <div className='xl:w-1/3 p-1'>
        <SimpleBarChart heading="Total number affected date wise"
                        data = {[
                                {
                                  "Date": "15-04-2020",
                                  "Cases": 294
                                },
                                {
                                  "Date": "16-04-2020",
                                  "Cases": 300
                                },
                                {
                                  "Date": "17-04-2020",
                                  "Cases": 400
                                },
                                {
                                  "Date": "18-04-2020",
                                  "Cases": 500
                                },
                                {
                                  "Date": "19-04-2020",
                                  "Cases": 300
                                },
                                {
                                  "Date": "20-04-2020",
                                  "Cases": 200
                                }
                              ]}/>
      </div>
      <div className='xl:w-1/3 p-1'>
        <SimpleBarChart heading="Under hospital quarantine date wise"
                        data = {[
                            {
                              "Date": "15-04-2020",
                              "Cases": 2
                            },
                            {
                              "Date": "16-04-2020",
                              "Cases": 3
                            },
                            {
                              "Date": "17-04-2020",
                              "Cases": 10
                            },
                            {
                              "Date": "18-04-2020",
                              "Cases": 120
                            },
                            {
                              "Date": "19-04-2020",
                              "Cases": 150
                            },
                            {
                              "Date": "20-04-2020",
                              "Cases": 160
                            },
                            {
                              "Date": "21-04-2020",
                              "Cases": 180
                            }
                          ]}/>
      </div>
      <div className='xl:w-1/3 p-1'>
        <SimpleBarChart heading="Under home quarantine date wise"
                        data = {[
                                {
                                  "Date": "15-04-2020",
                                  "Cases": 294
                                },
                                {
                                  "Date": "16-04-2020",
                                  "Cases": 5294
                                },
                                {
                                  "Date": "17-04-2020",
                                  "Cases": 35294
                                },
                                {
                                  "Date": "18-04-2020",
                                  "Cases": 55294
                                },
                                {
                                  "Date": "19-04-2020",
                                  "Cases": 45294
                                },
                                {
                                  "Date": "20-04-2020",
                                  "Cases": 32945
                                },
                                {
                                  "Date": "21-04-2020",
                                  "Cases": 55294
                                }
                              ]}/>
      </div>
    </div>

  </div>
  )
}
