import React from 'react';
import './Topics.css'

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
                    <FontAwesomeIcon icon={}></FontAwesomeIcon>
                <p>{total}</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Topics;