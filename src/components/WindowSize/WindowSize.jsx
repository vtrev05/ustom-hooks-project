import React from 'react'
import useWindowResize from '../../hooks/useWindowResize/useWindowResize';

const WindowSize = () => {
    const { width, height } = useWindowResize();

  return (
   <div className="App">
      <h1>La ventana mide</h1>
      <h2>Ancho: {width}</h2>
      <h2>Alto: {height}</h2>
    </div>
  )
}

export default WindowSize