import React, { useState } from 'react'
import { ChildTwo, MemoizedChildTwo } from './ChildTwo'

export const ParentTwo = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Cesar')

  console.log('ParentTwo Rendering...')
  return (
    <div>
      <button onClick={() => setName('Adam')}>Change name to Adam</button>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <div>(Parent) Name is: {name}</div>
      <div>(Parent) Count is: {count}</div>
      <ChildTwo name={name} />
    </div>
  )
}
