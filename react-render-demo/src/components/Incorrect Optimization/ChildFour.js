import React from 'react'

export const ChildFour = ({ name }) => {
  const date = new Date()

  console.log('ChildFour Rendering...')
  return (
    <>
      <div>Hello {name}.</div>
      <div>
        It is currently {date.getHours()}: {date.getMinutes()}: {date.getSeconds()}
      </div>
    </>
  )
}

export const MemoizedChildFour = React.memo(ChildFour)
