import React, { useState } from 'react';
import './Topics.css'
import { faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { handleQuiz } from '../Loaders/quizLoader.js';


const Topics = ({topic}) => {
   const { id, logo ,name,total }=topic

   const handleQuiz=(id)=>{
    const url=fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
    .then(res=>res.json())
    .then(data=>setQuiz(data))
       }
       const setQuiz=(data)=>{
        const quiz=data.data
        console.log(typeof(quiz))
       
       }
    return (
        <div className='topic-container'>
            <div className='topic'>
                <img src={logo} alt="" />
                <div className='topic-details'>
                <h3>{name}</h3>
                <div>
                {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-circle-0" /> */}
                <p><small>Total Question : {total}</small></p>
                </div>
                </div>


                <Link to={`quiz/${id}`}>
                <button className="btn-start" onClick={()=>handleQuiz(id)}>Let's start  </button></Link>
                
            </div>
        </div>
    );
};

export default Topics;

