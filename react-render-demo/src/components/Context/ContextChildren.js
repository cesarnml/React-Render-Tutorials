import React, { useContext } from 'react'
import { CountContext, NameContext } from './ContextParent'

export const ChildA = () => {
  console.log('Child A Rendering...')
  return (
    <>
      <div>Child A</div>
      <ChildB>
        <ChildC />
      </ChildB>
    </>
  )
}

export const MemoizedChildA = React.memo(ChildA)

export const ChildB = ({ children }) => {
  console.log('Child B Rendering...')
  const name = useContext(NameContext)
  return (
    <>
      <div>Child B - Name = {name}</div>
      {children}
    </>
  )
}

export const ChildC = () => {
  const count = useContext(CountContext)
  console.log('Child C Rendering...')
  return (
    <>
      <div>Child C - Count = {count}</div>
    </>
  )
}
