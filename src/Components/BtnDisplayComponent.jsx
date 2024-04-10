import React from 'react';

function BtnDisplayComponent({start, stop, isActive, reset}) {
  return (
    <div>
      <button className='stopwatch-bnt stopwatch-bnt-gre' onClick={isActive? stop: start}>
      {isActive ? 'Stop':'Start'}
      </button>
      <button className='stopwatch-bnt stopwatch-bnt-gre' onClick={reset}>Reset</button>
    </div>
  );
}

export default BtnDisplayComponent;
