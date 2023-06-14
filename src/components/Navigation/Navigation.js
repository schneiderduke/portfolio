import './Navigation.css'
import { faLinkedinIn, faSpotify, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, } from 'react'
import { gsap, Power3 } from 'gsap-trial'
function Navigation() {
    useEffect(() => {
        gsap.to('.name-card', 1, { y: 10,delay: 3 })
    })

    return (       
        <div className='name-card row'>
            <div className='name col-sm'>
                Duke Schneider
            </div>
            <div className='icons col-sm' >
                
                <FontAwesomeIcon className="intro-icon" icon={faPhone} />
                <FontAwesomeIcon className="intro-icon" icon={faEnvelope} />
                <FontAwesomeIcon onClick={() => {window.open('https://open.spotify.com/artist/2iP5WsIt96hXbb4C4iY2Oz', '_blank');}} className="intro-icon" icon={faSpotify} />
                <FontAwesomeIcon onClick={() => {window.open('https://www.linkedin.com/in/duke-schneider-74aa7711a/', '_blank');}} className="intro-icon" icon={faLinkedinIn} />
                <FontAwesomeIcon onClick={() => {window.open('https://www.github.com/schneiderduke', '_blank');}} className="intro-icon" icon={faGithub} />
            </div>
        </div>
        
    )
}

export default Navigation;