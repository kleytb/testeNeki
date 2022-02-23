import React, {useState, useEffect} from 'react';
import SkillContainer from '../../components/SkillContainer';





import api from '../../service/api'

import './home.css';


const HABILIDADES = [
    {
        name: 'Javascript',
        user: 'Kley',
        level: '6 Estrelas',
        createdByMe: true,
        
    },
    {
      name: 'Java',
      user: 'Kley',
      level: '4 Estrelas',
      createdByMe: true,
        
    },
    {
      name: 'Postgres',
      user: 'Kley',
      level: '8 estrelas',
      createdByMe: true,
        
    },
]



function Home() {

    const [skills, setSkills] = useState([])
    //const [projetosCreatedByMe, setProjetosTemasCreatedByMe] = useState([])


    useEffect(() => {

        async function getSkills() {
            let response = await api.get('/api/user/userSkills')
            console.log(response.data);
    
            setSkills(response.data)
        }
    
        getSkills()
    }, [])

    return (
        <>
            
            <div className='projects-container'>

                

                <SkillContainer
                    title='Todas as Skills'
                    buttonTitle='Incluir Skill'
                    skill={skills}
                />

                <SkillContainer
                title='Todas as Skills'
                buttonTitle='Incluir Skill'
                skill={HABILIDADES}
                />


                
            </div>
        </>
    )
}

export default Home;