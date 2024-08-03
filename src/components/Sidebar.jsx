
import SocialNetworks from './SocialNetworks';
import React from 'react'
import Avatar from "../img/brayan.jpg";
import "../styles/components/sidebar.sass";
import InformationContainer from './InformartionContainer';


const Sidebar= () => {
    return (
    <aside id="sidebar">

        <img src={Avatar} alt="Brayan Costa"/>
        <p className='title'>Desenvolvedor Júnior</p>
        <SocialNetworks/>
        <InformationContainer/>
        
        <a href="../public/Curriculum_Brayan.pdf" className="btn" target="_blank" >
            Carregar o currículo
        </a>
    </aside>
    )
}

export default Sidebar
