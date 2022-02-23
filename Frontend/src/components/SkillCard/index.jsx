import React from "react";

import { FiTrash2 } from 'react-icons/fi'

import './styles.css'

const SkillCard = ({name, user, level, onClickDelete  }) => {
    return(
        <div className='skill-card'>
        <div className='card-name-container'>
            <span className='card-span'>Skill</span>
            <strong className='card-title'>{name}</strong>
        </div>

        <div className='card-creator-container'>
            <span className='card-span' >User</span>
            <strong className='card-title'>{user}</strong>
        </div>

        <div className='card-level-container'>
            <span className='card-span' >Level</span>
            <strong className='card-title'>{level}</strong>
        </div>

        <div className='card-trash-container'>
            {
                
                <FiTrash2 className='card-trash' onClick={onClickDelete }/>
               
            }
        </div>

    </div>
    );
}

export default SkillCard;