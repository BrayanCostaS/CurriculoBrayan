import { FaLinkedinIn, FaGithub, FaInstagram, FaLink } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/brayan-santos-789628278/" },
    { name: "github", icon: <FaGithub />, url: "https://github.com/BrayanCostaS" },
    { name: "instagram", icon: <FaInstagram />, url: "https://www.instagram.com/brayancsantos/"},
]

const SocialNetworks= () => {
    return     <section id="social-networks">
    {socialNetworks.map((network) => (
      <a href={network.url} className="social-btn" id={network.name} key={network.instagram} target="_blank" >
      {network.icon}
    </a>

  

      
    ))}
  </section>
        
    
}



export default SocialNetworks;