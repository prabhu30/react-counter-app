import { useState } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0);

  const incrementCount = () => {
    setCounter(++counter);
    console.log(`counter value : ${counter}`)
  }
  
  const decrementCount = () => {
    counter > 0 && setCounter(--counter);
    console.log(`counter value : ${counter}`)
  }

  return (
    <>
      <h1 className='heading'>React with Prabhu</h1>
      <h3 className='counter-text'>Counter Value : <span className='counter-num'>{counter}</span> </h3>
      <button className='btn' onClick={incrementCount}>Increment Count</button>
      <button className='btn' onClick={() => decrementCount()}>Decrement Count</button>
    </>
  )
}

export default App
