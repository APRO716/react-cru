import React from 'react'

function Hello(props) {
    const hello = "Hello I am React component"
  return (
    <div><h1 style={{color:props.color}}>{hello}</h1></div>
  )
}

export default Hello