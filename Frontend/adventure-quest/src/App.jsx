import { useState } from 'react'
import Landing from './pages/styles/Landing'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Landing/>  
      </div>
    </>
  )
}

export default App
