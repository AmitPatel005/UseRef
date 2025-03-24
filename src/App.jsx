import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count,setCount] =useState(0)
  function handleIncrement(){
    setCount(count+1);
  }
  
  useEffect(() => {
    console.log("run");
    
    })
  

  return (
    <>
      <div>
        <button onClick={handleIncrement}>
          inc
        </button>
        <br />

        <div>
          count:{count}
        </div>
      </div>
    </>
  )
}

export default App
