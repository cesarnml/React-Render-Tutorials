import React, { useState } from 'react'

const initState = {
  fname: 'Bruce',
  lname: 'Wayne',
}

export const ObjectUseState = () => {
  const [person, setPerson] = useState(initState)
  const changeName1 = () => {
    person.fname = 'Clark'
    person.lname = 'Kent'
    setPerson(person)
  }

  const changeName2 = () => {
    const newPerson = { ...person }
    newPerson.fname = 'Clark'
    newPerson.lname = 'Kent'
    setPerson(newPerson)
  }
  console.log('ObjectUseState Rendering')
  return (
    <div>
      <button onClick={changeName1}>Change Name 1</button>
      <button onClick={changeName2}>Change Name 2</button>
      <div>
        {person.fname} {person.lname}
      </div>
    </div>
  )
}
