import React,{ useState, useEffect } from 'react';
import './App.css';
import MainPage from './MainPage';
import RegulationPage from './RegulationPage';

function App() {
  const [pomodoro, setPomodoro] = useState(0);
  const [pomoBreak, setPomoBreak] = useState(0);
  const [regulation, setRegulation] = useState(true);

  return (
    <div className="App">
      <MainPage />
      {regulation && (
        <RegulationPage />
      )}
    </div>
  );
}

export default App;
