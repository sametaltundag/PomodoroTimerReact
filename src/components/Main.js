import React, { useEffect, useState } from 'react'

function Main(props) {
  const {pomodoro, pomoBreak, regulation, setRegulation} = props;
  
  const [isPlay, setIsPlay] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [minute, setMinute] = useState()
  const [second, setSecond] = useState()

  const regulationTime = (_session, _break) => {
    if(!isBreak){
      _session < 10 ? setMinute(`0${_session}`) : setMinute(_session);
      setSecond("00");
    } else {
      _break < 10 ? setMinute(`0${_break}`) : setMinute(_break);
      setSecond("00");
    }
  }

  useEffect(()=>{
    regulationTime(pomodoro, pomoBreak)

  }, [pomodoro,pomoBreak,isBreak])
  return (
    <div>
        <div className='main_section'>
          <div className='main_time'>
            <h1>
              {minute} : {second}
            </h1>
          </div>
          <div className='main_process'>
            <button onClick={()=>{setIsPlay(!isPlay)}}>{!isPlay ? <i className="bi bi-play-fill"></i> : <i className="bi bi-pause-fill"></i>}</button>
            <div className='regulation-btn' onClick={setRegulation}>
              <p>Regulation</p>
            </div>

            <button><i class="bi bi-arrow-clockwise"></i></button>
          </div>
        </div>
    </div>
  )
}

export default Main