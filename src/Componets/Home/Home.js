import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
import './Home.css'

const Home = () => {
    const topicsdata=useLoaderData()
   const  topics=topicsdata.data
   console.log('topics',topics)
    return (
        <div>
            <h1 className='heading'>
                Exlpore Your Web Devlopement Skill
            </h1>
            <div className='topics'>
            
            {
                topics.map(topic=><Topics key={topic.id} topic={topic}></Topics>)
            }
            
        </div>
        </div>
    );
};

export default Home;