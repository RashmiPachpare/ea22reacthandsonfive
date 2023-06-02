import React from 'react'
import Higherordercomponent from './Higherordercomponent'

const Clickcomponent = ({count,increment}) => {
  return (
    <div>
      <h1><span>High Order Component and Pure Component</span></h1>
      <hr></hr>
      <br></br>
      <p>Hello Iam Clickcomponent Having All the functionality of Higherordercomponent😍</p>
      <br></br>
    <button onClick={increment}>Click {count} Times </button>
    </div>
  )
}

export default  Higherordercomponent(Clickcomponent)