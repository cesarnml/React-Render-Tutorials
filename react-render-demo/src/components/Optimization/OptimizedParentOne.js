import React, { useState } from 'react'

export const OptimizedParentOne = ({ children }) => {
  const [count, setCount] = useState(0)

  console.log('OptimizedParentOne Rendering...')
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Increment from Optimized parent</button>
      <div>Optimized Parent Count is: {count}</div>
      {children}
    </div>
  )
}
