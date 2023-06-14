import './WorkCard.css'
import { useEffect } from 'react'
import { gsap } from 'gsap-trial'

function WorkCard(props) {
    useEffect(() => {
        gsap.set(".flip-panel", {
            transformStyle: "preserve-3d",
            transformOrigin: "50% 50%",
        });
        gsap.set(".card-back", {
            rotationY: 180
        });
        
        const timing = 0.2;
        
        const tl = gsap.timeline({ paused: true });
        tl.to(".flip-panel", { rotationY: "+=180", duration: timing });
        tl.to(".flip-card", {  duration: 0.2,  repeat: 1 }, 0);
        
        gsap.utils.toArray(".flip-card").forEach(flip => {
            flip.addEventListener("mouseenter", event => tl.play());
            flip.addEventListener("mouseleave", event => tl.reverse());
        });
    })

    return (
        <div className="flip-card">
            <div className="card-front flip-panel text-center">{props.name}</div>
            <div className="card-back flip-panel"></div>
        </div>
    )
}

export default WorkCard;