import React, { useState, useMemo } from 'react'
import { ChildThree, MemoizedChildThree } from './ChildThree'
import { MemoizedChildFour } from './ChildFour'

export const ParentThree = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Cesar')

  console.log('ParentThree Rendering...')
  const hello = useMemo(() => <strong>hello</strong>, [])

  return (
    <div>
      <button onClick={() => setName('Faiz')}>Change name to Faiz</button>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <div>(Parent) Name is: {name}</div>
      <div>(Parent) Count is: {count}</div>
      <ChildThree name={name} />
      {/* <MemoizedChildThree name={name}>Hello</MemoizedChildThree> */}
      {/* <MemoizedChildThree name={name}>
        <strong>Hello</strong>
      </MemoizedChildThree> */}
      {/* <MemoizedChildThree name={name}>{hello}</MemoizedChildThree> */}
      {/* <MemoizedChildFour name={name} /> */}
    </div>
  )
}
