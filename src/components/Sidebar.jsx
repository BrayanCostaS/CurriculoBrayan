
import SocialNetworks from './SocialNetworks';
import React from 'react'
import Avatar from "../img/brayan.jpg";
import "../styles/components/sidebar.sass";
import InformationContainer from './InformartionContainer';
import MyWebsite from './MyWebsite';



const Sidebar= () => {
    return (
    <aside id="sidebar">

        <img src={Avatar} alt="Brayan Costa"/>
        <p className='title'>Desenvolvedor Júnior</p>
        <SocialNetworks/>
        <InformationContainer/>
        
        <a href="../public/Curriculum_Brayan.jpg" className="btn" target="_blank" >
            Carregar o currículo (jpg)
        </a>

        <a href="../MyWebsite" className="btn" target="_blank" >
            Carregar o currículo (jpg)
        </a>

        
    </aside>
    )
}

export default Sidebar
