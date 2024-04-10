import React, {useState, useRef} from 'react';
import DisplayComponent from './Components/DisplayComponent';
import BtnDisplayComponent from './Components/BtnDisplayComponent';
import './App.css';

function App() {
  const initialTime = {m: 0, s: 0, h: 0, ms: 0}
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const IntervalRef = useRef(null);

  const start = () => {
    if(!isActive){
      setIsActive(true);
      IntervalRef.current = setInterval(run, 10)
    }
  };

  const stop = () =>{
    setIsActive(false);
    clearInterval(IntervalRef.current);
  };
  const reset = () =>{
    setTime(initialTime)
    setIsActive(false);
    clearInterval(IntervalRef.current);
  };

  const run = () => {
    setTime(prevTime =>{let updatedMs = prevTime.ms, updatedS = prevTime.s, updatedM = prevTime.m, updatedH = prevTime.h;

      if (updatedM === 60) {
        updatedH++;
        updatedM = 0;s
      }
      if (updatedS === 60) {
        updatedM++;
        updatedS = 0;
      }
      if (updatedMs === 100) { 
        updatedS++;
        updatedMs = 0;
      }
      updatedMs++;

      return{ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH };
    })
  };

  return (
    <div className='main-section'>
      <div className='clock-holder'>
        <div className='stopwatch'>
          <DisplayComponent time={time} />
          <BtnDisplayComponent start={start} stop={stop} reset={reset} isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

export default App;
