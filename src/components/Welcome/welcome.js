import './Welcome.css'
import Intro  from './Intro/Intro.js'
import WorkHistory from '../WorkHistory/WorkHistory';
function Welcome(){return (
        <div className="welcome">
            <Intro/>
            <WorkHistory/>
        </div>
    )
}
export default Welcome;