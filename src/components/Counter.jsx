import { useState } from "react"

export function Counter() {
  const [resultIncrement, setResultIncrement] = useState(0);  

  function increment() {
    const current = resultIncrement;
    setResultIncrement(current + 1);
  }

  return (
    <div>
      <h2>{resultIncrement}</h2>
      <button 
        type="button"
        onClick={increment}
      >
        Increment
      </button>
    </div>
  )
}