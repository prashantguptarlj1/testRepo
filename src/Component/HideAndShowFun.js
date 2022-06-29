import React from 'react'
import { useState } from 'react'

export default function HideAndShowFun() {
    const [Click, setClick] = useState(true)
  return (
    <div>
    {
        Click ? <h1>HideAndShowFun</h1> : null
    }
        
        <button onClick={() => setClick(!Click)}>Hide/Show</button>
    </div>
  )
}
