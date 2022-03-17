import React, { useState } from 'react'
import { ChildA, MemoizedChildA } from './ContextChildren'

export const CountContext = React.createContext()
export const NameContext = React.createContext()

const CountProvider = CountContext.Provider
const NameProvider = NameContext.Provider

export const ContextParent = ({ children }) => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Cesar')

  const contextValue = { count, name }
  console.log('ContextParent Rendering...')
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Count is: {count}</button>
      <button onClick={() => setName('Mejia')}>Name is: {name}</button>

      <CountProvider value={count}>
        <NameProvider value={name}>
          {/* <ChildA /> */}
          <MemoizedChildA />
          {/* {children} */}
        </NameProvider>
      </CountProvider>
    </>
  )
}
