import React from 'react'
import './index.css'
import { UseState } from './components/UseState/UseState'
import { ObjectUseState } from './components/Immutable State/ObjectUseState'
import { Parent } from './components/Parent Child/Parent'
import { ParentOne } from './components/Optimization/ParentOne'
import { ChildOne } from './components/Optimization/ChildOne'
import { GrandParent } from './components/Optimization/GrandParent'
import { ParentTwo } from './components/Optimization/ParentTwo'
import { ParentThree } from './components/Incorrect Optimization/ParentThree.js'
import { ContextParent } from './components/Context/ContextParent'
import { ChildA } from './components/Context/ContextChildren'

function App() {
  console.log('App Rendering...')
  return (
    <div className='App' style={{ padding: 50 }}>
      {/* CASE STUDY: When does a component rerender */}
      {/* <UseState /> */}
      {/* <ObjectUseState /> */}
      {/* CASE STUDY: When does a child rerender */}
      <Parent />
      {/* CASE STUDY: Child Optimization 1 - child as prop */}
      {/* <ParentOne /> */}
      {/* CAVEAT TO ABOVE OPTIMIZATION */}
      {/* <GrandParent /> */}
      {/* CASE STUDY: Child Optimization 2 - React.memo */}
      {/* <ParentTwo /> */}
      {/* CAVEAT TO ABOVE OPTIMIZATION */}
      {/* <ParentThree /> */}
      {/* CASE STUDY: useContext */}
      {/* <ContextParent /> */}
      {/* CASE STUDY: Multiple Context */}
      {/* <ContextParent>
        <ChildA />
      </ContextParent> */}
    </div>
  )
}

export default App
