import { useState } from 'react'

export const useCircle = () => {
  const [circle, setCircle] = useState({
    size: 118,
    color: '#2a3f5a',
  })

  const setCircleSize = (size) => setCircle({ ...circle, size })

  const setCircleColor = (color) => setCircle({ ...circle, color })

  return {
    circleSize: circle.size,
    circleColor: circle.color,
    setCircleSize,
    setCircleColor,
  }
}
