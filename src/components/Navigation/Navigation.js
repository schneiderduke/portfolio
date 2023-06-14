import './Navigation.css'
import { faLinkedinIn, faSpotify, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef } from 'react'
import { gsap, Power1 } from 'gsap-trial'
function Navigation() {
    const phoneIcon = useRef(), mailIcon = useRef(), spotifyIcon = useRef(), linkedInIcon = useRef(), gitHubIcon = useRef();
    useEffect(() => {
        
        [phoneIcon, mailIcon, spotifyIcon, linkedInIcon, gitHubIcon].forEach((icon) => {
            icon.current.addEventListener('mouseenter', (e) => {
                console.log(icon)
                gsap.to(icon.current, {
                    scale: 1.3,
                    duration: 0.3,     
                    ease: Power1.easeInOut,
                })   
            });
            icon.current.addEventListener('mouseleave', (e) => {
                gsap.to(icon.current, {
                    scale: 1,
                    duration: 0.3,
                })   
            });
        })
        gsap.to('.name-card', 1, { y: 10,delay: 3 })
    })

    return (       
        <div className='name-card row'>
            <div className='name col-sm'>
                Duke Schneider
            </div>
            <div className='icons col-sm' >
                
                <FontAwesomeIcon ref={phoneIcon} className="intro-icon" icon={faPhone} />
                <FontAwesomeIcon ref={mailIcon} className="intro-icon" icon={faEnvelope} />
                <FontAwesomeIcon ref={spotifyIcon} onClick={() => {window.open('https://open.spotify.com/artist/2iP5WsIt96hXbb4C4iY2Oz', '_blank');}} className="intro-icon" icon={faSpotify} />
                <FontAwesomeIcon ref={linkedInIcon} onClick={() => {window.open('https://www.linkedin.com/in/duke-schneider-74aa7711a/', '_blank');}} className="intro-icon" icon={faLinkedinIn} />
                <FontAwesomeIcon ref={gitHubIcon} onClick={() => {window.open('https://www.github.com/schneiderduke', '_blank');}} className="intro-icon" icon={faGithub} />
            </div>
        </div>
        
    )
}

export default Navigation;