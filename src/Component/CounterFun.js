import React from 'react'
import { useState } from 'react'
import Memo from './Memo'

function CounterFun() {
    const [count, setCount] = useState(0)
  return (
    <div>CounterFun {count}
    <br></br>
    <Memo/>
    <button onClick={() => setCount(count + 1)}>Update Count</button></div>
  )
}

export default CounterFun