import Countdown from './components/Countdown'
import Confetti from './components/Confetti'
import './App.css'

function App() {
  // Set your target date here
  const targetDate = '2026-01-05T00:00:00';

  return (
    <>
      <Confetti />
      <Countdown
        targetDate={targetDate}
        title="TWENTY ONE!!!!!!!!!!!!"
      />
    </>
  )
}

export default App
