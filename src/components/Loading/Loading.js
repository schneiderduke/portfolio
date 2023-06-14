import './Loading.css'
import { useEffect } from 'react'
import { gsap, Power2, Power3 } from 'gsap-trial';

function Loading() {
    useEffect(() => {
        var tl=new gsap.timeline({repeat:1,repeatDelay:1})
            .staggerTo(".loading-text .char",0.3, {y:-20, ease:Power3.easeInOut}, 0.05)
            .staggerTo(".loading-text .char",0.3, {y:0, ease:Power3.easeInOut}, 0.05, "-=0.6");

        tl.staggerTo(".char",0.3,{y:-30,ease:Power2.easeInOut,repeat:1,yoyo:true},0.05);

        gsap.to('.loading-background', 2, {
            y: '100%',
           
            delay: 2,
            ease: Power2.easeInOut
        })

    })

    return (
        <div className="loading-background">
            <div className="loading-icon">
              
            </div>
            <div className="loading-text">
                <div id="char1" className="char">W</div>
                <div id="char2" className="char">e</div>
                <div id="char3" className="char">l</div>
                <div id="char4" className="char">c</div>
                <div id="char5" className="char">o</div>
                <div id="char6" className="char">m</div>
                <div id="char7" className="char">e</div>
                
            </div>
        </div>
    )
}

export default Loading;