import './WorkHistory.css'
import WorkCard from './WorkCard/WorkCard';

function WorkHistory() {
    return (
        <div>

            <WorkCard name={'Envestnet'} className="card"/>
            <hr></hr>
            <WorkCard name={'Tangoe'} className="card"/>
            <hr></hr>
            <WorkCard name={'Infosys'} className="card"/>
            <hr></hr>
        </div>
    )
}

export default WorkHistory;