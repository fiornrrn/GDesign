import React, { useEffect } from 'react';

const Timer = (props) => {
  useEffect(() => {
    const timer =
    props.timerState > 0 && setInterval(() => props.timerSetState(props.timerState - 1), 1000);
    return () => clearInterval(timer);
  }, [props.timerState]);

  return (
    <div className="timer" style={props.styleArr}>{props.text}</div>
  );
}

export default Timer;