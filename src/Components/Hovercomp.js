import React from 'react'
import Higherordercomponent from './Higherordercomponent'


const Hovercomp = ({count,increment}) => {
  return (
    <div>
      <p>Hello Iam Hover Component Having all the functionality of High Order Component😉</p>
      <br></br>
    <button onMouseOver={increment}> Hover {count} Times </button>
    </div>
  )
}

export default Higherordercomponent(Hovercomp)