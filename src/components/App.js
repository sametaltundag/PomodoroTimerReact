import React,{ useState, useEffect } from 'react';
import './App.css';
import MainPage from './MainPage';
import RegulationPage from './RegulationPage';

function App() {
  const [pomodoro, setPomodoro] = useState(0);
  const [pomoBreak, setPomoBreak] = useState(0);
  const [regulation, setRegulation] = useState(false);


  const updatePomodoro = (_pomodoro, _pomoBreak) => {
    setPomodoro(_pomodoro);
    setPomoBreak(_pomoBreak);
  }
  const updateRegulation = (bool) => {
    setRegulation(bool);
  }

  useEffect(() => {
    setRegulation(regulation);
  }, [regulation]);

  return (
    <div className="App">
      <MainPage 
      pomodoro={pomodoro}
      pomoBreak={pomoBreak}
      updateRegulation={updateRegulation}
      setRegulation={setRegulation} />
      {regulation && (
        <RegulationPage 
        updatePomodoro={updatePomodoro}
        updateRegulation={updateRegulation} />
      )}
    </div>
  );
}

export default App;
