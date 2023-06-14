import './App.css';
import Welcome from './components/Welcome/welcome';
import './cursor.js';
import { useRef, useEffect } from 'react'
import initializeCursor from './cursor.js';
import Loading from './components/Loading/Loading'
import Navigation from './components/Navigation/Navigation';

function App() {
  useEffect(() => {
    initializeCursor();
  })

  return (
    <div>
      <Loading />
      <Navigation />
      <Welcome />
      <div className="cursor"></div>
      <div className="cursor-inner"></div>
  
      {/* <div className="hand">
        <FontAwesomeIcon className="icon" icon={faHandBackFist} />
      </div> */}
      {/* <Navigation /> */}
      
    </div>
  );
}


export default App;