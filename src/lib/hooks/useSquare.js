import { useState } from 'react'

export const useSquare = () => {
  const [square, setSquare] = useState({
    size: 120,
    color: '#b12b34',
  })

  const setSquareSize = (size) => setSquare({ ...square, size })

  const setSquareColor = (color) => setSquare({ ...square, color })

  return {
    squareSize: square.size,
    squareColor: square.color,
    setSquareSize,
    setSquareColor,
  }
}
