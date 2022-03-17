import React from 'react'

export const ChildThree = ({ name, children }) => {
  console.log('ChildThree Rendering...')
  return (
    <>
      <div>Children is: {children} </div>
      <div>Name is: {name}</div>
    </>
  )
}

export const MemoizedChildThree = React.memo(ChildThree)
