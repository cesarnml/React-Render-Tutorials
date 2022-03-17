import React, { useState } from 'react'
import { ChildOne } from './ChildOne'

const style = { padding: 16, margin: 16 }

export const ParentOne = () => {
  const [count, setCount] = useState(0)

  console.log('ParentOne Rendering')
  return (
    <div>
      <button style={style} onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>
      <div style={style}>Count is: {count}</div>
      <ChildOne />
    </div>
  )
}
