import { useState } from 'react'

export const useTriangle = () => {
  const [triangle, setTriangle] = useState({
    size: 110,
    color: '#00fcff',
  })

  const setTriangleSize = (size) => setTriangle({ ...triangle, size })

  const setTriangleColor = (color) => setTriangle({ ...triangle, color })

  return {
    triangleSize: triangle.size,
    triangleColor: triangle.color,
    setTriangleSize,
    setTriangleColor,
  }
}
