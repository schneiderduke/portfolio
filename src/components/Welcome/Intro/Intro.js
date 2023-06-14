import './Intro.css'
import { faLinkedinIn, faSpotify, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef } from 'react'
import { gsap, Power1, Power2, Power3 } from 'gsap-trial'

function Intro() {
    const frontEndArrow = useRef();
    const musicArrow = useRef();

    useEffect(() => {
        frontEndArrow.current.addEventListener('mouseenter', (e) => {
            gsap.to('#front-end-arrow', {
                scale: 1.6,
                duration: 0.3,     
                ease: Power1.easeInOut,
                color: 'orange'
            })   
        })
        frontEndArrow.current.addEventListener('mouseleave', (e) => {
            gsap.to('#front-end-arrow', {
                scale: 1,
                duration: 0.3,
                color: 'white'
            })   
        })
        frontEndArrow.current.addEventListener('click', (e) => {
            gsap.to('#front-end-arrow', {
                x: -1000,
                duration: 2,
                scale: 0.5,

            })
            gsap.to('#music-arrow', {
                opacity: 0,
                duration: 1
            })  

            gsap.to('#text-2 p', {
                opacity: 0,
                duration: 1
            }) 

            var tl=new gsap.timeline()
            .staggerTo("#text-1 p",0.3, {scale: 0, ease:Power3.easeInOut}, 0.05);
        })


        musicArrow.current.addEventListener('mouseenter', (e) => {
            gsap.to('#music-arrow', {
                scale: 1.6,
                duration: 0.3,     
                ease: Power1.easeInOut,
                color: 'orange'
            })   
        })


        musicArrow.current.addEventListener('click', (e) => {
            gsap.to('#music-arrow', {
                x: 1000,
                duration: 2,
                scale: 0.5,


            })  

            gsap.to('#front-end-arrow', {
                opacity: 0,
                duration: 1
            })  

            gsap.to('#text-1 p', {
                opacity: 0,
                duration: 1
            }) 
            
            var tl=new gsap.timeline()
            .staggerTo("#text-2 p",0.3, {scale: 0, ease:Power3.easeInOut}, 0.05)
        })



        musicArrow.current.addEventListener('mouseenter', (e) => {
            gsap.to('#music-arrow', {
                scale: 1.6,
                duration: 0.3,     
                ease: Power1.easeInOut,
                color: 'orange'
            })   
        })
        musicArrow.current.addEventListener('mouseleave', (e) => {
            gsap.to('#music-arrow', {
                scale: 1,
                duration: 0.3,
                color: 'white'
            })   
        })
        
        gsap.to(['#text-1', '#front-end-arrow'], 2, { opacity: 1,delay: 3 })
        gsap.to(['#text-2', '#music-arrow'], 2, { opacity: 1,delay: 3.8 })

    })
    return (
        <div id='intro'>
            <div className='text-center text-wrapper row' >
                <div><FontAwesomeIcon ref={frontEndArrow} id="front-end-arrow" icon={faArrowLeft} /></div>
                <div id="text-1">
                    <p>F</p>
                    <p>r</p>
                    <p>o</p>
                    <p>n</p>
                    <p>t</p>
                    <p>-</p>
                    <p>e</p>
                    <p>n</p>
                    <p>d</p>
                    <p>&nbsp;</p>
                    <p>W</p>
                    <p>e</p>
                    <p>b</p>
                    <p>&nbsp;</p>
                    <p>D</p>
                    <p>e</p>
                    <p>v</p>
                    <p>e</p>
                    <p>l</p>
                    <p>o</p>
                    <p>p</p>
                    <p>e</p>
                    <p>r</p>                  
                </div>
                <div><FontAwesomeIcon ref={musicArrow} id="music-arrow" icon={faArrowRight} /></div>
                <div id="text-2">
                    
                    <p>M</p>
                    <p>u</p>
                    <p>s</p>
                    <p>i</p>
                    <p>c</p>
                    <p>&nbsp;</p>
                    <p>P</p>
                    <p>r</p>
                    <p>o</p>
                    <p>d</p>
                    <p>u</p>
                    <p>c</p>
                    <p>e</p>
                    <p>r</p>
                </div>
            </div>
        </div>
    )
}

export default Intro;