import React from "react";
import SkillCard from "../SkillCard";

import './styles.css'

const SkillContainer = ({title, buttonTitle, skill}) => {
    return(
        <div className='skill-cards-container'>

        <div className='skill-content-header'>
            <h1>{title}</h1>
            <button>{buttonTitle}</button>
        </div>

        {
            skill.map(({id, name, user, createdByMe, level}) => <SkillCard key={id} name={name} user={user} hasTrash={createdByMe} level={level} />)
        }
        
    </div>
    );
}

export default SkillContainer;