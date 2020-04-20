import React, { useState, useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,
         Tooltip, Legend, PieChart, Pie, Sector, Label, Text } from 'recharts';

//SIMPLE BAR CHART
export function SimpleBarChart(props)
{
  return (
    <div className='box-border shadow-lg bg-white w-full max-w-xl ml-auto mr-auto pb-5'>
      <div className='bg-gray-100 p-2 font-serif text-lg text-blue-500'>
        {props.heading}
      </div>
      <div className='justify-center -ml-1 mr-5 mt-10'>
        <BarChart width={390}
                  height={300}
                  data={props.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" angle="295" interval={0} tickMargin={20} height={80} allowDataOverflow="true" tickSize={20}/>
          <YAxis />
          <Tooltip />
          <Bar dataKey="Cases" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
    );
}

//STACKED BAR CHART
export function StackedBarChart(props)
{
  return (
    <div className='box-border shadow-lg bg-white m-4 w-auto inline-block'>
      <div className='bg-gray-100 p-4 text-lg text-blue-500'>
        {props.heading}
      </div>
      <div className='justify-center p-4'>
        <BarChart width={500}
                  height={300}
                  data={props.data}
                  margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                  }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
}

//CUSTOM PIE CHART
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
         fill, payload, percent, value,} = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={startAngle}
              endAngle={endAngle}
              fill={fill}/>
      <Sector cx={cx}
              cy={cy}
              startAngle={startAngle}
              endAngle={endAngle}
              innerRadius={outerRadius + 6}
              outerRadius={outerRadius + 10}
              fill={fill}/>
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export function CustomPieChart(props)
{
  const [activeIndex, setActiveIndex]= useState('0');

  const onPieEnter = (data, index) =>
  {
    setActiveIndex(index);
  };

  return (
    <div className='box-border shadow-lg bg-white m-4 w-auto inline-block'>
      <div className='bg-gray-100 p-4 text-lg text-blue-500'>
        {props.heading}
      </div>
      <div className='justify-center'>
        <PieChart width={400} height={400}>
          <Pie activeIndex={activeIndex}
               activeShape={renderActiveShape}
               data={props.data}
               cx={200}
               cy={200}
               innerRadius={60}
               outerRadius={80}
               fill="#8884d8"
               dataKey="value"
               onMouseEnter={()=> onPieEnter}/>
        </PieChart>
      </div>
    </div>
    );
}

 //TWO LEVEL PIE Chart

export function TwoLevelPieChart(props)
{
  const [COLORSONE, setCOLORSONE] = useState(props.colors01);
  const [COLORSTWO, setCOLORSTWO] = useState(props.colors02);

  const totalNumber = (data) =>
  {
    let count=0;
    data.forEach((item, i) => {
      count= count+item.value
    });
    return count;
  }
  const renderLegend = (legendName, data, colors) => {
   return (
     <div class="justify-center">
       <div class="m-4 mb-0">
          <div class="text-left">{legendName}</div>
          <div class='flex'>
            {data.map((legend, index) =>
            index <= data.length &&
            <div class="mr-4">
              <div class="inline-block rounded-full h-3 w-3 items-center justify-center mr-2"
                   style={{backgroundColor : colors[index]}}></div>
              <div class="inline-block">{legend.name}</div>
            </div>)}
          </div>
       </div>
    </div>
   );}

   return (
      <div className='box-border shadow-lg bg-white w-full max-w-sm sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-xl ml-auto mr-auto'>
        <div className='bg-gray-100 p-4 text-lg font-serif text-blue-500 h-20'>
          {props.heading}
        </div>
        <div className='justify-center'>
          <div className='-mt-3'>
            <PieChart width={400} height={350}>
              <Pie data={props.data02} dataKey="value" cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label>
                  {props.data02.map((entry, index) =>
                  <Cell key={`cell-${index}`} fill={COLORSTWO[index % COLORSTWO.length]} />)}
              </Pie>
              <Tooltip />
              <Legend content={renderLegend(props.legend02, props.data02, props.colors02)} verticalAlign="top" height={10}/>
            </PieChart>
          </div>
          <div className='-mt-3'>
            <PieChart width={400} height={350}>
              <Pie data={props.data01} dataKey="value" cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label>
                  {props.data01.map((entry, index) =>
                  <Cell key={`cell-${index}`} fill={COLORSONE[index % COLORSONE.length]} />)}
              </Pie>
              <Tooltip />
              <Legend content={renderLegend(props.legend01, props.data01, props.colors01)} verticalAlign="top" height={10}/>
            </PieChart>
          </div>
        </div>
      </div>
  );}
