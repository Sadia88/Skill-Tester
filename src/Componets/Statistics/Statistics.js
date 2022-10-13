import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const datas=useLoaderData()
    const  data=datas.data

console.log(data)

    
  
  

    return (
        <div className='bar-container'>
        
          <h2>Statistic About Total Number Question</h2>
           <LineChart width={400} height={400} data={data} className='bar'>
           <Line type="monotone" dataKey="total" stroke="green" />
           <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
           <XAxis dataKey="name" stroke="green" />
           <YAxis  stroke="green"/>
           <Tooltip />
           </LineChart>
        </div>
    );
};

export default Statistics;
