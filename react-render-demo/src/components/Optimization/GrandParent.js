import React, { useState } from 'react'
import { OptimizedParentOne } from './OptimizedParentOne'
import { ChildOne } from './ChildOne'

export const GrandParent = () => {
  const [newCount, setNewCount] = useState(0)
  console.log('GrandParent Rendering...')

  return (
    <div>
      <button onClick={() => setNewCount((nc) => nc + 1)}>Increment from GrandParent</button>
      <div>GrandParent count is: {newCount}</div>
      <OptimizedParentOne>
        <ChildOne />
      </OptimizedParentOne>
    </div>
  )
}
