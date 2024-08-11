import { useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Main from './Main/Main.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar />
      <Main />

    </>
  )
}

export default App
