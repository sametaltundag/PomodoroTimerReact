import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function MainPage(props) {
  const {pomodoro, pomoBreak, regulation, setRegulation} = props;

  return (
    <div>
        <main>
            <Header />
            <Main
            pomodoro={pomodoro}
            pomoBreak={pomoBreak}
            regulation={regulation}
            setRegulation={setRegulation}
            />
            <Footer />
        </main>
    </div>
  )
}

export default MainPage