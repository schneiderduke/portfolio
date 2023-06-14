import './Welcome.css'
import { useEffect, useRef } from 'react';
import Intro  from './Intro/Intro.js'
import WorkHistory from '../WorkHistory/WorkHistory';
function Welcome(){
    const background = useRef();
    useEffect(() => {
        
    
    })
    
    return (
        <div className="welcome">
            <Intro/>
            {/* <WorkHistory/> */}
        </div>
    )
}
export default Welcome;