import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import Questions from '../Questions/Questions';


const Quiz = () => {
   const quizData=useLoaderData()
   const quiz=quizData.data.questions
   
   
//    const {total,name,logo,questions ,id}=quiz
//    const qq=JSON.parse(questions)
//    console.log(qq)
  
// console.log(quiz)


const loaddata=()=>{

}
  
    return (
        <div>
           
         <h1>Total Number of Question  {quiz.length}</h1>
    {
        quiz.map(question=><Questions questions={question}></Questions>)
    } 
        </div>
    )
    
};

export default Quiz;