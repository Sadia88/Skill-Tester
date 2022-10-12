import React from 'react';
import './Topics.css'
import { faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Topics = ({topic}) => {
   const { id, logo ,name,total }=topic
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
                <button className="btn-start">Let's start</button>
            </div>
        </div>
    );
};

export default Topics;

