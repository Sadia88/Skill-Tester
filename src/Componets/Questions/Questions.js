import React, { useState } from 'react';

import './Questions.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faEye, faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Questions = ({questions}) => {

    

    
const {options,id,question,correctAnswer}=questions

const notifyCorrect = () => toast("Wow! Correct Answer");
const notifyIncorrect = () => toast("Alas! Wrong Answer");
// console.log(options)
const handleChange =(event) => {
  
if(event===correctAnswer){
notifyCorrect() 
  
    
}
else{
    notifyIncorrect()
   
    
    
}
  
 
};

const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
 setIsActive(current => !current);
  }
    return (
        <div>
           
            <div className='question'>
            
            <div>
            <h4>{question.replace(/(<([^>]+)>)/ig, '')}</h4>
          

          <p>{options.map(option=>
              <div className='check-box'><label>
              <input type="radio" name={id}   onChange={(event)=>handleChange(option)}/>
              {option}
              <ToastContainer />
            </label></div>
              )
}</p>
            </div>
<div  className='icon'>
<FontAwesomeIcon  icon={faEye} className={isActive ? 'hidden' : 'not-hidden'}  onClick={handleClick}></FontAwesomeIcon> 

<button className={isActive ? 'not-hidden' : 'hidden'} onClick={handleClick} > <small >{correctAnswer}</small></button>
</div>
          
            </div>

           
        {
            
            
        }
        </div>
    );
};

export default Questions;