import React, { Fragment } from 'react'
import Hello from './components/Hello'


const App = () => {
  const name = "Tuu"
  const numb = 5
  const color = "#121577"
  return (
    <Fragment>
      <Hello color={color}/>
      <h1 style={{backgroundColor:"red"}}>{name}</h1>
      <h1>{numb}</h1>
    </Fragment>
  )
}

export default App