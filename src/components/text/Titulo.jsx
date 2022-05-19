import React from 'react'

const Titulo = (props) => {
  return (
    <div style={{ color: 'white', textAlign: 'center' }}>
      <h2 style={{ fontWeight: '700' }}>{props.children}</h2>
    </div>
  )
}

export default Titulo
