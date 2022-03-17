import React, { useState } from 'react'
import { ChildA, MemoizedChildA } from './ContextChildren'

export const CountContext = React.createContext()
const CountProvider = CountContext.Provider

export const ContextParent = ({ children }) => {
  const [count, setCount] = useState(0)

  console.log('ContextParent Rendering...')
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Count is: {count}</button>
      <CountProvider value={count}>
        <ChildA />
        {/* <MemoizedChildA /> */}
        {/* {children} */}
      </CountProvider>
    </>
  )
}
