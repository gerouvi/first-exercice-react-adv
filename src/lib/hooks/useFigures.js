import { useEffect, useState } from 'react'

const INITIAL_STATE_SHAPES = {
  triangle: {
    size: 100,
    color: '#00fcff',
  },
  circle: {
    size: 110,
    color: '#2a3f5a',
  },
  square: {
    size: 120,
    color: '#b12b34',
  },
}

const useFigures = () => {
  const [figures, setFigures] = useState(INITIAL_STATE_SHAPES)

  const setTriangleSize = (newSize) =>
    setFigures((prev) => ({
      ...prev,
      triangle: { ...prev.triangle, size: newSize },
    }))

  const setTriangleColor = (newColor) =>
    setFigures((prev) => ({
      ...prev,
      triangle: { ...prev.triangle, color: newColor },
    }))

  const setCircleSize = (newSize) =>
    setFigures((prev) => ({
      ...prev,
      circle: { ...prev.circle, size: newSize },
    }))

  const setCircleColor = (newColor) =>
    setFigures((prev) => ({
      ...prev,
      circle: { ...prev.circle, color: newColor },
    }))

  const setSquareSize = (newSize) =>
    setFigures((prev) => ({
      ...prev,
      square: { ...prev.square, size: newSize },
    }))

  const setSquareColor = (newColor) =>
    setFigures((prev) => ({
      ...prev,
      square: { ...prev.square, color: newColor },
    }))

  useEffect(() => {
    if (
      figures.circle.size === figures.square.size &&
      figures.circle.size === figures.triangle.size
    ) {
      // eslint-disable-next-line no-alert, no-undef
      alert('All the figures have the same size!')
    }
  }, [figures.circle.size, figures.square.size, figures.triangle.size])

  useEffect(() => {
    if (
      figures.circle.color === figures.square.color &&
      figures.circle.color === figures.triangle.color
    ) {
      // eslint-disable-next-line no-alert, no-undef
      alert('All the figures have the same color!')
    }
  }, [figures.circle.color, figures.square.color, figures.triangle.color])

  const setters = {
    setTriangleSize,
    setTriangleColor,
    setCircleSize,
    setCircleColor,
    setSquareSize,
    setSquareColor,
  }

  return {
    figures,
    setters,
  }
}

export default useFigures
