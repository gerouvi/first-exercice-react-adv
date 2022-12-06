import { useState } from 'react'

export const useCircle = () => {
  // Deberías de usar dos variables, size y setSize, color y setColor
  const [circle, setCircle] = useState({
    size: 118,
    color: '#2a3f5a',
  })

  const setCircleSize = (size) => setCircle({ ...circle, size })

  const setCircleColor = (color) => setCircle({ ...circle, color })

  return {
    circleSize: circle.size,
    circleColor: circle.color,
    setCircleSize, // Esto debería ser setCircle directamente.
    setCircleColor,
  }
}
