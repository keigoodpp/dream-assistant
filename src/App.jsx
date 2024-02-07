import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from './HomePage'
import ActionPlanCalendarPage from './ActionPlanCalendarPage'
import GoalSettingPage from './GoalSettingPage'
import ProgressUpdatePage from './ProgressUpdatePage'
import FutureDiaryEntryPage from './FutureDiaryEntryPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <HomePage />
      <GoalSettingPage />
      <ActionPlanCalendarPage />
      <ProgressUpdatePage />
      <FutureDiaryEntryPage />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
