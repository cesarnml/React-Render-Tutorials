import React, { useContext } from 'react'
import { CountContext } from './ContextParent'

export const ChildA = () => {
  console.log('Child A Rendering...')
  return (
    <>
      <div>Child A</div>
      <ChildB />
    </>
  )
}

export const MemoizedChildA = React.memo(ChildA)

export const ChildB = () => {
  console.log('Child B Rendering...')
  return (
    <>
      <div>Child B</div>
      <ChildC />
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
