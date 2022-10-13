import React, { useState } from 'react';
import Question from '../Question/Question';
import './Questions.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faEye, faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Questions = ({questions}) => {

    const [isActiveRadio, setIsActiveRadio] = useState(false);

    
const {options,id,question,correctAnswer}=questions
const [count,setCount]=useState(1)
const notifyCorrect = () => toast("Wow! Correct Answer");
const notifyIncorrect = () => toast("Alas! Wrong Answer");
// console.log(options)
const handleChange =(event) => {
    
if(event===correctAnswer){
    setIsActiveRadio(current => !current);
notifyCorrect() 
setCount(count+1)  
    
}
else{
    notifyIncorrect()
    
    
    
}
  
 console.log(count)
};

const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
 setIsActive(current => !current);
  }
    return (
        <div>
           <h1>correct answer is {count}</h1>
            <div className='question'>
            
            <div>
            <h4>{question.replace(/([^>]+)>/,'')}</h4>
          

          <p>{options.map(option=>
              <div className='check-box'><label>
              <input type="radio" name='option'  className={isActiveRadio? 'bg-salmon' : ''}  onChange={()=>handleChange(option)}/>
              {option}
              <ToastContainer />
            </label></div>
              )
}</p>
            </div>
<div>
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