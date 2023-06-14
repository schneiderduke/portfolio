import { gsap } from 'gsap-trial';
export default function initializeCursor() { 
    gsap.set('.cursor',{xPercent:-50, yPercent: -50})
    gsap.set('.cursor-inner',{xPercent:-50, yPercent: -50})
    let mouseX, mouseY;
    window.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        gsap.to('.cursor', .1, {x: mouseX, y:mouseY})
        gsap.to('.cursor-inner', .1, {x: mouseX, y:mouseY})
    })

    document.body.addEventListener('mousedown', (e) => {
        e.preventDefault();
      gsap.to('.cursor', {
        scale: 3,
        duration: 0.3,
        opacity: .7,
        backgroundColor: '#000000',
      })   
    })
    document.body.addEventListener('mouseup', (e) => {
        e.preventDefault();
        gsap.to('.cursor', {
          scale: 1,
          opacity: .25,
          backgroundColor: '#000000',
          duration: 0.3,
          
        })   
    })
    
    
}