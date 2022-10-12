import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
import './Home.css'

const Home = () => {
    const topicsdata=useLoaderData()
   const  topics=topicsdata.data
    return (
        <div className='topics'>
            {
                topics.map(topic=><Topics key={topic.id} topic={topic}></Topics>)
            }
            
        </div>
    );
};

export default Home;