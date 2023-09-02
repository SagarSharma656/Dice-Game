import { useState } from 'react';
import style from './App.module.css'
import Button from './components/Button/Button'
import Home from './components/Home/Home'
import PlayGame from './components/PlayGame/PlayGame';

function App() {

  const [isPlay, setIsPlay] = useState(false);


  return (
    <div>
      {isPlay? <PlayGame/> : <Home play={()=>{setIsPlay(!isPlay)}}/>}
    </div>
  );
}

export default App;
