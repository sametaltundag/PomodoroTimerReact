import React, { useState } from 'react'

function RegulationPage(props) {
    const {updatePomodoro, updateRegulation} = props;
    const [pomodoro, setPomodoro] = useState("");
    const [pomoBreak, setPomoBreak] = useState("");

    const changeRegulation = (bool) =>{
        updateRegulation(!bool);
    }
    
    const onSubmitForm = (e) =>{
        e.preventDefault()
        updatePomodoro(pomodoro, pomoBreak)
        changeRegulation(true);
    }
    
  return (
    <div>
        <div className='relugation_page'>
            <div className='relugation_page_box'>
                <div className='relugation_upper'>
                    <h2>Regulation <i className="bi bi-clock-history"></i></h2>
                    <i className="bi bi-x-square close-btn" onClick={changeRegulation}></i>
                </div>
                <div className='relugation_form'>
                    <form onSubmit={onSubmitForm} >
                        <div className='session'>
                            <label>Session Time (In Minutes)</label>
                            <input type="number"
                            onChange={(e) => {setPomodoro(e.target.value)}}
                            max="59"
                            min="1"
                            step="1" 
                            maxLength="2" 
                            minLength="0"
                            required
                            placeholder='Eg. 30' />
                        </div>

                        <div className='break'>
                            <label>Break Time (In Minutes)</label>
                            <input type="number"
                            onChange={(e) => {setPomoBreak(e.target.value)}}
                            max="59"
                            min="0"
                            step="1" 
                            maxLength="2" 
                            minLength="0"
                            required
                            placeholder='Eg. 5' />
                        </div>

                        <div className='form-btn'>
                            <button type='submit'>Apply</button>
                        </div>
                    </form>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default RegulationPage