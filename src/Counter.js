import React from 'react'
import { useState } from 'react'

 const Counter = () => {

    const [count, setCount] = useState(0);

    
    const handleClicks = ()=>{
        //e.preventDefault();
        setCount(count + 1);
    }

  return (
    <div>
        <p>Counter: {count}</p>
        <button onClick={handleClicks}>Click meee!!!</button>
    </div>
  )
}
export default Counter;