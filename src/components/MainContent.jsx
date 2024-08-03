import TechnologiesContainer from "./TechnologiesContainer";
import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";


import '../styles/components/maincontent.sass';


import React from 'react'

const MainContent= () => {
    return (
        <main id="main-content">
        <AboutContainer />
        <TechnologiesContainer />
        <ProjectsContainer />
      </main>
    )
}

export default MainContent
