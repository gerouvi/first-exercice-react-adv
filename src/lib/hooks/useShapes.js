import { useState } from 'react'

const useShapes = (size, color) => {
  const [shapes, setShapes] = useState({
    size,
    color,
  })
  const setSize = (newSize) => setShapes({ ...shapes, size: Number(newSize) })

  const setColor = (newColor) => setShapes({ ...shapes, color: newColor })

  return {
    size: shapes.size,
    color: shapes.color,
    setSize,
    setColor,
  }
}

export default useShapes
