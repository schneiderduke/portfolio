import './App.css';
import Welcome from './components/Welcome/Welcome';
import './cursor.js';
import { useRef, useEffect } from 'react'
import initializeCursor from './cursor.js';
import Loading from './components/Loading/Loading'
import Navigation from './components/Navigation/Navigation';

function App() {
  const cursor = useRef(), cursorInner = useRef();
  useEffect(() => {
    initializeCursor(cursor, cursorInner);
  })

  return (
    <div>
      <Loading />
      <Navigation />
      <Welcome />
      <div ref={cursor} className="cursor"></div>
      <div ref={cursorInner} className="cursor-inner"></div>   
    </div>
  );
}


export default App;